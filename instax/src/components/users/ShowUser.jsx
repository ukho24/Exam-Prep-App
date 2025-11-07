//  User Show
import { Show, SimpleShowLayout, TextField, DateField, ImageField } from 'react-admin';

export const ShowUser = () => (
    <Show>
        <SimpleShowLayout>
            <ImageField source="d_avatar" label='Profile Picture'/>
            <TextField source="id" />
            <TextField source="email_address" />
            <TextField source="first_name" />
            <TextField source="last_name" />
            <TextField source="username" />
            <DateField source="join_date" />
            <DateField source="leave_date" />
            <TextField source="bio" />
        </SimpleShowLayout>
    </Show>
);