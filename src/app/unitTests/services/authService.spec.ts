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

    describe('login', () => {
        it('check if login is failed and error is handled.', () => {
            const result = {status:400, error: 'login failed'};
            mockHttp.post.and.returnValue(of(result));

            authService.loginUser('ritesh','sharma').subscribe(d=> {
                expect(Object.values(result).toLocaleString()).toBe(Object.values(d).toLocaleString());
            });
        });

        it('check if login is successful and current user is set.', () => {
            const result = <IUser>{firstName: 'Ritesh', lastName: 'Sharma', id: 1, userName: 'Ritesh'};
            mockHttp.post.and.returnValue(of(result));

            authService.loginUser('ritesh','sharma').subscribe(d=> {
                expect(result.firstName).toBe(authService.currentUser.firstName);
                
            });
        });

        it('check if http is called while login.', () => {
            const result = <IUser>{firstName: 'Ritesh', lastName: 'Sharma', id: 1, userName: 'Ritesh'};
            mockHttp.post.and.returnValue(of(result));

            const loginInfo = {username: 'ritesh', password: 'sharma'};
            authService.loginUser('ritesh','sharma');

            expect(mockHttp.post).toHaveBeenCalledWith('/api/login', loginInfo, 
            jasmine.any(Object));
        });
    });

    describe('checkAuthenticationStatus', () => {
        it('checkAuthenticationStatus if http is called.', () => {
            const result = {firstName: 'Ritesh', lastName: 'Sharma', id: 1, userName: 'Ritesh'};
         
            mockHttp.get.and.returnValue(of(result));

            authService.checkAuthenticationStatus();

            expect(result.firstName).toBe(authService.currentUser.firstName);
            expect(mockHttp.get).toHaveBeenCalledWith('/api/currentIdentity');
        });
    });

    describe('updateUserProfile', () => {
        it('updateUserProfile if http is called.', () => {
            const result = {firstName: 'Ritesh', lastName: 'Sharma', id: 1, userName: 'Ritesh'};
         
            mockHttp.put.and.returnValue(of(result));

            authService.updateUserProfile('ritesh','sharma');

            expect(mockHttp.put).toHaveBeenCalledWith('/api/users/1', authService.currentUser, 
            jasmine.any(Object));
        });
    });
});