import styles from './style' 
import 'bootstrap/dist/css/bootstrap.css';
import { Routes, Route } from 'react-router-dom'
import { Navbar, Footer } from './components'
import { Home, Projects, About } from './pages'

const App = () => (
  <div className="bg-primary_tw w-full overflow-hidden min-h-[100vh] flex flex-col">
    <div className={`${styles.paddingX} ${styles.flexCenter} grow`}>
      <div className={`${styles.boxWidth} text-neutral-600`}>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </div>
    </div>
    <Footer className="shrink-0"></Footer>
  </div>
)

export default App