export type GetTestimonialsResponseData = {
  img: string;
  title: string;
  name: string;
  id: number;
};

export type TestimonialsStore = {
  isLoading: boolean;
  testimonials: GetTestimonialsResponseData[];
};
