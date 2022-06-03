import { FC } from "react";

interface Props {
  authenticate: () => void;
}

const Auth: FC<Props> = ({ authenticate }) => {
  return (
    <div>
      <h2>auth</h2>
      <form>
        <input type="text" name="email" required placeholder="email" />
        <input
          type="password"
          name="password"
          required
          placeholder="password"
        />
        <input type="checkbox" /> <a>stay signed in?</a>
        <button onClick={authenticate}> sign in</button>
      </form>
    </div>
  );
};

export default Auth;
