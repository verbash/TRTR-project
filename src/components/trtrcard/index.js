import { h, render, Component } from 'preact';
import style from './style';


function Trtrcard ({ id,title,description,image,productUrl }) {
	return (
		<div class={style.card}>
			
			<img src={image} alt={title} />
			<header><h6 className={style.cardTitle}>{title}</h6></header>
			<div className={style.textBox}>
				<span className={style.textContent}>{description}
				</span>
			</div>
			<div className={style.linkHolder}>
				<a href={productUrl} className={style.link}>Start Reading
					<span className={style.linkArrow}>  >></span>
				</a>
			</div>
		</div>
	);
}

export default Trtrcard;