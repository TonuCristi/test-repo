import "../App.css";

function Header() {
  return (
    <header className="header">
      <div className="wrapper">
        <div className="logo">🤑</div>
        <div className="balance">
          {new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "USD",
          }).format(15020151.23)}
        </div>
      </div>
    </header>
  );
}

export default Header;
