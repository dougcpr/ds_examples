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
        // check the adjacent nodes
        let adjacentNodes = graph[node];
        // loop over every adjacent node and see if it was visited
        adjacentNodes.forEach(adjacentNode => {
            if(!visited[adjacentNode]) {
                visited[adjacentNode] = true;
                // if it was visited, like B for A
                // push it into the queue so the adjacent nodes
                // of that can be visited
                queue.push(adjacentNode);
            }
        })
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

bfs(graph, 'A');