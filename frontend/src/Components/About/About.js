import React from 'react';
import ReactDOM from 'react-dom';
import './About.css'; 

export default class About extends React.Component {
	render() {
		return (
			<div className="contentAbout"> 
				<img src={require("../../Assets/Images/headshot.png")}/>
				<h1>Matt Jasaitis</h1>
				<div className="group">
					<h3 className="title">Who Am I?</h3>
					<p className="text">&emsp;&emsp;I am originally from Manhattan Beach, CA and currently attend Santa Clara University studying Computer Science and Engineering. My date of 
					graduation is June 2019 and I am currently seeking employment for an entry-level frontend or backend developer position.  </p>
				</div>
				<div className="group">
					<h3 className="title">Interests</h3>
					<p className="text">&emsp;&emsp;Outside of working on various projects (see Projects section), I enjoy a number of activities in my freetime. Growing up in a small beach town
					I would often find myself body surfing with my friends. On top of this, athletics has always been a large part of my life, specifically basketball, and I continue to play 
					whenever possible.</p><p className="text"> &emsp;&emsp;I start my day with 1-2 hours of reading and some of my the books I've read recently are "Shoe Dog" by Phil Knight, "Mind Gym" by Gary Mack and the classic 
					"How To Win Friends and Influence People" by Dale Carnegie. I enjoy reading books about the origins of successful companies/people as well as books that help you improve as
					a person. Mind Gym specifically was an awesome read about how athletes train their brain to ensure they are at their best everyday. To this day I have applied those same 
					techniques to both my athletic and daily lives.</p>
				</div>
				<div className="group">
					<h3 className="title">Technical Skills</h3>
					<p className="text">&emsp;&emsp;When I first started to code (back in my freshman year of high school), the first language I learned was Python. From Python I went to Java 
					and then used C and C++ extensively in my college courses. Most recently, I have gotten into Web Development. I started off creating small practice websites with just HTML 
					and CSS, then learned JavaScript. From there I have picked up frameworks such as Angular and React. My projects involving these languages can be found in the Projects section
					of this website. </p>
				</div>
			</div>
		);
	}
}