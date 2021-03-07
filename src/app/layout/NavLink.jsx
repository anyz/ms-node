import React from "react";
import {Link} from "react-router-dom";
import * as PropTypes from "prop-types";

const NavLink = (props) => {
    const {
        title,
        link,
        active
    } = props;

    return (
        <li role="presentation" className={active ? "active" : ""}><Link to={link}>{title}</Link></li>
    );
};

NavLink.propTypes = {
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    active: PropTypes.bool
};

NavLink.defaultProps = {
    active: false
};

export default NavLink;