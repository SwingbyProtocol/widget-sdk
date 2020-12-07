import type { Coin, Mode } from '@swingby-protocol/sdk';
import { stringifyUrl } from 'query-string';

import type { Variant } from './Variant';
import type { Widget } from './Widget';
import { getHeight } from './getHeight';

type Options<M extends Mode> = {
  mode: M;
  variant: Variant;
  iframeTitle?: string;
  defaultCurrencyIn?: Coin<M>;
  defaultCurrencyOut?: Coin<M>;
  defaultAddressUserIn?: string;
};

export const createWidget = <M extends Mode>({
  mode,
  iframeTitle = 'Swingby Swap Widget',
  variant,
  defaultCurrencyIn,
  defaultCurrencyOut,
  defaultAddressUserIn,
}: Options<M>): Widget => {
  const iframe = document.createElement('iframe');
  iframe.title = iframeTitle;
  iframe.src = stringifyUrl({
    url: `https://widget-seven.vercel.app/${mode === 'test' ? 'test/' : ''}swap/new`,
    query: {
      defaultCurrencyIn,
      defaultCurrencyOut,
      defaultAddressUserIn,
    },
  });
  iframe.setAttribute(
    'style',
    `border: none; display: block; width: 100%; height: ${getHeight({ variant })};`,
  );

  return { iframe };
};
