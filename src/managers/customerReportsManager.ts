import {iCustomerReports} from "../types";
import CustomerReportsController from "../controllers/customerReportsController";


class CustomerReportsManager {
    public constructor() {
        this.getCustomerReports = this.getCustomerReports.bind(this);
        this.createCustomerReportsByFields = this.createCustomerReportsByFields.bind(this);
    }

    public async getCustomerReports(data: iCustomerReports.CustomerReportsParamsGetParamsCtx): Promise<iCustomerReports.CustomerReportsParams[]> {
        let {customerId, requestBaseTypeId, requestSecondTypeId} = data.params;

        let customerIdInt = parseInt(customerId);
        let requestBaseTypeIdInt = parseInt(requestBaseTypeId);
        let requestSecondTypeIdInt = parseInt(requestSecondTypeId);

        if (!requestSecondTypeIdInt) {
            requestSecondTypeIdInt = 0;
        }

        return CustomerReportsController.findCustomerReports(customerIdInt, requestBaseTypeIdInt, requestSecondTypeIdInt);
    }

    public async createCustomerReportsByFields(data: iCustomerReports.CustomerReportsParamsBaseParamsCtx): Promise<{ message: string }> {
        await CustomerReportsController.createCustomerReports(data.params);
        return {message: "Log created successfully"}
    }
}

export default new CustomerReportsManager();
