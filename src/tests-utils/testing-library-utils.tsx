import React from 'react'
import {render, RenderResult} from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import '@testing-library/jest-dom'

type WrappedRenderProps = (
	ui: React.ReactElement,
	options?: {},
) => RenderResult

const renderWithContext: WrappedRenderProps = (ui, options) =>
	render(ui, { wrapper: BrowserRouter, ...options })

export * from '@testing-library/react'
export {renderWithContext as render}