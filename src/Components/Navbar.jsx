

const Navbar = ({setCategory}) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="#"><span className="badge text-bg-secondary fs-4">News Mag</span></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <a onClick={()=>setCategory("technology")} className="nav-link" role="button">Technology</a>
                <a onClick={()=>setCategory("business")} className="nav-link" role="button" href="#">Business</a>
                <a onClick={()=>setCategory("health")} className="nav-link" role="button" href="#">Health</a>
                <a onClick={()=>setCategory("science")} className="nav-link" role="button" href="#">Science</a>
                <a onClick={()=>setCategory("entertainment")} className="nav-link" role="button" href="#">Entertainment</a>
            </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
