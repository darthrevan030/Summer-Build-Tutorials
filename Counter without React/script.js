function increase() {
  // 1. Grab the current number

    let number = document.querySelector("#counter").innerHTML;
  // 2. Convert to intger
    number = parseInt(number);

  // 3. Increase by one
    number += 1;

  // 4. Set it back
    document.querySelector("#counter").innerHTML = number;
}