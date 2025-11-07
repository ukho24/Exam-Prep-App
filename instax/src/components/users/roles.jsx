import { List, DataTable, TextField, NumberField } from 'react-admin';

export const RoleList = () => (
    <List>
        <DataTable>
            <DataTable.Col source="id" />
            <DataTable.Col source="name" />
        </DataTable>
    </List>
);

export const ShowRoles = () => (
    <Show>
        <SimpleShowLayout>
            <NumberField source="id" />
            <TextField source="name" />
        </SimpleShowLayout>
    </Show>
);