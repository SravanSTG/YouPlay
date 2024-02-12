const useRoundNum = (numCount: string) => {
  const count = Number(numCount);
  if (count < 1000) {
    return `${count}`;
  } else if (count < 1000000) {
    return `${Math.floor(count / 1000)}K`;
  } else if (count < 1000000000) {
    return `${(count / 1000000).toFixed(1)}M`;
  } else {
    return `${(count / 1000000000).toFixed(1)}B`;
  }
};

export default useRoundNum;
