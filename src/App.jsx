import './App.css'
import ArticleList from './Components/ArticleList'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import Nav from './Components/Nav'
import ArticleById from './Components/ArticleById'


function App() {
  

  return (
    <BrowserRouter>
      <main className='App'>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/articlelist' element={<ArticleList />} />
          <Route path='/articleById/:article_id' element={<ArticleById />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App;
