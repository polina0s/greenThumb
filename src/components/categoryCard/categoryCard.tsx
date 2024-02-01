import img from '../../assets/images/Rectangle 51.png';
import card from './categoryCard.module.scss';

interface CardProps {
  name: string;
}

export function CategoryCard({ name }: CardProps) {
  return (
    <div className={card.cont}>
      <div className={card.imgCont}>
        <img className={card.img} src={img} alt="" />
      </div>
      <p className={card.name}>{name}</p>
    </div>
  );
}
