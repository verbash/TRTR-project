import { h } from 'preact';
import style from './style';

function LinkLogged(props) {
	const isLoggedIn = props.isLoggedIn;
	if (isLoggedIn) {
		return <LinkLoggedYes productUrl={props.productUrl} />;
	}
	return <LinkLoggedNo />;
    
}

// figure out how to pass productUrl props
function LinkLoggedYes(props) {
	return (
		<div className={style.linkHolder}>
			<a href={props.productUrl} className={style.link}>Start Reading
				<span className={style.linkArrow}>  >></span>
			</a>
		</div>);
}

function LinkLoggedNo(props) {
	return (
		<p> </p>
	);
}

export default LinkLogged;
