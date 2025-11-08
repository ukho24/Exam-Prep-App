import { DateInput, Edit, ImageInput, SimpleForm, TextInput } from 'react-admin';

export const EditUser = () => (
    <Edit>
        <SimpleForm>
            <ImageInput source="avatar" label='Profile Picture' />
            <TextInput source="first_name" />
            <TextInput source="last_name" />
            <TextInput source="username" />
            <TextInput source="email_address" />
            <DateInput source="join_date" disabled />
            {/* <DateInput source="leave_date" /> */}
            <TextInput source="bio" />
        </SimpleForm>
    </Edit>
);