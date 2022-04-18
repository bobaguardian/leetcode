'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

const SinglyLinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

const SinglyLinkedList = class {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertNode(nodeData) {
        const node = new SinglyLinkedListNode(nodeData);

        if (this.head == null) {
            this.head = node;
        } else {
            this.tail.next = node;
        }

        this.tail = node;
    }
};

function printSinglyLinkedList(node, sep, ws) {
    while (node != null) {
        ws.write(String(node.data));

        node = node.next;

        if (node != null) {
            ws.write(sep);
        }
    }
}



/*
 * Complete the 'createLinkedList' function below.
 *
 * The function is expected to return an INTEGER_SINGLY_LINKED_LIST.
 * The function accepts INTEGER_SINGLY_LINKED_LIST head as parameter.
 */

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 * process was to write out everything iteratively,
 * find the patterns, then transform it into a while loop
 * used dummyHead!
 *
 * Shoutout from Alex for the solution! :D
 */

function createLinkedList(head) {
    // Write your code here
    const dummyHead = new SinglyLinkedListNode();
    let newCurr = dummyHead;

    // while the old linked list has a node
    while (head) {
        let oldPrev = null; // keep track of prev in old LL
        let oldCurr = head; // current node (odd) in old LL
        head = head.next; // set new head node to be the next one

        // loop through old LL until reach end (oldCurr is always the odd node to add to new LL)
        while (oldCurr) {
            // if there is a prev, update the old LL's prev.next to point to the oldCurr.next,
            // basically removing the oldCurr node while maintaining order of old LL
            if (oldPrev) {
                oldPrev.next = oldCurr.next;
            }

            // set new LL's curr.next ot be a new node of that oldCurr's value
            newCurr.next = new SinglyLinkedListNode(oldCurr.data);
            // update newCurr's pointer
            newCurr = newCurr.next;

            // update old LL's prev and curr to jump two nodes over
            oldPrev = oldCurr.next;
            oldCurr = oldPrev?.next;
        }

    }

    // return new LL's head = dummy's next
    return dummyHead.next;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    let head = new SinglyLinkedList();

    const headCount = parseInt(readLine().trim(), 10);

    for (let i = 0; i < headCount; i++) {
        const headItem = parseInt(readLine().trim(), 10);
        head.insertNode(headItem);
    }

    const result = createLinkedList(head.head);

    printSinglyLinkedList(result, '\n', ws);
    ws.write('\n');

    ws.end();
}
