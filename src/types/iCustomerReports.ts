import {GenericObject} from "moleculer";

export namespace iCustomerReports {

    export interface CustomerReportsParamsBaseParams {
        customerId: number;
        employeeId: number;
        requestId: number;
        action: string;
        requestBaseTypeId: number;
        requestSecondTypeId: number;
        employee: string;
        position: string;
        department: string;
        comment?: string;
        request: object;
    }

    export interface CustomerReportsParamsBaseParamsCtx extends BaseCtx {
        params: {
            customerId: number;
            employeeId: number;
            requestId: number;
            action: string;
            requestBaseTypeId: number;
            requestSecondTypeId: number;
            employee: string;
            position: string;
            department: string;
            comment?: string;
            request: object;
        }
    }
    export interface CustomerReportsParamsGetParamsCtx extends BaseCtx {
        params: {
            customerId: string;
            requestBaseTypeId: string;
            requestSecondTypeId?: string;
        }
    }

    export interface BaseCtx {
        meta: { data: CustomerReportsParamsBaseParams };

        call<T, P extends GenericObject = GenericObject>(actionName: string, params?: P, opts?: GenericObject): PromiseLike<T>;
    }

    export interface CustomerReportsParams {
        customerId: number;
        employeeId: number;
        requestId: number;
        action: string;
        requestBaseTypeId: number;
        requestSecondTypeId: number;
        employee: string;
        position: string;
        department: string;
        comment?: string;
        request: object;
        createdAt: string;
    }
}
