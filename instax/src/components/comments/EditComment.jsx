import { DateInput, Edit, NumberInput, SimpleForm, TextInput } from 'react-admin';

export const EditComment = () => (
    <Edit>
        <SimpleForm>
            <NumberInput source="id" />
            <NumberInput source="post_id" />
            <NumberInput source="user_id" />
            <TextInput source="content" />
            <DateInput source="created_at" defaultValue={new Date()} disabled/>
        </SimpleForm>
    </Edit>
);