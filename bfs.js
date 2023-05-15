function bfs(graph, startNode) {
    let queue = [];
    let visited = [];
    visited[startNode] = true;

    queue.push(startNode);
    while (queue.length > 0) {
        const node = queue.shift();
        const adjacentNodes = graph[node];
        adjacentNodes.forEach(adjacentNode  => {
            if (!visited[adjacentNode]) {
                visited[adjacentNode] = true;
                queue.push(adjacentNode);
            }
        })
        console.log(node)
    }
}

let graph = {
    'A': ['B', 'D'],
    'B': ['A', 'D', 'E'],
    'C': ['E'],
    'D': ['F'],
    'E': ['F'],
    'F': ['C']
};

bfs(graph, 'E');