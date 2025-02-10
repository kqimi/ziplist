function zipListTheFunctionalWay(list1: string[], list2: number[]): (string | number)[] {
  return list1.reduce<(string | number)[]>((acc, value, index) => {
    acc.push(value, list2[index]);
    return acc;
  }, []);
}

const list1 = ['a', 'b', 'c'];
const list2 = [1, 2, 3];

console.log(zipListTheFunctionalWay(list1, list2));
