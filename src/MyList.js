import React from 'react';
import PropTypes from 'prop-types';

class MyList extends React.Component {

    render () {
        
        return(
            <ul>
                {this.props.toDo.map((items, i) => {
                    return <li>
                        {items} <button onClick={e=> {
                            this.props.onItemDelete(items, i);
                        }} className="btn btn-danger btn-sm">&times;
                        </button>
                    </li>
                }
                )
                }
            </ul>        
        );
    }
}

MyList.PropTypes = {
    onItemDelete: PropTypes.func.isRequired
}
export default MyList;