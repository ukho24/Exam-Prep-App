import { Admin, CustomRoutes, Resource, Layout, AppBar, ListGuesser } from "react-admin";
import { Route } from "react-router-dom";
import { createTrailbaseProvider } from "./ra-trailbase";
import { CreateUser, LoginPage } from "./create_user";


// Components, import named exports
// POSTS - list , show, create & del
import { PostList } from "./components/posts/ListPost"
import { ShowPost } from "./components/posts/ShowPost";
import { PostCreate } from "./components/posts/CreatePost";
import { EditPost } from "./components/posts/EditPost";


// USERS - list, show, update & delete 
import { UsersList } from "./components/users/ListUser";
import { ShowUser } from "./components/users/ShowUser";
import { EditUser } from "./components/users/EditUser";

// COMMENTS - list, show, create, update & delete
import { CommentList } from "./components/comments/comments";
import { ShowComments } from "./components/comments/ShowComments";
import { EditComment } from "./components/comments/EditComment";

        // REPLIES
        import { ListReply } from "./components/comments/Replies/ListReply";

// LIKES - list, show, create & delete
import { LikeList } from "./components/likes/likes";
import { ShowLikes } from "./components/likes/ShowLikes";

// ROLES - list
import { RoleList } from "./components/users/roles";
import { ShowRoles } from "./components/users/roles";


// Custom routes imports 
import { HomePage } from "./pages/Home"
import { MyMenu } from "./MyMenu"
import { Dashboard } from "./pages/Dashboard"
import { MyAppBar } from "./pages/AppBar";
import { Children } from "react";




// Calling dataProvider and authProvider
const TRAILBASE_URL = "https://scaling-happiness-v6gjrvgr7vg9fx97v-4000.app.github.dev/";
const { dataProvider, authProvider } = await createTrailbaseProvider(
    TRAILBASE_URL,
);

// Layout
const MyLayout = ({children}) => (
    <Layout menu={MyMenu} appBar={MyAppBar}>
        {children}
    </Layout>
);


// App
function App() {
    return (

        <Admin loginPage={LoginPage} dataProvider={dataProvider} layout={MyLayout} dashboard={Dashboard} authProvider={authProvider}>
            {/*  authProvider={authProvider} */}

            <Resource name="USERS" list={UsersList} show={ShowUser} edit={EditUser} />
            <Resource name="ROLES" list={RoleList} show={ShowRoles} />
            <Resource name="POSTS" list={PostList} show={ShowPost} edit={EditPost} create={PostCreate} />
            <Resource name="COMMENTS" list={CommentList} show={ShowComments} edit={EditComment} />
            <Resource name="REPLY" list={ListReply} />

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