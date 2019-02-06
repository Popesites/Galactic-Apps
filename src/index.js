import React from 'react';
import ReactDOM from 'react-dom';
import HomeFive from './HomeFive';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Terms from "./Terms";
import Privacy from "./Privacy";

class Root extends React.Component {
  render() {
  	return(
  		<BrowserRouter basename={'/'} >
		  	<Switch>
				<Route exact path={`${process.env.PUBLIC_URL}/`} component={HomeFive}/>
                <Route path={`${process.env.PUBLIC_URL}/terms-of-service`} component={Terms}/>
                <Route path={`${process.env.PUBLIC_URL}/privacy-policy`} component={Privacy}/>
			</Switch>
		</BrowserRouter>
  	);
  }
 }

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
