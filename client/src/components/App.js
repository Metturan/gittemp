import React, { Component } from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import './styles/app.scss';
import 'font-awesome/css/font-awesome.min.css'
import Landing from './Landing';
import Company from './Company';
import Services from './Services';
import Contact from './Contact';
import ScrollToTop from './ScrollToTop';


class App extends Component {
  render() {
    return (
    	<BrowserRouter>
	      <div>
	      	<ScrollToTop>
		        <Route exact path="/" component={Landing}/>
		        <Route exact path="/company" component={Company} />
		        <Route exact path="/services" component={Services} />
		        <Route exact path="/contact" component={Contact} />
		    </ScrollToTop>
	      </div>
	    </BrowserRouter>
    );
  }
}

export default App;
