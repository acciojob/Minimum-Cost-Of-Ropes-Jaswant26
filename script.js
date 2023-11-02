function calculateMinCost() {
  let string = document.getElementById("rope-lengths").value;
	let arr = string.split(",");
	let finalValue = 0;
  }
    while (arr.length > 1) {
      arr.sort((a, b) => {return (a - b)});
      let value = parseInt.(arr.shift());
      let value1 = parseInt.(arr.shift());
      let mainValue = value+value1;
		finalValue = finalVlue + mainValue;
		arr.push(mainValue);
    }
    let result = document.getElementById(result);
result.innerText = finalValue;
return finalValue;
}