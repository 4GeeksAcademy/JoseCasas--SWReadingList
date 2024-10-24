import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


export const Navbar = () => {
	const { store, actions } = useContext(Context)
	return (
		<nav className="navbar navbar-light bg-clear mb-3 container">
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

					{store.favs.map((fav, index) => {
						return (<li>{fav} <button className="btn" onClick={() => actions.removeFavs(fav)}> <i class="fa-solid fa-trash-can"></i> </button></li>)
					})}

				</ul>
			</div>
		</nav>
	);
};
