// Generics
type LinkedList<T> = {
  value: T;
  next?: LinkedList<T>;
};

// Use Case 1
const firstNode: LinkedList<string> = {
  value: "first",
};

const secondNode: LinkedList<string> = {
  value: "second",
};

firstNode.next = secondNode;

// Use Case 2
function myFunction<T>(value: T): LinkedList<T> {
  return { value };
}

const node = myFunction("wow");
const anotherNode = myFunction(55);
