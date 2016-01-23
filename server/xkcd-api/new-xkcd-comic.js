import getCurrentComic from '../xkcd-scrape/get-current-comic';
import postMessage from '../slack-client/post-message';

export default function newXkcdComic() {
    return (req, res, next) => {
        getCurrentComic()
        .then((comic) => {
            const config = {
                channelUrl: process.env.SLACK_CHANNEL_URL,
                username: process.env.SLACK_USERNAME || 'Randall Munroe',
                channelName: process.env.SLACK_CHANNEL_NAME || '#comics'
            };

            console.log(comic)
            return postMessage(config, comic);
        })
        .then(() => {
            res.send('okay matey');
        })
        .catch((error) => {
            console.log(error);
            res.status(500).send({ error })
        })
    }
}
