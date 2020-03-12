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
    public static VALIDATION_ALPHANUMERIC = /^[a-zA-Z0-9]+$/;    //!~{}|[]^_;:?()*,-.=@#$
    public static VALIDATION_PASSWORD = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!~^_;:,-.=*#?|])[A-Za-z\\d@$!~^_;:,-.=*#?|]{1,}$";
    // public static VALIDATION_REGX_TEXTFIELD = /^[a-zA-Z0-9 ,'.\-''_""()\/&[\]]+$/;
    public static VALIDATION_REGX_TEXTFIELD = /^[a-zA-Z0-9 ,.\-_#@]+$/;
    public static VALIDATION_REGX_NUMBER = /^[0-9]+$/;
    public static VALIDATION_REGX_STD_NUMBER = /^[1-9][0-9]*$/;
    public static Validation_letters_only = /^[A-Za-z]+$/
    public static Aadhar_number_validation = /^\d{12}$/;
    public static VALIDATION_REGX_PAN_NUMBER = /[A-Za-z]{5}\d{4}[A-Za-z]{1}/;
    //                                        1st digit 2-to-9 and after that it can be 0 to 9  
    public static VALIDATION_REGEX_LANDLINE_NUMBER  = /^[1-9][0-9]/;
    public static VALIDATION_REGX_EMAIL = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
}

export module APIConstants {
    export enum Auth_init_otp {
        PROCESS_ID = '5166f5ee89d511e9b12c2eca4ea5bb5f',
        WORKFLOW_ID = '90dc3ec288f511e9b12c2eca4ea5bb5f',
    }

    export enum Auth_reinit_otp {
        PROCESS_ID = 'e2fc2278ad3311e9b432da7aa4ddfb2b',
        WORKFLOW_ID = '90dc3ec288f511e9b12c2eca4ea5bb5f',
    }

    export enum Auth_valid_otp {
        PROCESS_ID = 'aa58b77089d811e9b12c2eca4ea5bb5f',
        WORKFLOW_ID = '90dc3ec288f511e9b12c2eca4ea5bb5f',
    }
    
    //Create SR
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
    export enum validate_logins {
        PROCESS_ID = 'aa58b77089d811e9b12c2eca4ea5bb5f',
        WORKFLOW_ID = '90dc3ec288f511e9b12c2eca4ea5bb5f'
    }
    // taken from ccsp
    export enum re_init {
        PROCESS_ID = 'e2fc2278ad3311e9b432da7aa4ddfb2b',
        WORKFLOW_ID = '90dc3ec288f511e9b12c2eca4ea5bb5f'
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

    export enum getAccountDetails {
        PROCESS_ID = '59cf14ec09d611eabda88a71c4611c6d',
        WORKFLOW_ID = '30a6167e09d611eabda88a71c4611c6d',
    }

    export enum updateSR {
        PROCESS_ID = '1c860420884811e9b16676fb2f2488b6',
        WORKFLOW_ID = '1c676c2c884811e9b16676fb2f2488b6'
    }

    //Get profile LOV's
    export enum GetProfileLOVs {
        PROCESS_ID = '0e140aec226011eab0227a84d450ed6d',
        WORKFLOW_ID = 'bd905b30892011e9b12c2eca4ea5bb5f'
    }

    export enum SaveProfileData{
        PROCESS_ID = 'f59c01c65d3411eaa9456adcd8a925ce',
        WORKFLOW_ID = 'a89134cc56e611eaa5393af528466045'
    }

    export enum CaptureCustomerData{
        PROCESS_ID = '1940052a8ce111e99cd6ba3d751df4e5',
        WORKFLOW_ID = '0de4c8e68ce111e99cd6ba3d751df4e5'
    }

    export enum GetProfileData{
        PROCESS_ID = 'ff1599825eb111ea98b76adcd8a925ce',
        WORKFLOW_ID = 'fefa558c5eb111ea82796adcd8a925ce'
    }
}

export class AlertMessages {
    public static SOMETHING_WRONG = 'Something went wrong, Please try again shortly.';
    public static SERVER_ERROR = 'Server error, Please try again shortly.';
    public static SESSION_EXPIRED = 'Current session expired due to either logged in on different session or session timeout.';
    public static SESSION_LOGOUT = 'Logout Successfully';
    public static MANDATORY_FIELDS_ALERT = 'Please fill all the mandatory fields.';
    public static NA_BANK_MSG = 'Not available in the Bank records';
    public static invalid_Credentials = 'Invalid Credentials';
    public static resend_OTP_success = 'OTP has been sent';
    public static REQUIRED_FIELD_MSG = 'This field is required.';
}