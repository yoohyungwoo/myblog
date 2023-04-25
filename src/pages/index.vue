<script setup lang="ts">
const router = useRouter()
const goBlog = () => {
  return router.push({ name: 'blog', params: { name: '123' } })
}

const goPhoneBooks = () => {
  router.push({ name: 'phone-book' })
}
</script>

<template>
  <div>
    <p>test</p>
    <hr>
    <button @click="goBlog">
      go Blog
    </button>
    <hr>
    <el-row class="mb-4">
      <el-button type="primary" @click="goPhoneBooks">
        go PhoneBookList
      </el-button>
    </el-row>
  </div>
</template>

<style scoped>

</style>
