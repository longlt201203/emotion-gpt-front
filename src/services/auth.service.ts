import LoginBasicRequest from "@/types/request/login-basic.request";
import Service from "./service";
import LoginBasicResponse from "@/types/response/login-basic.response";

export default class AuthService extends Service {
    private static instance: AuthService;
    static getInstance() {
        if (!this.instance) this.instance = new AuthService();
        return this.instance;
    }

    private readonly LOGIN_BASIC_ENDPOINT = '/login-basic';
    private readonly GET_PROFILE_ENDPOINT = '/profile'

    constructor() {
        super("/api/auth");
    }

    async loginBasic(dto: LoginBasicRequest) {
        const uri = this.getApiUri(this.LOGIN_BASIC_ENDPOINT);
        return await this.post<LoginBasicResponse>(uri.toString(), dto);
    }

    async getProfile() {
        const uri = this.getApiUri(this.GET_PROFILE_ENDPOINT);
        return await this.get(uri.toString(), {
            headers: {
                Authorization: `${Service.AuthScheme} ${Service.Token}`
            }
        })
    }
}