//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
// import React, { Component } from "react";
//include bootstrap npm library into the bundle
import "bootstrap";
import PropTypes from "prop-types";
//include your index.scss file into the bundle
import "../styles/index.scss";
import { Page } from "./firstpage.js";
import { Tictac } from "./tictac.js";
export class Game extends React.Component {
	constructor() {
		super();
		this.state = {
			player: "",
			winner: "",
			player1: "",
			player2: "",
			currentGame: 1
		};
	}
	setTurn = (symbol, player1, player2) => {
		this.setState({ player: symbol, player1: player1, player2: player2 });
	};
	nextTurn = () => {
		this.setState({ player: this.state.player == "X" ? "O" : "X" });
		// this sets player with a value from PlayerSelect and sets first symbol
	};
	setWinner = player => {
		this.setState({ winner: player, currentGame: 0 });
	};
	incrementGame = () => {
		this.setState({ currentGame: this.state.currentGame + 1 });
	};

	render() {
		if (this.state.winner == "") {
			return (
				<div className="title">
					{this.state.player == "" ? (
						<Page onSetTurn={this.setTurn} />
					) : (
						<div>
							<h2>Game #{this.state.currentGame}</h2>
							<h2>
								{this.state.player}
								&#39;s turn
							</h2>
							<Tictac xIsNext={this.state.player} />
						</div>
					)}
				</div>
			);
		} else if (this.state.winner != "") {
			return (
				<div>
					<label>hola</label>
				</div>
			);
		}
	}
}
// ========================================
//render your react application
ReactDOM.render(<Game />, document.querySelector("#app"));
