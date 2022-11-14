export class EmployeeDesignation {
    sno: number;
    employeeId: string;
    designationName: string;
    roleName: string;
    departmentName: string;

    constructor() {
        this.sno = 0;
        this.employeeId = '';
        this.roleName = '';
        this.designationName = '';
        this.departmentName = '';
    }
}