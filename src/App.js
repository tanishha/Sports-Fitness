import React from 'react'
import { ToastContainer } from 'react-toastify';
import './App.css';
import AppRouting from './Components/app.routing';
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (<>
<AppRouting></AppRouting>
<ToastContainer/>
</>
);
}

export default App;
