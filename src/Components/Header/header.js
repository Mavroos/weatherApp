import './header.css';

function Header() {
  return (
    <div className="header">
        <div className='headerContainer'>
            <p>Mauro Tonetti</p>
            <a className="weatherLink" href='#weather'> weather </a>
        </div>       
    </div>
  );
}

export default Header;