import './App.css'
import ArticleList from '../Components/ArticleList'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../Components/Home'
import Nav from '../Components/Nav'

function App() {
  

  return (
    <BrowserRouter>
      <main className='App'>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/articlelist' element={<ArticleList />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
