import { Admin, CustomRoutes, Resource, Layout, AppBar } from "react-admin";
import { Route } from "react-router-dom";
import { createTrailbaseProvider } from "./ra-trailbase";
import { CreateUser, LoginPage } from "./create_user";


// Components, import named exports
// Posts - list , show, create & del
import { PostList } from "./components/posts/posts"
import { ShowPost } from "./components/posts/ShowPost";
import { PostCreate } from "./components/posts/CreatePost";

// Users - list, show & delete 
import { UsersList } from "./components/users/users";
import { ShowUser } from "./components/users/ShowUser"

// Comments - list, show, create, delete
import { CommentList } from "./components/comments/comments";
import { ShowComments } from "./components/comments/ShowComments";

// Likes - list, show, create & delete
import { LikeList } from "./components/likes/likes";
import { ShowLikes } from "./components/likes/ShowLikes";

// Roles - list
import { RoleList } from "./components/users/roles";
import { ShowRoles } from "./components/users/roles";


// Custom routes imports 
import { HomePage } from "./pages/Home"
import { MyMenu } from "./MyMenu"
import { Dashboard } from "./pages/Dashboard"


// Calling dataProvider and authProvider
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

        <Admin loginPage={LoginPage} dataProvider={dataProvider} layout={MyLayout} dashboard={Dashboard}>
            {/*  authProvider={authProvider} */}

            <Resource name="USERS" list={UsersList} show={ShowUser} />
            <Resource name="ROLES" list={RoleList} show={ShowRoles} />
            <Resource name="POSTS" list={PostList} show={ShowPost} create={PostCreate}/>
            <Resource name="COMMENTS" list={CommentList} show={ShowComments}/>
            <Resource name="LIKES" list={LikeList} show={ShowLikes}/>

            <CustomRoutes>
                <Route path="/create-user" element={<CreateUser />} />
                <Route path="/landing" element={<HomePage />} />
            </CustomRoutes>
        </Admin>

        // <Button></Button>
    );
}

export default App;