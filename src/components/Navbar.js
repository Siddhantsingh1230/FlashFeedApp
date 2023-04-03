import React,{useState} from 'react';
const Navbar = (props)=>{
  const [value,setValue]=useState('');
  
  const updateValue=(event)=>{
    setValue(event.target.value);
  }
  const update=(e)=>{
    e.preventDefault();
    props.keyword(value);
    setValue('');
  }
  const topicEverything=()=>{
    props.keyword('politics');
  }
  const topicIndia=()=>{
    props.keyword('indian');
  }
  const topicSports=()=>{
    props.keyword('sports');
  }
  const topicCA=()=>{
    props.keyword('headline');
  }
  const topicTech=()=>{
    props.keyword('tech');
  }
  const topicEdu=()=>{
    props.keyword('education');
  }
  return (
    <>
    <nav className="navbar bg-body-tertiary">
  <div className="container-fluid">
    <div className="navbar-brand" href="/">FlashFeed <span className="text-primary ">.com</span></div>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title font-weight-bold" id="offcanvasNavbarLabel">FlashFeed</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
      </div>
      <div className="offcanvas-body">
      <form className="d-flex " role="search">
        <input value={value} onChange={updateValue} className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button onClick={update} className="btn btn-outline-light bg-success" type="submit">Search</button>
      </form>
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item ">
            <div onClick={topicEverything}  className=" nav-link active" aria-current="page" >HOME</div>
          </li>
          <li className="nav-item">
            <div  onClick={topicIndia}  className="nav-link">INDIA</div>
          </li>
          <li className="nav-item">
            <div  onClick={topicSports}  className="nav-link" >SPORTS</div>
          </li>
          <li className="nav-item">
            <div  onClick={topicCA}  className="nav-link">TOP NEWS</div>
          </li>
          <li className="nav-item">
            <div  onClick={topicTech} className="nav-link">TECH NEWS</div>
          </li>
          <li className="nav-item">
            <div  onClick={topicEdu} className="nav-link">EDUCATION</div>
          </li>
        </ul>
        
      </div>
    </div>
  </div>
</nav>

    </>
    );
}
export default Navbar;
