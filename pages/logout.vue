<template>
  <div class="logout">
    <button @click="logout">ログアウト</button>
    <br />
    <nuxtLink to="/">戻る</nuxtLink>
  </div>
</template>

<script>
import firebase from '~/pulgins/firebase'
export default {
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          alert('ログアウトが完了しました')
        this.$router.replace('/')
      })
    },
  },
}
</script>