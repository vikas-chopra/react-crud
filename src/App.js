import AddUsers from "./Components/AddUsers";
import AllUsers from "./Components/AllUsers";
import MyApp from "./Components/myApp";
import NavBar from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from "./Components/NotFound";
import EditUser from "./Components/EditUser";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<MyApp/>} />
        <Route exact path="/all-users"element={<AllUsers/>} />
        <Route exact path="/add-users" element={<AddUsers/>} />
        <Route exact path="/edit-user/:id" element={<EditUser/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
