import Header from '../components/Header';
import Layout from '../components/Layout';
import React, { Component, Fragment } from 'react';

export default () => {
   return(<Fragment>
       <Layout>
       <Header/>
       <div>Welcome to next.js!</div>
       </Layout>
   </Fragment>);
}