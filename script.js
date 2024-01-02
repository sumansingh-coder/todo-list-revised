 
      
    
      $(document).ready(function(){
        
       
              function updateDateTime() {
         var now = new Date();
         var dateTimeCell = document.getElementById('dateTimeCell');
         
         var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
         var formattedDateTime = now.toLocaleDateString(undefined, options) + ' ' + now.toLocaleTimeString();
         
         dateTimeCell.textContent = formattedDateTime;
       }
       
       
       setInterval(updateDateTime, 1000);
       
       
       updateDateTime();
             var modal = document.getElementById('myModal');
     
     
     var btn = document.getElementById('openModalBtn');
     
     
     //var span = document.getElementsByClassName('close')[0];
     
     
     btn.onclick = function() {
       $('#bg').addClass('blur-body');
       modal.style.display = 'block';
        
     };
     function closeModal() {
       document.getElementById('myModal').style.display = 'none';
       $('#bg').removeClass('blur-body');
     }
     document.getElementById('closemodal').addEventListener('click', closeModal);
     var input1 = document.getElementById('t1');
     var input2 = document.getElementById('datetime');
     var addButton = document.getElementById('b1');
     var tbl=document.getElementById('myTable');
     
     function checkInputs() {
       var input1Value = input1.value.trim();
       var input2Value = input2.value.trim();
     
       
       if (input1Value !== '' && input2Value !== '') {
         addButton.disabled = false;
       } else {
         addButton.disabled = true;
       }
     }
     
     
     input1.addEventListener('input', checkInputs);
     input2.addEventListener('input', checkInputs);        
     
     
        
      
       $('#b1').click(function() {
         // Creating a new row for the task
         var newRow = $('<tr>');
         var cell1 = $('<td>').text(input1.value);
         var cell2 = $('<td>').text(input2.value);
         var cell3 = $('<td>').html('<button class="cell-button" onclick="window.finishtask(this)">Mark Finished</button>');
         
         // Setting attribute names
         cell1.attr('name','taskdesc');
         cell2.attr('name','timedate');
         cell3.attr('name',c);
         
         newRow.append(cell1, cell2, cell3);
         newRow.attr('id',c);
         $('#myTable').append(newRow);
         c = c + 1;
         
         // Clearing input fields and closing modal
         $('#t1').val('');
         $('#datetime').val('');
         $('#myModal').css('display', 'none');
         $('#bg').removeClass('blur-body');
         localStorage.setItem('tasks', $('#myTable').html());
       });
     
       // The finishtask function
        window.finishtask = function(button) {
         var row = $(button).closest('tr');
         var cell1 = row.find("td[name='taskdesc']");
         var cell2 = row.find("td[name='timedate']");
         
         // Applying style and changing button behavior
         cell1.css('text-decoration', 'line-through');
         cell2.css('text-decoration', 'line-through');
         
         $(button).text('Delete Task');
         $(button).attr('onclick', 'removetask(this)');
          localStorage.setItem('tasks', $('#myTable').html());
       }
     
       // The removetask function
       window.removetask = function(button) {
         $(button).closest('tr').remove();
         localStorage.setItem('tasks', $('#myTable').html());
       }
     
       var c = 1; // Counter for unique IDs
       
     });
     