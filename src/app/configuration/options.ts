export class Settings {
  server_url: string;
  server_port: string;
  url: string;
  constructor() {
    this.server_url = 'http://127.0.0.1';
    this.server_port = '27022';
    this.url = this.server_url + ':' + this.server_port;
  }
}
