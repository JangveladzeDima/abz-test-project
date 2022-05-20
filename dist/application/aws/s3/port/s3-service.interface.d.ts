/// <reference types="node" />
export interface IS3Service {
    uploadFile(fileParams: {
        file: Buffer;
        filename: string;
    }): Promise<string>;
}
