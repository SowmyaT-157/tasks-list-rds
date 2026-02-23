#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib/core';
import { AwsCdkStack } from '../lib/aws_cdk-stack';
import dotenv from "dotenv"

dotenv.config()

const app = new cdk.App();
new AwsCdkStack(app, 'AwsCdkStack', {
   env: { account: process.env.ACCOUNT_ID, region:process.env.AWS_REGION},
});
