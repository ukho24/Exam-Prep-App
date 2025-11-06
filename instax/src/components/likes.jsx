import { List, DataTable, DateField, BooleanField } from 'react-admin';

export const LikeList = () => (
    <List>
        <DataTable>
            <DataTable.Col source="id" />
            <DataTable.Col source="post_id" />
            <DataTable.Col source="user_id"  />
            <DataTable.Col source="created_at" field={DateField}/>
        </DataTable>
    </List>
);