import promo from './promo.module.scss';

export function Promo({ title }: { title: string }) {
  return (
    <div className={promo.promo}>
      <div className={promo.cont}>
        <div className={promo.section} />
        <p className={promo.title}>{title}</p>
        <div className={promo.section}>
          <div className={promo.info}>
            <p className={promo.currency}>USD</p>
            <a className={promo.supportLink} href="#">
              Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
