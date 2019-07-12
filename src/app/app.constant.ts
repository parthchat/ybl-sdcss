export class Constants {
    public static BLANK = '';
    public static USER_INFO = 'iuo';
    public static DBOARD_TYPE = 'dboardType';
    public static ACCESS_TOKEN = 'ian';
    public static BEARER_TOKEN = 'ibn';
    public static RETURN_URL = 'rul';
    public static ROUTES = 'rts';
    public static SESSION_ID = 'ssid';
    public static SR_ID = "srid";
    public static PROJECT_ID = 'ff0ae4a6884711e9b16676fb2f2488b6';
    public static PARAM_DATA = 'prms';
    public static InterceptorSkipHeader = 'X-Skip-Interceptor';
}
  
export module APIConstants {
    export enum Auth_init_otp {
        PROCESS_ID = '5166f5ee89d511e9b12c2eca4ea5bb5f',
        WORKFLOW_ID = '90dc3ec288f511e9b12c2eca4ea5bb5f',
    }

    export enum Auth_valid_otp {
        PROCESS_ID = 'aa58b77089d811e9b12c2eca4ea5bb5f',
        WORKFLOW_ID = '90dc3ec288f511e9b12c2eca4ea5bb5f',
    }
    
    export enum Details {
        WORKFLOW_ID = '06b4889a8b4711e9b12c2eca4ea5bb5f',
        PROCESS_ID = '06d837a48b4711e9b12c2eca4ea5bb5f',
    }

    export enum SrType {
        WORKFLOW_ID = 'a9e581be8ea711e9bc050221a44a8414',
        PROCESS_ID = 'd2f10a428ea711e9bc050221a44a8414',
    }
    export enum Accept {
        WORKFLOW_ID = '0de4c8e68ce111e99cd6ba3d751df4e5',
        PROCESS_ID = '1940052a8ce111e99cd6ba3d751df4e5',
    }
    export enum Reject {
        WORKFLOW_ID = '9736f64a90ca11e9bc050221a44a8414',
        PROCESS_ID = 'ae78876a90ca11e9bc050221a44a8414',
    }

    export enum Auth_init_email {
        PROCESS_ID = '0e8b77d8999b11e9abea8e9e63ab42a5',
        WORKFLOW_ID = '2995dd5e998a11e9abea8e9e63ab42a5',
    }

    export enum Auth_valid_email {
        PROCESS_ID = '29c9614c998a11e9abea8e9e63ab42a5',
        WORKFLOW_ID = '2995dd5e998a11e9abea8e9e63ab42a5',
    }

    export enum Auth_init_mobile {
        PROCESS_ID = '1d8cc41898d711e983a02642e3160d7b',
        WORKFLOW_ID = '14f6fbde98d711e983a02642e3160d7b',
    }

    export enum Auth_valid_mobile {
        PROCESS_ID = '32885f96999d11e9abea8e9e63ab42a5',
        WORKFLOW_ID = '14f6fbde98d711e983a02642e3160d7b',
    }

    export enum CompleteSR {
        PROCESS_ID = '4d94c438998811e9abea8e9e63ab42a5',
        WORKFLOW_ID = '41b5e566998811e9abea8e9e63ab42a5',
    }
}

export class AlertMessages {
    public static SOMETHING_WRONG = 'Something went wrong, Please try again shortly.';
    public static SERVER_ERROR = 'Server error, Please try again shortly.';
    public static SESSION_EXPIRED = 'Current session expired due to either logged in on different session or session timeout.';
    public static SESSION_LOGOUT = 'Logout Successfully';
    public static MANDATORY_FIELDS_ALERT = 'Please fill all the mandatory fields.';
}