<script setup lang="ts">
import { ref } from 'vue'

const Coord = ref({
    x: 0,
    y: 0,
});

const clickCount = ref(0);

const mouseHandler = (e: MouseEvent) => {
    Coord.value.y = e.x;
    Coord.value.x = e.y;
}

const clickHandler = () => {
    clickCount.value = clickCount.value + 1;
}

</script>

<template>
    <div
        class="w-3/6 h-3/6 bg-red-300 text-center text-blue-700 pt-auto"
        @mousemove="mouseHandler"
    >
        CoordX: {{ Coord.x }}
        CoordY: {{ Coord.y }}
    </div>

    <div 
        class="p-8 bg-blue-600 text-white font-bold"
        @click="clickHandler"
    >
        count {{ clickCount }}
    </div>
</template>
