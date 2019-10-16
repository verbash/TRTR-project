import { h, render, Component } from 'preact';
import style from './style';


function Trtrcard ({ id,title,description,image,productUrl }) {
	return (
		<div class={style.card}>
			
			<img src={image} alt={title} />
			<h4 className={style.cardTitle}>{title}</h4>
			<div className={style.textBox}>{description}</div>
			<a href={productUrl} className={style.link}>Start Reading >></a>
		</div>
	)
}

export default Trtrcard;