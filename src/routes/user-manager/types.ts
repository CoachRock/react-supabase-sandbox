export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  status: 'active' | 'invited';
  avatar?: string;
}