import { InfiniteList, Datagrid, DateField, BooleanField, TextField, ReferenceField, NumberField, ReferenceOneField, ReferenceManyCount } from 'react-admin';

import { SearchInput } from 'react-admin';

const PostFilters = [
    <SearchInput source="title" alwaysOn />
]; 


export const PostList = () => (
    <InfiniteList filters={PostFilters} perPage={5}>
        <Datagrid>
            {/* <NumberField source="id" /> */}
            <ReferenceField reference='USERS' source='id' link={false} label='Account'>
                <TextField source="username" />
            </ReferenceField>
            <TextField source="title" />
            <TextField source="content" />
            {/* <BooleanField source="published" valueLabelTrue="Yes" valuelabelFalse="No"/> */}
            <DateField source="created_at" />
            <ReferenceManyCount reference='LIKES' target='post_id' label='Likes'/>
            <ReferenceManyCount reference='COMMENTS' target='post_id' label='Comments'/>
        </Datagrid>
    </InfiniteList>
);

