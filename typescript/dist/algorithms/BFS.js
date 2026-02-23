"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LinkedQueue_1 = __importDefault(require("../dataStructures/LinkedQueue"));
const breadsFirstSearch = (graph, from = Object.keys(graph)[0], to = Object.keys(graph)[Object.keys(graph).length - 1]) => {
    const visited = {};
    const queue = new LinkedQueue_1.default();
    graph[from].forEach(node => queue.push(node));
    visited[from] = true;
    let node;
    while (!queue.isEmpty()) {
        node = queue.pop();
        if (!visited[node]) {
            visited[node] = true;
            if (node === to)
                return Object.keys(visited);
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
exports.default = breadsFirstSearch;
