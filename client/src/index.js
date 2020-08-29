import React from 'react';
import { render } from 'react-dom';
import { hot } from 'react-hot-loader/root';

import Main from './pages/Main';

import './index.scss';

render(<Main/>, document.getElementById('app'));
const App = () => <Main />;
export default hot(App);
