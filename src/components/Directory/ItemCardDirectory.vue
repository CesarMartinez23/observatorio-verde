<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  webSite: {
    type: String,
  },
  email: {
    type: String,
  },
  phoneNumer: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="col-lg-6 col-sm-6 mb-5">
    <div class="card-instituciones">
      <div class="content-instituciones">
        <h3>{{ title }}</h3>
        <p v-if="webSite">
          <i class="bi bi-globe"></i>
          <a :href="webSite" target="_blank">{{ webSite }}</a>
        </p>
        <p v-if="email">
          <i class="bi bi-envelope"></i>
          <a :href="'mailto:+503' + email" target="_blank">{{ email }}</a>
        </p>
        <p>
          <i class="bi bi-telephone" /><a :href="'tel:' + phoneNumer">{{
            phoneNumer
          }}</a>
        </p>
        <p><i class="bi bi-geo-alt" />{{ address }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-instituciones {
  width: 100%;
  height: 100%;
  text-align: start;
  border-radius: 5px;
  background: var(--white);
  overflow: hidden;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.card-instituciones:hover {
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  transform: scale(1.05);
}

.content-instituciones {
  padding: 30px;
  clear: both;
}

.card-instituciones h3 {
  font-weight: 700;
  line-height: 34px;
  font-size: 19px;
  margin: 0 0 8px;
}
.card-instituciones p {
  font-size: 16px;
  color: var(--black);
}
.card-instituciones p i {
  color: var(--green-900);
  margin-right: 5px;
  padding: 50px 0px;
}
</style>
