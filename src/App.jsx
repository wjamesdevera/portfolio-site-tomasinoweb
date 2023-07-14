import styles from './style'

import { Navbar, Hero, Footer, FeaturedProject, Button } from './components'

const App = () => (
  <div className="bg-primary_tw w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar/>
        <Hero/>
        <div className="h-[600px] bg-secondary_tw rounded m-2"> </div>
        <div className="h-[600px] bg-secondary_tw rounded m-2"> </div>
        <div className="h-[600px] bg-secondary_tw rounded m-2"> </div>
        <div className="h-[600px] bg-secondary_tw rounded m-2"> </div>
        <div className="h-[600px] bg-secondary_tw rounded m-2"> </div>
      </div>
    </div>

  </div>
)

export default App