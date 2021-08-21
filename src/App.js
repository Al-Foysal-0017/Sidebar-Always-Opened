import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "./navbar/Navigation";

function App() {
  return (
    <Router>
      <Navigation>
        <h1 style={{padding:"20px"}}>
          My name is Naiem Mohammad Al Foysal. My university name is Chittagong University of Engineering and Technology. I am from Meherpur, Bangladesh.
        </h1>
      </Navigation>
    </Router>
  );
}

export default App;
