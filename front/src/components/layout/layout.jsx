import React, { Component } from 'react';
import SiteHeader from 'components/layout/siteHeader';
import { BrowserRouter,Route,Switch} from 'react-router-dom'
import Articles from 'components/articles/articles'

export default class Layout extends Component {
  constructor(props) {
    super(props);
  }

render() {
    return (
      [
        <SiteHeader key="header" />,
        <Switch key="map">
          <main id="mainView" key="mainview">
            <Route exact path="/articles" component={Articles}/>
          </main>
        </Switch>
      ]
    )}
}
