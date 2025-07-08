# COVID-19 Stats

## Contribute
### Container Engine
If you use a container engine like [🦦 Podman](https://podman.io/) or [🐳 Docker](https://app.docker.com/), here are the steps that you can make:

#### Build an Image
To build an image, navigate to the root of the project and run this Docker command:
```bash
docker compose build
```
For Podman, run this:
```bash
podman-compose build
```

#### Run the Container
To run a container, navigate to the root of the project and run this Docker command:
```bash
docker compose up -d
```
For Podman, run this:
```bash
podman-compose up -d
```

You can visit `http://localhost:3000` to see the site. Running the container will start Vite server.

#### Enter the Container
To enter inside of the container, run this Docker command:
```bash
docker compose exec app sh
```
For Podman, run this:
```bash
podman-compose exec app sh
```

You'll be able to run NPM commands inside of the container.

#### Destroy the Container
You can cleanup after working on a project by destroying things like networks with this Docker command:

```bash
docker compose down
```
For Podman, run this:
```bash
podman-compose down
```

## NPM Commands
### Project setup
```bash
npm i
```

#### Compiles and hot-reloads for development
```bash
npm run serve
```

#### Compiles and minifies for production
```bash
npm run build
```
