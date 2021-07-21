FROM node:14-alpine
RUN mkdir /nextApp
WORKDIR /app
COPY .next ./.next
COPY package.json ./package.json
RUN yarn
CMD yarn next start -p $PORT
