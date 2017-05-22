export class User {
  status: number;
  username: string;
  role: string;
  credentials: string;

  constructor(status, username, role, credentials) {
    this.status = status;
    this.username = username;
    this.role = role;
    this.credentials = credentials;
  }
}
