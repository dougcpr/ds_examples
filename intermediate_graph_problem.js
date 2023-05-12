// Given a graph represented as an adjacency matrix and two vertices in the graph,
// write a function in JavaScript that returns the shortest path
// between the two vertices using Dijkstra's algorithm.
// source: ChatGPT

// four vertices
//    A  B  C  D
// A  0  1  1  0
// B  1  0  1  0
// C  1  1  0  1
// D  0  0  1  0

// 1 indicates that there is an edge between the two vertices
// 0 indicates that there is no edge.

// set the distance to infinity for each vertex
let distance = [0, 0, 0, 0]
let visited = [false, false, false, false]

// loop through the vertex's edges
const matrix = [[0, 1, 1, 0], [1, 0, 1, 0], [1, 1, 0, 1], [0, 0, 1, 0]];

function determineDistanceBetweenNodes(nodeOne, nodeTwo) {
    distance[nodeOne] = 0
    visited[nodeOne] = true;
    matrix.forEach((node, nodeIndex) => {
        node.forEach((connection, edge) => {
            if (!visited[edge] && connection) {
                distance[edge] += 1;
                visited[edge] = true;
            }
        })
        // if the node in question is being observed and the nodeTwo hasn't been detected, add 1 to the distance
        // because that assumes there is a connection
        if (!visited[nodeTwo] && nodeIndex === nodeOne) {
            distance[nodeTwo] += 1;
        }
    })
    if (!visited[nodeTwo]) {
        distance[nodeTwo] = undefined;
    }
    console.log(distance);
    console.log(`Distance between nodeOne and nodeTwo is: ${distance[nodeTwo]}`)
}

// nodes are defined by their index in the matrix
determineDistanceBetweenNodes(1, 3)

