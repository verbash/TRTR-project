import { h, render, Component } from 'preact';
import style from './style';
import Trtrcard from './trtrcard';
import trtrdata from '../assets/trtrdata.json';

class App extends Component {

//~UPDATE TOP-RATED TAROT READINGS block, making it dynamic and responsive (remove in production)

	//~Randomly display 6 TRTR of 11 total cards
	//~TRTR data { title, description, image_url, product_url }
	
	//~Use CSS
	//~Style the text and images as shown in the attached mocks
	//~Display the products in 2 Rows/ 3 Columns on Desktop and Tablet
	//~Display the products in 3 Rows/ 2 Columns on Mobile
	
	//~The TRTR should show the "Start Reading" links ONLY when user is logged in
	//~For this exercise, passing the #logged-in has to the page simulated logged-in user
	//~The "Start Reading" anchor is pointed to the corresponding product url

	//~Bonus: Loading TRTR data from an external source (i.e.: ajax, fetch, Redux state, Redux Saga, etc)
	//~Being mindful about WHICH html elements to use (should help keep CSS simple)
	//~HTML, CSS, Javascript passes Lint (using default rules for each linter)

	// BEGIN PSUEDOCODE ************************

	// Global state for our App
	state = {
		trtrdata,
		loggedin: false

	}
	// what will be in state? : trtrdata, loggedin, mobile?

	// Create Card Template for 1st Card - create Trtrcard component
		//importing from trtrdata.json
		// linking to external url



	// build JSON file to map values to each rendered card (for easier updates)

	// test basic functionality by loop rendering Trtrcard component for first 6 in JSON

	// setup randomizer for cards - (choose method)
		//A. build array of randomized values
			// build array of card ids
			// pair random_value and card_id arrays
			// iterate over array of object pairs and render each card
		//B. put images json object in state, use .sort
		//C. use Fisher-Yates shuffle function from stack overflow
		trtrdata = this.state.trtrdata
		shuffle = (array) => {
			let	randomArray = array.sort(() => Math.random() - 0.5);

	// loop to render only first 6 cards

			let randomShortArray = randomArray.splice(0,6);
			return randomShortArray;
		  }
	
		
	// set up #logged-in state

	// build "Start Reading" link and point to Url

	// create CSS @media to render in 3 col for web/tablet or 2 col for mobile

	// Style Css to match example

	// bonus: fetch JSON file from external source?




		render() {
			return (
				// this is the whole TRTR block being rendered
				<div className={style.block}>
					<div className={style.row}>
						{this.shuffle(this.state.trtrdata).map(nextCard => (
							<Trtrcard className={style.column}
								id={nextCard.id}
								title={nextCard.title}
								description={nextCard.description}
								image={nextCard.image}
								productUrl={nextCard.product_url}
							/>
						))}
					</div>
						
				</div>
			);
		}

}

// ***** CHALLENGES
	// rendering images from links
	// 

// render(<App />, document.body);
// what is the difference??

export default App;








//EXAMPLE CODE

// import { h, render, Component } from 'preact';

// class App extends Component {
// 	// Add 'name' to the initial state
// 	state = { value: '', name: 'world' }

// 	onInput = input => {
// 		this.setState({ value: input.target.value });
// 	}
// 	// Add a submit handler that updates the 'name' with the latest input value
// 	onSubmit = () => {
// 		this.setState({ name: this.state.value });
// 		event.preventDefault();
// 	}

// 	render() {
// 		return (
// 			<div>
// 				<h1>Hello, {this.state.name}!</h1>
// 				<form onSubmit={this.onSubmit}>
// 					<input type="text" value={this.state.value} onInput={this.onInput} />
// 					<button type="submit">Update</button>
// 				</form>
// 			</div>
// 		);
// 	}

// }

// render(<App />, document.body);
