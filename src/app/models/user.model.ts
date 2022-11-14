export class User {
    iD: number;
    fullName: string;
    username: string;
    password: string;
    mobileNo: string;
    userType: string;

    constructor () {
        this.iD = 0;
        this.fullName = '';
        this.username = '';
        this.password = '';
        this.mobileNo = '';
        this.userType = '';
    }
}