import { Menu } from 'react-admin';


export const MyMenu = () => (
    <Menu>
        <Menu.Item to="/" primaryText="Home" /> {/* Landing page maybe? */}
        <Menu.ResourceItem name="USERS" primaryText="Profiles" />
        <Menu.ResourceItem name="POSTS" primaryText="Posts" />
        <Menu.ResourceItem name="COMMENTS" primaryText="Comments"/>
        <Menu.ResourceItem name="LIKES" primaryText="Likes"/>
       
    </Menu>
);
