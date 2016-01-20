import express from 'express';
import morgan from 'morgan';
import views from './views';

export default function App() {
    const app = express();
    app.use(morgan('combined'));
    app.use('/assets', express.static('dist'));

    app.use('/', views())

    return app;
}
