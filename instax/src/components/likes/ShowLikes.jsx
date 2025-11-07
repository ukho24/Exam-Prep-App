import { Show, SimpleShowLayout, TextField, DateField, NumberField } from 'react-admin';

export const ShowLikes = () => (
    <Show>
        <SimpleShowLayout>
            <NumberField source="id" />
            <NumberField source="post_id" />
            <NumberField source="user_id" />
            <DateField source="created_at" />
        </SimpleShowLayout>
    </Show>
);