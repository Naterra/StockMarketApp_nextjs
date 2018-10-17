import Head from 'next/head';
import Header from '../components/Header';


export default props => (
	<div>
		<Head>
			<title>Hello</title>
			<link rel="icon" type="image/x-icon"   href="/static/grow-icon.png"/>

			<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"/>
			<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
		</Head>
		<Header/>

		<div className="container">{props.children}</div>
	</div>
);
