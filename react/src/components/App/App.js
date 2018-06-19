import Board from '../../containers/Board'
import Web from '../../containers/Web'
import Score from '../../containers/Score'
import GameOver from '../../containers/GameOver'
import Nav from '../../components/Nav/Nav'
import React from 'react'
import './App.css'

const App = () => (
    <div>
        <Nav/>
        <GameOver/>
        <Score/>
        <Web/>
        <Board/>
    </div>
);

export default App;