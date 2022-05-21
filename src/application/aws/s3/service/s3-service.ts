import { Injectable } from "@nestjs/common";
import * as AWS from 'aws-sdk'
import { IS3Service } from "../port/s3-service.interface";

@Injectable()
export class S3Service implements IS3Service {
    s3 = new AWS.S3({
        accessKeyId: process.env.ACCESS_KEY_ID,
        secretAccessKey: process.env.SECRET_ACCESS_KEY,
        region: process.env.REGION
    })

    async uploadFile(fileParams: { file: Buffer, filename: string }): Promise<string> {
        const uploadedFile = await this.s3.upload({
            Body: fileParams.file,
            Bucket: process.env.BUCKET,
            Key: fileParams.filename+'.jpg'
        }).promise()
        return uploadedFile.Location
    }
}