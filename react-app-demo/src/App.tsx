import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages'
import AlbumDetailsPage from './pages/album-details'
import Albums from './pages/albums'
import Navbar from './components/nav/nav-bar'

const App = () => {
    // Create a client
  const queryClient = new QueryClient()

  return (
    <div className='mx-auto px-7'>
      <QueryClientProvider client={queryClient}>
       <Navbar />

       <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/albums" element={<Albums />}/>
          <Route path="/albums/:id" element={<AlbumDetailsPage />}/>

          {/* <Route path="/:page/:slug" element={<PageRender />}/> */}
      </Routes>
      </QueryClientProvider>
    </div>
    
  )
}

export default App