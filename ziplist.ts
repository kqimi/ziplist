function zipList(list1: string[], list2: number[]): unknown[] {
  const result = [];
  for (let i = 0; i < list1.length; i++) {
    result.push(list1[i], list2[i]);
  }
  return result;
}

function zipListTheFunctionalWay(list1: string[], list2: number[]): (string | number)[] {
  return list1.reduce<(string | number)[]>((acc, value, index) => {
    acc.push(value, list2[index]);
    return acc;
  }, []);
}

const list1 = ['a', 'b', 'c'];
const list2 = [1, 2, 3];

console.log(zipListTheFunctionalWay(list1, list2));
console.log(zipList(list1, list2));
