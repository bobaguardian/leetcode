class BST:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None


    # Average: O(log(n)) time | O(1) space
    # Worst: O(n) time | O(1) space
    def insert(self, value):
        curr = self
        while True:
            if value < curr.value:
                if curr.left is None:
                    curr.left = BST(value)
                    break

                else:
                    curr = curr.left

            elif value > curr.value:
                if curr.right is None:
                    curr.right = BST(value)
                    break

                else:
                    curr = curr.right


    # Average: O(log(n)) time | O(1) space
    # Worst: O(n) time | O(1) space
    def contains(self, value):
        curr = self

        while curr is not None:
            if value < curr.value:
                curr = curr.left
            elif value > curr.value:
                curr = curr.right
            else:
                return True

        return False


    # two step process: first find the node you want to remove, then
    # actually remove it. You're gonna want to keep track of the parent
    # node b/c when you remove the node, you want to reassign the parent's child
    # node (the node we're removing)
    # Average: O(log(n)) time | O(1) space
    # Worst: O(n) time | O(1) space
    def remove(self, value, parent = None):
        curr = self

        while curr is not None:
            if value < curr.value:
                parent = curr
                curr = curr.left

            elif value > curr.value:
                parent = curr
                curr = curr.right

            else: # the case where we have found the node
                # case: the node has two children nodes
                if curr.left is not None and curr.right is not None:
                    # set current node's value to the smallest value of the right subtree
                    curr.value = curr.right.getMinValue()
                    # now remove that smallest value node, passing the curr as the parent node
                    curr.right.remove(curr.value, curr)

                # case: no parent node = root node
                elif parent is None:
                    if curr.left is not None:
                        # replace the values and left/right of the current node with the curr.left's values and right/left
                        curr.value = curr.left.value
                        curr.right = curr.left.right
                        curr.left = curr.left.left
                    elif curr.right is not None:
                        curr.value = curr.right.value
                        curr.left = curr.right.left
                        curr.right = curr.right.right
                    else: # case where its a root node with no children => single node tree
                        pass # do nothing - discuss with interviewer edge case


                # case: there is a parent node
                # check if the current node itself is a left child or a right child
                elif parent.left == curr:
                    # reassign parent.left to either curr's left child node if its not None, else curr's right child node
                    parent.left = curr.left if curr.left is not None else curr.right

                elif parent.right == curr:
                    parent.right = curr.left if curr.left is not None else curr.right

                break # if we get to the point where we found the value and did all the removals if needed, break!

        return self



    def getMinValue(self):
        curr = self
        while curr.left is not None:
            curr = curr.left

        return curr.value
