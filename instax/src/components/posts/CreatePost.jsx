import {Create, SimpleForm, AutocompleteInput, TextInput, DateInput, required, DateTimeInput, ReferenceInput} from "react-admin"

export const PostCreate = () => (
    <Create>
        <SimpleForm>
            <ReferenceInput source="user_id" reference="USERS">
                <AutocompleteInput optionText="username" />
            </ReferenceInput>
            <TextInput source="title" validate={[required()]} />
            <TextInput source="content" multiline={true} label="What are you thinking...?" validate={[required()]} />
            <DateTimeInput label="Date" source="created_at" defaultValue={new Date()} disabled validate={[required()]} />
        </SimpleForm>
    </Create>
);