export class AuthService {
  public async login(
    userName: string,
    password: string
  ): Promise<Object | undefined> {
    return {
      userName: 'userName',
    };
  }

  public getUserName() {
    return 'userName';
  }
}
