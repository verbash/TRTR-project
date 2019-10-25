import { h, Component } from 'preact';
import style from './style';
import Trtrblock from './trtrblock';


import Router from 'preact-router';


//TRTR data served from json
import trtrdata from '../assets/trtrdata.json';

class App extends Component {

	// Global state for our App ->> change 'loggedin: true/false' here

	state = {
		trtrdata
		// loggedin: false - moved logged in to Router instead of state
	}

		//put images json object in state

		trtrdata = this.state.trtrdata

		// moved Trtrblock to its own component to use preact-router
		render() {
			return (
				<Router>
					<Trtrblock path="/" isLoggedIn={false}
						passedState={trtrdata}
					/>
					<Trtrblock path="/logged-in" isLoggedIn
						passedState={trtrdata}
					/>

				</Router>

			);
		}

}

// could also  - render(<App />, document.body)

export default App;
