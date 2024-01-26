import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Cat from '../assets/images/cat.jpeg';
import styles from './app.module.scss';
import Svg from './svg.svg';

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
        <Svg width={200} height={200} />
        <div>roboto</div>
        <img src={Cat} alt="" />
      </div>
    </QueryClientProvider>
  );
}
