import App, {Container} from 'next/app';
import React from 'react';
import withReduxStore from '../utils/with-redux-store';
import { Provider } from 'react-redux';

import reduxStore from '../reducer/index';

/**  CSS  **/
import 'materialize-css/dist/css/materialize.min.css';
import "../assets/scss/styles.scss";

class MyApp extends App {
    render () {
        const {Component, pageProps} = this.props;
        return (
            <Container>
                <Provider store={reduxStore}>
                    <Component {...pageProps} />
                </Provider>
            </Container>
        )
    }
}

export default withReduxStore(MyApp);