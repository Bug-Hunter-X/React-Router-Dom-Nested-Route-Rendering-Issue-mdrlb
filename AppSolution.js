import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

function App() {
  let location = useLocation();

  // Redirect to /contact if only /contact is accessed
  if (location.pathname === '/contact') {
    return <Navigate to='/contact/form' replace/>;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />}>
          <Route path="form" element={<ContactForm/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;