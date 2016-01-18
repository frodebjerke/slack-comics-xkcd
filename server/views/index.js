import { Router } from 'express';
import { asStaticMarkup } from './home.react';

export default function Views() {
    const router = Router();

    router.get('*', (req, res, next) => {
        const markup = asStaticMarkup();
        res.send(markup)
    })

    return router;
}
