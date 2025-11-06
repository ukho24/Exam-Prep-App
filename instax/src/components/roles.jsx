import { List, DataTable, DateField, BooleanField } from 'react-admin';

export const RoleList = () => (
    <List>
        <DataTable>
            <DataTable.Col source="id" />
            <DataTable.Col source="name" />
        </DataTable>
    </List>
);