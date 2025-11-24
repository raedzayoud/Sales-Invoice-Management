From node:latest as builder

RUN mkdir -p /app

WORKDIR /app

COPY . /app


RUN npm install
RUN npm run build --prod
CMD ["node", "start"]
