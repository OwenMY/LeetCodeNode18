/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

/*
i - root node, num
o - return subtree
c - none
e - if val not found within the tree return -1

general plan
----------------
traverse the binary search tree recursively


psuedocode
if current node value is equal to the input value
  return current node
if val is less than current node and left node is not null
  return call searchBST on the left node
if val is greater than current node and right node is not null
  return call to searchBsy on the right side

return null
*/

function searchBST(root: TreeNode | null, val: number): TreeNode | null {
    if (root.val === val) {
        return root;
    }
    
    if (val < root.val && root.left) {
        return searchBST(root.left, val);
    } 

    if (val > root.val && root.right) {
        return searchBST(root.right, val);
    }

    return null;
};





