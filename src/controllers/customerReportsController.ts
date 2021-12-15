import {iCustomerReports} from "../types";
import {CustomerReports} from "../mongoDb/models";


class CustomerReportsController {
    public constructor() {
        this.findCustomerReports = this.findCustomerReports.bind(this);
        this.createCustomerReports = this.createCustomerReports.bind(this);
    }

    public async findCustomerReports(customerId: number, requestBaseTypeId: number, requestSecondTypeId?: number): Promise<iCustomerReports.CustomerReportsParams[]> {
        return CustomerReports.find({
            customerId: customerId,
            requestBaseTypeId: requestBaseTypeId,
            requestSecondTypeId: requestSecondTypeId
        });
    }

    public async createCustomerReports(data: iCustomerReports.CustomerReportsParamsBaseParams): Promise<iCustomerReports.CustomerReportsParams> {
        const {
            customerId,
            employeeId,
            requestId,
            action,
            requestBaseTypeId,
            requestSecondTypeId,
            employee,
            position,
            department,
            comment,
            request
        } = data;

        const query = {
            customerId: customerId,
            employeeId: employeeId,
            requestId: requestId,
            action: action,
            requestBaseTypeId: requestBaseTypeId,
            requestSecondTypeId: requestSecondTypeId,
            employee: employee,
            position: position,
            department: department,
            request: request,
        };

        if (comment) {
            query['comment'] = comment;
        }
        return CustomerReports.create(query);
    }
}

export default new CustomerReportsController();
