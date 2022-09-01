import { Routes, Route } from "react-router-dom";
import { useMemo, useState } from 'react';
import Header from './components/Header';
import { UserContext } from './context/UserContext';
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Logout from "./components/Logout";
import Home from "./components/Home";

function App() {
  const [value, setValue] = useState(null);

  const providerValue = useMemo(() => ({ value, setValue }), [value, setValue]);

  return (
    <UserContext.Provider value={providerValue}>
      <Header />
      <main className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </main>
    </UserContext.Provider>
  );
}

export default App;
