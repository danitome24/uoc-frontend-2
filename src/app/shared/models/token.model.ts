import { User } from './user.model';

export class Token {
  public userId: number;
  public roles: string[];

  constructor(user: User) {
    this.userId = user.id;
    this.roles = user.roles;
  }

  public toString(): string {
    return JSON.stringify(this);
  }
}
