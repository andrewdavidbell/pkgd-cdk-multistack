#!/usr/bin/env node
// import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { MultistackStack } from 'mytsmodule';

const app = new cdk.App();

new MultistackStack(app, "MySydneyCdkStack", {
    env: {region: "ap-southeast-2"},
    encryptBucket: false
});

new MultistackStack(app, "MyMelbourneCdkStack", {
    env: {region: "ap-southeast-4"},
    encryptBucket: true
});

app.synth();
