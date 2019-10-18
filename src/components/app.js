import { h, Component } from 'preact';
import style from './style';
import Trtrcard from './trtrcard';

//TRTR data served from json
import trtrdata from '../assets/trtrdata.json';

class App extends Component {

	// Global state for our App ->> change 'loggedin: true/false' here

	state = {
		trtrdata,
		loggedin: true
	}

		//put images json object in state

		trtrdata = this.state.trtrdata

		//use .sort to randomize

		shuffle = (array) => {
			let	randomArray = array.sort(() => Math.random() - 0.5);

			// loop to render only first 6 cards

			let randomShortArray = randomArray.splice(0,6);
			return randomShortArray;
		  }

		render() {
			return (

				// this is the whole TRTR block being rendered
				//  - each card from Trtrcard component
				// pass ProductUrl and logged in through props

				<div className={style.block}>
					<div className={style.row}>
						{this.shuffle(this.state.trtrdata).map(nextCard => (
							<Trtrcard className={style.column}
								id={nextCard.id}
								title={nextCard.title}
								description={nextCard.description}
								image={nextCard.image_url}
								productUrl={nextCard.product_url}
								loggedin={this.state.loggedin}
							/>
						))}
					</div>
						
				</div>
			);
		}

}

// could also  - render(<App />, document.body)

export default App;
