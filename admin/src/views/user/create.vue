<template>
  <div>
    <create-update :type="type" />
  </div>
</template>
<script>
import CreateUpdate from "./components/CreateUpdate";

export default {
  name: "CreateUser",
  components: { CreateUpdate },
  data() {
    return {
      type: "create"
    };
  }
};
</script>
