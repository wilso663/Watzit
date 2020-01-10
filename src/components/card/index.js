import React from 'react';
import PropTypes from 'prop-types';

import './styles.css'

export default function Card({handleClick, id, type, flipped, height, width, disabled, solved})
{
  return( 
    <div className={`flip-container ${flipped ? 'flipped' : ''}`}
         style={{
           width, height
         }}
         onClick={() => disabled ? null : handleClick(id)}
    >
        <div className='flipper'>
          <img 
            alt="Memory Game Card"
            style={{
              height, width
            }}
            className={flipped ? 'front' : 'back'}
            src={flipped || solved ? `/img/${type}.png` : `/img/node-js.png` }
          />
        </div>
      
    </div>
    )
}

Card.propTypes = {
  disabled: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  flipped: PropTypes.bool.isRequired,
  solved: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired
}