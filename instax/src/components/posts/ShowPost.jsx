import { Show, SimpleShowLayout, TextField, DateField, ImageField, NumberField, BooleanField } from 'react-admin';

export const ShowPost = () => (
    <Show>
        <SimpleShowLayout>
            <NumberField source="id" />
            <TextField source="user_id" />
            <TextField source="title" />
            <TextField source="content" />
            <BooleanField source="published" />
            <DateField source="created_at" />
        </SimpleShowLayout>
    </Show>
);