import { Link } from "react-router-dom"

export default function Navbar() {

  return (
    <div>
      <nav className="navbar navbar-expand-lg d-flex justify-content-center pt-4">
        <Link className="brand-name text-capitalize fs-3 text-decoration-none" to="/">Movie Search App</Link>
      </nav>
    </div>
  )
}
