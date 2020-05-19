import * as React from "react";
import { utility } from "../../utils/dispatch_utility";
import * as Reveal from 'react-reveal/Reveal';

class DownloadApp extends React.Component<any, any> {
    downloadApp = () => {
      let link = process.env.APP_LINK;
      window.open(link)
    }
    render() {
      let platForm = utility.getPlatformString();
      return (
        <>
      <Reveal effect="animate fadeInLeft">
        <div className="download-app">
          {platForm == 'android' && <span onClick={() => this.downloadApp()} className='download-btn'>
            <i className="icon-android"></i>
            <span className="">Download App</span>
          </span>}
          {platForm == 'ios' && <span className='download-btn'>
            <i className="icon-apple"></i>
            <span className="">Coming Soon...</span>
          </span>}
        </div>
      </Reveal>
      </>
    );
  }
}
export default DownloadApp;
