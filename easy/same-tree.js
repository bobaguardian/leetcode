/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

//  Given the roots of two binary trees p and q, write a
//  function to check if they are the same or not.
//  Two binary trees are considered the same if they are structurally
//  identical, and the nodes have the same value.

 const isSameTree = function(p, q) {
  // recursion
  // base case if p or q is null but not both return false
      // if p and q are null return true

   // check if p.val === q.val, if not return false

  // recursive cases
    // return isSameTree(p.left, q.left) && isSameTree(q.right, q.left)

  if ((!p || !q) && (!p && !q)) return false;

  if (!p && !q) return true;

  if (p.val !== q.val) return false;

  return isSameTree(p.left, q.left) && isSameTree(q.right, q.right);

};
