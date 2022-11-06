import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import db from "../firebase";

import { loadStripe } from "@stripe/stripe-js";

import "./PlansScreen.css";

function PlansScreen() {
	const [products, setProducts] = useState("");
	const user = useSelector(selectUser);

	useEffect(() => {
		db.collection("products")
			.where("active", "==", true)
			.get()
			.then((querySnapshot) => {
				const products = {};
				querySnapshot.forEach(async (productDoc) => {
					products[productDoc.id] = productDoc.data();
					const priceSnap = await productDoc.ref
						.collection("prices")
						.get();
					priceSnap.forEach((price) => {
						products[productDoc.id].prices = {
							priceId: price.id,
							priceData: price.data(),
						};
					});
				});
				setProducts(products);
			});
	}, []);

	const loadCheckOut = async (priceId) => {
		console.log("trest");
		const docRef = await db
			.collection("customers")
			.doc(user.uid)
			.collection("checkout_sessions")
			.add({
				price: priceId,
				success_url: window.location.origin,
				cancel_url: window.location.origin,
			});

		docRef.onSnapshot(async (snap) => {
			const { error, sessionId } = snap.data();

			if (error) {
				alert(`An error occurred: ${error.message}`);
			}

			if (sessionId) {
				const stripe = await loadStripe(
					"pk_test_51M1BIBJuPScD0BU90etgrwEkPf9aif4Hh2ux3Z8vtn5dsfCvjPpDGspr20BjDXfJymrz9G9V7lPJLwJeGFEbVeW0006l6q6QPv"
				);
				stripe.redirectToCheckout({ sessionId });
			}
		});
	};

	return (
		<div className="plansScreen">
			{Object.entries(products).map(([productId, productData]) => {
				return (
					<div key={productId} className="plansScreen__plan">
						<div className="plansScreen__info">
							<h5>{productData.name}</h5>
							<h6>{productData.description}</h6>
						</div>
						<button
							onClick={() =>
								loadCheckOut(productData.prices.priceId)
							}>
							Subscribe
						</button>
					</div>
				);
			})}
		</div>
	);
}

export default PlansScreen;
