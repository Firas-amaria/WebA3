class LecturerSidebarComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
      <aside class="w-64 bg-white border-gray-400 flex flex-col justify-between h-screen">
      <!-- Sidebar Content -->
      <div>
        <div class="profile p-8 text-center">
          <img src="images/pic_3.jpg" class="h-20 w-20 rounded-full object-cover mx-auto mb-2">
          <h3 class="text-xl text-black">mariam sam</h3>
          <p class="text-gray-500">Lecturer</p>
        </div>
        <nav class="flex flex-col gap-1 min-w-[240px] p-2 font-sans text-base font-normal text-gray-700">
          <a href="LecturerHome.html"
            class="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
            <div class="grid place-items-center mr-4">
              <i class="fas fa-home text-blue-500"></i>
            </div>
            Home
          </a>
          <!--add a about us page?-->
          <a href="AboutUs.html"
            class="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
            <div class="grid place-items-center mr-4">
              <i class="fas fa-question text-blue-500"></i>
            </div>
            About Us
          </a>
  
          <div
            class="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer text-white hover:bg-blue-100">
            <i class="fas fa-graduation-cap text-blue-500"></i>
            <div class="flex justify-between w-full items-center" onclick="dropDown()">
              <span class="text-[15px] ml-4 text-black ">My Courses</span>
              <span class="text-sm rotate-180" id="arrow">
                <i class="bi bi-chevron-down text-blue-500 "></i>
              </span>
            </div>
          </div>
          <div class=" leading-7 text-left text-sm font-thin mt-2 w-4/5 mx-auto" id="submenu">
            <a href="LecturerCourses.html" class="cursor-pointer p-2 text-black rounded-md mt-1 hover:bg-blue-50">course
              1</a>
            <a href="LecturerCourses.html" class="cursor-pointer p-2 text-black rounded-md mt-1 hover:bg-blue-50">course
              2</a>
          </div>
          <!--add a create course page page?-->
          <a href="LecturerCreateCourses.html" 
            class="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
            <div class="grid place-items-center mr-4">
              <i class="fas fa-plus-circle text-blue-500"></i>
            </div>
            Create Course
          </a>
          <!--add a contact us page?-->
          <a href="ContactUs.html"
            class="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
            <div class="grid place-items-center mr-4">
              <i class="fas fa-headset text-blue-500"></i>
            </div>
            Contact Us
          </a>
        </nav>
      </div>
      <!-- Logout Button -->
      <div class="px-4 pb-4">
        <a href="index.html" onclick="return confirm('Are you sure you want to log out?');"
          class="flex items-center justify-center bg-red-500 hover:bg-red-700 text-white p-2 rounded-lg transition-colors duration-150 ease-in-out">
          <i class="fas fa-sign-out-alt text-sm"></i>
          <span class="ml-2 text-sm">Logout</span>
        </a>
      </div>
    </aside>
      `;
    }
}


class StudentSidebarComponent extends HTMLElement {
  connectedCallback() {
      this.innerHTML = `
      <!-- Sidebar -->
      <aside class="w-64 bg-white border-gray-400 flex flex-col justify-between h-screen">
        <!-- Sidebar Content -->
        <div>
          <div class="profile p-8 text-center">
            <img src="images/pic_7.jpg" class="h-20 w-20 rounded-full object-cover mx-auto mb-2">
            <h3 class="text-xl text-black">Samira Dabbah</h3>
            <p class="text-gray-500">Student</p>
          </div>
          <nav class="flex flex-col gap-1 min-w-[240px] p-2 font-sans text-base font-normal text-gray-700">
            <a href="StudentHome.html"
              class="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
              <div class="grid place-items-center mr-4">
                <i class="fas fa-home text-blue-500"></i>
              </div>
              Home
            </a>
            <a href="AboutUs.html"
              class="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
              <div class="grid place-items-center mr-4">
                <i class="fas fa-question text-blue-500"></i>
              </div>
              About Us
            </a>
            <a href="SudentCourses.html"
              class="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
              <div class="grid place-items-center mr-4">
                <i class="fas fa-graduation-cap text-blue-500"></i>
              </div>
              Courses
            </a>
            <a href="ContactUs.html"
              class="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
              <div class="grid place-items-center mr-4">
                <i class="fas fa-headset text-blue-500"></i>
              </div>
              Contact Us
            </a>
          </nav>
        </div>
    
        <!-- Adjusted Logout Button -->
        <div class="px-4 pb-4">
          <a href="index.html" onclick="return confirm('Are you sure you want to log out?');"
            class="flex items-center justify-center bg-red-500 hover:bg-red-700 text-white p-2 rounded-lg transition-colors duration-150 ease-in-out">
            <i class="fas fa-sign-out-alt text-sm"></i>
            <span class="ml-2 text-sm">Logout</span>
          </a>
        </div>
      </aside>
    `;
  }
}

class PageHeaderComponent extends HTMLElement {
  connectedCallback() {
      this.innerHTML = `
      <header class="bg-white p-1 border-b-2 border-gray-400">
      <!-- Header Content -->
      <div class="flex items-center justify-between border-b border-gray-300 p-4">
        <a href="LecturerHome.html" class="text-xl text-black font-semibold">LMS.</a>
        <div class="relative mx-auto text-gray-600">
          <input class="border-2 border-gray-300 bg-white h-8 px-3 pr-16 rounded-lg text-sm focus:outline-none"
            type="search" name="search" placeholder="Search">
          <button type="submit" class="absolute right-0 top-0 mt-2 mr-2">
            <svg class="text-gray-600 h-3 w-3 fill-current" xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px"
              viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;" xml:space="preserve"
              width="512px" height="512px">
              <path
                d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
            </svg>
          </button>
        </div>
        <div class="flex items-center space-x-2">
          <div id="user-btn" class="text-xl cursor-pointer">
            <i class="fas fa-user"></i>
          </div>
          <div id="toggle-btn" class="text-xl cursor-pointer">
            <i class="fas fa-moon"></i>
          </div>

        </div>
      </div>
    </header>
    `;
  }
}

class PageFooterComponent extends HTMLElement {
  connectedCallback() {
      this.innerHTML = `
      <footer class="bg-white p-4 border-t-2  border-gray-400 text-center">
      <!-- Footer Content -->
      <p>&copy; 2024 LMS. All rights reserved.</p>
    </footer>
    `;
  }
}




function showNotImplementedAlert() {
    alert("Not yet implemented");
}

// Define the new element
customElements.define('page-footer-component', PageFooterComponent);

customElements.define('page-header-component', PageHeaderComponent);
customElements.define('lecturer-sidebar-component', LecturerSidebarComponent);
customElements.define('student-sidebar-component', StudentSidebarComponent);


document.getElementById('createCourseBtn').addEventListener('click', function() {
  window.location.href = 'LecturerHome.html';
});


document.addEventListener('DOMContentLoaded', function() {
  const videoSection = document.querySelector('.playlist-videos .grid');

  // Handler for removing a video card
  videoSection.addEventListener('click', function(event) {
      if (event.target.classList.contains('fa-times')) {
          event.target.closest('div.relative').remove();
      }
  });

  // Handler for adding a new video card
  // Note: This is a placeholder and should be replaced with your actual video adding logic
  videoSection.querySelector('.fa-plus').parentNode.addEventListener('click', function() {
      alert('Add new video functionality not implemented.');
  });
});