type userProps = {
  name: string; // String

  age: number; // Integer

  isMarried: boolean; // Boolean

  hobbies: string[]; // Array of String

  address: {
    building: string;
    room: number;
    state: string;
    pincode: number;
  }; // Object

  education: object; // Object

  parents: {
    name: string;
    relation: string;
    age: number;
  }[]; // Array of Objects

  gender: "male" | "female"; // Either 1 option

  salary?: number; // Optional Prop

  function: Function; // Function

  onClick: () => void; // Function

  something: any; // Any Type
};
