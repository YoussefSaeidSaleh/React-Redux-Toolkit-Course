import { useDispatch, useSelector } from "react-redux";
import { ordered, reStocked } from "./icecreamSlice";

const IcecreamView = () => {
  const numberOfIcecreams = useSelector(
    (state) => state.icecream.numberOfIcecreams,
  );
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Number of Icecreams - {numberOfIcecreams}</h1>
      <button onClick={() => dispatch(ordered())}>Order Icecream</button>
      <button onClick={() => dispatch(reStocked(10))}>Restock Icecreams</button>
    </div>
  );
};

export default IcecreamView;
