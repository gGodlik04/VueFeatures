<script>
export default {
    data() {
        return {

        }
    },
    props: {
        value: {
            type: Number,
        }
    },
}

</script>

<template>
    <div class="">
        Child {{ value }}
        <input @input="$emit('input', $event.target.value)" class="border-2 border-black" type="text" >
    </div>
</template>