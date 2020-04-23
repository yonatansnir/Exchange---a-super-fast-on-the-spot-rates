import React, {Component} from 'react';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import User from './Components/User/User';
import MyArea from './Components/MyArea/MyArea';
import { Switch, Route } from 'react-router-dom';



class App extends Component {
    render() {
        return (
            <Layout>
                <Switch>
                    <Route path='/user' component={User} />
                    <Route path='/my-area' component={MyArea} />
                    <Route path='/' component={Home} />
                </Switch>
            </Layout>
        )
    }
}

export default App;