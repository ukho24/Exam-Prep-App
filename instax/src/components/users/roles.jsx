import { Show, List, SimpleShowLayout, Datagrid, TextField, NumberField, ReferenceField } from 'react-admin';

export const UserRoleList = () => (
    <List>
        <Datagrid>
            <NumberField source="id" />
            <TextField source="role" />
            <ReferenceField source="id" reference='USERS'>
                <TextField source='username' />
            </ReferenceField>
        </Datagrid>
    </List>
);

export const ShowRoles = () => (
    <Show>
        <SimpleShowLayout>
            <NumberField source="id" />
            <TextField source="role" />
            <ReferenceField source="id" reference='USERS'>
                <TextField source='username' />
            </ReferenceField>
        </SimpleShowLayout>
    </Show>
);