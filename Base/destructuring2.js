const [a] = [10]
console.log(a); // 10

const [n1, , n3, , n5, n6 = 0] = [1, 2, 3, 4, 5]
console.log(n1, n3, n5, n6); // 1 3 5 0

const [, [, nota]] = [[, 8, 9], [9, 6, 7]]
console.log(nota); // 6
