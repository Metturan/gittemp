export const budgetOptions = [
  {value: '$5,000 to $25,000', label: '$5,000 to $25,000'},
  {value: '$25,000 to $50,000', label: '$25,000 to $50,000'}
]
export const projectOptions = [
  {value: 'Web Development', label: 'Web Development'},
  {value: 'Branding', label: 'Branding'},
  {value: 'Design and Creative', label: 'Design and Creative'}
]

export function isValidEmail(email) {
  return email.indexOf('@') !== -1 && email.indexOf('.') !== -1;
}

export function required(value) {
  return value && value.length > 0;
}

export function longerThan(min, value) {
  return value.length > min;
}
