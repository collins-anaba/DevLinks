import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom'

export default class Example extends React.Component {
constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
    collapsed: true
    };
}

toggleNavbar() {
    this.setState({
    collapsed: !this.state.collapsed
    });
}


render() {
    return (
    <div>
        <Navbar color="faded" light>
        <NavbarBrand href="/" className="mr-auto nav"><span style={{ color: '#F8E60B'}}>DEV</span> LINKS</NavbarBrand>
        <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
        <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar id='navItems'>
            <NavItem >
                {/* link to client dashboard by id ie /client-dashboard/9034890483 */}
                <Link to='/client-dashboard'>Dashboard</Link>
            </NavItem>
            <NavItem >
                <Link to='/jobListings'>Job Listings</Link>
            </NavItem>
            <NavItem>
                <Link to='/step1'>Add Jobs</Link>
            </NavItem>
            <NavItem>
                <Link to='/chat'>Chat</Link>
            </NavItem>
            </Nav>
        </Collapse>
        </Navbar>
    </div>
    );
}
}

// module.exports = {
//     toggleNavbar
// }