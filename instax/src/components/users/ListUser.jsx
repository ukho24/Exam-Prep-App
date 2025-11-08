import { List, DataTable, DateField } from 'react-admin';

// User List
export const UsersList = () => (
    <List>
        <DataTable>
            <DataTable.Col source="id" />
            <DataTable.Col source="email_address" />
            <DataTable.Col source="first_name"  />
            <DataTable.Col source="last_name" />
            <DataTable.Col source="username"/>
            <DataTable.Col source="join_date" field={DateField} />
            <DataTable.Col source="leave_date" field={DateField} />
            <DataTable.Col source="bio" />
            <DataTable.Col source="avatar"/>
        </DataTable>
    </List>
);
