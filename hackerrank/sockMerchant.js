const sockMerchant = (ar) => {
  const sockCount = {};
  let pairs = 0

  ar.forEach(sock => {
      sockCount[sock] = sockCount[sock] + 1 || 1;
      if (sockCount[sock] === 2) { 
          pairs++;
          sockCount[sock] = 0;
      }
  })
  return pairs;
}