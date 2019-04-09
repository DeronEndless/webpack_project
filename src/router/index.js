import React from 'react';

import { Route, Switch } from 'react-router-dom';

// 引入页面
import Home from '@/pages/home';
import About from '@/pages/about';
import Counter from '@/pages/counter';

// 路由
const getRouter = () => (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/counter" component={Counter}/>
    </Switch>
);

export default getRouter;
