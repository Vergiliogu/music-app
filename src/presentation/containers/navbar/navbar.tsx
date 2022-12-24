import * as React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div>
			<div>
				<nav>
					<Link to='/'>Home</Link>
					<Link to='/explore'>Explore</Link>
					<Link to='/playlists'>Playlists</Link>
					<Link to='/premium'>Premium</Link>
				</nav>
			</div>
			<div>
				<Outlet />
			</div>
		</div>
	);
}
 
export default Navbar;
