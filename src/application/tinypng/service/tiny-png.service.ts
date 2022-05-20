import { Injectable } from "@nestjs/common";
import { ITinyPngService } from "../port/tiny-png-service.interface";
import * as tinify from 'tinify'

// @ts-ignore
tinify.key = '5kBXzKD316MBl32zGFSMkQTdL85qZpf7'

@Injectable()
export class TinyPngService implements ITinyPngService {
    async cropImage(imageBuffer) {
        const source = tinify.fromBuffer(imageBuffer)
        const resized = source.resize({
            method: 'fit',
            width: 70,
            height: 70
        })
        return resized.toBuffer()
    }
}