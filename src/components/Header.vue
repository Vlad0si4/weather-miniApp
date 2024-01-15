<template>
  <header>
    <div class="header-container">
      <div class="logo-container">
        <a @click="goToMain" href="#">Mini Weather App</a>
      </div>

      <nav class="nav-content">
        <a @click="goToMain" href="#">Main</a>
        <a @click="goToAbout" href="#">About</a>
      </nav>
    </div>
  </header>
</template>

<script>
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const router = useRouter();

    const goToMain = () => {
      router.push({ name: "Main" });
    };
    const goToAbout = () => {
      router.push({ name: "About" });
    };
    return {
      goToMain,
      goToAbout,
    };
  },
});
</script>

<style scope>
.header-container {
  padding: 20px 28px;
  font-size: 18px;

  background-color: #88b3e8;
  /* border-radius: 20px; */
  display: grid;
  grid-template-columns: repeat(2, auto);
  align-items: center;
  justify-content: space-between;
}
.logo-container a {
  font-weight: 600;
}
.nav-content {
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 20px;
  align-items: center;
}
</style>
