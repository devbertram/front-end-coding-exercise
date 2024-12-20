import React from 'react';
import NavBar from './pages';

export default function App(): React.ReactElement {
    return <div>
        <header className="Header">
            <img src="https://blueflag.com.au/assets/logos/blueflag-logo.svg" width="130" alt="logo" />
        </header>
        <main className="Main">
            <NavBar/>
        </main>
    </div>;
}