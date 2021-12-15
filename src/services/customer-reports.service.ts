import { Service } from "moleculer";
const DbService = require("moleculer-db");
const MongooseAdapter = require("moleculer-db-adapter-mongoose");

import config from "../config";
import {CustomerReports} from "../mongoDb/models";
import CustomerReportsManager from "../managers/customerReportsManager"
import ACTIONS from "./../config/constants/actions"

class CustomerReportsService extends Service {
    constructor(broker) {
        super(broker);
        this.customerReportsManager = CustomerReportsManager;
        this.parseServiceSchema({
            name: "customerReports",
            version: "v1",
            mixins: [DbService],
            adapter: new MongooseAdapter(config.MONGO_DB_CONNECTION_URL),
            model: CustomerReports,
            actions: {
                getCustomerReports: {
                    params: {
                        customerId: {type: "string", optional: false, empty: false},
                        requestBaseTypeId: {type: "string", optional: false, empty: false},
                        requestSecondTypeId: {type: "string", optional: false, empty: false},
                    },
                    handler: this.customerReportsManager.getCustomerReports,
                },
                createCustomerReportsByFields: {
                    params: {
                        customerId: {type: "number", optional: false, empty: false},
                        requestBaseTypeId: {type: "number", optional: false, empty: false},
                        requestSecondTypeId: {type: "number", optional: true, empty: false},
                        employeeId: {type: "number", optional: false, empty: false},
                        requestId: {type: "number", optional: false, empty: false},
                        action: {type: "enum", values: [...Object.values(ACTIONS)], optional: false, empty: false},
                        employee: {type: "string", optional: false, empty: false},
                        position: {type: "string", optional: false, empty: false},
                        department: {type: "string", optional: false, empty: false},
                        comment: {type: "string", optional: true, empty: false},
                        request: {type: "object", optional: false, empty: false},
                    },
                    handler: this.customerReportsManager.createCustomerReportsByFields,
                },
            },
        });
    }
}

export = CustomerReportsService;
