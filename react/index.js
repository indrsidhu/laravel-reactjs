import React from 'react';
import ReactDOM from 'react-dom';
import DemoAppCustomDesign from './components/DemoAppCustomDesign/DemoAppCustomDesign';

const title = 'My Minimal React Webpack Babel Setup done';

class App extends React.Component{
	render(){
		return (
			<div>

				<DemoAppCustomDesign />

			</div>
		);
	}
}

var demoApp  = document.getElementById('demoApp');
 
if(demoApp){
	ReactDOM.render(<App />,
	  document.getElementById('demoApp')
	);	
}


