import img from '../../assets/images/Rectangle 51.png';
import { SaleCard } from '../../components/saleCard';
import { SectionHeader } from '../../components/sectionHeader';
import classes from './ferntastic.module.scss';

const cards = [
  {
    id: '1',
    saleValue: 25,
    title: 'String of Hearts',
    newPrice: 350,
    oldPrice: 450,
    imgSrc: img,
  },
  {
    id: '2',
    saleValue: 25,
    title: 'Red Secret Alocasia',
    newPrice: 350,
    oldPrice: 450,
    imgSrc: img,
  },
  {
    id: '3',
    saleValue: 25,
    title: 'Jewel Alocasia',
    newPrice: 350,
    oldPrice: 450,
    imgSrc: img,
  },
  {
    id: '4',
    saleValue: 25,
    title: 'Hoya Retusa',
    newPrice: 350,
    oldPrice: 450,
    imgSrc: img,
  },
];

export function Ferntastic() {
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
