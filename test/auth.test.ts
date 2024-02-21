import { AuthService } from './AuthService';

async function testAuth() {
  const service = new AuthService();
  const loginResult = await service.login('barosanu', 'OdOj8pog)');
  console.log(loginResult.getSignInUserSession().getIdToken().getJwtToken());
}

testAuth();
