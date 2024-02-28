import { CatalogCard } from '../../components/catalogCard';
import { SectionHeader } from '../../ui/sectionHeader';
import classes from './hottest.module.scss';

type Card = {
  id: string;
  imgSrc: string;
  title: string;
  price: number;
};

interface HottestProps {
  cards: Card[];
}

export function Hottest({ cards }: HottestProps) {
  return (
    <div className={classes.cont}>
      <div className={classes.headerCont}>
        <SectionHeader
          firstWord="Hottest&nbsp;"
          secondWord="Plants"
          shopArticle={true}
        />
      </div>
      <div className={classes.cards}>
        {cards.map((card) => {
          return (
            <CatalogCard
              title={card.title}
              price={card.price}
              imgSrc={card.imgSrc}
              key={card.id}
            />
          );
        })}
      </div>
    </div>
  );
}
