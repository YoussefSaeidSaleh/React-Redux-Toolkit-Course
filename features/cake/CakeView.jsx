import { useSelector } from "react-redux";

const CakeView = () => {
  const numberOfCakes = useSelector((state) => state.cake.numberOfCakes);

  return (
    <div>
      <h1>Number of cakes - {numberOfCakes}</h1>
      <button>Order cake</button>
      <button>Restock cakes</button>
    </div>
  );
};

export default CakeView;
