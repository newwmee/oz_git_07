const display = document.getElementById("display");

function clearDisplay() {
  display.innerText = "";
}

function deleteLast() {
  display.innerText = display.innerText.slice(0, -1);
}

function appendToDisplay(value) {
  display.innerText += value;
}

function calculateResult() {
  try {
    display.innerText = eval(display.innerText); // 오류 처리 없이 eval 사용
  } catch {
    display.innerText = "숫자와 사칙연산 기호만 입력해주세요";
  }
}
