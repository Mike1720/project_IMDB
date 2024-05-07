// COMPONENTS
import { Header } from './layouts/Header/Header'
import { Footer } from "./layouts/Footer/Footer";
// REACT
import { RoutesIndex } from './routes/RoutesIndex'

function App() {

    return (
        <>
            <Header/>
            <RoutesIndex />
            <Footer/>
        </>
    )
}

export default App
