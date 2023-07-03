import logo from './logo.svg';
import './App.css';
import Button from './components/Button';

import { useState } from 'react';
import ModalComp from './components/ModalComp';

function App(Modal) {
  const [modal, setModal] = useState (true)
  Modal = ()=>{
    setModal(!modal)
  }
  return (
    <div >
            

      <Button Modal={Modal} />

      { modal && <ModalComp Modal={Modal} />}
      
    </div>
  );
}

export default App;
