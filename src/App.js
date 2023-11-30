import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Programs from './components/Programs';
import Progress from './components/Progress';
import Account from './components/Account';
import Exercises from './components/Exercises';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import Register from './components/Register';
import { Toaster } from 'react-hot-toast';
import { UserContextProvider } from './context/userContext';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <UserContextProvider>
      <Navbar />
      <Toaster position='bottom-right' toastOptions={{duration: 2000}} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/account" element={<Account />} />
        <Route path="/exercises" element={<Exercises />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      </UserContextProvider>
    </div>
  );
}

export default App;
