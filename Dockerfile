FROM node:6.3.1
MAINTAINER EtherList <cholmgreen@gmail.com>

# Replace sh with bash so we can use source
RUN rm /bin/sh && ln -s /bin/bash /bin/sh

# Install project dependencies
RUN mkdir -p /usr/src
WORKDIR /usr/src
COPY package.json /usr/src/package.json

# Install Node and project deps.
RUN npm install -g nodemon \
  && npm install

# Expose port 80 (http)
EXPOSE 80
