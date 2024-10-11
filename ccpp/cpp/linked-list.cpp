#include <iostream>

#define sizeOfArray(x) ((sizeof(x))/(sizeof(*x)))

class Node {
	private:
		int item;
		Node *next;
	public:
		Node(int item, Node *next) {
			this->item = item;
			this->next = next;
		}
		Node(int item) {
			this->item  = item;
			this->next = NULL;
		}
		int getItem() {
			return item;
		}
		void setItem(int item) {
			this->item = item;
		}
		Node * getNext() {
			return next;
		}
		void setNext(Node* next) {
			this->next = next;
		}
};

class List {
	private:
		Node first = Node(0);
		int length = 1;
	public:
		List() {
		}
		List(int firstValue) {
			first.setItem(firstValue);
			length = 1;
		}
		List(Node first, int length) {
			(this->first).setItem(first.getItem());
			(this->first).setNext(first.getNext());
			this->length = length;
		}
		static List fromArray(int valuesLength, int values[]) {
			List newList(values[0]);
			for(int i = 1; i < valuesLength; i++) {
				newList.add(values[i]);
			}
			return newList;
		}
		int get(int position) {
			if(position < 0) return first.getItem();

			Node *node = &first;
			for(int i = 0; i < position; i++) {
				if(node->getNext() == NULL) break;
				node = node->getNext();
			}

			return node->getItem();
		}
		int getLength() {
			return length;
		}
		void add(int value) {
			Node *node = &first;

			while(1) {

				if(node->getNext()==NULL) break;
				node = node->getNext();
			}
			node->setNext(new Node(value));
			length++;
		}

		List reversed() {
			Node *revrListNode = new Node(first.getItem());
			Node *thisListNode = first.getNext();
			while(1) {
				Node *aux = new Node(thisListNode->getItem());
				aux->setNext(revrListNode);
				revrListNode = aux;
				thisListNode = thisListNode->getNext();
				if(thisListNode==NULL) break;
			}
			return List(*revrListNode, length);
		}
};

int main() {
	int values[3] = {1, 2, 3};
	List list = List::fromArray(sizeOfArray(values), values);
	std::cout<<"Length of the list: "<<list.getLength()<<std::endl;
	std::cout<<"Values:"<<std::endl;
	for(int i = 0; i < list.getLength(); i++) {
		std::cout<<"Item "<<i<<": "<<list.get(i)<<std::endl;
	}

	List revrList = list.reversed();
	std::cout<<"Values of reversed:"<<std::endl;
	for(int i = 0; i < revrList.getLength(); i++) {
		std::cout<<"Item "<<i<<": "<<revrList.get(i)<<std::endl;
	}

	return 0;
}
