import myImage from "./img.jpg"

function Header() {
  return (
    <header>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Services</li>
      </ul>
      {/* <img src="./img.png" alt="logo" />   ==>> this is incorrect */}


        {/* <img src={myImage} alt="logo" />  first way to add image in react */}

        <img src={require('./img.jpg')} alt="logo" /> {/* second way to add image in react */}
    </header>
  );
}
export default Header;
