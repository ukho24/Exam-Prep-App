import { Admin, CustomRoutes, Resource, Layout } from "react-admin";
import { Route } from "react-router-dom";
import { createTrailbaseProvider } from "./ra-trailbase";
import { CreateUser, LoginPage } from "./create_user";


// Components, import named exports
import { PostList } from "./components/posts/posts"
import { UsersList } from "./components/users/users";
import { CommentList } from "./components/comments/comments";
import { LikeList } from "./components/likes/likes";
import { RoleList } from "./components/users/roles";


// Custom routes imports
import { HomePage } from "./pages/Home"
import { MyMenu } from "./MyMenu"

const TRAILBASE_URL = "https://scaling-happiness-v6gjrvgr7vg9fx97v-4000.app.github.dev/";
const { dataProvider, authProvider } = await createTrailbaseProvider(
    TRAILBASE_URL,
);

// Layout
const MyLayout = ({ children }) => (
    <Layout menu={MyMenu}>
        {children}
    </Layout>
);

// App
function App() {
    return (

        <Admin loginPage={LoginPage} dataProvider={dataProvider} layout={MyLayout} >
            {/*  authProvider={authProvider} */}

            <Resource name="USERS" list={UsersList} />
            <Resource name="ROLES" list={RoleList} />
            <Resource name="POSTS" list={PostList} />
            <Resource name="COMMENTS" list={CommentList} />
            <Resource name="LIKES" list={LikeList} />

            <CustomRoutes noLayout>
                <Route path="/create-user" element={<CreateUser />} />
                <Route path="/" element={<HomePage />} />
            </CustomRoutes>
        </Admin>

        // <Button></Button>
    );
}

export default App;