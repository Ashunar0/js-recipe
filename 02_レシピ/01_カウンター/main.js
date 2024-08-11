const display = document.getElementById("display")
const plusButton = document.getElementById("plus-button")
const minusButton = document.getElementById("minus-button")
const doubleButton = document.getElementById("double-button")

let count = 0

// ボタンをクリックしたときの処理を登録
plusButton.onclick = function () {
  // count を更新
  count += 1
  // count を表示
  display.textContent = count
}

// ボタンをクリックしたときの処理を登録
minusButton.onclick = function () {
  // count を更新
  count -= 1
  // count を表示
  display.textContent = count
}

// ボタンをクリックしたときの処理を登録
doubleButton.onclick = function () {
  // count を更新
  count *= 2
  // count を表示
  display.textContent = count
}
