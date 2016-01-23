import { Router } from 'express';
import newXkcdComic from './new-xkcd-comic';

export default function Views() {
    const router = Router();

    router.post('*', newXkcdComic())

    return router;
}
