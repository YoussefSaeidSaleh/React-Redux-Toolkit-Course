import { useSelector } from "react-redux";

const IcecreamView = () => {
  const numberOfIcecreams = useSelector(
    (state) => state.icecream.numberOfIcecreams,
  );

  return (
    <div>
      <h1>Number of Icecreams - {numberOfIcecreams}</h1>
      <button>Order Icecream</button>
      <button>Restock Icecreams</button>
    </div>
  );
};

export default IcecreamView;
