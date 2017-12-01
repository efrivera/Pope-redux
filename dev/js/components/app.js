import React from 'react';
import MainHeader from '../containers/main-header.js'
import MainVoting from '../containers/main-voting.js';
import WelcomeBanner from '../containers/welcome-banner.js';
import Voting from '../containers/votings.js';
require('../../scss/style.scss');

const App = () => (
    <div>
        <MainHeader />
        <MainVoting />
        <WelcomeBanner />
        <h2>Votes</h2>
        <Voting />
    </div>
);

export default App;