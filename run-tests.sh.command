#!/usr/bin/env bash

THIS_DIR=`dirname $0`

# Check if mvn exists
NPM_PATH=`which npm`
if [ -z "$NPM_PATH" ]; then
    echo "npm is not found!"
	exit 1
fi

pushd "$THIS_DIR"
npm test
popd