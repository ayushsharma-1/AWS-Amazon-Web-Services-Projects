#!/bin/bash
###################################
#Author : Ayush Sharma
#Date : 17-09-2024
#Version : v1
# This script will report the AWS resource usage
###################################
#Objectives : AWS S3, AWS EC2, AWS Lambda, AWS IAM users

set -x

#List S3 buckets
echo "Print S3 Bucket List"
aws s3 ls --output json >>resourceTracker.txt

#List EC2 instances
echo "Print active running instances"
aws ec2 describe-instances --output json >>resourceTracker.txt

#List Lambda Functions
echo "Print Lambda Functions"
aws lambda list-functions --output json >>resourceTracker.txt

#List IAM users
echo "Print IAM Users"
aws iam list-users --output json >>resourceTracker.txt

echo "Printing Only Instance ID"
aws ec2 describe-instances --output json | jq '.Reservations[].Instances[].InstanceId' >>resourceTracker.txt
