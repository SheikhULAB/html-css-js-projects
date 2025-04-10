const currencyFirstEl = document.getElementById("currency-first");
const worthFirstEl = document.getElementById("worth-first");
const currencySecondEl = document.getElementById("currency-second");
const worthSecondEl = document.getElementById("worth-second");
const exchangeRateEl = document.getElementById("exchange-rate");

function updateRate() {
  // প্রথম কারেন্সি মানের ভিত্তিতে API থেকে ডেটা নিয়ে আসা
  fetch(`https://v6.exchangerate-api.com/v6/d9b3db4d17abebaa68499bb3/latest/${currencyFirstEl.value}`)
    .then((res) => res.json())
    .then((data) => {
      // দ্বিতীয় কারেন্সি অনুযায়ী রেট বের করা
      const rate = data.conversion_rates[currencySecondEl.value];

      // রেট দেখানোর জন্য exchangeRateEl আপডেট করা
      exchangeRateEl.innerText = `1 ${currencyFirstEl.value} = ${rate} ${currencySecondEl.value}`;

      // কনভার্টেড মান হিসাব করে worthSecondEl আপডেট করা
      worthSecondEl.value = (worthFirstEl.value * rate).toFixed(2);
    })
    .catch((error) => {
      console.error("Error fetching exchange rate:", error);
    });
}

// ইভেন্ট লিসেনার যোগ করা যা পরিবর্তন হলে রেট আপডেট হবে
currencyFirstEl.addEventListener("change", updateRate);
currencySecondEl.addEventListener("change", updateRate);
worthFirstEl.addEventListener("input", updateRate);
