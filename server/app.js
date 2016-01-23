import express from 'express';
import morgan from 'morgan';
import views from './views';
import xkcdApi from './xkcd-api';

export default function App() {
    const app = express();
    app.use(morgan('combined'));
    app.use('/assets', express.static('dist'));

    app.use('/there-is-a-new-xkcd', xkcdApi())
    app.use('/', views())

    return app;
}
