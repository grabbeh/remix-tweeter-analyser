import type { MetaFunction } from '@remix-run/node'
import React from 'react'
import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration
} from '@remix-run/react'
import styles from './styles/app.css'

export const meta: MetaFunction = () => {
	return { title: 'Todo app' }
}

export function links() {
	return [
		{
			rel: 'preload',
			as: 'font',
			href: '/fonts/inter-v8-latin-regular.woff2',
			type: 'font/woff2',
			crossOrigin: 'anonymous'
		},
		{ rel: 'stylesheet', href: styles }
	]
}

export default function App() {
	return (
		<html lang='en'>
			<head>
				<meta charSet='utf-8' />
				<meta name='viewport' content='width=device-width,initial-scale=1' />
				<Meta />
				<Links />
			</head>
			<body style={{ fontFamily: 'Inter' }}>
				<Outlet />
				<ScrollRestoration />
				<Scripts />
				{process.env.NODE_ENV === 'development' && <LiveReload />}
			</body>
		</html>
	)
}
