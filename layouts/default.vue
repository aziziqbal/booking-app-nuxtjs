<template>
  <div style="background-color:#F7F7F7;overflow-y:hidden;">
    <appbar />
    <Nuxt style="background-color:white; box-shadow: rgba(3, 18, 26, 0.15) 0px 0px 10px;min-height: 110vh;;" />
    <navbar />
  </div>
</template>

<script>
import Appbar from '~/layouts/appbar.vue'
import Navbar from '~/layouts/navbar.vue'

export default {
  components: {
    Appbar,
    Navbar
  },
  data: () => ({
  })
}
</script>

<style lang="scss">
.not-margin {
    margin: 0px;
    font-weight: normal;
    padding: 10px;
}
.con-form {
  width: 100%;
  .flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
    a {
      font-size: .8rem;
      opacity: .7;
      &:hover {
        opacity: 1;
      }
    }
  }
  .vs-checkbox-label {
    font-size: .8rem;
  }
  .vs-input-content {
    margin: 10px 0px;
    width: calc(100%);
    .vs-input {
      width: 100%;
    }
  }
}
.footer-dialog {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction :column;
  width: calc(100%);
  .new {
    margin :0px;
    margin-top: 20px;
    padding: 0px;
    font-size: .7rem;
    a {
      // color: getColor('primary') !important;
      margin-left: 6px;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .vs-button {
    margin: 0px;
  }
}
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
