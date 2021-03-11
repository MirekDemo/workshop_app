<template>
  <div class="hello card">
    <header>
      <img alt="Phrase Logo" src="../assets/logo.png" />
      <h1>Phrase Workshop App</h1>
    </header>
    <div class="content">
      <p>So far, all of this text is static. Let's change that!</p>
      <!-- <p>{{ $t("message") }}</p> -->
    </div>
    <!-- <div class="locale-changer">
      <label for="locale-changer">Pick a language:</label>
      <select v-model="$i18n.locale" name="locale-changer">
        <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">
          {{ lang }}
        </option>
      </select>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  computed: {
    langs() {
      return this.$i18n.availableLocales;
    },
  },
};
</script>

<style scoped>
p {
  font-size: 2rem;
}

header,
.hello {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
}

.hello {
  background-color: #fff;
  width: 80vw;
  max-width: 60rem;
  margin: 0 auto;
}

.card {
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  padding: 5rem 2rem;
}

.locale-changer {
  margin: auto;
  margin-top: 3rem;
}

.locale-changer label {
  margin-right: 1rem;
}

.locale-changer,
.locale-changer select {
  font-size: 1.5rem;
}
</style>
