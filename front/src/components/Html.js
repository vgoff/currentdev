import React, { PropTypes } from 'react';
import { analytics } from '../config';

class Html extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    style: PropTypes.string,
    scripts: PropTypes.arrayOf(PropTypes.string.isRequired),
    children: PropTypes.string,
  };

  render() {
    const { title, description, style, scripts, children } = this.props;
    return (
      <html className="no-js" lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="apple-touch-icon" href="apple-touch-icon.png" />
          <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css" />
          <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/spinkit/1.2.5/spinkit.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
          {
            /*

            <link rel="stylesheet" href="http://192.168.0.25:3001/src/semantic.min.css" />
            <link rel="stylesheet" href="http://192.168.0.25:3001/src/font-awesome.min.css" />
            <link rel="stylesheet" href="http://192.168.0.25:3001/src/spinkit.min.css" />

            */
          }
          {style && <style id="css" dangerouslySetInnerHTML={{ __html: style }} />}
        </head>
        <body>
          <div id="app" dangerouslySetInnerHTML={{ __html: children }} />
          {scripts && scripts.map(script => <script key={script} src={script} />)}
          {analytics.google.trackingId &&
            <script
              dangerouslySetInnerHTML={{ __html:
              'window.ga=function(){ga.q.push(arguments)};ga.q=[];ga.l=+new Date;' +
              `ga('create','${analytics.google.trackingId}','auto');ga('send','pageview')` }}
            />
          }
          {analytics.google.trackingId &&
            <script src="https://www.google-analytics.com/analytics.js" async defer />
          }
        </body>
      </html>
    );
  }
}

export default Html;
