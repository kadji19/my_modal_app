import React from 'react'
import './modal.css';
import logo from '../assets/image/Capture d’écran 2023-05-25 193703.png'
import { useState } from 'react';


function ModalComp({Modal}) {
const [prix, setPrix] = useState (5000)
const incrementation= ()=>{
 setPrix(prix + 5000)
}
const decrementation= ()=>{
 setPrix(prix - 5000)
}

  return (
    <div>
            <div /* onClick={Modal} */ class="modal">
            <div class="modal-content">
                <span onClick={Modal} class="close">&times;</span>
                <div className='content'>
                    <div className='image'>
                      
                      <img src= {logo} alt="" />
                      
                      <p>Vue approximative</p>
                    </div>
                    <div className='border'>
                      <div><strong>section : 550</strong> </div>
                      <div>Rang 11</div>
                      <div>Place 1,2</div>
                      <div>Zone : Upper Reserve</div>
                      <p>Voir tout les billet de cette section</p>
                    </div>
                    <div className='border billet'>
                      <div>
                        <div><strong>prix du billet</strong></div>
                        <div><strong>16 $ </strong> chaque</div>
                      </div>
                      <div className='border'>
                        <p>
                          qualite
                        </p>2 billet
                        {/* <div>qualite</div>
                        <div>2 billet</div> */}
                      </div>
                    </div>
                    <div className='border'>
                        <div>Billet mobile</div>
                        <div>Vue degager</div>
                        <div>siege adjacent in row 11</div>
                    </div>

                    <div className='prix'>
                      <div>
                        <span onClick={decrementation} >-</span>
                        <span>prix</span>
                        <span onClick={incrementation}>+</span>
                      </div>
                      <p>somme {prix}</p>
                    </div>

                    <button> <box-icon name='mobile'></box-icon> Selectionner</button>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default ModalComp