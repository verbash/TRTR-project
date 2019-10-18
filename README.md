# Top-Rated Tarot Readings project

assignment:
UPDATE TOP-RATED TAROT READINGS block, making it dynamic and responsive 

	Randomly display 6 TRTR of 11 total cards	√
	TRTR data { title, description, image_url, product_url }	√
	
	Use CSS
	Style the text and images as shown in the attached mocks
	Display the products in 2 Rows/ 3 Columns on Desktop and Tablet √
	Display the products in 3 Rows/ 2 Columns on Mobile	√
	
	The TRTR should show the "Start Reading" links ONLY when user is logged in √
	For this exercise, passing the #logged-in has to the page simulated logged-in user √
	The "Start Reading" anchor is pointed to the corresponding product url	√

	Bonus: Loading TRTR data from an external source (i.e.: ajax, fetch, Redux state, Redux Saga, etc) - (in progress)
	Being mindful about WHICH html elements to use (should help keep CSS simple) √
	HTML, CSS, Javascript passes Lint (using default rules for each linter)	√

## notes

built using preact-cli with custom CSS

#loggedin boolean switch in 'state' of app.js

TRTRdata served as json in assets file - will soon be updated to serve externally

total hours coding: 10.59 (not including research)

### PSEUDOCODE ************************

	// Global state for our App ->> change 'loggedin: true/false' here
	state = {
		trtrdata,
		loggedin: true

	}
	// what will be in state? : trtrdata, loggedin, ?

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
		//B. put images json object in state, use .sort √
		//C. use Fisher-Yates shuffle function from stack overflow

	// loop to render only first 6 cards

	// set up #logged-in state

	// build "Start Reading" link and point to Url

	// create CSS @media to render in 3 col for web/tablet or 2 col for mobile

	// Style Css to match example

	// bonus: fetch JSON file from external source?


// ***** CHALLENGES
// rendering images from links
// 'render(<'App />, document.body)'; vs export default; ?what is the difference?