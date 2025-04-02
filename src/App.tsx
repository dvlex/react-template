import { useState } from 'react'
import './App.css'
import { Button } from './components/ui/button'
import ExampleTable from './components/comp-469'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-5xl my-2'>Lexdrel React Template</h1>
      <p className='my-2'>Count: {count}</p>
      <Button className='me-2' onClick={() => setCount(count + 1)}>Add</Button>
      <Button className='me-2' onClick={() => setCount(count - 1)}>Substract</Button>
      <ExampleTable />
    </>
  )
}

export default App
