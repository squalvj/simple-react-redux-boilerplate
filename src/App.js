import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './container/Home'
import Header from 'components/Header'
import { Provider } from 'react-redux'
import store from './store'
import './styles/css/core.scss';
export default class App extends Component {
  render() {
    
    return (
      <Provider store={store}>
        <Router>
          <Header />
          <div id="app">
            <Route exact path="/" component={Home} />
          </div>
        </Router>
      </Provider>
      )
    }
}
