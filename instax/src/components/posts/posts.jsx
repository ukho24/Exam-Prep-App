import { InfiniteList, Datagrid, DateField, BooleanField, TextField, ReferenceField, NumberField, ReferenceOneField } from 'react-admin';

export const PostList = () => (
    <InfiniteList>
        <Datagrid>
            {/* <NumberField source="id" /> */}
            <ReferenceField reference='USERS' source='id' link={false} label='Account'>
                <TextField source="username" /> 
            </ReferenceField>
            <TextField source="title" />
            <TextField source="content" />
            {/* <BooleanField source="published" valueLabelTrue="Yes" valuelabelFalse="No"/> */}
            <DateField source="created_at" />
            <ReferenceOneField reference='LIKES' target='id' link={false} label="Likes">
                <NumberField source='post_id'/>
            </ReferenceOneField>
        </Datagrid>
    </InfiniteList>
);

