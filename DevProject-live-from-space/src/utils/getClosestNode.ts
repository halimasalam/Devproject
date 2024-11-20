const getClosestNode = function (node: Node, selector: string) {
  for (; node && node !== document; node = node.parentNode) {
    if ((node as Element).matches(selector)) return node
  }
  return null
}

export default getClosestNode
