#!/bin/bash

((x = 0))
for filename in $(dirname $0)/*.js; do
  echo $filename
  mocha --compilers js:babel-core/register $filename
  ((x += $?))
done

exit $x
