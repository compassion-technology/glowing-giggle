#!/bin/bash

if [ -z "$AWS_ACCESS_KEY" ]; then
	echo "deploy.sh: Need to set AWS_ACCESS_KEY in environment."
	exit 1
fi
if [ -z "$AWS_SECRET_ACCESS_KEY" ]; then
	echo "deploy.sh: Need to set AWS_SECRET_ACCESS_KEY in environment."
	exit 1
fi
if [ "$1" == "test" ]; then
	if [ -z "$AWS_S3_TEST_BUCKET" ]; then
		echo "deploy.sh: Need to set AWS_S3_TEST_BUCKET in environment."
		exit 1
	fi
	BUCKET_NAME="$AWS_S3_TEST_BUCKET"
elif [ "$1" == "prod" ]; then
	if [ -z "$AWS_S3_PROD_BUCKET" ]; then
		echo "deploy.sh: Need to set AWS_S3_PROD_BUCKET in environment."
		exit 1
	fi
	BUCKET_NAME="$AWS_S3_PROD_BUCKET"
fi

aws configure set aws_access_key_id $AWS_ACCESS_KEY
aws configure set aws_secret_access_key $AWS_SECRET_ACCESS_KEY

aws s3 sync build/. "s3://${BUCKET_NAME}" \
	--exclude '.*'
