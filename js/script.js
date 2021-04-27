/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

// Function to create the LI element for each student
function createLi(currentItem) {
   // Create variables to hold new DOM elements
   let li = document.createElement('li');
   let div1 = document.createElement('div');
   let img = document.createElement('img');
   let h3 = document.createElement('h3');
   let spanEmail = document.createElement('span');
   let div2 = document.createElement('div');
   let spanDate = document.createElement('span');

   // Add values to each new DOM element
   li.classList.add("student-item", "cf");
   div1.classList.add("student-details");
   img.classList.add("avatar");
   img.src = `${currentItem.picture.large}`;
   img.alt = "Profile Picture";
   h3.innerHTML = `${currentItem.name.title} ${currentItem.name.first} ${currentItem.name.last}`;
   spanEmail.classList.add("email");
   spanEmail.innerHTML = `${currentItem.email}`;
   div2.classList.add("joined-details");
   spanDate.classList.add("date");
   spanDate.innerHTML = `${currentItem.registered.date}`;

   // Append new DOM elements to final Li item
   div1.appendChild(img);
   div1.appendChild(h3);
   div1.appendChild(spanEmail);
   li.appendChild(div1);
   div2.appendChild(spanDate);
   li.appendChild(div2);
   
   // Return the completed LI element
   return li;
}


/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

function showPage(list, page) {
   let startIndex = (page * 9) - 9;
   let endIndex = page * 9;
   let studentList = document.querySelector('.student-list');
   studentList.innerHTML = '';
   for (let i = 0; i<list.length; i++) {
      if (i >= startIndex && i < endIndex) {
         // let studentItem = createLi(list[i]);
         // studentList.appendChild(studentItem);
         let studentItem = `
            <li class="student-item cf">
               <div class="student-details">
                  <img class="avatar" src="${list[i].picture.large}" alt="Profile Picture">
                  <h3>${list[i].name.title} ${list[i].name.first} ${list[i].name.last}</h3>
                  <span class="email">${list[i].email}</span>
               </div>
                  <div class="joined-details">
                  <span class="date">Joined ${list[i].registered.date}</span>
                  </div>
            </li>
         `;
         studentList.insertAdjacentHTML("beforeend", studentItem);
      }
   }
 }

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/



// Call functions
showPage(data, 1);