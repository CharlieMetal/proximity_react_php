import React, { Component } from 'react';
import PropTypes from 'prop-types';
import assetsListComponent from '../components/assetsListComponent';

class homeContainer extends Component {
    render() {
        return (
            <assetsListComponent></assetsListComponent>
        );
    }
}

homeContainer.propTypes = {

};

export default homeContainer;