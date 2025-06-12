import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'


const speedColors = {
  0.5: 'linear-gradient(145deg, #f56565, #e53e3e)',
  1: 'linear-gradient(145deg, #4299e1, #3182ce)',
  2: 'linear-gradient(145deg, #48bb78, #38a169)',
}

const styles = {
  container: {
    width: '80vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto',
  },

  loadingBarEmpty: {
    width: '100%',
    height: '30px',
    background: 'linear-gradient(145deg,rgb(44, 45, 45),rgb(122, 123, 123))',
    borderRadius: '0.75rem',
    boxShadow: '0 4px 6px rgba(0,0,0,0.2)',
  },

  controls: {
    display: 'flex',
    gap: '10px',
    justifyContent: 'center',
    alignItems: 'center',
   
  }
}


function App() {
  const tweenRef = useRef(null)
  const [currentSpeed, setCurrentSpeed] = useState(1)
  
  
  const loadingBarFillStyle = {
    width: '100%',
    height: '30px',
    background: speedColors[currentSpeed],
    borderRadius: '0.75rem',
    boxShadow: '0 4px 6px rgba(0,0,0,0.2)',
    transition: 'all 0.3s ease',
  }

  useEffect(() => {
    tweenRef.current = gsap.fromTo('.loading-bar-fill', {
      width: '0%',
    }, {
      width: '100%',
      duration: 5,
      ease: 'power2.inOut',
      paused: true,
      timeScale: 1,
    })
  }, [])

  const play = () => {
    tweenRef.current?.play()
  }

  const pause = () => {
    tweenRef.current?.pause()
  }
  
  const reset = () => {
    tweenRef.current?.restart()
  }
  
  const reverse = () => {
    tweenRef.current?.reverse()
  }

  const speed05 = () => {
    tweenRef.current?.timeScale(0.5)
    setCurrentSpeed(0.5)
  }

  const speed1 = () => {
    tweenRef.current?.timeScale(1)
    setCurrentSpeed(1)
  }

  const speed2 = () => {
    tweenRef.current?.timeScale(2)
    setCurrentSpeed(2)
  }
  
  return (
    <>
      <div style={styles.container}>
        <div className="loading-bar-empty" style={styles.loadingBarEmpty}>
          <div className="loading-bar-fill" style={loadingBarFillStyle}></div>
        </div>

        <div className='play-controls' style={styles.controls}>
          <button id='play-button' className='play-button' onClick={play}>Play</button>
          <button id='pause-button' className='pause-button' onClick={pause}>Pause</button>
          <button id='reset-button' className='reset-button' onClick={reset}>Reset</button>
          <button id='reverse-button' className='reverse-button' onClick={reverse}>Reverse</button>
        </div>

        <div className='speed-controls' style={styles.controls}>
          <button id='speed-0.5' className='speed-0.5' onClick={speed05}>Speed 0.5</button>
          <button id='speed-1' className='speed-1' onClick={speed1}>Speed 1</button>
          <button id='speed-2' className='speed-2' onClick={speed2}>Speed 2</button>
         </div>

      </div>
    </>
  )
}

export default App
