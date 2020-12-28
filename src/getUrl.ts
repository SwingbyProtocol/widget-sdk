import type { Widget } from './Widget';

export const getUrl = ({ widget: { __sswi__url } }: { widget: Widget }) => __sswi__url;
