import Newspage from './components/news/newspage/Newspage'
import { Route, Routes } from 'react-router-dom'
import { About } from './components/school/about/About.jsx'

import Bosses from './components/school/bosses/Bosses.jsx'
import Structure from './components/school/structure/Structure.jsx'
import Edu from './components/edu/Edu.jsx'
import Homepage from './Homepage'
import { useAuthStore } from './store/auth.store'
import Course from './components/courses/course-page/Course'
import Stuffs from './components/stuffs/Stuffs'
import OtherStuffs from './components/other-stuffs/OtherStuffs'
import Gallery from './components/gallery/Gallery'
import Photos from './components/photos/Photos'
import VideoGallery from './components/videogallery/VideoGallery'
import Videos from './components/videos/Videos'
import YangiliklarPage from './components/yangiliklar/YangiliklarPage'
const App = () => {

  return (
    <>    
      <Routes>
            <Route path='/' element={<Homepage />} />    
            <Route path='/maktab/maktab-haqida/' element={<About />} />    
            <Route path='/maktab/rahbariyat/' element={<Bosses />} />
            <Route path='/maktab/maktab-tuzilmasi/' element={<Structure />} />
            <Route path='/yangiliklar' element={<YangiliklarPage />} />
            <Route path='/talim-yonalishlari/' element={<Edu />} />
            <Route path={`/axborot-xizmati/yangiliklar/*`} element={<Newspage />} />
            <Route path={`/talim-yonalishlari/:userId`} element={<Course />} />
            <Route path={`/faoliyat/togarak-rahbarlari/`} element={<Stuffs />} />
            <Route path={`/faoliyat/boshqa-xodimlar/`} element={<OtherStuffs />} />
            <Route path={`/axborot-xizmati/fotogalereya/`} element={<Gallery />} />
            <Route path={`/axborot-xizmati/videogalereya/`} element={<VideoGallery />} />
            <Route path={`/axborot-xizmati/fotogalereya/:id`} element={<Photos />} />
            <Route path={`/axborot-xizmati/videogalereya/:id`} element={<Videos />} />
      </Routes> 
    </>
  )
}

export default App