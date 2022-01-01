type appProps = {
  message: string;
};

const MyComponent = ({ message }: appProps) => {
  return <h1>{message}</h1>;
};

const TypeScript = () => <MyComponent message="Hello World" />;

export default TypeScript;
