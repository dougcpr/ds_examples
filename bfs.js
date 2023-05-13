function bfs(graph, startNode) {
    // visited to keep track of the visited nodes
    let visited = {};
    // queue to keep track of the nodes to visit
    let queue = [];

    visited[startNode] = true;
    queue.push(startNode);

    while (queue.length > 0) {
        let node = queue.shift();
        console.log(node);

        let adjacentNodes = graph[node];
        for (let i = 0; i < adjacentNodes.length; i++) {
            let adjacentNode = adjacentNodes[i];
            if (!visited[adjacentNode]) {
                visited[adjacentNode] = true;
                queue.push(adjacentNode);
            }
        }
    }
}

let graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['F'],
    'D': [],
    'E': ['F'],
    'F': []
};

bfs(graph, 'B');