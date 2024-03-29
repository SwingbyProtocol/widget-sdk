import type {
  SkybridgeBridge,
  SkybridgeCoin,
  SkybridgeMode,
  SkybridgeResource,
} from '@swingby-protocol/sdk';
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
  affiliateCode?: string;
  locale?: string;
  hash?: string;
  /** @default `auto` */
  theme?: 'light' | 'dark' | 'auto';
  primaryColor?: string;
  bridge?: SkybridgeBridge;
};

export const createWidget = <R extends SkybridgeResource, M extends SkybridgeMode>({
  resource,
  mode,
  iframeTitle = 'Skybridge Swap Widget',
  size,
  hash,
  theme = 'auto',
  locale,
  defaultCurrencyDeposit,
  defaultCurrencyReceiving,
  defaultAddressReceiving,
  defaultAmountDesired,
  affiliateCode,
  bridge,
}: Options<R, M>): Widget => {
  const url = stringifyUrl({
    url: 'https://widget.skybridge.exchange',
    query: {
      mode,
      resource,
      hash,
      locale,
      defaultCurrencyDeposit,
      defaultCurrencyReceiving,
      defaultAddressReceiving,
      defaultAmountDesired,
      theme,
      aff: affiliateCode,
      bridge,
    },
  });

  return {
    __sswi__url: url,
    __sswi__iframe: `<iframe allow="clipboard-write" title="${iframeTitle}" src="${url}" style="border: none; display: block; width: 100%; height: ${getHeight(
      { size },
    )};"></iframe>`,
  };
};
