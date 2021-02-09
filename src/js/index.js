//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
// import React, { Component } from "react";
//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";
import { Page } from "./firstpage.js";
import { Tictac } from "./tictac.js";
class Tic extends React.Component {
	constructor() {
		super();
		return <label>hola</label>;
	}
}
export function Game() {
	return (
		<div>
			<Page />;
			<Tictac />;
		</div>
	);
} // ========================================
//render your react application
ReactDOM.render(<Game />, document.querySelector("#app"));
