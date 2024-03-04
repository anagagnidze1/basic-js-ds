const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    this.rootNode  = this.addNewNode(this.rootNode, data);
  }

  addNewNode(node, data) {
    if (!node) {
      return new Node(data);
    }

    if (data < node.data) {
      node.left = this.addNewNode(node.left, data);
    } else {
      node.right = this.addNewNode(node.right, data);
    }

    return node;
  }

  has(data) {
    return this.find(data) ? true : false;
  }

  find(data) {
    return this.findNode(this.rootNode, data);
  }

  findNode(node, data) {
    if (!node) {
      return null;
    }

    if (node.data === data) {
      return node;
    }

    if (data < node.data) {
      return this.findNode(node.left, data);
    } else {
      return this.findNode(node.right, data);
    }
  }

  remove(data) {
    this.rootNode = this.removeNode(this.rootNode, data);
  }

  removeNode(node, data) {
    if (!node) {
      return null;
    }

    if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    } else if (node.data < data) {
      node.right = this.removeNode(node.right, data);
      return node;
    } else {
      if (!node.left || !node.right) {
        return node.left || node.right;
      }

      let minNode = node.right;
      while (minNode.left) {
        minNode = minNode.left;
      }
      node.data = minNode.data;

      node.right = this.removeNode(node.right, minNode.data);

      return node;
    }
  }

  min() {
    if (!this.rootNode) {
      return null;
    }
    let currentNode = this.rootNode;
    while (currentNode.left !== null) {
      currentNode = currentNode.left;
    }
    return currentNode.data;
  }

  max() {
    if (!this.rootNode) {
      return null;
    }
    let currentNode = this.rootNode;
    while (currentNode.right !== null) {
      currentNode = currentNode.right;
    }
    return currentNode.data;
  }
}

module.exports = {
  BinarySearchTree
};