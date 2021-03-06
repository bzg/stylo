import React, { Component } from 'react';
import SiteHeader from 'components/layout/siteHeader';
import { BrowserRouter,Route,Switch} from 'react-router-dom'
import Write from 'components/write/main'
import Live from 'components/write/live'

export default class Layout extends Component {
  constructor(props) {
    super(props);
  }

render() {
    return (
      [
        <SiteHeader key="header" />,
          <main id="WriteWrapper" key="mainview">
            <Switch key="map">
              <Route exact path="/write/:article/:version" component={Write}/>
              <Route exact path="/write/:article" component={Live}/>
            </Switch>
          </main>
      ]
    )}
}
