export class User {
  id: number;
  status: number;
  username: string;
  role: string;
  credentials: string;
  token: string;

  constructor(id, status, username, role, credentials) {
    this.id = id;
    this.status = status;
    this.username = username;
    this.role = role;
    this.credentials = credentials;
  }
}
