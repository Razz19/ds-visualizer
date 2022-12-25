<template >
  <div>
    <div class="navbar bg-base-100 mt-3">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><router-link class="p-4" to="/">Home</router-link></li>
            <li><router-link class="p-4" to="/stack">Stack</router-link></li>
            <li><router-link class="p-4" to="/queue">Queue</router-link></li>

          </ul>
        </div>
        <a class="btn btn-ghost normal-case text-xl">Data Sctructures</a>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1">
          <li><router-link class="p-4" to="/">Binary Tree</router-link></li>
          <li><router-link class="p-4" to="/stack">Stack</router-link></li>
          <li><router-link class="p-4" to="/queue">Queue</router-link></li>
        </ul>
      </div>
      <div class="navbar-end mr-5" disabled>
        <p class="stat-title">by..</p>
      </div>
    </div>

    <div class="container mx-10  w-full">
      <router-view />
    </div>
  </div>
</template>
