import { h } from 'preact';
import style from './style';
import LinkLogged from '../linklogged';


function Trtrcard ({ id,title,description,image,productUrl,loggedin }) {
	return (
		<div class={style.card}>
			
			<img src={image} alt={title} />
			<header><h6 className={style.cardTitle}>{title}</h6></header>
			<div className={style.textBox}>
				<span className={style.textContent}>{description}
				</span>
			</div>
			<LinkLogged isLoggedIn={loggedin} productUrl={productUrl} />
		</div>
	);
}

export default Trtrcard;