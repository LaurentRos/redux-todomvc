import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'

export default class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {
    // ...
  }
};

// import React from 'react';

// export default class TextInput extends React.Component {
//   render() {
//     return <input className="edit"
//                   autoFocus={true}
//                   type="text" />
//   }
// };