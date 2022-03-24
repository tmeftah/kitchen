<script>
  import { Router, Route, Link } from "svelte-navigator";
  import auth from "./authService";
  import { isAuthenticated, user } from "./store";
  import Profile from "./Profile.svelte";

  export let url = "";
</script>

<div class="">
  <Router url="{url}">
    <!-- Application -->

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="/">Kitchen</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link" to="about">About</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="profile">Profile</Link>
            </li>
          </ul>
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">Search</button
            >
          </form>
        </div>
        {#if $isAuthenticated}
          <button class="btn btn-danger ms-3" on:click="{auth.logout}"
            >Logout</button
          >
        {:else}
          <button class="btn btn-success ms-3" on:click="{auth.login}"
            >Login</button
          >
        {/if}
      </div>
    </nav>

    <Route path="/">
      <Profile />
    </Route>

    {#if $isAuthenticated}
      <Route path="about">
        <h1>
          Hello {#if $user.name}
            {$user.name}
          {:else}
            <span class="saving"
              ><span>.</span><span>.</span><span>.</span></span
            >
          {/if}
        </h1>
      </Route>
    {/if}

    <Route path="profile">profile</Route>
  </Router>
</div>
