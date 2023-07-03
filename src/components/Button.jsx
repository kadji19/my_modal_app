import React from 'react'
import './button.css'

function Button({Modal}) {
  return (
    <div>
        <div className='container'>
            <div className='row'>
                <div className='vu'>Vu recemment</div>
                <div className='section'>
                    <div >
                        <div>
                            <strong>section&nbsp;550 <span> | Rang 6</span></strong>
                        </div>
                        <p>billet 2 <br />
                        Vue degager
                        </p>
                        <p></p>
                    </div>
                    <div>
                        <div><strong>16 $</strong></div>
                        <p>chaque</p>
                    </div>
                </div>
                <div className='btn'><button onClick={Modal} >Selectionner</button></div>
            </div>
        </div>
    </div>
  )
}

export default Button