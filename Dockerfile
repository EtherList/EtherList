FROM postgres
MAINTAINER EtherList <cholmgreen@gmail.com>

# Create the database
COPY docker/init.sql /docker-entrypoint-initdb.d/init.sql

# Replace sh with bash so we can use source
RUN rm /bin/sh && ln -s /bin/bash /bin/sh

# Install project dependencies
RUN mkdir -p /usr/src
WORKDIR /usr/src
COPY package.json /usr/src/package.json

# Install Node and project deps.
RUN apt-get update \
  && apt-get install -y curl \
  && curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.2/install.sh | bash \
  && source /root/.bashrc \
  && nvm install node \
  && npm install

# Expose port 80 (http)
EXPOSE 80

# Set up custom entry point
COPY docker/init.sh /init.sh
RUN chmod 744 /init.sh
ENTRYPOINT ["/init.sh"]
