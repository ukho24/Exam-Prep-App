import { Admin, CustomRoutes } from "react-admin";
import { Route } from "react-router-dom";
import { createTrailbaseProvider } from "./dataProvider";
import { CreateUser, LoginPage } from "./create_user";

const TRAILBASE_URL = "http://localhost:4000";
const { dataProvider, authProvider } = await createTrailbaseProvider(
  TRAILBASE_URL,
);

function App() {
  return (
    <Admin
      loginPage={LoginPage}
      dataProvider={dataProvider}
      authProvider={authProvider}
    >
      <CustomRoutes noLayout>
        <Route path="/create-user" element={<CreateUser />} />
      </CustomRoutes>
    </Admin>
  );
}

export default App;