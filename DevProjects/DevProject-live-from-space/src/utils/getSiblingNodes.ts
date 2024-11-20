const getSiblingNodes = function (node: Node) {
  const siblings: ChildNode[] = []
  let sibling = node.parentNode.firstChild
  while (sibling) {
    if (sibling.nodeType === 1 && sibling !== node) {
      siblings.push(sibling)
    }
    sibling = sibling.nextSibling
  }
  return siblings
}

export default getSiblingNodes
