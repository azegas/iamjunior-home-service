// run this file with node test.js


// let question = 'What is the capital of France?';
// let answer = 'Paris';

// console.log(question);
// console.log(answer);



// --------------------------

fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log('From fetch:', json))

// --------------------------

async function fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const json = await response.json();
    console.log('Fetching with async/await...');
    await new Promise(resolve => setTimeout(resolve, 3000));
    console.log('From async:', json);
  } catch (error) {
    console.error('Fetch error:', error.message);
  }
}
fetchData();

console.log('LOL, before everything');