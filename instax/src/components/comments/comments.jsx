import { InfiniteList, DataTable, DateField, BooleanField } from 'react-admin';

export const CommentList = () => (
    <InfiniteList>
        <DataTable>
            {/* <DataTable.Col source="id" /> */}
            <DataTable.Col source="post_id" />
            <DataTable.Col source="user_id"  />
            <DataTable.Col source="content" />
            <DataTable.Col source="created_at" field={DateField}/>
        </DataTable>
    </InfiniteList>
);