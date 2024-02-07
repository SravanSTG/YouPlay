const useUploadDate = (publishedAt: string) => {
  const currentDate = new Date();
  const publishedDate = new Date(publishedAt);

  const timeDifference = currentDate.getTime() - publishedDate.getTime();
  const secondsDifference = timeDifference / 1000;
  const minutesDifference = secondsDifference / 60;
  const hoursDifference = minutesDifference / 60;
  const daysDifference = hoursDifference / 24;
  const monthsDifference = daysDifference / 30;
  const yearsDifference = monthsDifference / 12;

  if (yearsDifference >= 1) {
    return `${Math.floor(yearsDifference)} year${Math.floor(yearsDifference) > 1 ? 's' : ''} ago`;
  } else if (monthsDifference >= 1) {
    return `${Math.floor(monthsDifference)} month${Math.floor(monthsDifference) > 1 ? 's' : ''} ago`;
  } else if (daysDifference >= 1) {
    return `${Math.floor(daysDifference)} day${Math.floor(daysDifference) > 1 ? 's' : ''} ago`;
  } else if (hoursDifference >= 1) {
    return `${Math.floor(hoursDifference)} hour${Math.floor(hoursDifference) > 1 ? 's' : ''} ago`;
  } else if (minutesDifference >= 1) {
    return `${Math.floor(minutesDifference)} minute${Math.floor(minutesDifference) > 1 ? 's' : ''} ago`;
  } else {
    return `${Math.floor(secondsDifference)} second${Math.floor(secondsDifference) > 1 ? 's' : ''} ago`;
  }
}

export default useUploadDate;