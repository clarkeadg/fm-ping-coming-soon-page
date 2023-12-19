import Attribution from './components/Attribution'
import ComingSoon from './components/ComingSoon/ComingSoon'

const App = () => { 
  return (
    <main className="relative flex min-h-screen justify-center py-10">
      <ComingSoon/>
      <div className="absolute bottom-0 w-full h-10 flex items-center justify-center">
        <Attribution/>
      </div>
    </main>
  )
}

export default App
