import React from 'react';
import ReactDOM from 'react-dom';
import HomeFive from './HomeFive';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Terms from "./Terms";
import Privacy from "./Privacy";
import Faq from "./Faq";

class Root extends React.Component {
	render() {
		return (
			<BrowserRouter basename={'/'} >
				<Switch>
					<Route exact path={`${process.env.PUBLIC_URL}/`} component={HomeFive} />
					<Route path={`${process.env.PUBLIC_URL}/terms-of-service`} component={Terms} />
					<Route path={`${process.env.PUBLIC_URL}/privacy-policy`} component={Privacy} />
					<Route exact path={`${process.env.PUBLIC_URL}/faq/daily-deals`} component={Faq} />
				</Switch>
			</BrowserRouter>
		);
	}
}

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
