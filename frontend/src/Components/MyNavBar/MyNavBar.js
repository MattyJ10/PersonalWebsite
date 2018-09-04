import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'; 
import './MyNavBar.css'; 
import About from '../About/About'; 
import Projects from '../Projects/Projects'; 
import Links from '../Links/Links'; 

export default class MyNavBar extends React.Component {
	render() {
		return (
			<Router>
				<div>
					<div className="navbar">
						<ul className="left">
							<li><Link to="/">About</Link></li>
							<li><Link to="/projects">Projects</Link></li>
							<li><Link to="/links">Links</Link></li>
							
						</ul>
					</div>
					<Route exact path="/" component={About} />
					<Route exact path="/projects" component={Projects} />
					<Route exact path="/links" component={Links} />

					{/*add other routes here as you create components */}
				</div>
			</Router>
		);
	}
}