import './App.css'
import Home from './Components/Home'
import Nav from './Components/Nav'
import ArticleList from './Components/ArticleList'
import ArticleById from './Components/ArticleById'
import Comments from './Components/Comments'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'


function App() {
  const [user, setUser] = useState({
    "username": "tickle122",
    "name": "Tom Tickle",
    "avatar_url": "https://vignette.wikia.nocookie.net/mrmen/images/d/d6/Mr-Tickle-9a.png/revision/latest?cb=20180127221953"})

  return (
    <BrowserRouter>
      <main className='App'>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/articlelist' element={<ArticleList />} />
          <Route path='/articleById/:article_id' element={<ArticleById user = {user} />} />
          <Route path='/articles/:article_id/comments' element={<Comments />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App;
