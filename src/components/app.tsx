import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import styles from './app.module.scss';

const queryClient = new QueryClient();

function MyButton({ title }: { title: string }) {
  return <button className={styles.aaa}>{title}</button>;
}

export function MyApp() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <h1>Welcome to my app</h1>
        <MyButton title="I'm a gghj" />
        <div>roboto</div>
      </div>
    </QueryClientProvider>
  );
}
