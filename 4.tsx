function TypeScript() {
  type ChildProps = {
    children: React.ReactNode;
    style?: React.CSSProperties;
  };

  const Box = ({ children, style }: ChildProps) => {
    return <section style={{ ...style }}>{children}</section>;
  };

  return (
    <Box>
      <h1>Hello World</h1>
      <p>Computer Science</p>
      <Box>
        <h2>Child 1</h2>
      </Box>
      <Box>
        <h2>Child 2</h2>
      </Box>
    </Box>
  );
}

export default TypeScript;
