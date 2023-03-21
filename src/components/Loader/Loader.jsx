import React from 'react'
import loader from '../../assets/images/loading.gif';

const styleLoader= {
    position: 'absolute',
    top: '35%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
}
const styleImg = {
  width: '120px',
  height: '120px',
  objectFit: 'cover'
}
const Loader = () => {
  return (
    <div className='loader' style={{position: 'relative', width: '100%', height: '100vh'}}>
        <div className="loader__container" style={styleLoader}>
            <img src={loader} style={styleImg} alt="" />
        </div>
        
    </div>
  )
}

export default Loader