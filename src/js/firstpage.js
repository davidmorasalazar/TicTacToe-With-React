//first page
//import react into the bundle
import React from "react";
//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

export class Page extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<h2 className="title">Tic Tac Toe in React.js</h2>
				</div>
				<div className="row">
					<h4 className="title">Pick a weapon</h4>
				</div>
				<div className="row">
					<form className="forma">
						<div className="form-group">
							<label className="title1">CHOOSE YOUR WEAPON</label>
							<div className="col">
								<label
									htmlFor="inputPassword2"
									className="sr-only">
									Player 1
								</label>
								<input
									type="text"
									className="form-control"
									id="inputPassword2"
									placeholder="Player 1"></input>
								<label
									htmlFor="inputPassword2"
									className="sr-only">
									Player 2
								</label>
								<input
									type="text"
									className="form-control"
									id="inputPassword2"
									placeholder="Player 2"></input>
							</div>
							<button className="fas fa-times-circle alinea"></button>
							<button className="far fa-circle alinea"></button>
						</div>
					</form>
				</div>
			</div>
		);
	}
}
