getMaxProfit = (arr) => {
  let currentday = 0;
  let maxProfit = 0;
  let currentProfit = 0;
  let profitDays = []

  if(arr.length === 0 ||  arr === null){
    return [-1, -1]
  }else if(arr.length === 1){
    return [0,0]
  }else {
    while(currentday < arr.length) {
      
      for (let day in arr) {
        if(currentday < Number(day)) {
          currentProfit = arr[day] - arr[currentday];
          if (currentProfit > maxProfit) {
            maxProfit = currentProfit;
            profitDays = [currentday, Number(day)];
          }
        }
      }
      currentday = currentday + 1
    }
    return profitDays
  }
}
