# Dockerfile for create docker image of our backend project
# image base
FROM node:18-alpine
# work folder
WORKDIR /app
# copy all dependencies
COPY package*.json ./
RUN npm install
# copy source code
COPY . .
# exposure port
EXPOSE 3000
# starting
CMD [ "npm", "start" ]