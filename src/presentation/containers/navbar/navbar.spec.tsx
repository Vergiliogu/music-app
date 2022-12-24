import * as React from 'react';
import Navbar from "./navbar";
import {render, screen} from '../../../tests-utils/testing-library-utils'
import '@testing-library/jest-dom'

test('navbar should have the right tab options', () => {
	render(<Navbar />)

	const tabsName = ['Home', 'Explore', 'Playlists', 'Premium']

	expect(screen.getByRole('navigation').children).toHaveLength(4)

	expect(screen.getByRole('link', {name: tabsName[0]})).toHaveAttribute('href', '/')
	expect(screen.getByRole('link', {name: tabsName[1]})).toHaveAttribute('href', '/explore')
	expect(screen.getByRole('link', {name: tabsName[2]})).toHaveAttribute('href', '/playlists')
	expect(screen.getByRole('link', {name: tabsName[3]})).toHaveAttribute('href', '/premium')
})
