import img from '../../assets/images/Rectangle 51.png';
import { CategoryCard } from '../../components/categoryCard';
import { SectionHeader } from '../../components/sectionHeader';
import classes from './categories.module.scss';

const cards = [
  { imgSrc: img, title: 'bonsai', id: '1' },
  { imgSrc: img, title: 'bonsai', id: '2' },
  { imgSrc: img, title: 'bonsai', id: '3' },
  { imgSrc: img, title: 'bonsai', id: '4' },
  { imgSrc: img, title: 'bonsai', id: '5' },
  { imgSrc: img, title: 'bonsai', id: '6' },
];

export function Categories() {
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
