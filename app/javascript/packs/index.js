import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';
// import App from '../components/App';
import Root from '../containers/Root/Root';
import 'bootstrap/dist/css/bootstrap.css';
import '../../assets/stylesheets/index.css';
import 'font-awesome/css/font-awesome.min.css';
import store from '../store/configureStore';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <Router>
        {/* <Route path="/" component={App} /> */}
        <Root />
      </Router>
    </Provider>,
    document.body.appendChild(document.createElement('div')),
  )
})
