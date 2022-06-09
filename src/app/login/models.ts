export interface Credentials {
  email: string;
  password: string;
}

export type Status = 'initial' | 'pending' | 'success' | 'error';

export type Mode = 'signin' | 'signup';
