# GitHub Twissues
Watch a hashtag to record tweets as issues

Replies to poster with link to issue on GitHub

# Setup
Things you will need:
- A Twitter account that will own your application and reply to tweets
- A Twitter app. See https://dev.twitter.com/overview/documentation and https://apps.twitter.com for creating and documentation on Twitter apps.
- A GitHub account that will create issues
- A hashtag to watch (#ghtwissues for this repo - try it!)

You may want to create specific app/bot accounts for this purpose.

## Twitter Setup
Let us assume you have created a new Twitter app under the account of your choosing.  For the app to reply to tweets make sure that is has Read and Write access.  Without Write access it will be able to watch the hashtag but not send tweets from the account.
- On https://apps.twitter.com, select your app
- Go to the permissions tab for the app and select at least 'Read and Write' (Read, Write, and Access direct messages also works but direct message access is not needed)
- Once you update your settings you must regenerate your keys as they are tied to the access type.  The access level that applies to your current keys is listed with them

## GitHub Setup
- Go to the profile settings for the account you want to use.
- Go to 'Personal Access Tokens' and generate a new token for this application to use

## Environment Variables
Once you have all the necessary account information establish them as corresponding environment variables

- CONSUMERKEY - Twitter Consumer Key
- CONSUMERSECRET - Twitter Consumer Secret
- ACCESSTOKEN - Twitter Access Token
- ACCESSTOKENSECRET - Twitter Access Token Secret
- TRACKERTAG - hashtag to watch (without `#` prefix)
- GITHUBTOKEN - GitHub access token
- GITHUBREPO - Name of repository to post issues to
- GITHUBUSER - Name of user or organization repository is under
