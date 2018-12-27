FROM node:8
RUN apt-get update
COPY . /code
WORKDIR /code
RUN npm install
CMD ["node", "server/dist/index.js"]