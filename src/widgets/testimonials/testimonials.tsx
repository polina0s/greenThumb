import { TestimonialCard } from '../../components/testimonialCard';
import { Text } from '../../ui/text';
import classes from './testimonials.module.scss';

type Card = {
  imgSrc: string;
  title: string;
  name: string;
  id: string;
};

interface TestimonialsProps {
  cards: Card[];
}

export function Testimonials({ cards }: TestimonialsProps) {
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
