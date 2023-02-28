export function formatNumberInput(
  value: string | number,
  decimalLimit: number | null = null,
  excludeCurrency = false,
) {
  let decimal = '';
  let wholeNumber = value.toString();

  if (wholeNumber.includes('.')) {
    decimal = '.';
    const split = wholeNumber.split('.');
    let d = split[1] ?? '';
    wholeNumber = split[0] ?? '0';
    if (decimalLimit && d.length > decimalLimit) {
      d = d.substring(0, decimalLimit);
    }
    decimal += d;
  }

  wholeNumber = wholeNumber.replace(/\D/g, '');

  const pureNumber = isNaN(Number(wholeNumber)) ? 0 : Number(wholeNumber);
  const formattedWholeNumber = formatToMoney(pureNumber);
  let formatted = formattedWholeNumber + decimal;
  formatted = formatted === '0' ? '' : formatted;
  const currency = excludeCurrency ? '' : 'NGN ';
  return formatted.length > 0 ? `${currency}${formatted}` : '';
}

export function formatToMoney(x: number) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export function moneyToNumber(x: string) {
  return Number(x.replace(/[^\d.-]/g, ''));
}
