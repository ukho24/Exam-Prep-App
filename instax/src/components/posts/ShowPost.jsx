import { Show, SimpleShowLayout, TextField, DateField, ImageField, NumberField } from 'react-admin';

export const ShowPost = () => (
    <Show>
        <SimpleShowLayout>
            <NumberField source="id" />
            <TextField source="user_id" />
            <TextField source="title" />
            <TextField source="content" />
            <DateField source="published" />
            <DateField source="created_at" />
        </SimpleShowLayout>
    </Show>
);