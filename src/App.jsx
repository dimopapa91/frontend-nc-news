import './App.css'
import Home from './Components/Home'
import Nav from './Components/Nav'
import ArticleList from './Components/ArticleList'
import ArticleById from './Components/ArticleById'
import Comments from './Components/Comments'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  

  return (
    <BrowserRouter>
      <main className='App'>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/articlelist' element={<ArticleList />} />
          <Route path='/articleById/:article_id' element={<ArticleById />} />
          <Route path='/articles/:article_id/comments' element={<Comments />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App;
