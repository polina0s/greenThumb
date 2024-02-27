import { CategoryCard } from '../../components/categoryCard';
import { SectionHeader } from '../../ui/sectionHeader';
import classes from './categories.module.scss';

type Card = {
  id: string;
  imgSrc: string;
  title: string;
};

interface CategoresProps {
  cards: Card[];
}

export function Categories({ cards }: CategoresProps) {
  return (
    <>
      <div className={classes.headerCont}>
        <SectionHeader
          firstWord="Shop&nbsp;"
          secondWord="by Categories"
          shopArticle={false}
        />
      </div>
      <div className={classes.cards}>
        {cards.map((card) => {
          return (
            <CategoryCard
              key={card.id}
              imgSrc={card.imgSrc}
              title={card.title}
            />
          );
        })}
      </div>
    </>
  );
}
