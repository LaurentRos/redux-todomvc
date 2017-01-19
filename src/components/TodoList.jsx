import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import TodoItem from './TodoItem';

export default class TodoList extends React.Component {
  // Filters the items according to their status
  getItems() {
    if (this.props.todos) {
      return this.props.todos.filter(
        (item) => this.props.filter === 'all' || item.get('status') === this.props.filter
      );
    }
    return [];
  }
  render() {
    return <section className="main">
      <ul className="todo-list">
        // Only the filtered items are displayed
        {this.getItems().map(item =>
          <TodoItem key={item.get('text')}
                    text={item.get('text')} />
        )}
      </ul>
    </section>
  }
};

// export default class TodoList extends React.Component {
//   constructor(props) {
//     super(props);
//     this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
//   }
//   render() {
//     return <section className="main">
//       <ul className="todo-list">
//         {this.props.todos.map(item =>
//           <TodoItem key={item.get('text')}
//                     text={item.get('text')} />
//         )}
//       </ul>
//     </section>
//   }
// };