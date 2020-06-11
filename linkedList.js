class _Node {
	constructor(value, next) {
		this.value = value;
		this.next = next;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
	}

	insertFirst(item) {
		this.head = new _Node(item, this.head);
	}

	insertLast(item) {
		if (this.head === null) {
			this.insertFirst(item);
		} else {
			let tempNode = this.head;
			while (tempNode.next !== null) {
				//	console.log('value =', tempNode.value);
				tempNode = tempNode.next;
				//	console.log('next =', tempNode);
			}
			tempNode.next = new _Node(item, null);
		}
	}

	remove(item) {
		if (!this.head) {
			return null;
		}
		if (this.head.value === item) {
			this.head = this.head.next;
			return;
		}

		let currNode = this.head;
		let previousNode = this.head;

		while (currNode !== null && currNode.value !== item) {
			previousNode = currNode;
			currNode = currNode.next;
		}
		if (currNode === null) {
			console.log('Item not found');
			return;
		}
		previousNode.next = currNode.next;
	}

	find(item) {
		let currNode = this.head;
		if (!this.head) {
			return null;
		}
		while (currNode.value !== item) {
			if (currNode.next === null) {
				return null;
			} else {
				currNode = currNode.next;
			}
		}
		return currNode;
	}

	insertBefore(item, key) {
		let currNode = this.head;
		if (!this.head) {
			return null;
		}
		while (currNode.next.value !== key) {
			if (currNode.next.value === key) {
				//new item.next = currNode.next
				//set currNode.next = new item
				let newItem = new _Node(item, currNode.next);
				currNode.next = newItem;
				console.log('currNode =', currNode);
				console.log('currNode.next =', currNode.next);
			} else {
				currNode = currNode.next;
			}
		}
		return currNode;
	}
}

module.exports = LinkedList;
