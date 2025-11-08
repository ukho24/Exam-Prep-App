import { Show, SimpleShowLayout, TextField, DateField, NumberField, ReferenceManyField, DataTable, ReferenceField } from 'react-admin';

export const ShowComments = () => (
    <Show>
        <SimpleShowLayout>
            <NumberField source="id" />
            <NumberField source="post_id" />
            <NumberField source="user_id" />
            <TextField source="content" />
            <DateField source="created_at" />
            <ReferenceManyField reference="REPLY" target="comment_id" label="Replies">
                <DataTable>
                    <DataTable.Col label='Account'>
                        <ReferenceField reference='USERS' source='user_id'>
                            <TextField source='username'></TextField>
                        </ReferenceField>
                    </DataTable.Col>
                    <DataTable.Col source="reply" />
                </DataTable>
            </ReferenceManyField>
        </SimpleShowLayout>
    </Show>
);

