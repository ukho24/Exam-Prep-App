import { InfiniteList, DataTable, DateField, BooleanField, ReferenceField, TextField, Datagrid, NumberField } from 'react-admin';

export const ListReply = () => (
    <InfiniteList>
        <Datagrid>
            {/* <DataTable.Col source="id" /> */}
            <ReferenceField reference='COMMENTS' source='comment_id' link={false} label="Comment">
                <TextField source="content"/>
            </ReferenceField>
            <ReferenceField reference='USERS' source='user_id' link={false} label="Account">
                <TextField source="username"/>
            </ReferenceField>
            <TextField source="reply" />
        </Datagrid>
    </InfiniteList>
);