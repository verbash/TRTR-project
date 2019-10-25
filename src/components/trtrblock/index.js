import { h } from 'preact';
import style from './style';
import Trtrcard from '../trtrcard';


function Trtrblock ({ passedState, isLoggedIn }) {
	// this is the whole TRTR block being rendered
	//  - each card from Trtrcard component
	// pass ProductUrl and isLoggedIn through props

	//use .sort to randomize
	const shuffle = (array) => {
		let	randomArray = array.sort(() => Math.random() - 0.5);

		// loop to render only first 6 cards

		let randomShortArray = randomArray.splice(0,6);
		return randomShortArray;
	};

	return (
		<div className={style.block}>
			<div className={style.row}>
				{shuffle(passedState).map(nextCard => (
					<Trtrcard className={style.column}
						id={nextCard.id}
						title={nextCard.title}
						description={nextCard.description}
						image={nextCard.image_url}
						productUrl={nextCard.product_url}
						isLoggedIn={isLoggedIn}
						// loggedin={this.state.loggedin}
					/>
				))}
			</div>
            
		</div>
	);
}


export default Trtrblock;