import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './components/Home';
import FetchData from './components/FetchData';
import Counter from './components/Counter';
import Statistic from './components/Statistic';

export const routes = <Layout>
    <Route exact path='/' component={ Home } />
    <Route path='/counter' component={Counter} />
    <Route path='/statistic' component={Statistic} />
    <Route path='/fetchdata/:startDateIndex?' component={ FetchData } />
</Layout>;
