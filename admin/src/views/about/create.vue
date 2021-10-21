<template>
  <div>
    <create-update :type="type" />
  </div>
</template>
<script>
import CreateUpdate from './components/CreateUpdate'

export default {
  name: 'CreateAbout',
  components: { CreateUpdate },
  data() {
    return {
      type: 'create',
    }
  },
}
</script>
