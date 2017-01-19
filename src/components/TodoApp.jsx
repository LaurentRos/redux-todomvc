import React from 'react';
import TodoList from './TodoList'

export default class TodoApp extends React.Component {
  render() {
    return <div>
      <section className="todoapp">
        // We pass the filter props down to the TodoList component
        <TodoList todos={this.props.todos} filter={this.props.filter}/>
      </section>
    </div>
  }
};

// import React from 'react';

// export default class TodoApp extends React.Component {
//   getItems() {
//     return this.props.todos || [];
//   }
//   render() {
//     return <div>
//       <section className="todoapp">
//         <section className="main">
//           <ul className="todo-list">
//             {this.getItems().map(item =>
//               <li className="active" key={item.get('text')}>
//                 <div className="view">
//                   <input type="checkbox"
//                          className="toggle" />
//                   <label htmlFor="todo">
//                     {item.get('text')}
//                   </label>
//                   <button className="destroy"></button>
//                 </div>
//               </li>
//             )}
//           </ul>
//         </section>
//       </section>
//     </div>
//   }
// };