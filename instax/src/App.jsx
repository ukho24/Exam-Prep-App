import { Admin, CustomRoutes, Resource } from "react-admin";
import { Route } from "react-router-dom";
import { createTrailbaseProvider } from "./ra-trailbase";
import { CreateUser, LoginPage } from "./create_user";


// Components
import { PostList } from "./components/posts"
import { UsersList } from "./components/users";
import { CommentList } from "./components/comments";
import { LikeList } from "./components/likes";
import { RoleList } from "./components/roles";

const TRAILBASE_URL = "https://scaling-happiness-v6gjrvgr7vg9fx97v-4000.app.github.dev/";
const { dataProvider, authProvider } = await createTrailbaseProvider(
    TRAILBASE_URL,
);

function App() {
    return (

        <Admin loginPage={LoginPage} dataProvider={dataProvider} >
            {/*  authProvider={authProvider} */}

            <Resource name="USERS" list={UsersList} />
            <Resource name="ROLES" list={RoleList} />
            <Resource name="POSTS" list={PostList} />
            <Resource name="COMMENTS" list={CommentList} />
            <Resource name="LIKES" list={LikeList} />

            <CustomRoutes noLayout>
                <Route path="/create-user" element={<CreateUser />} />
            </CustomRoutes>
        </Admin>

        // <Button></Button>
    );
}

export default App;