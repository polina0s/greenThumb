function MyButton({ title }: { title: string }) {
  return <button>{title}</button>;
}

export function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton title="I'm a button" />
    </div>
  );
}
