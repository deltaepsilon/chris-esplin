/* globals firebase */
import React from 'react';
import { withRouter } from 'next/router';
import environment from '../../environments/environment';

// Head tags
import AnalyticsHead from '../head/analytics';
import FontsHead from '../head/fonts';
import MetaHead from '../head/meta';
import { AppStyle } from '../head/styles';

// Components
import Pageview from '../analytics/pageview';
import AlertHandler from '../handlers/alert-handler';
import ErrorHandler from '../handlers/error-handler';
import FirebaseScripts from './firebase';
// import Mailerlite from './mailerlite';

import './app-shell.css';

export class AppShell extends React.Component {
  get firebase() {
    return firebase;
  }

  render() {
    return (
      <>
        <AnalyticsHead />
        <MetaHead
          title="Chris Esplin - formerly GeoCities.com/ChrisEsplin"
          description="I just want a Super NES for Christmas"
        />
        <FontsHead />
        <AppStyle />
        <div>
          <AlertHandler />
          <ErrorHandler />
          <Pageview environment={environment} />
          <div className="main-wrapper">
            <main>{this.props.children}</main>
          </div>
        </div>
        <FirebaseScripts />
        {/* <Mailerlite /> */}
      </>
    );
  }
}

export default withRouter(AppShell);
