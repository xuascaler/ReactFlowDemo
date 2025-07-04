import { Link } from "react-router-dom"

function NavBar() {
  return (
    <nav className="navbar is-black" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <div className="navbar-item">
          <svg height="149" width="625" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 190.80200000000002">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M187.888 178.122H143.52l-13.573-32.738H56.003l-12.366 32.738H0L66.667 12.776h47.761zM91.155 52.286L66.912 116.53h50.913zM349.056 12.776h35.88v165.346h-41.219V74.842l-44.608 51.877h-6.301l-44.605-51.877V178.12h-41.219V12.776h35.88l53.092 61.336zM489.375 12.776c60.364 0 91.391 37.573 91.391 82.909 0 47.517-30.058 82.437-96 82.437h-68.369V12.776zm-31.762 135.041h26.906c41.457 0 53.823-28.129 53.823-52.377 0-28.368-15.276-52.363-54.308-52.363h-26.422v104.74zM662.769 51.981L610.797 0H800v189.21l-51.972-51.975V51.981zM662.708 62.397L609.2 115.903v74.899h74.889l53.505-53.506h-74.886z" fill="white" className="bd-svg-white"/>
          </svg>
        </div>
      </div>

      <div id="navbarRgithMenu" className="navbar-menu">
        <div className="navbar-start">
          <Link to="newnode" className="navbar-item">
            New Node 
          </Link>

          <Link to="cluster" className="navbar-item">
            Cluster 
          </Link>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-primary"> <strong>Sign up</strong> </a>
              <a className="button is-light"> Log in </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
export default NavBar