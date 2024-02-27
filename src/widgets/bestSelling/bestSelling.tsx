import { BestSellCard } from '../../components/bestSellCard';
import { SectionHeader } from '../../ui/sectionHeader';
import classes from './bestSelling.module.scss';

type Card = {
  id: string;
  imgSrc: string;
  title: string;
};

interface BestSelingProps {
  cards: Card[];
}

export function BestSelling({ cards }: BestSelingProps) {
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
