import React from 'react';
import Proptypes from 'prop-types';

class MyButton extends React.Component {
    render () {
        return (
            <button type="submit" className="btn btn-warning">
                {this.props.buttonText}
            </button>
        );
    }
}

MyButton.defaultProps = {
    buttonColor: "red",
    ukuran: "kecil"
}

MyButton.PropTypes = {
    buttonText: Proptypes.string.isRequired
}

// how to delete button

export default MyButton;