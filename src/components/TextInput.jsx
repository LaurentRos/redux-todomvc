import React from 'react';

export default class TextInput extends React.Component {
  render() {
    return <input className="edit"
                  autoFocus={true}
                  type="text" />
  }
};