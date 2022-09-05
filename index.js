(function() {

 // Getting HTMLElements.
 const input = document.querySelector('input');
 const button = document.querySelector('button');
 const ol = document.querySelector('.tasks');
 const task = document.querySelector('li.task');
 const trash = document.querySelectorAll('.fa-trash')

 // Display TODO Data.
  button.addEventListener('click', function() {
    function addTODO() {
      if(input.value === '') {
        alert('Please Insert a Task');
       } else {
        const div = document.createElement('div');
        div.setAttribute('class', 'task--area');

        const li = document.createElement('li');
        li.setAttribute('class', 'task');
        li.innerText = input.value;
        div.appendChild(li);

        const div2 = document.createElement('div');
        div2.setAttribute('class', 'button--area');

        const checkBtn = document.createElement('button');
        const deleteBtn = document.createElement('button');
        checkBtn.setAttribute('id', 'check');
        deleteBtn.setAttribute('id', 'delete');
        checkBtn.innerHTML = '<i class="fa fa-check">'
        deleteBtn.innerHTML = '<i class="fa fa-trash">'
        div2.appendChild(checkBtn)
        div2.appendChild(deleteBtn);

        div.appendChild(div2)

        ol.appendChild(div);
        input.value = '';
       }
     }
     addTODO();
  });

 

 // Mark TODO Task as Done.
   function checkTask(e) {
    const item = e.target
    const todo = item.parentElement;
    todo.classList.toggle('completed')
   }
   checkTask();



}());