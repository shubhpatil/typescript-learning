type item = {
  id: number;
  title: string;
};

type Combination = {
  Item: item;
  Items: item[];
};

type Hash = {
  [key: string]: string;
};
