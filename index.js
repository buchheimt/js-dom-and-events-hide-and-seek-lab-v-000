const getFirstSelector = (selector) => {
  return document.querySelector(selector);
}

const nestedTarget = () => {
  return document.querySelector('#nested .target');
}

const increaseRankBy = (n) => {
  const liList = document.querySelectorAll('.ranked-list li');
  for (let i = 0; i < liList.length; i++) {
    liList[i].textContent = parseInt(liList[i].textContent) + n;
  }
}

const deepestChild = () => {
  let currentNode = document.querySelector("#grand-node");
  let nextNode = currentNode.querySelector("div");
  while (nextNode !== null) {
    currentNode = nextNode;
    nextNode = nextNode.querySelector("div");
  }
  return currentNode;
}
