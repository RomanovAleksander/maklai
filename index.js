(function () {
  const form = document.getElementById("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    calculate();
  });

  function calculate() {
    const resultContainer = document.getElementById("result");
    const operator = document.getElementById("operator").value;
    const firstOperand = document.getElementById("operand-1");
    const secondOperand = document.getElementById("operand-2");
    const firstOperandValue = firstOperand.value;
    const secondOperandValue = secondOperand.value;
    let result = 0;

    switch (operator) {
      case '+':
        result = Math.round(Number(firstOperandValue) + Number(secondOperandValue));
        break;
      case '-':
        result = Math.round(Number(firstOperandValue) - Number(secondOperandValue));
        break;
      case '*':
        result =  Math.round(Number(firstOperandValue) * Number(secondOperandValue));
        break;
      case '/':
        result =  Math.round(Number(firstOperandValue) / Number(secondOperandValue));
        break
    }

    resultContainer.innerHTML = result.toString();
  }
})();
