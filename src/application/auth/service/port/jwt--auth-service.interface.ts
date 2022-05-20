export interface IJwtAuthService {
    login(payload: { time: number }): Promise<{ access_token: string }>
}