import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import 'react-rough';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<div>
					Edit <code>src/App.js</code>
					and save to reload.
				</div>
			</header>
			<div className="box1"></div>
			<div className="box2"></div>
			<div className="box3"></div>
			<div className="box4"></div>
			<div className="box5"></div>
			<div className="box6"></div>
		</div>
	);
}

ReactDOM.render(
	<React.StrictMode>
		<App/>
	</React.StrictMode>,
	document.getElementById('root')
);
