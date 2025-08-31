# COVID-19 Stats

## Contribute
### Container Engine
> [!NOTE]
> If you use [🐳 Docker](https://app.docker.com/) instead of [🦦 Podman](https://podman.io/), just replace `podman-compose` with `docker compose`, and `podman` with `docker` in code examples below.

#### Build an Image
To build an image, navigate to the root of the project and run this command:
```bash
podman-compose build
```

#### Run the Container
To run a container, navigate to the root of the project and run this command:
```bash
podman-compose up -d
```

You can visit `http://localhost:3000` to see the site. Running the container will start Vite server.

#### Enter the Container
To enter inside of the container, run this command:
```bash
podman-compose exec app sh
```

You'll be able to run NPM commands inside of the container.

#### Destroy the Container
You can cleanup after working on a project by destroying things like networks with this command:
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
