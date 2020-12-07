import type { Variant } from './Variant';

export const getHeight = ({ variant }: { variant: Variant }) => {
  switch (variant) {
    case 'banner':
      return `${76 / 16}rem`;
    case 'small':
      return `${375 / 16}rem`;
    case 'big':
      return `${510 / 16}rem`;
  }
};
