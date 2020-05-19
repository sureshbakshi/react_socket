//App.js

import { Component } from "react";
import * as React from "react";
import { utility } from "../utils/dispatch_utility";
import { connect } from "react-redux";
import FooterComponent from"../components/home/footer";
import { PRIVACY_POLICY } from "../utils/constants";
// import ParseHtml from "../components/common/parseHtml";
import HtmlParser from '../components/common/htmlParser';

import * as Fade from 'react-reveal/Fade';
import * as Reveal from 'react-reveal/Reveal';

interface IAppProps {
  router?: any;
  location: any;
  Dispatch: any;
  history: any;
}

class PrivacyPolicy extends Component<IAppProps, any> {
  render() {
    return (
      <>
        <div className='kp-container privacy-block'>
          <Fade bottom cascade>
            <h2 className='h2-heading'>Privacy Policy</h2>
          </Fade>
          <Reveal effect="animate fadeInUp">
          <HtmlParser {...{htmlObj: PRIVACY_POLICY}}/>
          </Reveal>
        </div>
        <FooterComponent />
      </>
    );
  }
}
function mapStoreToProps(store): Partial<IAppProps> {
  return {};
}
export default connect(
  mapStoreToProps,
  utility.mapDispatchToProps
)(PrivacyPolicy);
