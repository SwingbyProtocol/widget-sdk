import type { Size } from './Size';

export const getHeight = ({ size }: { size: Size }) => {
  switch (size) {
    case 'banner':
      return `${76 / 16}rem`;
    case 'small':
      return `${375 / 16}rem`;
    case 'big':
      return `${510 / 16}rem`;
  }
};
