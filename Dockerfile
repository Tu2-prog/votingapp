FROM node:21-alpine3.17

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 8081

# Finally runs the application
CMD [ "npm", "run", "serve" ]