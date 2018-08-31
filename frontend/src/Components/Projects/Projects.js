import React from 'react';
import ReactDOM from 'react-dom';
import './Projects.css';


export default class Projects extends React.Component {
	render() {
		return (
			<div className="contentProj">
				<div className="group">
					<h3 className="title">
						IAmLVC
					</h3>
				{/*BE SURE TO INCLUDE WHICH TECHNOLOGIES ARE USED IN EACH PROJECT*/}
					<p className="text">
						&emsp;&emsp;I have spent the summer of 2018 honing my skills in Web-Development by working as a freelancer. I was hired to start working on this project in May of 2018 
						and the employer explained to me how she had a somewhat working product, but was ultimately unsatisfied with what the previous developers had created. I had to go through
						their code and figure out how everything worked, decide if I wanted to keep it and then either rewrite it from scratch or modify it to make it work. On top of learning
						how to read others' code, I implemented a number of key features that have made the application more intuitive and user-friendly. I fixed errors in navigation which solved
						the issue of beta testers getting lost due to unexpected routing.The feature I am most proud of implementing is a text/email reminder system where the user can specify which 
						days and at what times they receive either a text or email reminder to continue working on the their progress in the app. Most importantly, the site was often taking a long 
						time to load when using various features. I improved the efficiency by ensuring that the app only requested data that was absolutely necessary and also moved 
						some programming logic causing bottlenecks to the backend.
					</p>
					<p className="text">This project can be found online by following this <a href="https://www.iamlvc.org" target="_blank">link</a></p>
				</div>
				<div className="group">
					<h3 className="title">
						RealElstate Datebase Interface
					</h3>
					<p className="text">
						&emsp;&emsp;Dad's real estate thing
					</p>
				</div>
				<div className="group">
					<h3 className="title">
						Digital Commonplace Book
					</h3>
					<p className="text">
						&emsp;&emsp;What is a commonplace book?
					</p>
				</div>
				<div className="group">
					<h3 className="title">
						Personal Website
					</h3>
					<p className="text">
						&emsp;&emsp;This Website
					</p>
				</div>
				<div className="group">
					<h3 className="title">
						Music Scraper
					</h3>
					<p className="text">
						&emsp;&emsp;Java Music Scraper
					</p>
				</div>
			</div>
		);
	}
}