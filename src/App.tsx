import './App.css'
import { lazy, Suspense } from 'react'
const HomePage = lazy(() => import('./pages/home/HomePage'))

function App() {
  return (
    <Suspense>
      <HomePage/>
    </Suspense>
  )
}

export default App
