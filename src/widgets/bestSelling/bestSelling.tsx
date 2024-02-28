import img from '../../assets/images/Rectangle 51.png';
import { BestSellCard } from '../../components/bestSellCard';
import { SectionHeader } from '../../ui/sectionHeader';
import classes from './bestSelling.module.scss';

const cards = [
  { imgSrc: img, title: 'Indoor Plants', id: '1' },
  { imgSrc: img, title: 'Air\u00A0Purifying Plants', id: '2' },
  { imgSrc: img, title: 'Flowering Plants', id: '3' },
];

export function BestSelling() {
  return (
    <>
      <div className={classes.headerCont}>
        <SectionHeader
          firstWord="Best&nbsp;"
          secondWord="Selling"
          shopArticle={true}
        />
      </div>
      <div className={classes.cards}>
        {cards.map((card) => {
          return (
            <BestSellCard
              title={card.title}
              imgSrc={card.imgSrc}
              key={card.id}
            />
          );
        })}
      </div>
    </>
  );
}
