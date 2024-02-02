import title from './title.module.scss';

interface TitleProps {
  children: string;
}

export function Title({ children }: React.PropsWithChildren<TitleProps>) {
  return <p className={title.name}>{children}</p>;
}
