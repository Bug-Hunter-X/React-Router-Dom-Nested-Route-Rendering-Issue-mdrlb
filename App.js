import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* This route is the source of the bug */}
        <Route path="/contact" element={<Contact />} >
          <Route path="form" element={<ContactForm/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;