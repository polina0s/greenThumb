import { SaleCard } from '../../components/saleCard';
import { SectionHeader } from '../../ui/sectionHeader';
import classes from './ferntastic.module.scss';

type Card = {
  id: string;
  saleValue: number;
  title: string;
  newPrice: number;
  oldPrice: number;
  imgSrc: string;
};

interface FerntasticProps {
  cards: Card[];
}

export function Ferntastic({ cards }: FerntasticProps) {
  return (
    <>
      <div className={classes.headerCont}>
        <SectionHeader
          firstWord="Ferntastic&nbsp;"
          secondWord="Deals"
          shopArticle={false}
        />
      </div>
      <div className={classes.cards}>
        {cards.map((card) => {
          return (
            <SaleCard
              saleValue={card.saleValue}
              title={card.title}
              newPrice={card.newPrice}
              oldPrice={card.oldPrice}
              imgSrc={card.imgSrc}
              key={card.id}
            />
          );
        })}
      </div>
    </>
  );
}
