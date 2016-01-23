import slackNotify from 'slack-notify';

export default function postMessage(config, msg) {
    return new Promise((resolve, reject) => {

        const payload = {
            channel: config.channelName,
            username: config.username,
            attachments: [{
                pretext: msg.altText,
                title: msg.title,
                'image_url': msg.imageUrl
            }]
        }

        const slack = slackNotify(config.channelUrl);

        slack.send(payload, () => {
            console.log("Slack message sent for " + msg.title)
            resolve();
        })
    });
}
