(function() {

 // Getting HTMLElements.
 const input = document.querySelector('input');
 const button = document.querySelector('button');
 const ol = document.querySelector('.tasks');
 const task = document.querySelector('li.task');
 const check = document.querySelectorAll('.fa-check')
 const trash = document.querySelectorAll('.fa-trash')

 // Display TODO Data.
 // function displayTodoData() {
  button.addEventListener('click', function() {
   if(input.value === '') {
    alert('Please Insert a Task');
   } else {
    ol.innerHTML += `
    <div class="item">
       <li class="task">${input.value}</li>
       <div class="icons">
        <span><i class="fa fa-check"></i><i class="fa fa-trash"></i></span>
       </div>
      </div>
    `;
    input.value = '';
   }
  });
 // };

 // Delete TODO Data.
 check.forEach((btn) => {
  btn.addEventListener('click', function() {
   task.style.textDecoration = 'line-through';
  })
 });

 // // Delete TODO Data.
 // function deleteContent() {

 // };

 // Call Function.
 // displayTodoData(); 

}());