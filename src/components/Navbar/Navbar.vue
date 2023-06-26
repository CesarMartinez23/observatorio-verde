<script setup>
import { RouterLink } from 'vue-router'

const toggleMenu = () => {
  const nav = document.querySelector('.navbar-collapse')
  nav.classList.toggle('show')
}

</script>

<template>
  <header class="header">
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <div class="brand">
          <RouterLink class="navbar-brand" to="/">
            <!-- Logo UGB -->
            <img src="/img/logoUGB.png" alt="Logo UGB" />
            <!-- Logo Verde -->
            <img src="/img/logoVerde.png" alt="Logo Verde" />
          </RouterLink>
        </div>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#controlNav"
          aria-controls="controlNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="controlNav">
          <ul class="navbar-nav ms-auto" @click="toggleMenu">

            <li class="nav-item">
              <RouterLink class="nav-link" :to="{ name: 'inicio' }">
                Inicio</RouterLink>
            </li>

          </ul>
          <span class="navbar-text" @click="toggleMenu">
            <RouterLink class="btn" :to="{ name: '' }">Contactanos</RouterLink>
          </span>
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
  background-color: var(--green);
  padding: 0.4rem 2rem;
}

.brand img {
  max-height: 60px;
}

.brand img:nth-child(1) {
  margin-right: 1rem;
}
.brand img:nth-child(2) {
  background-color: var(--green-100);
  border-radius: 1rem;
}

.navbar-nav {
  margin-right: 2rem;
}

.nav-link {
  color: var(--white);
  transition: all 0.8s ease;
  padding: 1rem 1rem;
  margin: 0 1rem;
  border-radius: 0.5rem;
  font-size: 1.1rem;
  font-weight: 500;
  text-align: center;
}

.btn {
  background-color: var(--green-900);
  color: var(--white);
  border-radius: 1rem;
  padding: 0.5rem 1rem;
  transition: all 0.8s ease;
  font-size: 1.1rem;
  font-weight: 500;
}

.nav-link:hover,
.btn:hover {
  background-color: var(--green-900);
  color: var(--white);
  transform: scale(1.1);
}

.btn:hover {
  transform: scale(1.3);
}

.nav-link:focus,
.btn:focus {
  background-color: var(--white);
  color: var(--green-900);
  font-weight: 700;
  transition: all 0.8s ease;
}

.navbar-toggler {
  border: none;
  outline: none;
  margin-right: 1rem;
  color: var(--white);
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
</style>