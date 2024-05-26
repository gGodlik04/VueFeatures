<script setup lang="ts">
import { onMounted, ref, onBeforeUnmount} from 'vue';

const timer = ref(0);
let timerInterval: number = 0;

onMounted(() => {
    startTimer();
})

onBeforeUnmount(() => {
    pauseTimer();
})

const incrementTimer = () => {
    timer.value = ++timer.value;
}

const startTimer = () => {
    if (timerInterval === 0) {
        timerInterval = setInterval(incrementTimer, 1000);
    }
}

const pauseTimer = () => {
    clearInterval(timerInterval);
    timerInterval = 0;
}
</script>

<template>

    <div class="w-full m-auto text-red-600 w-40 font-semibold py-2 px-4 border border-red-500 rounded">
        {{ timer }}
    </div>
    <div class="flex items-center justify-center mt-20 gap-8 w-full">
        <div 
            class="text-blue-500 w-40 font-semibold py-2 px-4 border border-blue-500 rounded hover:bg-blue-500 hover:text-white"
            @click="startTimer"
        >
            Start
        </div>
        <div 
            class="text-blue-500 w-40 font-semibold py-2 px-4 border border-blue-500 rounded hover:bg-blue-500 hover:text-white"
            @click="pauseTimer"
        >
                Break              
        </div>
    </div>

</template>