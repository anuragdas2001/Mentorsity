const searchInput = document.getElementById('search');
const list = document.getElementById('list');
searchInput.focus();
// API and data array
const API_URL = 'https://jsonplaceholder.typicode.com/photos';
let data = [];

// Fetch data from API
async function fetchData(){
  const response = await fetch(API_URL);
  data = await response.json();
  displayList(data); 
//   searchInput.focus();
}

// Display list 
function displayList(listItems){
  let html = '';
  listItems.forEach(item => {
    html += `<li>${item.title}</li>`;  
  });
  list.innerHTML = html;
}

// Filter function
function filterList(){
  const searchTerm = searchInput.value.toLowerCase();
  const filteredList = data.filter(item => {
    return item.title.toLowerCase().includes(searchTerm); 
  });
  displayList(filteredList);
}

// Event listeners
searchInput.addEventListener('keyup', filterList);

// Initial call
fetchData();