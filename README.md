# React Stickyt

React Stickyt is just a HOC that wraps your components to let them stick to the `window`.

## Installation

```bash
yarn add react-stickyt
```

## Usage

Let's say you are writing the component `App`. You can write like this:

```js
import React from 'react';
import Sticky from 'react-stickyt';

const App = () => <div>
  ...
  <Sticky>
    <YourComponent/>
    Some text
  </Sticky>
  ...
</div>;

export default App;
```

## APIs
Pass a numberic `offset` prop in px to shift from the top the sticked content.