import classes from './box.module.scss';

export function Box({ children }: React.PropsWithChildren) {
  return <div className={classes.cont}>{children}</div>;
}
