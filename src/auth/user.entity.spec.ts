import * as bcrypt from 'bcrypt';
import {User} from './user.entity';

describe('User entity', () => {
    let user: User;
    beforeEach(() => {
        user = new User();
        user.salt = 'test';
        user.password = 'testPassword';
        bcrypt.hash = jest.fn();
    });
    describe('validatePassword', () => {
        it('returns true as password is valid', async () => {
            bcrypt.hash.mockReturnValue('testPassword');
            expect(bcrypt.hash).not.toHaveBeenCalled();
            const result = await user.validatePassword('123456');
            expect(bcrypt.hash).toHaveBeenCalledWith('123456', 'test');
            expect(result).toEqual(true);
        });
        it('returns false as password is invalid', async () => {
            bcrypt.hash.mockReturnValue('another');
            expect(bcrypt.hash).not.toHaveBeenCalled();
            const result = await user.validatePassword('another');
            expect(bcrypt.hash).toHaveBeenCalledWith('123456', 'test');
            expect(result).toEqual(false);
        });
    });
});
