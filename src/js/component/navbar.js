import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<img
						src="https://seeklogo.com/images/S/Star_Wars-logo-97DD55947B-seeklogo.com.png"
						alt="Star Wars Logo"
						className="mr-2"
						style={{ height: "60px" }} 
					/>
				</span>
			</Link>
			<div className="dropdown">
				<button className="btn btn-danger dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
					Favorites
				</button>
				<ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
					<li><a className="dropdown-item active" href="#">Action</a></li>

				</ul>
			</div>
		</nav>
	);
};
