import type { Widget } from './Widget';

export const getHtml = ({ widget: { iframe } }: { widget: Widget }) => iframe;
