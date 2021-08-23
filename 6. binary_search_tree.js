class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(root) {
        this.root = null;
    }
    insert(value) {
        let newNode = new Node(value);
        if(this.root === null) {
            this.root = newNode;
            return this;
        } else {
            let current = this.root;
            while(true) {
                if(value === current.value) return undefined;
                if(value < current.value) {
                    if(current.left === null) {
                        current.left = newNode;
                        return this;
                    } 
                    current = current.left;
                } else /* if(value > current.value) */ {
                    if(current.right === null) {
                        current.right = newNode;
                        return this;
                    } 
                    current = current.right;
                }
            }
        }
    }

    find(value) {
        if(this.root === null) return false; 
        let current = this.root,
            found = false;
            while(current && !found) {
                if(value < current.value) {
                    current = current.left;
                } else if(value > current.value) {
                    current = current.right;
                } else {
                    found = true;
                }
            }
            if(!found) return undefined;
            return current;
    }

    breadthFirstSearch() {
        let node = this.root,
            data = [],
            queue = [];
            queue.push(this.root);
            while(queue.length) {
                node = queue.shift();
                data.push(node/*node.value*/);
                if(node.left) queue.push(node.left);
                if(node.right) queue.push(node.right);
            }
            return data;
    }

    depthFirstSearchPreOrder() {
        let data = [],
            current = this.root;
            
            function traverse(node) {
                data.push(node.value);
                if(node.left) traverse(node.left);
                if(node.right) traverse(node.right);
            }
            traverse(current);
            return data;
    }  

    depthFirstSearchPostOrder() {
        let data = [],
            current = this.root; 
            function traverse(node) {
                if(node.left) traverse(node.left);
                if(node.right) traverse(node.right);
                data.push(node.value);
            }
            traverse(current);
            return data;
    }  

    depthFirstSearchPostOrder() {
        let data = [],
            current = this.root; 
            function traverse(node) {
                node.left && traverse(node.left); // or if(node.left) traverse(node.left);
                data.push(node.value);
                node.right && traverse(node.right) // or if(node.right) traverse(node.right);
            }
            traverse(current);
            return data;
    }    
}


//    10
//   5    13
//2   7 11  16

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(9);
tree.insert(14);
tree.insert(6);

