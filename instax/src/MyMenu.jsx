import { Menu } from 'react-admin';


export const MyMenu = () => (
    <Menu>
        <Menu.DashboardItem />
        <Menu.ResourceItem name="USERS" primaryText="Profiles" />
        <Menu.ResourceItem name="POSTS" primaryText="Posts" />
        <Menu.ResourceItem name="COMMENTS" primaryText="Comments"/>
        <Menu.ResourceItem name="USER_ROLE" primaryText="Roles"/>
        <Menu.ResourceItem name="REPLY" primaryText="Reply"/>
        <Menu.Item to="/landing" primaryText="Landing" /> {/* Landing page maybe? */}
       
    </Menu>
);
