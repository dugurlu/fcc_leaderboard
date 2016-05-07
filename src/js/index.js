import React from 'react'
import ReactDOM from 'react-dom'

import LeaderTable from './components/Table'

const css = require('../css/style.scss');
const app = document.getElementById('app');


ReactDOM.render(<LeaderTable urlRecent="https://fcctop100.herokuapp.com/api/fccusers/top/recent" urlAlltime="https://fcctop100.herokuapp.com/api/fccusers/top/alltime" />, app);