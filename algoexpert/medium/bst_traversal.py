# Python implementations of inorder, preorder, and postorder
# BST traversals

def inorder_traversal(root):
  if not root:
    return

  inorder_traversal(root.left)
  print(root.value)
  inorder_traversal(root.right)


def preorder_traversal(root):
  if not root:
    return

  print(root.value)
  preorder_traversal(root.left)
  preorder_traversal(root.right)


def postorder_traversal(root):
  if not root:
    return

  postorder_traversal(root.left)
  postorder_traversal(root.right)
  print(root.value)
