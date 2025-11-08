import { Show, SimpleShowLayout, TextField, DateField, NumberField } from 'react-admin';

export const ShowComments = () => (
    <Show>
        <SimpleShowLayout>
            <NumberField source="id" />
            <NumberField source="post_id" />
            <NumberField source="user_id" />
            <TextField source="content" />
            <DateField source="created_at" />
        </SimpleShowLayout>
    </Show>
);

