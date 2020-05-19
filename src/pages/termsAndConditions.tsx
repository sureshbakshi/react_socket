//App.js

import { Component } from "react";
import * as React from "react";
import { utility } from "../utils/dispatch_utility";
import { connect } from "react-redux";
import FooterComponent from"../components/home/footer";
import { TERMS_AND_CONDITIONS } from "../utils/constants";
import HtmlParser from '../components/common/htmlParser';
import * as Reveal from 'react-reveal/Reveal';

interface IAppProps {
  router?: any;
  location: any;
  Dispatch: any;
  history: any;
}

class TermsAndCondtion extends Component<IAppProps, any> {
  render() {
    return (
      <>
      <div className='kp-container privacy-block'>
          <Reveal effect="animate fadeInUp">
          <h2 className='h2-heading'>Terms and Conditions</h2>
          <HtmlParser {...{htmlObj: TERMS_AND_CONDITIONS}}/>
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
)(TermsAndCondtion);
