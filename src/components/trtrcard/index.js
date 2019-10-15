import { h, render, Component } from 'preact';
import style from './style';


function Trtrcard ({ id,title,description,image,product_url }) {
	return (
		<div class={style.card}>
			<h3>{title}</h3>
			<img src={image} alt={title} />
			<p>{description}</p>
		</div>
	)
}

export default Trtrcard;