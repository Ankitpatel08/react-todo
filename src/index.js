import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

import { TodoContextProvider } from './context/TodoContext';

import App from './App';

const el = document.getElementById('root');

const root = ReactDOM.createRoot(el);

root.render(
    <div>
        <TodoContextProvider>
            <App />
        </TodoContextProvider>
    </div>
);