# node-express-api-ngrok

This is a node.js express API app implemented with Docker and ngrok.

### Requirements

- Docker installed (includes docker-compose)
- [ngrok](https://ngrok.com/) account and authorization token

### How to setup and run

1. Clone this repo and enter the repo directory in the terminal.

2. Copy the `./ngrok.example.yml` and rename it to `./ngrok.yml`. Also, remember to place your ngrok authorization token in this file:

```
version: "2"
authtoken: PLACE_YOUR_NGROK_TOKEN_HERE
```

3. Enter the following commands to build the api server and run the ngrok:

```
$ docker-compose up -d
```

4. The default ngrok web ui should be hosted on `localhost:4040`. You can get the tunnel url in the screen.

5. Enjoy!
