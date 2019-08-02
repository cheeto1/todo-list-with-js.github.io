const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');


const createTodo = todo => {
  const html = `
  <li class="list-group-item d-flex justify-content-between align-items-center">
  <span>${todo}</span>
  <i class="far fa-trash-alt delete"></i>
</li>`
;

list.innerHTML += html;

};

addForm.addEventListener('submit', event => {
  event.preventDefault();
  const todo = addForm.add.value.trim();

  if(todo.length){
    createTodo(todo);
    addForm.reset()
  }
});
// DELETE-SECTION
list.addEventListener('click', e => {
  if(e.target.classList.contains('delete')){
    e.target.parentElement.remove();
  }
});

const filterTodos = (term) => {
  Array.from(list.children)
  .filter(todo => !todo.textContent.toLowerCase().includes(term))
  .forEach(todo => todo.classList.add('filtered'));

  Array.from(list.children)
  .filter(todo => todo.textContent.toLowerCase().includes(term))
  .forEach(todo => todo.classList.remove('filtered'));
};

// SEARCH_SECTION
search.addEventListener('keyup', () => {
  const term = search.value.trim().toLowerCase();
  filterTodos(term);
});