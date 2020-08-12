import React from 'react';

const favicons = [
  {
    size: 16,
    url: '//cdn.otstatic.com/cfe/4/images/favicon-16-eec075.png',
  },
  {
    size: 32,
    url: '//cdn.otstatic.com/cfe/4/images/favicon-32-76aa16.png',
  },
  {
    size: 48,
    url: '//cdn.otstatic.com/cfe/4/images/favicon-48-b39a55.png',
  },
  {
    size: 64,
    url: '//cdn.otstatic.com/cfe/4/images/favicon-64-ee0fa3.png',
  },
  {
    size: 128,
    url: '//cdn.otstatic.com/cfe/4/images/favicon-128-d256f1.png',
  },
];

export default class HTML extends React.Component {
  render() {
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <title>OTKit Style Guide</title>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          {favicons.map((favicon) => (
            <link rel="icon" sizes={`${favicon.size}x${favicon.size}`} href={favicon.url} />
          ))}
          {this.props.headComponents}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
};
