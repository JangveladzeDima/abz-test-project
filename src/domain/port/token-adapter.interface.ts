export interface ITokenAdapter {
    createToken(): Promise<string>
}