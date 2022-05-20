/// <reference types="node" />
import * as AWS from 'aws-sdk';
import { IS3Service } from "../port/s3-service.interface";
export declare class S3Service implements IS3Service {
    s3: AWS.S3;
    uploadFile(fileParams: {
        file: Buffer;
        filename: string;
    }): Promise<string>;
}
