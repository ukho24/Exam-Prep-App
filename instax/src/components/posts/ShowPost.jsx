import { Show, SimpleShowLayout, TextField, DateField, ReferenceField, NumberField, BooleanField } from 'react-admin';
import CheckIcon from '@mui/icons-material/Check';

export const ShowPost = () => (
    <Show>
        <SimpleShowLayout>
            {/* <NumberField source="id" /> */}
            <ReferenceField reference='USERS' source='id' link={false} label='Account'>
                <TextField source="username" />
                </ReferenceField>
                <TextField source="title" />
                <TextField source="content" />
                <BooleanField source="published" valueLabelTrue="Yes" valuelabelFalse="No"/>
                <DateField source="created_at" />
        </SimpleShowLayout>
    </Show>
);