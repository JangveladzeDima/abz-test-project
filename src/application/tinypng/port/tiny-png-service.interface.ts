export interface ITinyPngService {
    cropImage(imageBuffer: Buffer): Promise<Uint8Array>
}