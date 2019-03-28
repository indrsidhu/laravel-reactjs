import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import DemoApp from './components/DemoApp';

const title = 'My Minimal React Webpack Babel Setup done';

class App extends React.Component{
	render(){
		return (
			<div>

				<DemoApp />

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


