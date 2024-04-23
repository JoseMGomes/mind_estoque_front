interface User {
    id: number;
    name: string;
    email: string;
  }
  
  interface TokenResponse {
    user: User;
    token: string;
  }