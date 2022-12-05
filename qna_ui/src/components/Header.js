import PropTypes from 'prop-types';

const header_footer_styles = { backgroundColor: "#1744bf", textAlign: "center", color: "white", width: "100%", height: "10vh", fontSize: "1.2rem", display: "flex", justifyContent: "center", alignItems: "center" };

const Header = ({ title }) => {
    return(
        <header><h1 style={header_footer_styles}>{title}</h1></header>
    )
}

Header.defaultProps = {
    title: "Hello from React"
}

Header.propTypes = {
    title: PropTypes.string
}

export default Header;