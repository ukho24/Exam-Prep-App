import { InfiniteList, DataTable, DateField, ReferenceField, TextField, ReferenceManyCount, Datagrid, NumberInput, TextInput, DateTimeInput, NumberField } from 'react-admin';

export const CommentList = () => (
    <InfiniteList>
        <Datagrid>
            {/* <DataTable.Col source="id" /> */}
            <NumberField source="post_id" />
            <ReferenceField reference='USERS' source="user_id">
                <TextField source="username"/>
                </ReferenceField>
            <TextField source="comment" />
            <DateField source="created_at" field={DateField}/>
            <ReferenceManyCount reference='REPLY' target='comment_id' label='Reply' />
        </Datagrid>
    </InfiniteList> 
);