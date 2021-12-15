import mongoose, { Schema } from "mongoose";
import {iCustomerReports} from "../../types";

import CustomerReportsParams = iCustomerReports.CustomerReportsParams;
import ACTIONS from "./../../config/constants/actions";

const CustomerReportsSchema: Schema = new Schema({
    customerId: {
        type: Number,
        required: true,
    },
    employeeId: {
        type: Number,
        required: true,
    },
    requestId: {
        type: Number,
        required: true,
    },
    action: {
        type: String,
        required: true,
        enum: [...Object.values(ACTIONS)]
    },
    requestBaseTypeId: {
        type: Number,
        required: true,
    },
    requestSecondTypeId: {
        type: Number,
        required: true,
        default: 0
    },
    employee: {
        type: String,
        required: true,
    },
    position: {
        type: String,
        required: true,
    },
    department: {
        type: String,
        required: true,
    },
    comment: {
        type: String,
        required: false,
    },
    request: {
        type: Object,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});
CustomerReportsSchema.index({customerId: 1,requestBaseTypeId:1,requestSecondTypeId:1}, {background: true});

const CustomerReports = mongoose.model<CustomerReportsParams>("customer_reports", CustomerReportsSchema);
export default CustomerReports;
