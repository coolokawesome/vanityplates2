import { BrowserRouter, Link } from "react-router-dom";
import Customizer from "./Customizer";
function App() {
  return (
<BrowserRouter>
  <div className="container-fluid container-md">
  <div className=''>
    <nav class="navbar navbar-expand-lg">
      <div className="d-flex justify-content-between align-items-center">
        <div><h1 className="navbar-logo">Canada Plates</h1></div>
        <div>
          <Link target="_blank" to="https://github.com/coolokawesome/vanityplates2" className="px-1 px-md-3 py-2 navbar-link">Repo</Link>
          <Link target="_blank" to={"https://github.com/coolokawesome"} className="px-1 px-md-3 py-2 navbar-link">More Projects</Link>
          {/* <Link className="px-1 px-md-3 py-2 navbar-link">Privacy</Link> */}
          <a class="twitter-share-button" target="_blank"
          href="https://twitter.com/intent/tweet?text=Check%20out%20this%20vanity%20plate%20customizer!%20canadaplates.ca%20#canadaplates">
            <i class="navbar-link py-2 px-3 fa-brands fa-twitter"></i>
          </a>
        </div>
      </div>
    </nav>
  </div>
  <Customizer />
  </div>
</BrowserRouter>
  );
}

export default App;
