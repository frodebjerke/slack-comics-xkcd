import React from 'react';
import ReactDOMServer from 'react-dom/server';

export default class Home extends React.Component {

  render() {
    return <html>
      <head>
        <title>XKCD SLACK</title>
        <meta name="viewport" content="width=device-width" />
      </head>
      <body>
        <article>
          <h1>XKCD slack integration</h1>
          <p>Share and enjoy!</p>
        </article>
      </body>
    </html>
  }

}

export function asStaticMarkup() {
  return ReactDOMServer.renderToStaticMarkup(<Home />)
}
