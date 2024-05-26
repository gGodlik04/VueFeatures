<script>
export default {
    data() {
        return {

        }
    },
    props: {
        modelValue: {
            type: String,
        }
    }
}
</script>

<template>
    <div class="">
        Child {{ modelValue }}
        <input class="border-2 border-black"  type="text" @input="$emit('update:modelValue', $event.target.value)">
    </div>
</template>