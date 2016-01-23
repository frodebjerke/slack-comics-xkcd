# XKCD SLACK INTEGRATION

So this is a lazy, but also to some extent over engineered slack integration for posting the latest XKCD comic strips.

Check out xkcd and other work from the creator Randall Munroe at [xkcd.com](http://xkcd.com)

This integration works very well with the Feed trigger at [ifttt](http://ifttt.com). Look below to find the gory details for how to set it up.

## How it is supposed to work
I made this based on the following solution:

`xckd atom feed (http://xkcd.com/atom.xml)` -> `IFTTT trigger posts to a webhook in this application (HTTP POST http://app-url/there-is-a-new-xkcd)` -> `application posts to slack`

I decided to use the IFTTT trigger instead of parsing the atom feed myself for convenience.

As this application only relies on being notified on a webhook when to post to slack, it can easily integrate with a hubot or other sources, not limited to IFTTT.

## Roll it
Requires internet and node.js
1. git clone
2. npm install
3. set environment variables
    - SLACK_CHANNEL_URL **(required)** obtain a incoming webhook url to your slack team.
    - SLACK_CHANNEL_NAME *(default: #comics)*
    - SLACK_CHANNEL_USERNAME *(default: Randall Munroe)*
4. Run it by any of the following means: `node .` / `nodemon .` / `npm run start`

## Post to slack
To test it / force a run:

`curl -XPOST http://app-url/there-is-a-new-xkcd`
