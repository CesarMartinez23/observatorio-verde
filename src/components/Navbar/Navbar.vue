<script setup>
import { RouterLink } from "vue-router";

const toggleMenu = () => {
  const nav = document.querySelector(".navbar-collapse");
  nav.classList.toggle("show");
};
</script>

<template>
  <div class="nav-top">
    <div class="brand">
      <RouterLink class="navbar-brand" to="/">
        <!-- Logo UGB -->
        <img src="/img/logoUGB.png" alt="Logo UGB" class="ugbLogo" />
        <!-- Logo Verde -->
        <img src="/img/logoVerde.png" alt="Logo Verde" class="ugbVerde" />
      </RouterLink>
      <span
        class="navbar-text button-contact"
        @click="toggleMenu"
        style="float: right"
      >
        <RouterLink class="btn" :to="{ name: 'contacto' }"
          >Contáctanos</RouterLink
        >
      </span>
    </div>
  </div>
  <header class="header">
    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#controlNav"
          aria-controls="controlNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="controlNav">
          <ul class="navbar-nav me-auto" @click="toggleMenu">
            <li class="nav-item">
              <RouterLink class="nav-link" :to="{ name: 'inicio' }">
                Inicio</RouterLink
              >
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" :to="{ name: 'sobre-nosotros' }">
                Sobre Nosotros</RouterLink
              >
            </li>
            
            <li class="nav-item">
              <RouterLink
                class="nav-link"
                :to="{ name: 'iniciativas-medioambientales' }"
              >
                Iniciativas</RouterLink
              >
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" :to="{ name: 'ugb-verde' }">
                UGB Verde</RouterLink
              >
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" :to="{ name: 'directorio' }">
                Directorio</RouterLink
              >
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" :to="{ name: 'estadisticas' }">
                Estadísticas</RouterLink
              >
            </li>
            <span class="nav-item button-contact-mobile" style="float: right">
              <RouterLink class="nav-link" :to="{ name: 'contacto' }">
                Contáctanos
              </RouterLink>
            </span>
          </ul>
          <!-- social links -->
          <ul class="social-links">
            <!-- Icons -->
            <li class="nav-item me-3 me-lg-0">
              <a
                class="nav-link"
                href="https://www.facebook.com/ugboficial/"
                target="_blank"
              >
                <i class="bi bi-facebook"></i>
              </a>
            </li>
            <li class="nav-item me-3 me-lg-0">
              <a
                class="nav-link"
                href="https://www.instagram.com/ugb.sv/#"
                target="_blank"
              >
                <i class="bi bi-instagram"></i>
              </a>
            </li>
            <li class="nav-item me-3 me-lg-0">
              <a
                class="nav-link"
                href="https://www.linkedin.com/company/ugb-sv/"
                target="_blank"
              >
                <i class="bi bi-linkedin"></i>
              </a>
            </li>
            <li class="nav-item me-3 me-lg-0">
              <a
                class="nav-link"
                href="https://twitter.com/UGB_SV"
                target="_blank"
              >
                <i class="bi bi-twitter"></i>
              </a>
            </li>
            <li class="nav-item me-3 me-lg-0">
              <a
                class="nav-link"
                href="https://www.youtube.com/user/VideosUGB"
                target="_blank"
              >
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
  padding: 0.2rem;
  box-shadow: 0 1rem 6rem 0 rgba(0, 0, 0, 0.05);
}

.ugbLogo {
  max-width: 16rem;
}
.ugbVerde {
  max-width: 6.5rem;
}
.brand img:nth-child(1) {
  margin-right: 1.6rem;
}

.nav-link {
  color: var(--black);
  transition: all 0.8s ease;
  padding: 1.6rem;
  margin: 0 1.6rem;
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
}

.btn {
  background-color: var(--green-900);
  color: var(--white);
  border-radius: 0;
  padding: 0.8rem 1.6rem;
  transition: all 0.8s ease;
  font-size: 1.6rem;
  font-weight: 500;
}

.nav-link:hover,
.btn:hover {
  background-color: var(--white);
  color: var(--black);
  transform: scale(1.2);
}

.btn:focus {
  color: var(--white);
  background-color: var(--green-900);
}

.navbar-toggler {
  border: none;
  outline: none;
  margin-right: 0.8rem;
  color: var(--white);
  background-color: var(--black);
}

.navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3e%3cpath stroke='rgba(255, 255, 255, 0.8)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}

.nav-top {
  background-color: var(--black);
  position: relative;
  padding: 0.8rem;
  max-height: 8.8rem;
}

.social-links {
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
}
.social-links .nav-link {
  color: var(--gray);
}

.brand {
  padding-left: 1rem;
}

.button-contact-mobile {
  display: none;
}

.navbar-text {
  margin-right: 10rem;
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
}

@media (max-width: 992px) {
  .navbar-nav,
  .btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .navbar-collapse {
    padding: 1.6rem 0.8rem;
  }

  .nav-link {
    margin: 0.8rem 0;
  }

  .social-links {
    margin-top: 1.6rem;
  }

  .button-contact {
    display: none;
  }

  .button-contact-mobile {
    display: block;
  }
}

@media (max-width: 576px) {
  .header {
    padding: 0.8rem;
  }

  .brand img:nth-child(1) {
    margin-right: 0;
  }

  .social-links {
    padding: 0;
  }
}
</style>
