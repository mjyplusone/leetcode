/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    var res = [];
    dfs(0, []);
    return res;
    
    function dfs (node, path) {
        path.push(node);
        if (node === graph.length - 1) {
            res.push(path);
            return;
        }
        for (let i = 0; i < graph[node].length; i++) {
            let currPath = path.slice(0);
            dfs(graph[node][i], currPath);
        }
    }
    
};

