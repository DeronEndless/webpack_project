import React from 'react';
import { Route, Switch } from 'react-router-dom';
import loadable from 'react-loadable';
import Loading from '@/components/Loading';

const Home = loadable({
    loader: () => import('@/pages/Home'),
    loading: Loading,
    timeout: 10000
})
const About = loadable({
    loader: () => import('@/pages/about'),
    loading: Loading,
    timeout: 10000
})
const Counter = loadable({
    loader: () => import('@/pages/Counter'),
    loading: Loading,
    timeout: 10000
})
const NotFound = loadable({
    loader: () => import('@/pages/not-found'),
    loading: Loading,
    timeout: 10000
})

const UserInfo = loadable({
    loader: () => import('@/pages/UserInfo'),
    loading: Loading,
    timeout: 10000, // 10 seconds
})

// 路由
const getRouter = () => (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/counter" component={Counter}/>
        <Route path="/userinfo" component={UserInfo}/>
        <Route component={NotFound}/>
    </Switch>
);

export default getRouter;
