import * as React from 'react';
import MetaTags from 'react-meta-tags';
 
export class MetaTagsComponent extends React.Component<any,any> {
    constructor(props){
        super(props);
    }
  render() {
      let {metaData} = this.props;
      return (
          <>
          {this.props.metaData && <MetaTags>
            <title>{metaData.title}</title>
            <meta name="title" content={metaData.title}/>
	        <meta name="description" content={metaData.description}/>
	        <meta name="keywords" content={metaData.keywords}/>
          </MetaTags>}
          </>
      )
  }
}