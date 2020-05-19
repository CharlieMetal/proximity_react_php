import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

class assetsListComponent extends Component {
    render() {
        return (
            <div>
                AssetsList
            </div>
        );
    }
}

assetsListComponent.propTypes = {

};
const mapStateToProps = (state /*, ownProps*/) => {
    return {
      var: state,
    }
};
  
const mapDispatchToProps = { };
  
export default connect(mapStateToProps, mapDispatchToProps)(assetsListComponent);