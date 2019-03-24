<template>
    <nav class="navbar navbar-expand-md navbar-dark bg-info flex-row">
        <router-link class="navbar-brand mr-auto" to="/">Eka-Commerse</router-link>
        <ul class="navbar-nav flex-row mr-lg-0">
            <li class="nav-item">
                <a class="nav-link pr-2"><i class="fa fa-search"></i></a>
            </li>
            <li class="nav-item">
                <a class="nav-link pr-2"><i class="fab fa-facebook"></i></a>
            </li>
            <li class="nav-item dropdown">
                <a
                    class="nav-link dropdown-toggle mr-3 mr-lg-0"
                    id="navbarDropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false">
                    <i class="fa fa-user"></i>
                    <span class="caret"></span>
                </a>
                <div
                    class="dropdown-menu dropdown-menu-right"
                    aria-labelledby="navbarDropdownMenuLink">
                    <a class="dropdown-item" href="">User</a>
                    <router-link class="dropdown-item" to="/login">Login</router-link>
                </div>
            </li>
        </ul>
        <button
            class="navbar-toggler ml-lg-0"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
    </nav>
</template>


<script>
export default {
  name: 'navbar',
};
</script>

<style>
.navbar-expand-md .navbar-nav .dropdown-menu {
    position: absolute !important;
}

</style>
