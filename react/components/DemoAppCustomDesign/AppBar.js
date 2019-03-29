import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

function AppBar(props) {
    return (
        <div className="appBar">
            {props.children}
        </div>
    );
}
AppBar.propTypes = {
};
export default AppBar;