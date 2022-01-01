function TypeScript() {
  type childProps = {
    children: React.ReactNode;
  };

  const Box = ({ children }: childProps) => {
    return <div>{children}</div>;
  };

  return (
    <Box>
      <h1>Hello World</h1>
      <p>Computer Science</p>
      <Box>Child 1</Box>
      <Box>Child 2</Box>
    </Box>
  );
}

export default TypeScript;
