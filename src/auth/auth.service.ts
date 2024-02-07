import { Injectable } from '@nestjs/common';
import { AuthPayloadDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';

const fakeUsers = [
    {
        id: 1,
        username: 'danny',
        password: 'password',
    },
    {
        id: 2,
        username: 'Tedz',
        password: 'Ken',
    },
]

@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService) {}

    validateUser({username, password}: AuthPayloadDto) {
        const findUser = fakeUsers.find((user) => user.username === username);
        if(!findUser) return null;
        if(password === findUser.password) {
            const {password, ...user} = findUser;
            return this.jwtService.sign(user);
        }
    }
}
