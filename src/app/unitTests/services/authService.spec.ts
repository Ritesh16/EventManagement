import { analyzeAndValidateNgModules } from "@angular/compiler";
import { of } from "rxjs";
import { IUser } from "src/app/_models/user.model";
import { AuthService } from "src/app/_services/auth.service";

describe('authService', () => {
    let authService: AuthService;
    let mockHttp;
    let user;

    beforeEach(() => {
        user = <IUser> { id: 1, firstName: 'dummy', lastName: 'dummy', userName: 'userName'};
        mockHttp = jasmine.createSpyObj('mockHttp', ['get', 'post', 'put']);
        authService = new AuthService(mockHttp);
        authService.currentUser = user;
    });

    describe('isAuthenticated', () => {
        it('if user is not there return false.', () => {
            authService.currentUser = undefined;
            const result = authService.isAuthenticated();

            expect(result).toBe(false);
        });

        it('if user is there return true.', () => {
            const result = authService.isAuthenticated();
            expect(result).toBe(true);
        });
    });


    describe('logout', () => {
        it('check if logout was done.', () => {
            authService.logout();
            expect(authService.currentUser).toBe(undefined);
            expect(mockHttp.post).toHaveBeenCalledWith('/api/logout', {}, 
                    jasmine.any(Object));
        });
    });

    // describe('login', () => {
    //     it('check if login is failed and error is handled.', () => {
    //         const result = {status:400, error: 'login failed'};
    //         mockHttp.post.and.returnValue(of(result));

    //         authService.loginUser('ritesh','sharma').subscribe(d=> {
    //             expect(400).toBe(<number>d.status);
    //         });
    //     });
    // });
});