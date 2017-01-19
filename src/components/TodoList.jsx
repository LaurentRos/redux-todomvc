import React from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends React.Component {
  render() {
    return <section className="main">
      <ul className="todo-list">
        {this.props.todos.map(item =>
          <TodoItem key={item.get('text')}
                    text={item.get('text')} />
        )}
      </ul>
    </section>
  }
};