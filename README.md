

## Development

To get a local copy of the code, clone it using git:

```
git clone https://github.com/SafdarJamal/docker-node-app.git
cd docker-node-app
```

Now that you have some source code and a Dockerfile, it’s time to build your first image:

```
docker build -t docker-node-app .
```

Start a container based on your new image:

```
docker run -d -p 8000:8000 docker-node-app
```

Visit your application in a browser at [http://localhost:8000](http://localhost:8000). You should see your hello world application up and running.

