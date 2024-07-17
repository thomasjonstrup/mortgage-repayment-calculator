import {reactive} from 'vue';
import {defineStore} from 'pinia';
import {z} from 'zod';

const formSchema = z.object({
	amount: z
		.string({required_error: 'This field is required'})
		.trim()
		.min(1, 'This field is required'),
	term: z
		.string({required_error: 'This field is required'})
		.trim()
		.min(1, 'This field is required'),
	rate: z
		.string({required_error: 'This field is required'})
		.trim()
		.min(1, 'This field is required'),
	type: z
		.string({required_error: 'This field is required'})
		.trim()
		.min(1, 'This field is required'),
});

type FormSchema = z.infer<typeof formSchema>;
type Key = keyof FormSchema;

type FormState = {
	amount: string;
	term: string;
	rate: string;
	type: 'repayment' | 'interest' | null;
};

export const useFormStore = defineStore('form', () => {
	const form = reactive<FormState>({
		amount: '',
		rate: '',
		term: '',
		type: null,
	});
	const formErrors = reactive<z.typeToFlattenedError<FormState>>({
		fieldErrors: {},
		formErrors: [],
	});

	const setFormValue = (field: keyof FormState, value: any) => {
		form[field] = value;
	};

	const clearForm = () => {
		// Clear the form data
		form.amount = '';
		form.rate = '';
		form.term = '';
		form.type = null;

		// Clear form errors
		formErrors.fieldErrors = {};
		formErrors.formErrors = [];
	};

	const submitForm = (event: MouseEvent) => {
		event.preventDefault();
		console.log('form.amount', JSON.stringify(form));

		const parsedData = formSchema.safeParse(form);

		console.log('parsedData', parsedData);

		if (!parsedData.success) {
			const errors = parsedData.error.flatten();
			formErrors.fieldErrors = errors.fieldErrors;
			formErrors.formErrors = errors.formErrors;
		} else {
			formErrors.fieldErrors = {};
			formErrors.formErrors = [];
		}
	};

	return {form, setFormValue, submitForm, formErrors, clearForm};
});
