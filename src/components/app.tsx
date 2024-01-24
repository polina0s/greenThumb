import styles from './app.module.scss';

function MyButton({ title }: { title: string }) {
  return <button className={styles.aaa}>{title}</button>;
}

export function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton title="I'm a gghj" />
    </div>
  );
}
