
import { Button } from 'react-bootstrap';
const { Link } = require("react-router-dom");





function Header() {
  return (
    <header id="header" className="  fixed-top  d-flex justify-content-between p-3 "
      style={{ background: '#4b6270', color: '#fff' }}>
          <div  style ={{ fontSize : '20px' ,fontWeight : "bold"}}> Home </div>
          <Button  style ={{background : "#fff" , color : "#4b6270", width : "6em"  , fontWeight : "bold"}}> Add </Button>

    </header>


  );
}

export default Header;
