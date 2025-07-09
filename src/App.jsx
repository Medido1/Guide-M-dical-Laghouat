import './App.css'
import Header from './components/Header';
import { lazy, Suspense } from 'react';
const Main = lazy(() => import('./components/Main'))
const Footer = lazy(() => import('./components/Footer'))

function App() {

  return (
    <Suspense fallback={<div className="text-center py-4">Chargement…</div>}>
     <div className='min-h-screen flex flex-col'>
       <Header />
       <Main />
       <Footer />
     </div>
    </Suspense>
  )
}

export default App
