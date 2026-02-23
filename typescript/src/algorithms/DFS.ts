type graph = {
  [key: string]: string[];
};

const depthFirstSearch = (graph: graph, from: string = Object.keys(graph)[0], to: string = Object.keys(graph)[Object.keys(graph).length - 1]): string[] => {
  const visited: { [key: string]: boolean } = {};
  const dfs = (node: string) => {
    if (!visited[node]) {
      visited[node] = true;
      graph[node].forEach(n => dfs(n));
    }
  }
  dfs(from);
  return Object.keys(visited);
};

const graphData1: graph = {
  "A": ["B", "C", "D"],
  "B": ["E", "A", "F"],
  "C": ["A", "F"],
  "D": ["A"],
  "E": ["B"],
  "F": ["B", "C"]
};

const graphData2: graph = {
    "A": ["B", "C"],
    "B": ["D", "C"],
    "C": ["E"],
    "D": ["F"],
    "E": ["F", "D"],
    "F": []
}

console.log(depthFirstSearch(graphData1));
console.log(depthFirstSearch(graphData2));