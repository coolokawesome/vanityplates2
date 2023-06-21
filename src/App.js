import { BrowserRouter, Link } from "react-router-dom";
import Customizer from "./Customizer";
import Footer from "./Footer";
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
          href="https://twitter.com/intent/tweet?text=Check%20out%20this%20vanity%20plate%20customizer!%20https://canada-plates.vercel.app/%20#canadaplates">
            <i class="navbar-link py-2 px-3 fa-brands fa-twitter"></i>
          </a>
        </div>
      </div>
    </nav>
  </div>
  <Customizer />
  </div>
  <div className="container"><div className="row mt-5">
    
  <h1 className="">What is Canada Plates?</h1>
  <p>Welcome! This app allows you to create customized Canadian vanity plates for (almost) any province. Simply select your plate from one of the many options, enter your slogan, and the app will generate an image of the license plate for you. If you like your creation, hit the "Download Image" button below to save your design!</p>
    <p>The app currently supports all Canadian provinces and territories, excluding the North West Territories. </p>
    <p>While the license plate designs in the app resemble those used in each province, please note that they may not be exact replicas of the official plates. The app is designed for entertainment and personal use, and the generated plates should not be used for legal or official purposes.</p>
  </div>
  </div>
  <Footer />
</BrowserRouter>
  );
}

export default App;
