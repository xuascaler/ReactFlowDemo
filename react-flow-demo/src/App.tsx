import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Cluster from './Cluster'
import NewNode from './NewNode'

const App = () => {
  return (
    <div>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newnode" element={<NewNode />} />
        <Route path="/cluster" element={<Cluster />} />
      </Routes>
    </div>
  )
}

export default App
