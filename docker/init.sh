#!/bin/bash

# Initialize the database
/docker-entrypoint.sh postgres &

# Run any additional commands provided
source /root/.profile
exec "$@"
