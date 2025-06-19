class SinglyLinkedListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

const head1 = new SinglyLinkedListNode(1);
head1.next = new SinglyLinkedListNode(2);
head1.next.next = new SinglyLinkedListNode(3);

const head2 = new SinglyLinkedListNode(3);
head2.next = new SinglyLinkedListNode(4);

function mergeLists(head1, head2) {
  let dummy = new SinglyLinkedListNode(0);

  let current = dummy;

  while (head1 !== null && head2 !== null) {
    if (head1.data <= head2.data) {
      current.next = head1;
      head1 = head1.next;
    } else {
      current.next = head2;
      head2 = head2.next;
    }
    current = current.next; // ✅ move pointer forward
  }

  // Attach the remaining part
  if (head1 !== null) {
    current.next = head1;
  } else {
    current.next = head2;
  }

  return dummy.next;
}

//Hackerrank submitted code
/**
 * 
function mergeLists(head1, head2) {
  let dummy = new SinglyLinkedListNode(0); // a dummy starting node
  let current = dummy;

  while (head1 !== null && head2 !== null) {
    if (head1.data <= head2.data) {
      current.next = head1;
      head1 = head1.next;
    } else {
      current.next = head2;
      head2 = head2.next;
    }
    current = current.next;
  }

  // Attach the remaining part
  if (head1 !== null) {
    current.next = head1;
  } else {
    current.next = head2;
  }

  return dummy.next; // Return head of the merged list
}
 */


let output = mergeLists(head1, head2);
console.log(`output: `);
while (output !== null) {
  console.log(output.data);
  output = output.next;
}
