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
				{/*
					BE SURE TO INCLUDE WHICH TECHNOLOGIES ARE USED IN EACH PROJECT
					MAYBE ADD A SCREENSHOT OF EACH PROJECT FOR A QUICK SNEAK PEAK,
					OR EVEN A VIDEO DEMO
					FOR LVC: ADD SCREENSHOTS OF INTERIOR APP AS WELL AS *** ADMIN PAGE ***
				*/}
					<p className="text">
						&emsp;&emsp;I was hired to start working on this project as a full-time freelancer in May of 2018 and the employer explained to me how she had a somewhat working product, but was 
						unsatisfied with what the previous developers had created. I had to go through their code and figure out how everything worked, decide if I wanted to keep it and then 
						either rewrite it from scratch or modify it to make it work. On top of learning how to read others' code, I implemented a number of key features that have made the 
						application more intuitive and user-friendly. I fixed errors in navigation which solved the issue of beta testers getting lost due to unexpected routing. The 
						feature I am most proud of implementing is a text/email reminder system where the user can specify which days and at what times they receive either a text or email 
						reminder to continue working on the their progress in the app. Most importantly, the site was often taking a long time to load when using various features. I improved 
						the efficiency by ensuring that the app only requested data that was absolutely necessary and also moved some programming logic causing bottlenecks to the backend.
					</p>
					<p className="text"><span className="tech">Main Technologies:</span> Angular, ExpressJs, NodeJs, MongoDB, HTML5, CSS</p>
					<p className="text">This project can be found online by following this <a href="https://www.iamlvc.org" target="_blank">link</a></p>
				</div>
				<div className="group">
					<h3 className="title">
						RealEstate Datebase Interface
					</h3>
					<p className="text">
						&emsp;&emsp;I am creating a database interface web application for LAREM inc. based in Los Angeles. The app will allow LAREM to store building info as well as any active leases or previous sales. On top of this, it will store contact info
						for lessees, owners and building managers. Most importantly, LAREM will be able to search for buildings matching certain criteria that a potential client would specify. 
					</p>
					<p className="text"><span className="tech">Main Technologies:</span> Angular, ExpressJs, NodeJs, MongoDB, HTML5, CSS</p> 
				</div>
				<div className="group">
					<h3 className="title">
						Digital Commonplace Book
					</h3>
					<p className="text">
						&emsp;&emsp;For the past 6 years, I have compiled what is known as a ommonplace book. A commonplace book is a collection of any sorts of information/knowledge that you come
						across during your readings. Currently, I have all of this stored on notecards and sorted according to topic and book. This project will provide a way to move everything 
						online and store the notes in an organized manner. It will also feature options such as favorites, quotes you'd like to see on certain days, as well as reminders that can be 
						setup to send you quotes throughout the day. The deep future plan for this app is to 1. take it to mobile using ReactNative and 2. apply machine learning to suggest books. 
					</p>
					<p className="text"><span className="tech">Main Technologies:</span> ReactJs, ExpressJs, NodeJs, MongoDB</p> 
				</div>
				<div className="group">
					<h3 className="title">
						Personal Website
					</h3>
					<p className="text">
						&emsp;&emsp;This website was written with ReactJS, HTML5 and CSS.  
					</p>

				</div>
				<div className="group">
					<h3 className="title">
						Music Scraper
					</h3>
					<p className="text">
						&emsp;&emsp;This project is a desktop app that I created in 2017 in order to quickly check multiple music websites for new releases from user specified artists. It was 
						written solely in Java and backed by a MySQL database. 
					</p>
				</div>
			</div>
		);
	}
}