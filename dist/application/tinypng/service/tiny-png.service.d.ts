import { ITinyPngService } from "../port/tiny-png-service.interface";
export declare class TinyPngService implements ITinyPngService {
    cropImage(imageBuffer: any): Promise<Uint8Array>;
}
