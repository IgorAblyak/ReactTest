import React from 'react';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { connect } from 'react-redux';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import reducer from './reducer';

import { makeSelectChislo } from './selectors';

import { makeMinusAction, makePlusAction } from './actions';

import saga from './saga';

class TestPage extends React.Component {
    onMakeMinusClick = () => {
        this.props.onMakeMinus();
    }

    onMakePlusClick = () => {
        this.props.onMakePlus();
    }

    render() {
        return (
            <div>
                <span>{this.props.chislo}</span>
                <button onClick={this.onMakePlusClick}>plus</button>
                <button onClick={this.onMakeMinusClick}>minus</button>
            </div>
        )
    }
}


const withReducer = injectReducer({ key: 'test', reducer });
const withSaga = injectSaga({ key: 'test', saga });


const mapStateToProps = createStructuredSelector({
    chislo: makeSelectChislo(),
});

export function mapDispatchToProps(dispatch) {
    return {
        onMakeMinus: () => dispatch(makeMinusAction()),
        onMakePlus: () => dispatch(makePlusAction()),
    };
}

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
);

export default compose(
    withReducer,
    withSaga,
    withConnect
)(TestPage);