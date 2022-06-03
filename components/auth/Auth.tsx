import { FC } from "react";

interface Props {
  authenticate: () => void;
}

const Auth: FC<Props> = ({ authenticate }) => {
  return (
    <div>
      <h2>auth</h2>
      <button onClick={authenticate}> sign in</button>
    </div>
  );
};

export default Auth;
