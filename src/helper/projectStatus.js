export function checkProjectStatus(endDate) {
  const currentDate = new Date();
  const projectEndDate = new Date(endDate);

  if (currentDate > projectEndDate) {
    return false;
  } else {
    return true;
  }
}
