import { Injectable } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { Strategy } from 'passport-google-oauth20'
import { VerifiedCallback } from 'passport-jwt'

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
	constructor() {
		super({
			clientID: process.env.CLIEND_ID,
			clientSecret: process.env.CLIENT_SECRET,
			callbackURL: 'http://localhost:4000/auth/google/redirect',
			scope: ['email', 'profile', 'openid']
		})
	}

	async validate(
		accessToken: string,
		refreshToken: string,
		profile: any,
		done: VerifiedCallback
	): Promise<any> {
		const { name, emails, photos } = profile

		const user = {
			email: emails[0].value,
			firstName: name.givenName,
			lastName: name.familyName,
			picture: photos[0].value,
			locale: profile._json.locale,
			googleId: profile.id,
			refreshToken,
			accessToken
		}

		done(null, user)
	}
}
