import { BooleanInput, DateInput, Edit, NumberInput, SimpleForm, TextInput } from 'react-admin';

export const EditPost = () => (
    <Edit>
        <SimpleForm>
            <NumberInput source="user_id" />
            <TextInput source="title" />
            <TextInput source="content" />
            <BooleanInput source="published" /> 
            {/* Should be boolean check */}
            <DateInput source="created_at" defaultValue={new Date ()} />
        </SimpleForm>
    </Edit>
);