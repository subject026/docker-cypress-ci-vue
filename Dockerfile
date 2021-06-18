FROM node:14.17.0

WORKDIR /app

COPY . .

RUN yarn

RUN yarn build

CMD "yarn" "test:ci"