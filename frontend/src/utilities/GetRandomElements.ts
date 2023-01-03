export function getRandomElements(arr: any[], numElements: number) {
  const result = [];

  while (result.length < numElements) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    result.push(arr.splice(randomIndex, 1)[0]);
  }

  return result;
}
