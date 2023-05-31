import './App.css'
import ArticleList from './Components/ArticleList'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import Nav from './Components/Nav'
import ArticlesById from './Components/ArticlesById'


function App() {
  

  return (
    <BrowserRouter>
      <main className='App'>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/articlelist' element={<ArticleList />} />
          <Route path='/articlesById/:article_id' element={<ArticlesById />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App;
