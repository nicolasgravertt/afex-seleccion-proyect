export type User = {
  username: string;
  password: string;
  accessToken?: string;
};

export interface Token {
  token: string;
}

export interface UserData {
  username: string;
  password: string;
}
