import type { Widget } from './Widget';

export const getUrl = ({ widget: { url } }: { widget: Widget }) => url;
