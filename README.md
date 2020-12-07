Easily load Swingby's swap widget in your app.

## Quick start

### Installation

```bash
yarn add @swingby-protocol/widget @swingby-protocol/sdk
```

### Examples

```tsx
import { createWidget, openPopup } from '@swingby-protocol/widget';

const widget = createWidget({ mode: 'test', variant: 'banner' });
openPopup({ widget });
```

```tsx
import { createWidget, getHtml } from '@swingby-protocol/widget';

const widget = createWidget({ mode: 'test', variant: 'banner' });
document.querySelector('#my-container').innerHTML = getHtml({ widget });
```
