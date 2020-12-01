import { Coin, Mode } from '@swingby-protocol/sdk';

type Variant = 'banner' | 'small' | 'big';

type Options<M extends Mode> = {
  mode: M;
  variant: Variant;
  iframeTitle?: string;
  defaultCurrencyIn?: Coin<M>;
  defaultCurrencyOut?: Coin<M>;
  defaultAddressUserIn?: string;
};

const getHeight = ({ variant }: { variant: Variant }) => {
  switch (variant) {
    case 'banner':
      return `${76 / 16}rem`;
    case 'small':
      return `${375 / 16}rem`;
    case 'big':
      return `${510 / 16}rem`;
  }
};

let popupContainer: HTMLDivElement | null = null;

export const SwapWidget = <M extends Mode>({
  variant,
  iframeTitle = 'Swingby Skybridge Swap',
}: Options<M>) => {
  const iframe = document.createElement('iframe');
  iframe.title = iframeTitle;
  iframe.src = 'https://widget-seven.vercel.app/swap/new';
  iframe.setAttribute(
    'style',
    `border: none; display: block; width: 100%; height: ${getHeight({ variant })};`,
  );

  const close = () => {
    if (!popupContainer) return;
    popupContainer.remove();
    popupContainer = null;
  };

  return {
    open: () => {
      if (popupContainer) return;
      popupContainer = document.createElement('div');
      popupContainer.setAttribute(
        'style',
        'background: #1c232f33; position: fixed; width: 100vw; height: 100vh; top: 0; left: 0; display: flex; align-items: center; justify-content: center;',
      );
      popupContainer.addEventListener('click', close);

      const box = document.createElement('div');
      box.setAttribute(
        'style',
        `background: transparent; max-width: ${445 /
          16}rem; width: 100%; box-shadow: 0px 50px 78px -10px rgba(43, 55, 74, 0.152644); border-radius: 14px; overflow: hidden;`,
      );
      box.appendChild(iframe);

      popupContainer.appendChild(box);

      document.body.appendChild(popupContainer);
    },
    close,
    getHtml: () => iframe.outerHTML,
  };
};
