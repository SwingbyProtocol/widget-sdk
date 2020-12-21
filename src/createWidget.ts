import type { SkybridgeCoin, SkybridgeMode, SkybridgeResource } from '@swingby-protocol/sdk';
import { stringifyUrl } from 'query-string';

import type { Size } from './Size';
import type { Widget } from './Widget';
import { getHeight } from './getHeight';

type Options<R extends SkybridgeResource, M extends SkybridgeMode> = {
  resource: R;
  mode: M;
  size: Size;
  iframeTitle?: string;
  defaultCurrencyIn?: SkybridgeCoin<R, M, 'in'>;
  defaultCurrencyOut?: SkybridgeCoin<R, M, 'out'>;
  defaultAddressUserIn?: string;
  defaultAmountUser?: string;
  hash?: string;
  /** @default `auto` */
  theme?: 'light' | 'dark' | 'auto';
  primaryColor?: string;
};

export const createWidget = <R extends SkybridgeResource, M extends SkybridgeMode>({
  resource,
  mode,
  iframeTitle = 'Skybridge Swap Widget',
  size,
  hash,
  theme = 'auto',
  primaryColor,
  defaultCurrencyIn,
  defaultCurrencyOut,
  defaultAddressUserIn,
  defaultAmountUser,
}: Options<R, M>): Widget => {
  const url = stringifyUrl({
    url: `https://widget-seven.vercel.app/${mode}/${resource}/${hash ?? 'new'}`,
    query: {
      defaultCurrencyIn,
      defaultCurrencyOut,
      defaultAddressUserIn,
      defaultAmountUser,
      theme,
      primaryColor,
    },
  });

  return {
    __sswi__url: url,
    __sswi__iframe: `<iframe title="${iframeTitle}" src="${url}" style="border: none; display: block; width: 100%; height: ${getHeight(
      { size },
    )};"></iframe>`,
  };
};
