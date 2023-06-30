<script setup>
import { RouterLink } from 'vue-router'

const toggleMenu = () => {
  const nav = document.querySelector('.navbar-collapse')
  nav.classList.toggle('show')
}

</script>

<template>  
  <div class="top">
    <div class="container">
        <div class="brand">
          <RouterLink class="navbar-brand" to="/">
            <!-- Logo UGB -->
            <img src="/img/logoUGB.png" alt="Logo UGB" />
            <!-- Logo Verde -->
            <img src="/img/logoVerde.png" alt="Logo Verde" />
          </RouterLink>
          <span class="navbar-text" @click="toggleMenu" style="float:right">
            <RouterLink class="btn" :to="{ name: '' }">Contáctanos</RouterLink>
          </span>
        </div>        
    </div>
  </div>
  <header class="header">
    <nav class="navbar navbar-expand-lg">
      <div class="container">        
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#controlNav"
          aria-controls="controlNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="controlNav">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0" @click="toggleMenu">
            <li class="nav-item">
              <RouterLink class="nav-link" :to="{ name: 'inicio' }">
                Inicio</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" :to="{ name: 'inicio' }">
                Proyectos</RouterLink>
            </li>
          </ul>
          <!-- social links -->
          <ul class="navbar-nav d-flex flex-row">
                <!-- Icons -->
                <li class="nav-item me-3 me-lg-0">
                    <a class="nav-link" href="https://www.facebook.com/ugboficial/" target="_blank">
                      <i class="bi bi-facebook"></i>
                    </a>
                </li>
                <li class="nav-item me-3 me-lg-0">
                    <a class="nav-link" href="https://www.instagram.com/ugb.sv/#" target="_blank">
                      <i class="bi bi-instagram"></i>
                    </a>
                </li>
                <li class="nav-item me-3 me-lg-0">
                    <a class="nav-link" href="https://www.linkedin.com/company/ugb-sv/" target="_blank">
                      <i class="bi bi-linkedin"></i>
                    </a>
                </li>
                <li class="nav-item me-3 me-lg-0">
                    <a class="nav-link" href="https://twitter.com/UGB_SV" target="_blank">
                      <i class="bi bi-twitter"></i>
                    </a>
                </li>
                <li class="nav-item me-3 me-lg-0">
                    <a class="nav-link" href="https://www.youtube.com/user/VideosUGB" target="_blank">
                      <i class="bi bi-youtube"></i>
                    </a>
                </li>               
            </ul>

        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: #fff;
  padding: 0.4rem 2rem;
  box-shadow: 0px 10px 60px 0px rgba(0, 0, 0, 0.05);
}

.brand img {
  max-height: 60px;
}

.brand img:nth-child(1) {
  margin-right: 1rem;
}
.brand img:nth-child(2) {
  border-radius: 1rem;
}

.navbar-nav {
  margin-right: 2rem;
}

.nav-link {
  color: var(--gray);
  transition: all 0.8s ease;
  padding: 1rem 1rem;
  margin: 0 1rem;
  border-radius: 0.5rem;
  font-size: 1.2rem;
  font-weight: 500;
  text-align: center;
}

.btn {
  background-color: var(--greenB);
  color: var(--white);
  border-radius: 0;
  padding: 0.5rem 1rem;
  transition: all 0.8s ease;
  font-size: 1rem;
  font-weight: 500;
  width: 18vh;
  height: 5vh;
}

.nav-link:hover,
.btn:hover {
  background-color: var(--white);
  color: var(--black);
  transform: scale(1.1);
}

.btn:hover {
  transform: scale(1.3);
}

.nav-link:focus,
.btn:focus {
  color: var(--black);
  font-weight: 700;
  transition: all 0.8s ease;
}

.navbar-toggler {
  border: none;
  outline: none;
  margin-right: 1rem;
  color: var(--white);
  background-color: var(--black);
}

.navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3e%3cpath stroke='rgba(255, 255, 255, 0.8)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}

@media (max-width: 992px) {

  .navbar-nav,
  .btn {
    display: flex;
    flex-direction: column;
    margin-right: 0;
    align-items: center;
  }

  .navbar-collapse {
    padding: 1rem 0.5rem;
  }

  .nav-link {
    margin: 0.5rem 0;
  }

  .btn {
    margin-top: 1rem;
    padding: auto;
  }

  .btn:hover {
    transform: scale(1.1);
  }

}

@media (max-width: 576px) {
  .header {
    padding: 0.5rem;
  }

  .brand img:nth-child(1) {
    margin-right: 0;
  }

  .navbar-toggler {
    border: none;
    outline: none;
    margin-right: 0;
  }

}
.top{
  background-color: #000;
  position: relative;
  height: 10vh;
  display: grid;
  place-items: center;
}
</style>