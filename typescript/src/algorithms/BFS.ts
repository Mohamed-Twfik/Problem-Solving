import LinkedQueue from "../dataStructures/LinkedQueue";

type graph = {
  [key: string]: string[];
};

const breadsFirstSearch = (graph: graph, from: string = Object.keys(graph)[0], to: string = Object.keys(graph)[Object.keys(graph).length - 1]): string[] => {
  const visited: { [key: string]: boolean } = {};
  const queue = new LinkedQueue<string>();
  graph[from].forEach(node => queue.push(node));
  visited[from] = true;
  let node: string;
  while (!queue.isEmpty()) {
    node = queue.pop() as string;
    if (!visited[node]) {
      visited[node] = true;
      if (node === to) return Object.keys(visited);
      graph[node].forEach(n => queue.push(n));
    }
  }
  return Object.keys(visited);
};

// const graphData1: graph = {
//   "A": ["B", "C", "D"],
//   "B": ["E", "A", "F"],
//   "C": ["A", "F"],
//   "D": ["A"],
//   "E": ["B"],
//   "F": ["B", "C"]
// };

// const graphData2: graph = {
//     "A": ["B", "C"],
//     "B": ["D", "C"],
//     "C": ["E"],
//     "D": ["F"],
//     "E": ["F", "D"],
//     "F": []
// }

// console.log(breadsFirstSearch(graphData1, "B", "D"));
// console.log(breadsFirstSearch(graphData2, "B", "E"));

export default breadsFirstSearch;