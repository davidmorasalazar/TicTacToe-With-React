//first page
//import react into the bundle
import React from "react";
//include bootstrap npm library into the bundle
import "bootstrap";
import PropTypes from "prop-types";
//include your index.scss file into the bundle
import "../styles/index.scss";

export class Page extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			player1: "",
			player2: ""
		};
	}
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
									aria-label="Default"
									aria-describedby="inputGroup-sizing-default"
									placeholder="Player 1"
									onChange={event =>
										(this.setState.player1 =
											event.target.value)
									}
								/>
								<label
									htmlFor="inputPassword2"
									className="sr-only">
									Player 2
								</label>
								<input
									type="text"
									className="form-control"
									aria-label="Default"
									aria-describedby="inputGroup-sizing-default"
									placeholder="Player 2"
									onChange={event =>
										(this.setState.player2 =
											event.target.value)
									}
								/>
							</div>
							<button
								type="button"
								className="btn btn-secondary"
								data-dismiss="modal"
								onClick={() =>
									this.props.onSetTurn(
										"X",
										this.state.player1,
										this.state.player2
									)
								}>
								<span className="xMarker">X</span>
							</button>
							<button
								type="button"
								className="btn btn-secondary"
								data-dismiss="modal"
								onClick={() =>
									this.props.onSetTurn(
										"O",
										this.state.player1,
										this.state.player2
									)
								}>
								<span className="oMarker">O</span>
							</button>
						</div>
					</form>
				</div>
			</div>
		);
	}
}
Page.propTypes = {
	onSetTurn: PropTypes.func,
	player1: PropTypes.string,
	player2: PropTypes.string
};
