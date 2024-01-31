import logo from './logo.module.scss';

export function Logo() {
  return (
    <div className={logo.cont}>
      <p className={logo.text}>
        <span className={logo.greenText}>Green</span> Thumb
      </p>
    </div>
  );
}
