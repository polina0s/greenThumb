import logo from './logo.module.scss';

export function Logo() {
  return (
    <p className={logo.text}>
      <span className={logo.greenText}>Green</span> Thumb
    </p>
  );
}
