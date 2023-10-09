import { useEffect, useState } from "react";

function Product({
  product: {
    product,
    icon,
    currentLevel,
    maximumLevel,
    upgradeCost,
    levels: { level1, level2, level3, level4, level5 },
  },
}) {
  const nextLevelValue = function () {
    let level = 1;

    if (currentLevel >= 0 && currentLevel <= level1.value) {
      level = level1.value;
    } else if (currentLevel >= level1.value && currentLevel <= level2.value) {
      level = level2.value;
    } else if (currentLevel >= level2.value && currentLevel <= level3.value) {
      level = level3.value;
    } else if (currentLevel >= level3.value && currentLevel <= level4.value) {
      level = level4.value;
    } else if (currentLevel >= level4.value && currentLevel <= level5.value) {
      level = level5.value;
    }

    return level;
  };

  const calculatedUpgradeCost = function () {
    let cost = upgradeCost;

    if (currentLevel >= 0 && currentLevel <= level1.value) {
      cost *= level1.level;
    } else if (currentLevel >= level1.value && currentLevel <= level2.value) {
      cost *= level2.level;
    } else if (currentLevel >= level2.value && currentLevel <= level3.value) {
      cost *= level3.level;
    } else if (currentLevel >= level3.value && currentLevel <= level4.value) {
      cost *= level4.level;
    } else if (currentLevel >= level4.value && currentLevel <= level5.value) {
      cost *= level5.level;
    }

    return cost;
  };

  const loadingTime = function () {
    let time = 0;

    if (currentLevel >= 0 && currentLevel <= level1.value) {
      time = level1.time;
    } else if (currentLevel >= level1.value && currentLevel <= level2.value) {
      time = level2.time;
    } else if (currentLevel >= level2.value && currentLevel <= level3.value) {
      time = level3.time;
    } else if (currentLevel >= level3.value && currentLevel <= level4.value) {
      time = level4.time;
    } else if (currentLevel >= level4.value && currentLevel <= level5.value) {
      time = level5.time;
    }

    return time;
  };

  const loadTime = loadingTime();

  const [loading, setLoading] = useState(false);

  const style = {
    transition: loading ? `all ${loadTime}s linear` : "none",
    width: `${loading ? "100" : "0"}%`,
  };

  const handleClick = () => {
    setLoading(!loading);
    let time = 0;

    const tm = setInterval(() => {
      time += 1;
      if (time === loadTime) {
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
          {currentLevel}/{nextLevelValue()}
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
            Upgrade({calculatedUpgradeCost()}$)
          </button>
          <div className="time">{loadTime}s</div>
        </div>
      </div>
    </div>
  );
}

export default Product;
