import React from 'react';
import Proptypes from 'prop-types';

class MyForm extends React.Component {
    render () {
        return (
            <div>
                {this.props.error && <p>{this.props.error}</p>}
            </div>
        );
    }
}

MyForm.PropTypes = {
    error: Proptypes.string.isRequired
}

export default MyForm;
    