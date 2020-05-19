//App.js

import { Component } from "react";
import * as React from "react";
import { utility } from "../utils/dispatch_utility";
import { connect } from "react-redux";
import FooterComponent from "../components/home/footer";
import { REFER_AND_EARN, REFER_NOTES } from "../utils/constants";
import HtmlParser from "../components/common/htmlParser";
import { cloneDeep } from "lodash";
import * as Reveal from 'react-reveal/Reveal';
import * as Fade from 'react-reveal/Fade';
import * as Slide from 'react-reveal/Slide';

interface IAppProps {
  router?: any;
  location: any;
  Dispatch: any;
  history: any;
}
const STEPS = [
  "Share the app link with your friends through any social mide",
  "Ask them to install and register using your link",
  "Earn ₹200 for every friend who signs up at kwizzy app and adds cash of ₹50 or more to get a Bonus of ₹50* (as per *notes and terms below)"
];
// const REFERANDEARN_BG = require("../assets/images/refer_and_earn_bg.png");
const REFERANDEARN_FG = require("../assets/images/refer_and_earn_fg.png");

class ReferAndEarn extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      referTerms: this.getItemsList(false),
      showAll: false
    };
  }
  getItemsList(showMore) {
    let clonedItems = cloneDeep(REFER_AND_EARN)
    if(!showMore) {
      clonedItems[0].items = clonedItems[0].items.slice(0,1)
    }return clonedItems
  }
  toggleView(toggleView) {
    this.setState({referTerms: this.getItemsList(toggleView), showAll: toggleView})
  }
  renderSteps() {
    return STEPS.map((step, i) => {
      return (
        <div className="step-block" key={`steps${i}`}>
          <div className="step-title">Step-{i+1}: </div>
          <div className="step-desc">{step} </div>
        </div>
      );
    });
  }
  render() {
    let { showAll , referTerms} = this.state;
    console.log(referTerms, REFER_AND_EARN)
    return (
      <>
        <div className="banner-bg kp-container refer-banner" >
          <div className="row sms-block android-block refer-and-earn">
            <Slide left>
              <div className="col-md-7 col-sm-12 android-left">
                <h1 className={"title"}>Refer and Earn</h1>
                <p className="promo-text">
                  Earn <span>₹200 </span> for Every Friend
                </p>
              </div>
            </Slide>
            <Slide right>
              <div className="col-md-5 col-sm-12 android-right refer-right-img">
                <img src={REFERANDEARN_FG} className="refer-image"></img>
              </div>
            </Slide>
          </div>
        </div>
        <div className="kp-container privacy-block">
          <div className="text-center header-block">
            <Fade bottom cascade>
              <h2 className="h2-heading">Earn ₹200 for Every Friend</h2>
              <p>
                Enjoy playing on kwizzy? Now you can refer our awesome app &
                Earn at the same time
              </p>
            </Fade>
          </div>
          <div className="row">
            <div className="col-12">
              <Reveal effect="animate fadeInUp">
                <div className="card card-layout">
                  <h3 className="heading">Here is how it works:</h3>
                  {this.renderSteps()}
                </div>
              </Reveal>
            </div>
            <div className="col-12">
              <Reveal effect="animate fadeInUp">
              <div className="card card-layout">
                <HtmlParser {...{ htmlObj: REFER_NOTES }} />
              </div>
              </Reveal>
            </div>
            <div className="col-12">
              <Reveal effect="animate fadeInUp">
              <div className="card card-layout ">
                <h3 className="heading">*Other terms and conditions</h3>
                <HtmlParser {...{ htmlObj: referTerms }} />
                <p className="text-center">
                  <span className="toggle-btn" onClick={() => {this.toggleView(!this.state.showAll)}}>{showAll ? "Show Less" : "Show More"}</span>
                </p>
              </div>
              </Reveal>
            </div>
          </div>
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
)(ReferAndEarn);
