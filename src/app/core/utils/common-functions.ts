import { Injectable } from "@angular/core";
import { Router } from '@angular/router';
import { TokenStorage } from '../services/auth/token-storage.service';

@Injectable()
export class CommonFunctions {
    constructor(private tokenStorage: TokenStorage, private router: Router){}

    showErrorPage() {
        this.tokenStorage.clear();
        this.router.navigate(['error']);
    }
}
