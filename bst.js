const util = require('util');
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
};

class Tree {
    construcor() {
        this.root = null;
    }

    push(value) {
        let newNode = new Node(value)
        if(!this.root) {
            this.root = newNode;
        } else {
            let temp = this.root;
            while(temp) {
                if(temp.value > value) {
                    if(temp.left) {
                        temp = temp.left;
                    } else {
                        temp.left = newNode;
                        break;
                    }
                } else {
                    if(temp.right) {
                        temp = temp.right;
                    } else {
                        temp.right = newNode;
                        break;
                    }
                }
            }
        }
    }
    print() {
        let temp = this.root;
        if(!this.root) return false;
        console.log(temp.value);
        while(temp) {
            if(temp.right) {
                temp = temp.right;
            } else if(temp.left) {
                temp = temp.left;
            } else {
                break;
            }
            console.log(temp.value);
        }
        temp = this.root;
        while(temp) {
            if(temp.left) {
                temp = temp.left;
            } else if(temp.right) {
                temp = temp.right;
            } else {
                break;
            }
            console.log(temp.value);
        }
    }
    find(value) {
        console.log('looking for', value);
        let temp = this.root;
        let passes = 0;
        if(!this.root) return {is: false, passes};
        if(this.root.value === value) return {is: true, passes}; 
        while(temp) {
            if(temp.value === value) return {is: true, passes};
            if(temp.value < value) {
                if(temp.right) {
                    temp = temp.right;
                    console.log('right');
                } else {
                    return {is: false, passes};
                }
                
            } else {
                if(temp.left) {
                    temp = temp.left;
                    console.log('left');
                } else {
                    return {is: false, passes};
                }
            }
            passes++;
        }
    }
};

const tree = new Tree();
tree.push(11);
tree.push(10);
tree.push(12);
tree.push(32);
tree.push(13);
tree.push(0);
tree.push(17);
tree.push(43);
tree.push(8);
tree.push(10);
console.log(util.inspect(tree, false, null));
console.log(tree.find(53));
console.log(tree.find(7));
console.log(tree.find(32));
console.log(tree.find(17));
console.log(tree.find(0));

