const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.mainTop= null;
}

root() {
    return this.mainTop;
}


add(data) {
    this.mainTop= addInside(this.mainTop, data);
    function addInside(value, data) {
        if (!value) {
            return new Node(data);
        }
        if (value.data === data) {
            return value;
        }
        if (data < value.data) {
            value.left = addInside(value.left, data);
        } else {
            value.right = addInside(value.right, data);
        }
        return value;
    }
}



has(data) {
    return searchInside(this.mainTop, data);
    function searchInside(value, data) {
        if (!value) {
            return false;
        }
        if (value.data === data) {
            return true;
        }
        return (data < value.data)
            ? searchInside(value.left, data)
            : searchInside(value.right, data);
    }
}


find(data) {
    return findInside(this.mainTop, data);
    function findInside(value, data) {
        if (!value) {
            return null;
        }
        if (value.data === data) {
            return value;
        }

        return (data < value.data)
            ? findInside(value.left, data)
            : findInside(value.right, data);
    }
}

remove(data) {
    this.mainTop = removeFromTree(this.mainTop, data);
    function removeFromTree(value, data) {
        if (!value) {
            return null;
        }
        if (data < value.data) {
            value.left = removeFromTree(value.left, data);
            return value;
        } else if (data > value.data) {
            value.right = removeFromTree(value.right, data);
            return value;
        } else {
            if ((!value.left) && (!value.right)) {
                return null;
            }
            if (!value.left) {
                value = value.right;
                return value;
            }
            if (!value.right) {
                value = value.left;
                return value;
            }
            let minFromRight = value.right;
            while (minFromRight.left) {
                minFromRight = minFromRight.left;
            }
            value.data = minFromRight.data;
            value.right = removeFromTree(value.right, minFromRight.data);
            return value;
        }
    }
}


min() {
    if (!this.mainTop) {
        return;
    }
    let value = this.mainTop;
    while (value.left) {
        value = value.left;
    }
    return value.data;
}


max() {
    if (!this.mainTop) {
        return;
    }
    let value = this.mainTop;
    while (value.right) {
        value = value.right;
    }
    return value.data;
}
}

module.exports = {
  BinarySearchTree
};