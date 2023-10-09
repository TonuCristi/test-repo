import { useEffect, useState } from "react";
import Header from "./components/Header";
import Product from "./components/Product";
import { data } from "./data";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    setIsOpen(!isOpen);
  }, []);

  // console.log(data);

  const close = {
    opacity: "0",
    pointerEvents: "none",
    visibility: "none",
    transition: "all 0.3s ease",
    transform: "translateX(110%)",
  };

  const open = {
    opacity: "1",
    transition: "all 0.3s ease",
    transform: "translateX(0%)",
  };

  return (
    <div className="container">
      <div className="greet" style={isOpen ? open : close}>
        Welcome to Capitalist!
        <div className="close-btn" onClick={() => setIsOpen(!isOpen)}>
          ❌
        </div>
      </div>
      <Header />
      <div className="products">
        {data.map((product) => (
          <Product key={product.product} product={product} />
        ))}
      </div>
    </div>
  );
}

export default App;
