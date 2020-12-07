import type { Widget } from './Widget';

let popupContainer: HTMLDivElement | null = null;

export const closePopup = () => {
  if (!popupContainer) return;
  popupContainer.remove();
  popupContainer = null;
};

export const openPopup = ({ widget, zIndex = 9000 }: { widget: Widget; zIndex?: number }) => {
  if (typeof document === 'undefined') return;
  if (popupContainer) return;
  popupContainer = document.createElement('div');
  popupContainer.setAttribute(
    'style',
    `background: #1c232f33; position: fixed; width: 100vw; height: 100vh; top: 0; left: 0; display: flex; align-items: center; justify-content: center; z-index: ${zIndex};`,
  );
  popupContainer.addEventListener('click', closePopup);

  const box = document.createElement('div');
  box.setAttribute(
    'style',
    `background: transparent; max-width: ${
      445 / 16
    }rem; width: 100%; box-shadow: 0px 50px 78px -10px rgba(43, 55, 74, 0.152644); border-radius: 14px; overflow: hidden;`,
  );
  box.innerHTML = widget.iframe;

  popupContainer.appendChild(box);

  document.body.appendChild(popupContainer);
};
