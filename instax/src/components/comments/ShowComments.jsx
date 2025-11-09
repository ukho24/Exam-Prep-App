import { Show, SimpleShowLayout, TextField, DateField, NumberField, ReferenceManyField, DataTable, ReferenceField } from 'react-admin';

export const ShowComments = () => (
    <Show>
        <SimpleShowLayout>
            {/* <NumberField source="id" /> */}
            <NumberField source="post_id" />
            <ReferenceField source='user_id' reference='USERS'>
                <TextField source="username" />
            </ReferenceField>
            <TextField source="comment" />
            <DateField source="created_at" />
            <ReferenceManyField reference="REPLY" target="comment_id" label="Replies">
                <DataTable>
                    {/* For replies */}
                    <DataTable.Col source="reply" reference="REPLY" />

                    {/* To show the users that replied */}
                    <DataTable.Col source="user_id" reference="USERS">
                        <ReferenceField source='id' reference='USERS'> <TextField source='username' /> </ReferenceField>
                    </DataTable.Col>
                </DataTable>
            </ReferenceManyField>
        </SimpleShowLayout>
    </Show>
);

