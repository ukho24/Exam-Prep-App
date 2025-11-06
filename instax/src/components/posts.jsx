import { List, DataTable, DateField, BooleanField } from 'react-admin';

export const PostList = () => (
    <List>
        <DataTable>
            <DataTable.Col source="id" />
            <DataTable.Col source="user_id" />
            <DataTable.Col source="title" />
            <DataTable.Col source="content" />
            <DataTable.Col source="published" />
            <DataTable.Col source="created_at" field={DateField} />
        </DataTable>
    </List>
);