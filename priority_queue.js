class Node {
    constructor(value, priority) {
        this.value = value;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.values = [];
    }
    
    enqueue(value, priority) {
        let newNode = new Node(value, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }
    
    bubbleUp() {
        let index = this.values.length - 1;
        const element = this.values[index];
        while(index > 0) {
            let parentIndex = Math.floor((index - 1) / 2),
                parent = this.values[parentIndex];
                if(element.priority >= parent.priority) break;
                this.values[parentIndex] = element;
                this.values[index] = parent;
                index = parentIndex;
        }
    }
    
    dequeue() {
        const min = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0) {
         this.values[0] = end;
         // (sink / trickle) down
         this.sinkDown();   
        }
        return min;
    }

    sinkDown(){
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while(true){
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild,rightChild;
            let swap = null;

            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx];
                if(leftChild.priority < element.priority) {
                    swap = leftChildIdx;
                }
            }
            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                if(
                    (swap === null && rightChild.priority < element.priority) || 
                    (swap !== null && rightChild.priority < leftChild.priority)
                ) {
                   swap = rightChildIdx;
                }
            }
            if(swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}

let ER = new PriorityQueue();
ER.enqueue("fever", 8);
ER.enqueue("wounds", 5);
ER.enqueue("disarhea", 2);
ER.enqueue("cough", 1);