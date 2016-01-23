import cheerio from 'cheerio';
import request from 'superagent';

const xkcdUrl = process.env.XKCD_URL || "http://xkcd.com";

export default function getCurrentComic() {
    return new Promise((resolve, reject) => {
        request
            .get(xkcdUrl)
            .end((err, res) => {
                if (err) {
                    return reject(err);
                }

                try {
                    const comic = extractComicFromHtml(res.text);
                    resolve(comic);
                } catch (e) {
                    return reject(e);
                }
            })
    })
}

function extractComicFromHtml(body) {
    const $ = cheerio.load(body);
    const img = $('#comic').children('img').first();

    return {
        imageUrl: 'http:' + img.attr('src'),
        altText: img.attr('title'),
        title: img.attr('alt')
    }
}
