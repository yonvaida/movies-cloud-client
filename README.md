# Movies from cloud
If you have movies on cloud you can watch them
## Installation
Clone this repo
> git clone https://github.com/yonvaida/movies-cloud.git
> npm install

Create settings.json in /src/server
```json
{
    "oneDrive": {
        "tokenParams":{
            "grant_type":"password",
            "client_id":"your-cliend-id",
            "client_secret":"your-client-secret.",
            "scope":"https://graph.microsoft.com/.default",
            "userName":"your-username",
            "password":"your-password"
        },
        "drive_id":"movies-drive-id"
    }
}
```
> npm run
