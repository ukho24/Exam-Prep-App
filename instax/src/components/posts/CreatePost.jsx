import {Create, SimpleForm, NumberInput, TextInput, DateInput, required} from "react-admin"

export const PostCreate = () => (
    <Create>
        <SimpleForm>
            <NumberInput source="user_id"/>
            <TextInput source="title" validate={[required()]} />
            <TextInput source="content" multiline={true} label="What are you thinking...?" validate={[required()]} />
            <DateInput label="Date" source="created_at" defaultValue={new Date()} disabled />
        </SimpleForm>
    </Create>
);