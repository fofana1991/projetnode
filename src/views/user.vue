<template>
  <div class="home bg-danger">
    <allUsers/>
  </div>

</template>

<script>
// @ is an alias to /src
import allUsers from '@/components/allUsers.vue'

export default {
  name: 'usersVew',
  components: {
    allUsers
  }
}
</script>

