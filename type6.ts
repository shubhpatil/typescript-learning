type userType = {
  id: number;
  email: string;
  password: string;
};

//  EXCLUDE
type excludeType1 = Exclude<1 | 2 | 3, 2>; // Output: 1 | 3
type excludeType2 = Exclude<1 | "a" | 2 | "b", number>; // Output: "a" | "b"

// EXTRACT ~ Opposite of Exclude
type extractType1 = Extract<1 | 2 | 3, 2>; // Output: 2
type extractType2 = Extract<1 | "a" | 2 | "b", number>; // Output: 1 | 2

// OMIT ~ Leave ou particular properties
type omitType = Omit<userType, "id">;
/* Output:
type omitType = { 
    email: string; 
    password: string; 
}
*/
