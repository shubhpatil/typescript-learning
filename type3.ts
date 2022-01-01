type userType = {
  id: number;
  email: string;
  password: string;
};

// Extend User Type
type userSchema = userType & {
  username: string;
  phone: number;
  date: Date;
  isAdmin: boolean;
};
