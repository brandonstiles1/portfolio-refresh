import React from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Landing from '../sections/Landing';
import About from '../sections/About';
import Projects from '../sections/Projects';
import Writing from '../sections/Writing';
import Footer from '../components/Footer';
import Greenlight from '../sections/Greenlight';
import MachineLearning from '../sections/MachineLearning';
import DeepCopy from '../sections/DeepCopy';

const IndexPage = () => (
  <Layout>
    <Header />
    <Landing />
    <Greenlight />
    <MachineLearning />
    <DeepCopy />
    <About />
    <Projects />
    <Writing />
    <Footer />
  </Layout>
);

export default IndexPage;
