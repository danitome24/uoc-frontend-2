export class Token {
  private static studentRole = 'student';
  private static companyRole = 'company';
  public userId: number;
  public roles: string[];

  constructor(userId: number, roles: string[]) {
    this.userId = userId;
    this.roles = roles;
  }

  public toString(): string {
    return JSON.stringify(this);
  }

  public hasStudentRole(): boolean {
    return (Token.studentRole === this.roles.find(role => role === Token.studentRole));
  }

  public hasCompanyRole(): boolean {
    return (Token.companyRole === this.roles.find(role => role === Token.companyRole));
  }
}
