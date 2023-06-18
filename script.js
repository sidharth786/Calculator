let resultField = document.getElementById('result');
let expression = '';

function appendValue(value) {
  expression += value;
  resultField.value = expression;
}

function appendOperator(operator) {
  expression += operator;
  resultField.value = expression;
}

function calculate() {
  try {
    let result = eval(expression);
    resultField.value = result;
    expression = '';
  } catch (error) {
    resultField.value = 'Error';
    expression = '';
  }
}

function clearResult() {
  expression = '';
  resultField.value = '';
}
