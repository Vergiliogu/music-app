import React from 'react';
import { createRoot } from 'react-dom/client'
import GlobalStyle from './styles/globalStyles'
import Router from './routes/router';

const root = createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<>
		<Router />
		<GlobalStyle />
	</>
)
