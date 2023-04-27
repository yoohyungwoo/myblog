<script setup lang="ts">
const test1 = {
  user_id: 'test1235',
  password: '12345678!@a',
  email: 'a1234@test.com',
  user_name: 'test',
  enabled: 1,
}
const test = async () => {
  try {
    const response = await request('/user', {
      method: 'POST',
      data: test1,
    })
    console.log(response)
  }
  catch (e) {
    console.error(e)
  }
}
onMounted(() => {
  test()
})
</script>

<template>
  <div>
    <h1>Home index page</h1>
  </div>
</template>

<style scoped>

</style>
