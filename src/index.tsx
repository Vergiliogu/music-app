import React from 'react';
import { createRoot } from 'react-dom/client'
import GlobalStyle from './globalStyles'
import Router from './router';

const root = createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<>
		<Router />
		<GlobalStyle />
	</>
)
