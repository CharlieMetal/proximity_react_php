import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import HeaderComponent from './../components/HeaderComponent';
import AssetsListComponent from '../components/AssetsListComponent';
import FooterComponent from './../components/FooterComponent';

class homeContainer extends Component {
    render() {
        return (
            <div>
                <HeaderComponent></HeaderComponent>
                <AssetsListComponent></AssetsListComponent>
                <FooterComponent></FooterComponent>
            </div>
        );
    }
}

homeContainer.propTypes = {

};

export default connect({}, {})(homeContainer);