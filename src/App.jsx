import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/HomePage/Home'

import logoIcon from './Assets/logo-icon.svg'
import githubIcon from './Assets/github-icon.svg'
import Subject from './Pages/SubjectPage/Subject'
import Content from './Pages/ContentPage/Content'
import Quiz from './Pages/QuizPage/Quiz'

const router = createBrowserRouter([
   {
      path: '/',
      element: <Home />
   },
   {
      path: '/:subject',
      element: <Subject />
   },
   {
      path: '/:subject/content',
      element: <Content />
   },
   {
      path: '/:subject/quiz',
      element: <Quiz />
   },
])

function App() {
   return (
      <>
         <header>
            <a href="/">
               <img src={logoIcon} />
               <h2>Reforço</h2>
            </a>
         </header>

         <RouterProvider router={router} />

         <footer>
            <h2>Desenvolvido por José Mathias</h2>

            <a href='#'>
               <img src={githubIcon} />
               <span>JoMath363</span>
            </a>
         </footer>
      </>
   )
}

export default App
