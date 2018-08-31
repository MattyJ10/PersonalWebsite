import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyNavBar from './Components/MyNavBar/MyNavBar'; 

class App extends React.Component {
	render() {
		return (
			<MyNavBar />
		);
	}
		
}

ReactDOM.render( <App />, document.getElementById('root'));