// https://calculator.swiftutors.com/net-profit-ratio-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const netProfitRatioRadio = document.getElementById('netProfitRatioRadio');
const netProfitRadio = document.getElementById('netProfitRadio');
const netSalesRadio = document.getElementById('netSalesRadio');

let netProfitRatio;
let netProfit = v1;
let netSales = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

netProfitRatioRadio.addEventListener('click', function() {
  variable1.textContent = 'Net Profit';
  variable2.textContent = 'Net Sales';
  netProfit = v1;
  netSales = v2;
  result.textContent = '';
});

netProfitRadio.addEventListener('click', function() {
  variable1.textContent = 'Net Profit Ratio';
  variable2.textContent = 'Net Sales';
  netProfitRatio = v1;
  netSales = v2;
  result.textContent = '';
});

netSalesRadio.addEventListener('click', function() {
  variable1.textContent = 'Net Profit Ratio';
  variable2.textContent = 'Net Profit';
  netProfitRatio = v1;
  netProfit = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(netProfitRatioRadio.checked)
    result.textContent = `Net Profit Ratio = ${computenetNetProfitRatio().toFixed(2)} %`;

  else if(netProfitRadio.checked)
    result.textContent = `Net Profit = ${computeNetProfit().toFixed(2)}`;

  else if(netSalesRadio.checked)
    result.textContent = `Net Sales = ${computeNetSales().toFixed(2)}`;
})

// calculation

function computenetNetProfitRatio() {
  return (Number(netProfit.value) / Number(netSales.value)) * 100;
}

function computeNetProfit() {
  return (Number(netProfitRatio.value) / 100) * Number(netSales.value);
}

function computeNetSales() {
  return Number(netProfit.value) / (Number(netProfitRatio.value) / 100);
}