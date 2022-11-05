import React from "react";

import "./Login.css";

export default function Login() {
	return (
		<div className="loginScreen">
			<div className="loginScreen__background">
				<img
					src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
					alt=""
					className="loginScreen__logo"
				/>
				<button className="loginScreen__button" onClick={() => {}}>
					Sign In
				</button>

				<div className="loginScreen__gradient" />
			</div>
			<div className="loginScreen__body">
				<>
					<h1>Unlimited films, TV programmes and more.</h1>
					<h2>Watch anywhere. Cancel any time.</h2>
					<h3>
						Ready to watch? Enter your email to create or restart
						your membership.
					</h3>
					<div className="loginScreen__input">
						<form>
							<input type={"email"} placeholder="Email address" />
							<button className="loginScreen__getStarted">
								GET STARTED
							</button>
						</form>
					</div>
				</>
			</div>
		</div>
	);
}
