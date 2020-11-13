export class User {
  id?: string;
  username: string;
  password?: string;
  role: 'SUDO' | 'ADMIN' | 'JUDGE' | 'HACKER';
}

export class Login {
  token: string
  user: User
}