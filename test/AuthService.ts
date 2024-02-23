import { type CognitoUser } from '@aws-amplify/auth';
import { Amplify, Auth } from 'aws-amplify';
import { CognitoIdentityClient } from '@aws-sdk/client-cognito-identity';
import { fromCognitoIdentityPool } from '@aws-sdk/credential-providers';

const awsRegion = 'eu-west-2';

Amplify.configure({
  Auth: {
    region: awsRegion,
    userPoolId: 'eu-west-2_DGZNO0od8',
    userPoolWebClientId: '1ah42dnj7j0ii1iadsh6sat1v1',
    identityPoolId: 'eu-west-2:de58c2c8-0f6f-4e44-b01d-ed57a1b3bc5a',
    authenticationFlowType: 'USER_PASSWORD_AUTH',
  },
});

export class AuthService {
  public async login(userName: string, password: string) {
    const result = (await Auth.signIn(userName, password)) as CognitoUser;
    return result;
  }

  public async generateTemporaryCredentials(user: CognitoUser) {
    const jwtToken = user.getSignInUserSession().getIdToken().getJwtToken();
    const cognitoIdentityPool = `cognito-idp.${awsRegion}.amazonaws.com/eu-west-2_DGZNO0od8`;
    const cognitoIdentity = new CognitoIdentityClient({
      credentials: fromCognitoIdentityPool({
        identityPoolId: 'eu-west-2:de58c2c8-0f6f-4e44-b01d-ed57a1b3bc5a',
        logins: { [cognitoIdentityPool]: jwtToken },
      }),
    });
    const credentials = await cognitoIdentity.config.credentials();
    return credentials;
  }
}
