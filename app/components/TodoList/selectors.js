import { createSelector } from 'reselect';

const selectTodo = state => state.get('todo');

const makeSelectArray = () =>
    createSelector(selectTodo, todoState => todoState.get('array'));

const makeSelectInputValue = () =>
    createSelector(selectTodo, todoState => todoState.get('inputValue'));

export { selectTodo, makeSelectArray, makeSelectInputValue };