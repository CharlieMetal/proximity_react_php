import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import HeaderComponent from '../components/HeaderComponent';
import AssetsListComponent from '../components/AssetsListComponent';
import FooterComponent from '../components/FooterComponent';

import { fetchAssets } from '../actions/fetchAssets';
import { getAssets } from '../selectors/getAssets';
import { urlAssets } from './../api/urls';



class HomeContainer extends Component {
    componentDidMount(){
        this.props.fetchAssets();
        console.log(this.props.assets); 
    }
    render() {
        return (
            <div>
                <HeaderComponent></HeaderComponent>
                <AssetsListComponent url={urlAssets} assets={this.props.assets}></AssetsListComponent>
                <FooterComponent></FooterComponent>
            </div>
        );
    }
}

HomeContainer.propTypes = {
    fetchAssets: PropTypes.func.isRequired,
    assets: PropTypes.array.isRequired,
};

HomeContainer.defaultProps = {
    assets: []
}
const mapStateToProps = state => ({
    assets: getAssets(state)
});

export default connect(mapStateToProps, {fetchAssets})(HomeContainer);