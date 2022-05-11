import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux";
import Routing from "./routes";
import Theme from "./theme";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Theme>
          <Routing />
        </Theme>
      </PersistGate>
    </Provider>
  );
}

export default App;
