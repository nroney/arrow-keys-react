# Special Keys React

This based on leon-good-life's [arrow-keys-react](https://github.com/leon-good-life/arrow-keys-react)

Easily integrate your react component with keyboard arrow keys, with the same configuration used in [swipe-react](https://github.com/leon-good-life/swipe-react) and [wheel-react](https://github.com/leon-good-life/wheel-react) packages.

# Usage
1. Install the npm package:
```bash
    npm install --save special-keys-react
```
2. Import it:
```javascript
    import SpecialKeysReact from 'special-keys-react';
```
3. Config arrow keys events ('left', 'right', 'up', 'down', 'backspace'), at least one of them, in your component constructor, or in render function:
```javascript
    SpecialKeysReact.config({
      left: () => {
        console.log('left key detected.');
      },
      right: () => {
        console.log('right key detected.');
      },
      up: () => {
        console.log('up key detected.');
      },
      down: () => {
        console.log('down key detected.');
      },
      backspace: () => {
        console.log('backspace detected')
      }
    });
```

4. Integrate with your React component:
```javascript
  <YourComponent {...SpecialKeysReact.events} />
```

# Example
```jsx
import React, { Component } from 'react';
import SpecialKeysReact from 'special-keys-react';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      content: 'Use arrow keys on your keyboard!'
    };
    SpecialKeysReact.config({
      left: () => {
        this.setState({
          content: 'left key detected.'
        });
      },
      right: () => {
        this.setState({
          content: 'right key detected.'
        });
      },
      up: () => {
        this.setState({
          content: 'up key detected.'
        });
      },
      down: () => {
        this.setState({
          content: 'down key detected.'
        });
      },
      backspace: () => {
        this.setState({
           content: 'down key detected.'
        });
      }
    });
  }
  render() {
    return (
      <div {...SpecialKeysReact.events} tabIndex="1">
        {this.state.content}
      </div>
    );
  }
}

export default App;

```
### Remarks
* When you use `div`, add `tabIndex` property.
* The element must be on focus in order to detect arrow keys. The arrow keys will be detected when the user will click on the element, or focus it using `tab` key in the keyboard. Alterntively you can program your component to `focus()` when it loaded. 
* `ArrowKeysReact.config` can be placed in `render` function instead of in the `constuctor` function.
