import img from '../../assets/images/Rectangle 51.png';
import { CatalogCard } from '../../components/catalogCard';
import { SectionHeader } from '../../ui/sectionHeader';
import classes from './hottest.module.scss';

const cards = [
  { title: 'Marble Queen', price: 350, imgSrc: img, id: '1' },
  { title: 'Neon Pothos', price: 350, imgSrc: img, id: '2' },
  { title: 'Syngonium Rayii', price: 350, imgSrc: img, id: '3' },
  { title: 'Peruvian Cactus', price: 350, imgSrc: img, id: '4' },
  { title: 'Pineapple', price: 350, imgSrc: img, id: '5' },
  { title: 'African Milk Tree', price: 350, imgSrc: img, id: '6' },
  { title: 'Pothos', price: 350, imgSrc: img, id: '7' },
  { title: 'Chinese Evergreen', price: 350, imgSrc: img, id: '8' },
];

export function Hottest() {
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
