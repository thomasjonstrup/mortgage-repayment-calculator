import {reactive} from 'vue';
import {defineStore} from 'pinia';
import {z} from 'zod';
import {calculateMortgage} from '@/utils/calculate';

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

type Result = {
	monthlyPayment: string;
	totalPayment: string;
};

export const useFormStore = defineStore('form', () => {
	const result = reactive<Result>({
		monthlyPayment: '',
		totalPayment: '',
	});

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

		result.monthlyPayment = '';
		result.totalPayment = '';
	};

	const submitForm = (event: MouseEvent) => {
		event.preventDefault();

		const parsedData = formSchema.safeParse(form);

		if (!parsedData.success) {
			const errors = parsedData.error.flatten();
			formErrors.fieldErrors = errors.fieldErrors;
			formErrors.formErrors = errors.formErrors;
		} else {
			formErrors.fieldErrors = {};
			formErrors.formErrors = [];

			if (form.type) {
				const {monthlyPayment, totalPayment} = calculateMortgage(
					Number(form.amount),
					Number(form.term),
					Number(form.rate),
					form.type
				);

				result.monthlyPayment = monthlyPayment;
				result.totalPayment = totalPayment;
			}
		}
	};

	return {form, setFormValue, submitForm, formErrors, clearForm, result};
});
