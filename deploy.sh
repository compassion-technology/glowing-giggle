#!/bin/bash

if [ -z "$AWS_ACCESS_KEY_ID" ]; then
	echo "deploy.sh: Need to set AWS_ACCESS_KEY_ID in environment."
	exit 1
fi
if [ -z "$AWS_SECRET_ACCESS_KEY" ]; then
	echo "deploy.sh: Need to set AWS_SECRET_ACCESS_KEY in environment."
	exit 1
fi

aws s3 sync dist/. "s3://$1" --exclude '.*'
