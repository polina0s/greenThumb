import img from '../../assets/images/Rectangle 51.png';
import { TestimonialCard } from '../../components/testimonialCard';
import { Text } from '../../components/text';
import classes from './testimonials.module.scss';

const cards = [
  { imgSrc: img, title: 'Healthy, happy\nplants', name: 'Luisa', id: '1' },
  {
    imgSrc: img,
    title: 'Recommend to all my plant friends',
    name: 'Edoardo',
    id: '2',
  },
  {
    imgSrc: img,
    title: 'I turned my house into my dream jungle',
    name: 'Mart',
    id: '3',
  },
];

export function Testimonials() {
  return (
    <div className={classes.cont}>
      <div className={classes.headerCont}>
        <Text variant="poppinsMedium" className={classes.headerTitle}>
          Testimonials
        </Text>
        <Text variant="openSansSemiBold" className={classes.headerDesc}>
          Plant parents love us
        </Text>
      </div>
      <div className={classes.cards}>
        {cards.map((card) => {
          return (
            <TestimonialCard
              imgSrc={card.imgSrc}
              title={card.title}
              name={card.name}
              key={card.id}
            />
          );
        })}
      </div>
    </div>
  );
}
