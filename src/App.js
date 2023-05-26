import { BrowserRouter, Link } from "react-router-dom";
import Customizer from "./Customizer";
function App() {
  return (
<BrowserRouter>
<div className='container'>
  <nav class="navbar navbar-expand-lg">
    <div className="d-flex justify-content-between align-items-center">
      <div><h1 className="navbar-logo">Canada Plates</h1></div>
      <div>
        <Link className="px-3 py-2 navbar-link">Repo</Link>
        <Link className="px-3 py-2 navbar-link">More Projects</Link>
        <Link className="px-3 py-2 navbar-link">Privacy</Link>
        <Link className="px-3 py-2 navbar-link"><i class="fa-brands fa-twitter"></i></Link>
      </div>
    </div>
  </nav>
</div>
<Customizer />
</BrowserRouter>
  );
}

export default App;
