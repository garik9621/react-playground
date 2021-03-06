import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Page } from './components/Page/Page';
import { Main } from './pages/Main/Main';
import { Game } from './pages/Game/Game';
import { About } from './pages/About/About';
import { Routes, Route } from 'react-router-dom';

// TODO: account page
// TODO: light/night mode
// TODO: add server with DB

function App() {
	return (
		<div className="App">
			<Header />

			<Page>
				<Routes>
					<Route path="/">
						<Route index element={<Main />} />
						<Route path="game" element={<Game />} />
						<Route path="about" element={<About />} />
					</Route>
				</Routes>
			</Page>

			<Footer />
		</div>
	);
}

export default App;
