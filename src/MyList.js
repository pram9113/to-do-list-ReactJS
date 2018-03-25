import React from 'react';
import PropTypes from 'prop-types';

class MyList extends React.Component {

    render () {

        return(
            <ul>
                {this.props.toDo.map((item, i) => {
                    return <li>{item} <button className="btn btn-danger btn-sm">&times;</button></li>
                }
                )
                }
            </ul>        
        );
    }
}

export default MyList;