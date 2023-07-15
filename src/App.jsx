import styles from './style' 
import { Routes, Route } from 'react-router-dom'
import { Navbar, Footer } from './components'
import { Home, Projects } from './pages'

const App = () => (
  <div className="bg-primary_tw w-full overflow-hidden h-full">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth} text-neutral-600`}>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/projects' element={<Projects/>}/>
        </Routes>
      </div>
    </div>
    <Footer/>
  </div>
)

export default App