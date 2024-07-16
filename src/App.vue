<script setup lang="ts">
import '@fontsource-variable/plus-jakarta-sans'
import IconCalulator from './assets/images/icon-calculator.svg'
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <main class="bg-slate-100">
    <div class="md:container mx-auto md:grid md:grid-cols-2">
      <div class="pt-6 pb-6 px-4 bg-white">
        <h1 class="text-2xl font-bold">Mortgage Calculator</h1>
        <button>Clear All</button>
        <div class="input">
          <label for="mortgate-amount">Mortgage Amount</label>
          <div>
            <div>£</div>
            <input type="text" id="mortgate-amount" />
          </div>
        </div>
        <div class="input">
          <label for="mortgate-term">Mortgage Term</label>
          <div>
            <input type="text" id="mortgate-term" />
            <div>years</div>
          </div>
        </div>
        <div class="input">
          <label for="mortgate-term">Interest Rate</label>
          <div>
            <input type="text" id="interest-rate" />
            <div>%</div>
          </div>
        </div>
        <div class="input">
          <div>Mortgage Type</div>
          <div>
            <input type="radio" id="repayment" name="contact" value="email" />
            <label for="repayment">Repayment</label>
          </div>
          <div>
            <input type="radio" id="interest" name="contact" value="email" />
            <label for="interest">Interest Only</label>
          </div>
        </div>
        <button
          class="bg-lime w-full text-slate-800 py-2 px-4 font-bold gap-2 mt-4 rounded-full text-sm flex justify-center items-center"
        >
          <img :src="IconCalulator" />
          Calculate Repayments
        </button>
      </div>

      <div class="bg-slate-800 p-8 text-center">
        <h2 class="text-slate-50 text-xl font-semibold pb-4">Results shown here</h2>
        <p class="text-slate-300 text-sm">
          Complete the form and click “calculate repayments” to see what your monthly repayments
          would be.
        </p>
      </div>

      <!-- Empty results start -->

      <!-- Empty results end -->

      <!-- Completed results start -->

      <!---Your results Your results are shown below based on the information you provided. To adjust the
      results, edit the form and click “calculate repayments” again. Your monthly repayments Total
      you'll repay over the term--->

      <!-- Completed results end -->
    </div>
  </main>
  <footer>
    <div class="container mx-auto">
      <div class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>.
        Coded by <a href="#">Your Name Here</a>.
      </div>
    </div>
  </footer>
</template>
