<template>
  <div>
    <create-update :type="type" />
  </div>
</template>
<script>
import CreateUpdate from './components/CreateUpdate'

export default {
  name: 'UpdateAbout',
  components: { CreateUpdate },
  data() {
    return {
      type: 'update',
    }
  },
}
</script>
