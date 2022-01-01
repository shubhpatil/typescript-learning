import { useState } from "react";

type appProps = {
  message: string;
};

function TypeScript() {
  const [message, setMessage] = useState<string | null>(null);

  const MessageBox = ({ message }: appProps) => {
    return <h1>{message}</h1>;
  };

  return <div>{message && <MessageBox message={message} />}</div>;
}

export default TypeScript;
