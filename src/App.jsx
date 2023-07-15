import styles from './style'

import { Navbar, Hero, Footer, FeaturedProject, Button, Particle } from './components'

const App = () => (
  <div className="bg-primary_tw w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth} text-neutral-600`}>
        <Navbar/>
        <Hero/>
        <Particle/>
        <FeaturedProject/>
      </div>
    </div>
    <Footer/>
  </div>
)

export default App