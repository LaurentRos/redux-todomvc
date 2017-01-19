import React from 'react';
import TestUtils from 'react-addons-test-utils';
import TodoList from '../../src/components/TodoList';
import TodoItem from '../../src/components/TodoItem';
import {expect} from 'chai';
import {List, Map} from 'immutable';

const {renderIntoDocument,
  scryRenderedDOMComponentsWithTag} = TestUtils;

  describe('TodoList', () => {
    it('renders a list with only the active items if the filter is active', () => {
      const todos = List.of(
        Map({id: 1, text: 'React', status: 'active'}),
        Map({id: 2, text: 'Redux', status: 'active'}),
        Map({id: 3, text: 'Immutable', status: 'completed'})
        );
      const filter = 'active';
      const component = renderIntoDocument(
        <TodoList filter={filter} todos={todos} />
        );
      const items = scryRenderedDOMComponentsWithTag(component, 'li');

      expect(items.length).to.equal(2);
      expect(items[0].textContent).to.contain('React');
      expect(items[1].textContent).to.contain('Redux');
    });

    it('renders a list with only completed items if the filter is completed', () => {
      const todos = List.of(
        Map({id: 1, text: 'React', status: 'active'}),
        Map({id: 2, text: 'Redux', status: 'active'}),
        Map({id: 3, text: 'Immutable', status: 'completed'})
        );
      const filter = 'completed';
      const component = renderIntoDocument(
        <TodoList filter={filter} todos={todos} />
        );
      const items = scryRenderedDOMComponentsWithTag(component, 'li');

      expect(items.length).to.equal(1);
      expect(items[0].textContent).to.contain('Immutable');
    });

    it('renders a list with all the items', () => {
      const todos = List.of(
        Map({id: 1, text: 'React', status: 'active'}),
        Map({id: 2, text: 'Redux', status: 'active'}),
        Map({id: 3, text: 'Immutable', status: 'completed'})
        );
      const filter = 'all';
      const component = renderIntoDocument(
        <TodoList filter={filter} todos={todos} />
        );
      const items = scryRenderedDOMComponentsWithTag(component, 'li');

      expect(items.length).to.equal(3);
      expect(items[0].textContent).to.contain('React');
      expect(items[1].textContent).to.contain('Redux');
      expect(items[2].textContent).to.contain('Immutable');
    });

    it('should be checked if the item is completed', () => {
      const text = 'React';
      const text2 = 'Redux';
      const component = renderIntoDocument(
        <TodoItem text={text} isCompleted={true}/>,
        <TodoItem text={text2} isCompleted={false}/>
        );
      const input = scryRenderedDOMComponentsWithTag(component, 'input');
      expect(input[0].checked).to.equal(true);
      expect(input[1].checked).to.equal(false);
    });

  });