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
          <a href="LecturerAboutUs.html"
            class="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
            <div class="grid place-items-center mr-4">
              <i class="fas fa-question text-blue-500"></i>
            </div>
            About
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
          <a href="javascript:void(0);" onclick="showNotImplementedAlert();"
            class="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
            <div class="grid place-items-center mr-4">
              <i class="fas fa-plus-circle text-blue-500"></i>
            </div>
            Create Course
          </a>
          <!--add a contact us page?-->
          <a href="LecturerContactUs.html"
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
            <a href="StudentAboutUs.html"
              class="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
              <div class="grid place-items-center mr-4">
                <i class="fas fa-question text-blue-500"></i>
              </div>
              About
            </a>
            <a href="SudentCourses.html"
              class="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
              <div class="grid place-items-center mr-4">
                <i class="fas fa-graduation-cap text-blue-500"></i>
              </div>
              Courses
            </a>
            <a href="StudentContactUs.html"
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




function showNotImplementedAlert() {
    alert("Not yet implemented");
}
// Define the new element
customElements.define('lecturer-sidebar-component', LecturerSidebarComponent);
customElements.define('student-sidebar-component', StudentSidebarComponent);
