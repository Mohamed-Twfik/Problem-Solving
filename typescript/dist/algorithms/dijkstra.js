"use strict";
// let dijkstra = (start, finish, graph)=>{
//     debugger
//     let costs = {},
//         parents= {},
//         processed = [],
//         neighborsOfStart = Object.keys(graph[start])
//     // Loop to fill initial costs hash table from graph hash table
//     for (const node in graph) {
//         if(neighborsOfStart.includes(node)){
//             costs[node] = graph[start][node]
//         }else{
//             costs[node] = Infinity
//         }
//     }
//     // Set neighbors of start in parents hash table
//     neighborsOfStart.forEach(e => {parents[e] = start})
//     // subcode of Algorithm
//     let lowest_node = get_lowest_cost_node(costs, processed)
//     while(lowest_node){
//         let neighbors = graph[lowest_node],
//             cost = costs[lowest_node]
//         for (const key in neighbors) {
//             let new_cost = cost + neighbors[key]
//             if(new_cost < costs[key]){
//                 costs[key] = new_cost
//                 parents[key] = lowest_node
//             }
//         }
//         processed.push(lowest_node)
//         lowest_node = get_lowest_cost_node(costs, processed)
//     }
//     return generate_path(parents, start, finish)
// }
// let get_lowest_cost_node = (costs, processed)=>{
//     let lowest_cost = Infinity,
//         lowest_cost_node = null
//     for (const key in costs) {
//         if(costs[key] < lowest_cost && !processed.includes(key)){
//             lowest_cost_node = key
//             lowest_cost = costs[key]
//         }
//     }
//     return lowest_cost_node
// }
// let generate_path = (parents, start, finish)=>{
//     let path = [],
//         node = finish
//     while(node){
//         path.unshift(node)
//         node = parents[node]
//     }
//     if(path[0] == start && path[path.length-1] == finish) return path
//     else return "Path Not Found :("
// }
// let graph = {
//     "A": {"B": 7, "C": 12},
//     "B": {"D": 9, "C": 2},
//     "C": {"E": 10},
//     "D": {"F": 1},
//     "E": {"F": 5, "D": 4},
//     "F": {}
// }
// console.log(dijkstra("A", "E", graph))
