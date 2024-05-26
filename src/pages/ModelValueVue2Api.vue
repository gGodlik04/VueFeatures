
<template>
    Parrent <div class="">{{ count }}</div>    
    <VModelVue2Child v-model="count"/>
</template>

<script>
import VModelVue2Child from '../components/VModelVue2Child.vue'

export default {
    components: {
        VModelVue2Child,
    },
    data() {
        return {
            count: 10,
        }
    },
}
</script>