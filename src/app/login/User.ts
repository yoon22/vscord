export class User {
    uiId: string
    uiPwd: string
    uiAge: number
    uiAddress: string
    uiPhone: string

    constructor() {
    }
    doLogin(us: User): boolean {
        return false;
    }
}