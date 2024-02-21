import { type CognitoUser } from '@aws-amplify/auth';
import { Amplify, Auth } from 'aws-amplify';

const awsRegion = 'eu-west-2';

Amplify.configure({
  Auth: {
    region: awsRegion,
    userPoolId: 'eu-west-2_DGZNO0od8',
    userPoolWebClientId: '1ah42dnj7j0ii1iadsh6sat1v1',
    authenticationFlowType: 'USER_PASSWORD_AUTH',
  },
});

export class AuthService {
  public async login(userName: string, password: string) {
    const result = (await Auth.signIn(userName, password)) as CognitoUser;
    return result;
  }
}
