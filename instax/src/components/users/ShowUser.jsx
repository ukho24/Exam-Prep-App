//  User Show
import { Show, SimpleShowLayout, TextField, DateField, ImageField, EmailField } from 'react-admin';

export const ShowUser = () => (
    <Show>
        <SimpleShowLayout>
            <ImageField source="d_avatar" label='Profile Picture' />
            {/* <TextField source="id" /> */}
            <TextField source="first_name" />
            <TextField source="last_name" />
            <TextField source="username" />
            <EmailField source="email_address" />
            <DateField source="join_date" />
            <DateField source="leave_date" />
            <TextField source="bio" />
        </SimpleShowLayout>
    </Show>
);