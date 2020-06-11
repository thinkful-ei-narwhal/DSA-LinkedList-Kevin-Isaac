const LinkedList = require('./linkedList');

function display(sll) {
	let currNode = sll.head;
	let i = 1;

	if (!sll.head) {
		return console.log('Linked list is empty');
	}
	while (currNode !== null) {
		console.log(currNode);
		console.log('i =', i);
		currNode = currNode.next;
		i++;
	}
}

function findPrevious(sll, item) {
	if (sll.head === null) {
		return console.log(`${item} is not in linked list`);
	} else {
		let previous = sll.head;
		let currNode = sll.head;

		while (currNode.value !== item) {
			previous = currNode;
			currNode = currNode.next;
			if (currNode === null) {
				return console.log(`${item} is not in linked list`);
			}
		}

		return console.log(previous);
	}
}

function findLast(sll) {
	if (sll.head === null) {
		return console.log('The linked list is empty');
	} else {
		let previous = sll.head;
		let currNode = sll.head;

		while (currNode !== null) {
			previous = currNode;
			currNode = currNode.next;
		}

		return console.log(previous);
	}
}

/* *****************************************************
       Mystery program
**************************************************/
function duplicate(lst) {
	let current = lst.head;
	while (current !== null) {
		let newNode = current;
		while (newNode.next !== null) {
			if (newNode.next.value === current.value) {
				newNode.next = newNode.next.next;
			} else {
				newNode = newNode.next;
			}
		}
		current = current.next;
	}
}
/* *****************************************************
                  Main
**************************************************/

function main() {
	const sll = new LinkedList();

	sll.insertFirst('Apollo');
	sll.insertFirst('Boomer');
	sll.insertFirst('Boomer');
	sll.insertFirst('Boomer');
	sll.insertFirst('Helo');
	sll.insertFirst('Husker');
	sll.insertFirst('Husker');
	sll.insertFirst('Boomer');
	sll.insertFirst('Starbuck');

	// sll.insertLast('Tauhida');
	//   sll.remove('squirrel');
	//   sll.insertBefore('Athena', 'Boomer');
	// sll.insertAfter('Hotdog', 'Helo');
	// sll.insertAt('Kat', 2);

	//findPrevious(sll, 'Helo');
	// findLast(sll);
	duplicate(sll);
	display(sll);
}

let run = main();
