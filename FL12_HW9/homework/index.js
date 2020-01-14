function convert(...arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'number') {
      newArr.push(parseInt(arr[i]));
    } else {
      newArr.push(arr[i].toString());
    }
  }
  return newArr;
}

function executeforEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}

function mapArray(arr, callback) {
    let result = [];
    executeforEach(arr, function (el) {
        result.push(callback(el));
    });
    return result;
}

function flipOver(str) {
    let resultArr = [];
    for (let i = str.length - 1; i >= 0; i--) {
        resultArr.push(str[i]);
    }
    return resultArr;
}
flipOver('Hi world!!!');

function makeListFromRange(range) {
  let res = [];
  for (let i = range[0]; i <= range[1]; i++) {
    res.push(i);
  }
  return res;
}

function getPastDay(date, time) {
    const dayMilliseconds = 86400000;
    let newdate = new Date();
    newdate.setTime(date.getTime() - dayMilliseconds * time);
    return newdate.getDate();
}

const actors = [
     {name: 'tommy',age: 36},
     {name: 'lee', age: 28}
];

function sub(arr) {
	let newArr = mapArray(arr, function(el) {
		return el < 30 ? '*' : el;
	});

	return newArr;
}

	
  const formatDate = date => {
  const minTime = 10;
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let day = date.getDate();
  let hours =
    date.getHours() < minTime ? '0' + date.getHours() : date.getHours();
  let minutes =
    date.getMinutes() < minTime ? '0' + date.getMinutes() : date.getMinutes();
  return `${year}/${month}/${day} ${hours}:${minutes}`;
};


