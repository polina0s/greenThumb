export type GetTestimonialsResponseData = {
  img: string;
  title: string;
  name: string;
  rating: number;
  id: number;
};

export type TestimonialsStore = {
  isLoading: boolean;
  testimonials: GetTestimonialsResponseData[];
};
