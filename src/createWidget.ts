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
  defaultCurrencyDeposit?: SkybridgeCoin<R, M, 'in'>;
  defaultCurrencyReceiving?: SkybridgeCoin<R, M, 'out'>;
  defaultAddressReceiving?: string;
  defaultAmountDesired?: string;
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
  defaultCurrencyDeposit,
  defaultCurrencyReceiving,
  defaultAddressReceiving,
  defaultAmountDesired,
}: Options<R, M>): Widget => {
  const url = stringifyUrl({
    url: `https://widget.skybridge.exchange/${mode}/${resource}/${hash ?? 'new'}`,
    query: {
      defaultCurrencyDeposit,
      defaultCurrencyReceiving,
      defaultAddressReceiving,
      defaultAmountDesired,
      theme,
    },
  });

  return {
    __sswi__url: url,
    __sswi__iframe: `<iframe allow="clipboard-write" title="${iframeTitle}" src="${url}" style="border: none; display: block; width: 100%; height: ${getHeight(
      { size },
    )};"></iframe>`,
  };
};
