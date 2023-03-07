import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import SearchByProduct from './components/SearchProduct';
import ProductList from './components/ProductList';
import NotFound from './components/NotFound';
import NoPage from './components/NoPage';
import SearchBox from './components/SearchBox';
import Home from './components/Home';
import './styles/app.scss';

function App() {

  return (
    <>
      <SearchBox />
      <section className="meli-centered">
        <Router>
          <Routes>
            <Route path="/items/:id" element={<SearchByProduct/>} />
            <Route path="/items" element={<ProductList/>} />
            <Route path="/not-found" element={<NotFound/>} />
            <Route path="/" element={<Home/>} />
            <Route element={<NoPage/>} />
          </Routes>
        </Router>
      </section>
    </>
  )
}

export default App
