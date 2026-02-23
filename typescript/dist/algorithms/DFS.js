"use strict";
const depthFirstSearch = (graph, from = Object.keys(graph)[0], to = Object.keys(graph)[Object.keys(graph).length - 1]) => {
    const visited = {};
    const dfs = (node) => {
        if (!visited[node]) {
            visited[node] = true;
            graph[node].forEach(n => dfs(n));
        }
    };
    dfs(from);
    return Object.keys(visited);
};
const graphData1 = {
    "A": ["B", "C", "D"],
    "B": ["E", "A", "F"],
    "C": ["A", "F"],
    "D": ["A"],
    "E": ["B"],
    "F": ["B", "C"]
};
const graphData2 = {
    "A": ["B", "C"],
    "B": ["D", "C"],
    "C": ["E"],
    "D": ["F"],
    "E": ["F", "D"],
    "F": []
};
console.log(depthFirstSearch(graphData1));
console.log(depthFirstSearch(graphData2));
