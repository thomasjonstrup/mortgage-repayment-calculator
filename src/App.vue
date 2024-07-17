<script setup lang="ts">
import '@fontsource-variable/plus-jakarta-sans';
import {twMerge} from 'tailwind-merge';

import IconCalulator from './assets/images/icon-calculator.svg';
import IllustrationEmpty from './components/icons/IllustrationEmpty.vue';
import {useFormStore} from './stores/form';

const {form, setFormValue, submitForm, formErrors, clearForm, result} =
	useFormStore();

console.log('form', form.amount);
</script>

<template>
	<main
		class="grid min-h-screen place-items-center bg-slate-100 md:py-10 lg:p-0"
	>
		<div
			class="mx-auto grid-cols-2 overflow-hidden bg-white md:max-w-2xl md:rounded-3xl lg:grid lg:max-w-5xl"
		>
			<div class="px-8 pb-8 pt-6">
				<div class="md:flex md:justify-between">
					<h1 class="text-xl font-bold md:text-2xl">
						Mortgage Calculator
					</h1>
					<button
						class="mb-3 mt-2 text-xs text-slate-600 underline"
						@click="clearForm"
					>
						Clear All
					</button>
				</div>
				<div class="grid grid-cols-2 gap-6">
					<div class="input col-span-full mb-2">
						<label
							for="mortgate-amount"
							class="text-xs font-semibold text-slate-600"
							>Mortgage Amount</label
						>
						<div
							:class="
								twMerge(
									'mt-1 flex overflow-hidden rounded border border-slate-500 focus-within:border-lime',
									formErrors.fieldErrors &&
										formErrors.fieldErrors['amount']
										? 'border-red'
										: ''
								)
							"
						>
							<label
								:class="
									twMerge(
										'bg-slate-100 p-3 font-semibold text-slate-700 focus-within:bg-lime',
										formErrors.fieldErrors &&
											formErrors.fieldErrors['amount']
											? 'bg-red text-white'
											: ''
									)
								"
								for="mortgate-amount"
								>£
							</label>
							<input
								type="text"
								id="mortgate-amount"
								class="w-full px-6 py-3.5"
								v-model="form.amount"
							/>
						</div>

						<div
							v-if="
								formErrors.fieldErrors &&
								formErrors.fieldErrors['amount']
							"
							aria-live="polite"
							aria-atomic="true"
							class="mt-2 text-xs font-semibold text-red"
						>
							<div
								v-for="(item, index) in formErrors.fieldErrors[
									'amount'
								]"
								v-bind:key="index"
							>
								{{ item }}
							</div>
						</div>
					</div>
					<div class="input col-span-full mb-2 md:col-span-1">
						<label
							for="mortgate-term"
							class="text-xs font-semibold text-slate-600"
							>Mortgage Term</label
						>
						<div
							class="mt-1 flex overflow-hidden rounded border border-slate-500 focus-within:border-lime"
						>
							<input
								type="text"
								id="mortgate-term"
								class="w-full px-6 py-3.5"
								v-model="form.term"
							/>
							<label
								class="bg-slate-100 p-3 font-semibold text-slate-700 focus-within:bg-lime"
								for="mortgate-term"
							>
								years
							</label>
						</div>
						<div
							v-if="
								formErrors.fieldErrors &&
								formErrors.fieldErrors['term']
							"
							aria-live="polite"
							aria-atomic="true"
							class="mt-2 text-xs font-semibold text-red"
						>
							<div
								v-for="(item, index) in formErrors.fieldErrors[
									'term'
								]"
								v-bind:key="index"
							>
								{{ item }}
							</div>
						</div>
					</div>
					<div class="input col-span-full mb-4 md:col-span-1">
						<label
							for="interest-rate"
							class="text-xs font-semibold text-slate-600"
							>Interest Rate</label
						>
						<div
							class="mt-1 flex overflow-hidden rounded border border-slate-500 focus-within:border-lime"
						>
							<label
								class="bg-slate-100 p-3 font-semibold text-slate-700 focus-within:bg-lime"
								for="interest-rate"
							>
								%
							</label>
							<input
								type="text"
								id="interest-rate"
								class="w-full px-6 py-3.5"
								v-model="form.rate"
							/>
						</div>
						<div
							v-if="
								formErrors.fieldErrors &&
								formErrors.fieldErrors['rate']
							"
							aria-live="polite"
							aria-atomic="true"
							class="mt-2 text-xs font-semibold text-red"
						>
							<div
								v-for="(item, index) in formErrors.fieldErrors[
									'rate'
								]"
								v-bind:key="index"
							>
								{{ item }}
							</div>
						</div>
					</div>
					<div class="input col-span-full">
						<div class="text-xs font-semibold text-slate-600">
							Mortgage Type
						</div>

						<div class="flex flex-col gap-4">
							<div
								class="mt-2 flex items-center gap-2 rounded-lg border border-slate-500 px-6 py-3.5"
							>
								<input
									type="radio"
									id="repayment"
									name="repayment"
									value="repayment"
									v-model="form.type"
									class="size-5 h-[21px] appearance-none rounded-full border border-slate-500 checked:border-none checked:bg-radio-selected focus:outline-none group-hover/radio:cursor-pointer"
								/>
								<label
									for="repayment"
									class="text-sm font-semibold"
									>Repayment</label
								>
							</div>
							<div
								class="flex items-center gap-2 rounded-lg border border-slate-500 px-6 py-3.5"
							>
								<input
									type="radio"
									id="interest"
									name="interest"
									v-model="form.type"
									value="interest"
									class="size-5 h-[21px] appearance-none rounded-full border border-slate-500 checked:border-none checked:bg-radio-selected focus:outline-none group-hover/radio:cursor-pointer"
								/>
								<label
									for="interest"
									class="text-sm font-semibold"
									>Interest Only</label
								>
							</div>
						</div>
						<div
							v-if="
								formErrors.fieldErrors &&
								formErrors.fieldErrors['type']
							"
							aria-live="polite"
							aria-atomic="true"
							class="mt-2 text-xs font-semibold text-red"
						>
							<div
								v-for="(item, index) in formErrors.fieldErrors[
									'type'
								]"
								v-bind:key="index"
							>
								{{ item }}
							</div>
						</div>
					</div>
				</div>
				<button
					type="submit"
					@click="submitForm"
					class="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-lime px-4 py-2 text-sm font-bold text-slate-800 md:w-auto"
				>
					<img :src="IconCalulator" />
					Calculate Repayments
				</button>
			</div>

			<div
				v-if="result.monthlyPayment && result.totalPayment"
				class="flex flex-col bg-slate-800 p-8 md:rounded-3xl lg:rounded-bl-[6rem]"
			>
				<h2 class="pb-4 text-xl font-semibold text-slate-50">
					Your results
				</h2>
				<p class="text-sm text-slate-300">
					Your results are shown below based on the information you
					provided. To adjust the results, edit the form and click
					“calculate repayments” again.
				</p>
				<div
					class="bg-black-40 mt-4 rounded-lg border-t-4 border-lime p-4"
				>
					<div class="border-b-[1px] border-slate-400 pb-2">
						<p class="pb-1 text-sm text-slate-300">
							Your monthly repayments
						</p>
						<h3 class="text-2xl font-semibold text-lime">
							{{ result.monthlyPayment }}
						</h3>
					</div>
					<div class="pt-2">
						<p class="pb-1 text-sm text-slate-300">
							Total you'll repay over the term
						</p>
						<h4 class="text-m font-semibold text-white">
							{{ result.totalPayment }}
						</h4>
					</div>
				</div>
			</div>
			<div
				v-else
				class="flex flex-col items-center justify-center bg-slate-800 p-8 text-center md:rounded-bl-[6rem]"
			>
				<IllustrationEmpty />
				<h2 class="pb-4 text-xl font-semibold text-slate-50">
					Results shown here
				</h2>

				<div class="text-center">
					<p class="text-sm text-slate-300">
						Complete the form and click “calculate repayments” to
						see what your monthly repayments would be.
					</p>
				</div>
			</div>

			<!-- Empty results start -->

			<!-- Empty results end -->

			<!-- Completed results start -->

			<!-- Completed results end -->
		</div>
	</main>
	<footer
		class="bg-slate-800 text-slate-300 md:bg-slate-100 md:text-slate-800"
	>
		<div class="pb-2 text-center text-xs">
			Challenge by
			<a
				href="https://www.frontendmentor.io?ref=challenge"
				class="underline hover:text-slate-300"
				>Frontend Mentor</a
			>. Coded by
			<a
				href="https://github.com/thomasjonstrup"
				class="underline hover:text-slate-300"
				>Thomas Jonstrup</a
			>.
		</div>
	</footer>
</template>
