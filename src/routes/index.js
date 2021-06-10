import React from 'react';
import Home from '../views/Home';
import {Route, Switch} from 'react-router-dom';
import SignIn from '../views/SignInViews';
import SignUp from '../views/SignUpViews';
import DashBoard from '../views/DashBoard';
import viewBlog from '../views/ViewBlog';

const Index=()=>{
return (
<switch>
    <Route component={Home} exact path={["/","/home"]}/>
    <Route component={SignIn} exact path={["/signin"]}/>
    <Route component={SignUp} exact path={["/signup"]}/>
    <Route component={DashBoard} exact path={["/dashboard"]}/>
    <Route component={viewBlog} exact path={["/view/blog/:blogId"]} />
    
</switch>
)
}

export default Index;