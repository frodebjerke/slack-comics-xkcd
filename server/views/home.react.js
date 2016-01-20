import React from 'react';
import ReactDOMServer from 'react-dom/server';

export default class Home extends React.Component {

  render() {
    return <html>
      <head>
        <title>B O I L E R P L A T E</title>
        <meta name="viewport" content="width=device-width" />
        <link href="assets/styles.css" rel="stylesheet" />
      </head>
      <body>
        <section id="frontend" />
        <script src="assets/scripts.js" />
      </body>
    </html>
  }

}

export function asStaticMarkup() {
  return ReactDOMServer.renderToStaticMarkup(<Home />)
}
