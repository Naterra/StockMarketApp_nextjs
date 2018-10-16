import Head from 'next/head';
import 'materialize-css/dist/css/materialize.min.css';
// import 'materialize-css/dist/js/materialize.min.js';

export default props => (
	<div>

		<Head>
			<title>Hello</title>

			<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"/>
			<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"/>

		</Head>
			<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />

			{/*<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>*/}
            {/*<link type="text/css" rel="stylesheet" href="../node_modules/materialize-css/dist/css/materialize.min.css"  media="screen,projection"/>*/}
			<meta name="viewport" content="width=device-width, initial-scale=1.0"/>

		{props.children}
		{/*<script type="text/javascript" src="../node_modules/materialize-css/js/materialize.min.js"></script>*/}

	</div>
);
