<script>
import VModelVue3Child from '../components/VModelVue3Child.vue';

export default {
    components: {
        VModelVue3Child
    },
    data() {
        return{
            count: 3,
        }
    },
}
</script>

<template>
    <div class="">
        Parrent {{ count }}
    </div>
    <VModelVue3Child v-model="count"/>
</template>