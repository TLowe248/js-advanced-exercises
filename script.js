console.group("Exercise 1");

class Subject {
	constructor() {
		this.observers = [];
	}

	addObserver(observer) {
		this.observers.push(observer);
	}

	removeObserver(observer) {
		this.observers = this.observers.filter(obs => obs !== observer);
	}

	notifyObservers(data) {
		this.observers.forEach(obs => obs.update(data));
	}

	async fetchAndNotify() {
		const url = 'https://jsonplaceholder.typicode.com/posts?_limit=10';

		var posts = await fetch(url);
		posts = await posts.json();
		this.notifyObservers(posts);
	}
}

class Observer {
	update(data) {
		if (data instanceof Error) {
			console.log(data);
		} else {
			const [first] = data;
			const { title } = first;

			console.log("Title for exercise 4: " + title);
		}
	}
}

var subject = new Subject();
var observer = new Observer();
subject.addObserver(observer);
var observer2 = new Observer();
subject.addObserver(observer2);
// subject.notifyObservers();

console.groupEnd();

console.group("Exercise 2");

const person = {
	name: 'John',
	age: 30,
	address: {
		city: 'New York',
		country: 'USA',
	},
};

const fruits = ['apple', 'banana', 'cherry', 'date'];
const { name: personName, age, address: { city, country } } = person;
const [, second, , fourth] = fruits;

console.log("Name: " + personName + ", Age: " + age + ", City: " + city + ", Country: " + country + ", Second fruit: " + second + ", Fourth fruit: " + fourth);

console.groupEnd();

console.group("Exercise 3");

async function fetchPosts() {
	const url = 'https://jsonplaceholder.typicode.com/posts?_limit=10';

	// Your async/await code here
	var posts = await fetch(url);
	posts = await posts.json();
	return posts;
}

// Call the function to fetch posts
console.log("Posts: ");
fetchPosts().then(posts => posts.forEach(post => console.log("Exercise 3: " + post.title)));

console.groupEnd();

console.group("Exercise 4");

subject.fetchAndNotify();

console.groupEnd();