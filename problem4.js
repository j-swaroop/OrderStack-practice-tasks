function Node(data) {
  return {
    data: data,
    left: null,
    right: null,
  };
}

function insertNode(node, ele) {
  if (node === null) {
    let newNode = Node(ele);
    // console.log(newNode)
    return newNode;
  }

  if (ele > node.data) {
    node.right = insertNode(node.right, ele);
  } else if (ele < node.data) {
    node.left = insertNode(node.left, ele);
  }

  // console.log(node)
  return node;
}

function search(node, key) {
  if (node === null || node.data === key) {
    // console.log(node, key)
    return node;
  }

  if (key > node.data) {
    // console.log(node, key)
    return search(node.right, key);
  } else {
    // console.log(node, key)
    return search(node.left, key);
  }
}

let stack = Node(50);
insertNode(stack, 30);
insertNode(stack, 20);
insertNode(stack, 40);
insertNode(stack, 70);
insertNode(stack, 60);
insertNode(stack, 80);

console.log(stack);
console.log(search(stack, 22) !== null ? true : false); // false
console.log(search(stack, 80) !== null ? true : false); // true
