// import Close from '../../assets/images/close.svg';
import { Carousel } from '../carousel';
import { Modal } from '../modal/modal';
// import classes from './modalImageGallery.module.scss';

export type Image = {
  src?: string;
  alt?: string;
  id: number;
};

interface ModalImageGalleryProps {
  open: boolean;
  handleClose: () => void;
  images: Image[];
}

export function ModalImageGallery({
  open,
  handleClose,
  images,
}: ModalImageGalleryProps) {
  return (
    <Modal open={open} handleClose={handleClose}>
      <Carousel images={images} />
    </Modal>
  );
}
