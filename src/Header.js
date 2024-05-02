import myImage from "./img.jpg";

function Header() {
  return (
    <header>
      <ul>
        <div>
          <li className="li">Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Services</li>
        </div>
        {/* <img src="./img.png" alt="logo" />   ==>> this is incorrect */}
        {/* <img src={myImage} alt="logo" />  first way to add image in react */}
        <img
          src={require("./img.jpg")}
          alt="logo"
          style={{
            width: "500px",
            marginRight: "300px",
            marginTop: "500px",
          }}
        />{" "}
        {/* second way to add image in react */}
      </ul>
    </header>
  );
}
export default Header;
