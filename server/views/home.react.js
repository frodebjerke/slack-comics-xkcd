import React from 'react';
import ReactDOMServer from 'react-dom/server';

export default class Home extends React.Component {

  render() {
    return <html>
      <head>
        <title>Frode Bjerke</title>
        <meta name="viewport" content="width=device-width" />
      </head>
      <body style={{ margin: 0 }} >
        <section id="frodebjerke" />
      </body>
    </html>
  }

}

export function asStaticMarkup() {
  console.log('hei', Home)
  return ReactDOMServer.renderToStaticMarkup(<Home />)
}
