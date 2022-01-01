interface myInterface {
  email: string;
  password: string;
}

// Extend Interface
interface IUserInteface extends myInterface {
  id: number;
  username: string;
  phone: number;
  verified: boolean;
}
