

## Development

To get a local copy of the code, clone it using git:

```
git clone https://github.com/Julian-cycle/docker-node-express.git
cd docker-node-app
```

To build image:

```
docker build -t docker-node-app .
```

Start a container based on the image:

```
docker run -d -p 8000:8000 docker-node-app
```

Visit the application in a browser at [http://localhost:8000](http://localhost:8000). 

