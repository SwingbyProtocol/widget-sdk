Small util to load Swingby's swap widget in your app.

## Quick start

### Installation

```bash
yarn add @swingby-protocol/widget @swingby-protocol/sdk
```

### Examples

```tsx
import { createWidget, openPopup } from '@swingby-protocol/widget';

const widget = createWidget({ mode: 'test', resource: 'swap', size: 'big' });
openPopup({ widget });
```

```tsx
import { createWidget, getHtml } from '@swingby-protocol/widget';

const widget = createWidget({ mode: 'test', resource: 'swap', size: 'banner' });
document.querySelector('#my-container').innerHTML = getHtml({ widget });
```

## Widget sizes

⚠️ Note that both the widget and this util use `rem` units.

|        | Height (assuming 1rem = 16px) |
| ------ | ----------------------------- |
| Banner | 76px                          |
| Small  | 375px                         |
| Big    | 510px                         |
