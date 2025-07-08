FROM node:24-alpine

RUN apk add --no-cache git

WORKDIR /app

COPY package*.json .

RUN npm i && \
    npm cache clean --force

COPY . .

EXPOSE 5173

ENTRYPOINT ["npm", "run", "dev"]
