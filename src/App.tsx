import Attribution from './components/Attribution'
import QRCode from './components/QRCode'

const App = () => {
  return (
    <main className="relative flex min-h-screen justify-center items-center py-10">
      <QRCode/>
      <div className="absolute bottom-0 w-full h-10 flex items-center justify-center">
        <Attribution/>
      </div>
    </main>
  )
}

export default App
