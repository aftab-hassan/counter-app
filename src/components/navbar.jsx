import React, { Component } from 'react';

// No destructuring
// const NavBar = (props) => {
//     return ( 
//         <nav className="navbar navbar-light bg-light">
//             <a className="navbar-brand" href="#">Navbar</a>
//             <span className="badge badge-pill badge-secondary">
//             {props.counters.length}
//             </span>
//         </nav>
//  );
// }

//Makes sense destructuring
const NavBar = (props) => {
    const {counters} = props
    return ( 
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <span className="badge badge-pill badge-secondary">
            {counters.length}
            </span>
        </nav>
 );
}

// Too much destructuring
// const NavBar = ({counters}) => {
//     return ( 
//         <nav className="navbar navbar-light bg-light">
//             <a className="navbar-brand" href="#">Navbar</a>
//             <span className="badge badge-pill badge-secondary">
//             {counters.length}
//             </span>
//         </nav>
//  );
// }

// class NavBar extends Component {
//     state = {  }
//     render() { 
//         return ( 
//                 <nav className="navbar navbar-light bg-light">
//                     <a className="navbar-brand" href="#">Navbar</a>
//                     <span className="badge badge-pill badge-secondary">
//                     {this.props.counters.length}
//                     </span>
//                 </nav>
//          );
//     }
// }
 
export default NavBar;