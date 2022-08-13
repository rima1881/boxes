import data from './boxes'
import { useState } from 'react'
import Box from './components/Box'

export default function App(){

  const [ boxes,setBoxes ] = useState(data)


  const boxesElelments = boxes.map( box =>
    <Box 
        on={box.on} 
        key={box.id} 
        handleClick={() => switchBox(box.id)} 
      />
  )

  function switchBox(id){
    setBoxes(prevState =>
      prevState.map(box =>
          id===box.id ? {...box , on : !box.on} : box
        )
    )



  }

  return(
    <div>
      <h1>boxes</h1>
      <div className='container--boxes'>
        {boxesElelments}
      </div>

    </div>
  )
}