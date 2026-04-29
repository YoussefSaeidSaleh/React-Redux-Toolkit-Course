import CakeView from "../features/cake/CakeView";
import IcecreamView from "../features/iceCream/IcecreamView";
import UserList from "../features/user/UserList";
import "./App.css";

function App() {
  return (
    <div>
      <CakeView />
      <IcecreamView />
      <UserList />
    </div>
  );
}

export default App;
