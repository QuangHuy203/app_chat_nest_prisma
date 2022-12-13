import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import { ConfigService } from '@nestjs/config';

import { Injectable } from '@nestjs/common';


@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy) {

    constructor(config: ConfigService) {
        super({
            clientID: config.getOrThrow('GOOGLE_CLIENT_ID'),
            clientSecret: config.getOrThrow('GOOGLE_SECRET'),
            callbackURL: 'http://localhost:50000/auth/google/redirect',
            // callbackURL: `${config.getOrThrow('HOST')}:${config.getOrThrow('PORT')}/auth/google/redirect`
            scope: ['email', 'profile'],
        });
    }

    async validate(accessToken: string, refreshToken: string, profile: any, done: VerifyCallback): Promise<any> {
        const { name, emails, photos } = profile
        const user = {
            email: emails[0].value,
            firstName: name.givenName,
            lastName: name.familyName,
            picture: photos[0].value,
        }
        done(null, user);
    }
}