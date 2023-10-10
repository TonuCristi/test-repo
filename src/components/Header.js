import "../App.css";

function Header({ balance }) {
  return (
    <header className="header">
      <div className="wrapper">
        <div className="logo">🤑</div>
        <div className="balance">
          {new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "USD",
          }).format(balance)}
        </div>
      </div>
    </header>
  );
}

export default Header;
