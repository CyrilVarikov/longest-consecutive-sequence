module.exports = function longestConsecutiveLength(array) {

  if (array.length === 0) {
    return 0;
  } else if (array.length === 1) {
    return 1;
  }

  var i = 0, pos = 0;
  var isSort = 0;
  //данный цикл нужен для проверки массива на отсортированность,
  //чтобы не сортировать его просто так
  while (i < 5) {
    pos = Math.floor(Math.random() * (array.length - 0) + 0);
    if (array[pos] - array[pos + 1] < 0 ) {
      isSort++;
    }
    i++;
  }

  if (isSort !== 5) {
    array.sort(function( a, b ){
      return a - b;
    });
  }

  var consecutive = [], count = 1;
  //отбираем последовательность по принципу текущий элемент - следующий
  //так же здесь учтено проверка последовательность > 1 , чтобы постоянно
  //не пушить единицу в массив
  for ( i = 0; i < array.length - 1; i++) {
    if (array[i + 1] - array[i] === 1) {
      count++;
    } else if (array[i + 1] - array[i] !== 0) {
      if (count > 1) {
        consecutive.push(count);
        count = 1;
      }
    }
  }

  //Если передали большой массив, но в нём не оказалось
  //последователностей, то любое число образует последовательность
  //равную 1
  if (consecutive.length === 0) {
    consecutive.push(1);
  }

 return Math.max.apply(null, consecutive);
};
