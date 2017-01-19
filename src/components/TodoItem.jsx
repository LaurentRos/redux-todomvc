import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import classNames from 'classnames';
import TextInput from './TextInput';

export default class TodoItem extends React.Component {
  render() {
    var itemClass = classNames({
      'todo': true,
      'completed': this.props.isCompleted,
      'editing': this.props.isEditing
    });
    return <li className={itemClass}>
      <div className="view">
        // We add an onClick handler on the checkbox
        <input type="checkbox"
               className="toggle"
               defaultChecked={this.props.isCompleted}
               onClick={() => this.props.toggleComplete(this.props.id)}/>
        // We add a ref attribute to the label to facilitate the testing
        // The onDoubleClick handler is unsurprisingly called on double clicks
        <label htmlFor="todo"
               ref="text"
               onDoubleClick={() => this.props.editItem(this.props.id)}>>
          {this.props.text}
        </label>
        // The onClick handler will call the deleteItem function given in the props
        <button className="destroy"
                onClick={() => this.props.deleteItem(this.props.id)}></button>
      </div>
      <TextInput /> // We add the TextInput component
    </li>
  }
};