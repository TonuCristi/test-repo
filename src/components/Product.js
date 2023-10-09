import { useState } from "react";

function Product({
  product: {
    id,
    product_name,
    icon,
    current_points,
    level_points,
    upgrade_cost,
    current_time,
  },
}) {
  // Here we calculated the current level of the product
  const calcLevel = function () {
    return current_points / level_points;
  };

  const currentLevel = calcLevel();

  // Here we calculated the upgrade cost of the product
  const calcUpgradeCost = function () {
    return (upgrade_cost * currentLevel).toFixed(3);
  };

  const currentUpgradeCost = calcUpgradeCost();

  // Here we calculated the loading time of the product
  const calcLoadingTime = function () {
    return Math.trunc(
      current_time /
        (currentLevel > 1 ? Math.trunc(currentLevel) : currentLevel)
    );
  };

  const loadingTime = calcLoadingTime();

  const [loading, setLoading] = useState(false);
  const [time, setTime] = useState(0);

  const style = {
    transition: loading ? `all ${loadingTime}s linear` : "none",
    width: `${loading ? "100" : "0"}%`,
  };

  const handleClick = () => {
    setLoading(!loading);
    // let timee = 0;

    const tm = setInterval(() => {
      setTime(time + 1);
      // timee += 1;
      if (time === loadingTime) {
        clearInterval(tm);
        console.log("Gata");
        setLoading(false);
      }
    }, 1000);
  };

  return (
    <div className="product">
      <button className="product-btn" onClick={loading ? null : handleClick}>
        {icon}
        <div className="level">
          {current_points}/{(Math.trunc(currentLevel) + 1) * level_points}
        </div>
      </button>
      <div className="stats">
        <div className="progress-bar">
          <div className="progress" style={style}></div>
          <div className="product-value-hidden">
            {new Intl.NumberFormat("de-DE", {
              style: "currency",
              currency: "USD",
            }).format(2.5)}
            /{2}s
          </div>
          <div className="product-value">
            {new Intl.NumberFormat("de-DE", {
              style: "currency",
              currency: "USD",
            }).format(2.5)}
            /{2}s
          </div>
        </div>
        <div className="upgrade-time">
          <button className="upgrade-btn">
            Upgrade({currentUpgradeCost}$)
          </button>
          <div className="time">{loadingTime}s</div>
        </div>
      </div>
    </div>
  );
}

export default Product;
