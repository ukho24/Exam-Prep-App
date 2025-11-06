import { Admin, CustomRoutes, Resource, ListGuesser } from "react-admin";
import { Route } from "react-router-dom";
import { createTrailbaseProvider } from "./ra-trailbase";
import { CreateUser, LoginPage } from "./create_user";

const TRAILBASE_URL = "https://scaling-happiness-v6gjrvgr7vg9fx97v-4000.app.github.dev/";
const { dataProvider, authProvider } = await createTrailbaseProvider(
    TRAILBASE_URL,
);

function App() {
    return (
        <Admin loginPage={LoginPage} dataProvider={dataProvider} >
            {/*  authProvider={authProvider} */}

            <Resource name="posts" list={ListGuesser}/>

            <CustomRoutes noLayout>
                <Route path="/create-user" element={<CreateUser />} />
            </CustomRoutes>
        </Admin>
    );
}

export default App;