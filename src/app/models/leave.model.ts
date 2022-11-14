export class Leave {
    sno: number;
    employeeId: string;
    leaveType: string;
    fromDate: Date;
    toDate: Date;
    noOfDays: number;
    reason: string;

    constructor() {
        this.sno = 0;
        this.employeeId = '';
        this.leaveType = '';
        this.fromDate = new Date();
        this.toDate = new Date();
        this.noOfDays = 0;
        this.reason = '';
    }
}