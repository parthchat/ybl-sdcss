import { FormControl, ValidatorFn, AbstractControl, Validators } from '@angular/forms';

export class CustomValidators extends Validators {

    static shouldBeLessThanEqualToNumber(limitValue: string): ValidatorFn {
        return (control: AbstractControl): {[key: string]: any} | null => {

            if((parseFloat(control.value+'') <= parseFloat(limitValue))) {
                console.log("[CustomValidators] ", parseFloat(control.value+''), limitValue, true);
            } else {
                console.log("[CustomValidators] ", parseFloat(control.value+''), limitValue, false);
            }

            /******************************************
             * Value should be a number and should be
             * less than Input
            ******************************************/
            return ( !(isNaN(parseFloat(control.value))) && parseFloat(control.value+'') <= parseFloat(limitValue)) ? null: {
                shouldBeLessThanEqualToNumber: {
                    valid: false
                }
            };
        };
    }

    // static (limitValue: any): ValidatorFn {
    //     return 
    // static shouldBeLessThanEqualToNumber(control: AbstractControl): {[key: string]: any} | null {

    //     if((parseFloat(control.value+'') <= parseFloat(this.balance))) {
    //         console.log("[CustomValidators] ", parseFloat(control.value+''), this.balance, true);
    //     } else {
    //         console.log("[CustomValidators] ", parseFloat(control.value+''), this.balance, false);
    //     }
    //     return (parseFloat(control.value+'') <= parseFloat(this.balance)) ? null: {
    //         shouldBeLessThanEqualToNumber: {
    //             valid: false
    //         }
    //     };
    // }
    // }

    static shouldBeMultiplesOf100(control: AbstractControl): {[key: string]: any} | null {
        return ((parseFloat(control.value+'') % 100) == 0) ? null: {
            shouldBeMultiplesOf100: {
                valid: false
            }
        };
    }
}
