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
    

});