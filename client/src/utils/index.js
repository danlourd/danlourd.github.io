function getUSCurrency(value) {
  return new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
    style: 'currency',
    currency: 'USD'
  }).format(value);
}

function getUSNumberFormat(value) {
  return new Intl.NumberFormat('en-US').format(value);
}

export {
  getUSCurrency,
  getUSNumberFormat,
};