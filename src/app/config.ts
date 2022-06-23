import { Validators } from "@angular/forms";

export const formConfig: any[] = [
    {
        type: 'input',
        label: 'Full name',
        name: 'name',
        placeholder: 'Enter your name',
        validator: [Validators. required],
        errMsg: {
            required: "This is required"
        }
    },
    {
        label: 'Submit',
        name: 'submit',
        type: 'button',
    },
];