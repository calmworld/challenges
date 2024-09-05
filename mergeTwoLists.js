/*
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

 

Example 1:


Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:

Input: list1 = [], list2 = []
Output: []
Example 3:

Input: list1 = [], list2 = [0]
Output: [0]
 

Constraints:

The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both list1 and list2 are sorted in non-decreasing order.
*/


// Solution notes
/*
- Using dummpy pointer to point to the head-node(first item) of the merged list
- We will compare the values of the first nodes of the two lists
- We will then point the next node of the merged list to the node with the smaller value
- We will then move the pointer of the merged list to the next node
- We will then repeat the process until we reach the end of one of the lists
- We will then return the next node of the dummy pointer

- Time complexity: O(n + m) where n is the length of list1 and m is the length of list2
- Space complexity: O(1) as we are not using any extra space
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */


class ListNode {
    constructor(val = 0, next = null) {
      this.val = val;
      this.next = next;
    }
  }

// Function to merge two sorted linked lists
function mergeTwoLists(list1, list2) {
    let dummy = new ListNode();
    let current = dummy;
  
    while (list1 !== null && list2 !== null) {
      if (list1.val <= list2.val) {
        current.next = list1;
        list1 = list1.next;
      } else {
        current.next = list2;
        list2 = list2.next;
      }
      current = current.next;
    }
  
    // Attach the remaining part of the list that is not null
    if (list1 !== null) {
      current.next = list1;
    } else {
      current.next = list2;
    }
  
    return dummy.next;
  }

// Helper function to convert array to linked list
const arrayToList = (arr) => {
    let dummy = new ListNode();
    let current = dummy;
    for (let val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummy.next;
}

// Convert the result linked list back to an array for easy comparison
const listToArray = (list) => {
    let arr = [];
    while (list) {
        arr.push(list.val);
        list = list.next;
    }
    return arr;
}

// Test the mergeTwoLists function
const list1 = arrayToList([1, 2, 4]);
const list2 = arrayToList([1, 3, 4]);
const result = mergeTwoLists(list1, list2);

// expected result: [1, 1, 2, 3, 4, 4]
console.log(listToArray(result)); // [1, 1, 2, 3, 4, 4]

/*

Step by Step Algorithm
Initialize variables:

We create a dummy node to serve as the starting point of the merged list.
We initialize a pointer cur to keep track of the current node in the merged list, initially pointing to the dummy node.
dummy = ListNode()
cur = dummy
Merge the lists:

We iterate through both lists until either list1 or list2 becomes None.
At each iteration, we compare the values of the current nodes of list1 and list2.
If the value of the current node in list1 is greater than that of list2, we append the current node of list2 to the merged list and move list2 pointer to the next node.
Otherwise, we append the current node of list1 to the merged list and move list1 pointer to the next node.
while list1 and list2:
    if list1.val > list2.val:
        cur.next = list2
        list2 = list2.next
    else:
        cur.next = list1
        list1 = list1.next
    
    cur = cur.next
Append remaining nodes:

After the loop, if there are remaining nodes in either list1 or list2, we append them to the end of the merged list.
if list1:
    cur.next = list1
else:
    cur.next = list2
Return the merged list:

We return the next node after the dummy node, which is the head of the merged list.
return dummy.next
This algorithm effectively merges two sorted lists into one sorted list by splicing together their nodes.

*/