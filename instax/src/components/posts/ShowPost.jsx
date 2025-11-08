import { Typography } from '@mui/material';
import { Show, SimpleShowLayout, TextField, RecordsIterator, ReferenceManyField, DateField, ReferenceField, DataTable, BooleanField, ReferenceManyCount, ListBase, ChipField } from 'react-admin';

export const ShowPost = () => (
    <Show>
        <SimpleShowLayout>
            {/* <NumberField source="id" /> */}
            <ReferenceField reference='USERS' source='id' link={false} label='Account'>
                <TextField source="username" />
            </ReferenceField>
            <TextField source="title" />
            <TextField source="content" />
            <BooleanField source="published" valueLabelTrue="Yes" valuelabelFalse="No" />
            <DateField source="created_at" />
            {/* Show number of likes */}
            <ReferenceManyCount reference='LIKES' target='post_id' label="Likes" link />
            {/* Show for comments linked to post */}
            {/* Datatable for comments */}
            <ReferenceManyField reference="COMMENTS" target="post_id" label="Comments">
               
                <DataTable>
                       {/* calling the Comments */}
                    <DataTable.Col source="content" label="Comment">
                        
                    </DataTable.Col>

                     {/* Calling accounts */}
                    <DataTable.Col label="Accounts">
                        <ReferenceField reference='USERS' source="id" >
                            <TextField source='username' />
                        </ReferenceField>
                    </DataTable.Col>
                 

                    <DataTable.Col label="Replies">
                        <ReferenceField source='comment_id' reference='REPLY'>
                            <TextField source="reply" />
                        </ReferenceField>
                    </DataTable.Col>
                </DataTable>

            </ReferenceManyField>

        </SimpleShowLayout>
    </Show>
);