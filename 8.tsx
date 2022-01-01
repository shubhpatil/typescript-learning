import { useState } from "react";

function TypeScript() {
  const [email, setEmail] = useState<string>("");

  const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  return (
    <div>
      <input type="email" name="email" onChange={onChangeEmail} />
      <h1>{email}</h1>
    </div>
  );
}

export default TypeScript;
