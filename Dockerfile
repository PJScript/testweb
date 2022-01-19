FROM node:12-alpine
WORKDIR /usr

COPY . .

RUN yarn install

WORKDIR /usr

CMD ["yarn", "run", "dev"]
# EXPOSE 8888