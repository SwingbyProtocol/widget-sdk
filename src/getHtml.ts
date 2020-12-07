import type { Widget } from './Widget';

export const getHtml = ({ iframe }: Widget) => iframe.outerHTML;
