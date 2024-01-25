import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useEffect } from 'react';

import styles from './app.module.scss';
import Svg from './svg.svg';

const queryClient = new QueryClient();

function MyButton({ title }: { title: string }) {
  useEffect(() => {
    console.log(title);
  }, [title]);

  return <button className={styles.aaa}>{title}</button>;
}

export function MyApp() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <h1>Welcome to my app</h1>
        <MyButton title="I'm a gghj" />
        <Svg width={200} height={200} />
        <div>roboto</div>
        <div>public sans 500</div>
        <div>public sans 600</div>
        <div>poppins 400</div>
        <div>poppins 500</div>
        <div>poppins 600</div>
        <div>open sans 400</div>
        <div>open sans 500</div>
        <div>open sans 600</div>
      </div>
    </QueryClientProvider>
  );
}
