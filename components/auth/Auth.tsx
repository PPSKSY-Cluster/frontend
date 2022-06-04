import { FC } from "react";
import styles from "../../styles/Home.module.css";

interface Props {
  authenticate: () => void;
}

const Auth: FC<Props> = ({ authenticate }) => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h2 className={styles.title}>Cluster Thruster</h2>
        <h2>Sign In</h2>
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
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Auth;
