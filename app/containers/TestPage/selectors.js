import { createSelector } from 'reselect';

const selectHome = state => state.get('test');

const makeSelectChislo = () =>
    createSelector(selectHome, homeState => homeState.get('chislo'));

export { selectHome, makeSelectChislo };