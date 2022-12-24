#pull official docker image
FROM node:13.12.0-alpine

#set working directory
WORKDIR /app

# add app/node_module/.bin to $path
ENV PATH app/node_modules/.bin:$PATH

#install all dependencies
COPY package.json ./
COPY package-lock.json ./
run  npm install --silent
run npm install react-scripts@3.4.1 -g --silent

#add app
COPY . ./

#start app
cmd [npm, start]