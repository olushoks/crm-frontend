import "./App.css";
import { Entry } from "./pages/entry/Entry.page";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { DefaultLayout } from "./layout/DefaultLayout";

function App() {
  return (
    <div>
      {/* <Entry /> */}
      <DefaultLayout>
        <Dashboard />
      </DefaultLayout>
    </div>
  );
}

export default App;
