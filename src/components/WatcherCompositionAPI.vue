<script lang="ts">
export default {
    data() {
        return {
            Coord: {
                x: 0,
                y: 0
            },
        }
    },
    methods: {
        mouseHandler (e: MouseEvent) {
            this.Coord.x = e.x;
            this.Coord.y = e.y;
        }
    }
}


</script>

<template>
    <div 
        class="w-3/6 h-3/6 bg-red-300 text-center text-blue-700 pt-auto"
        @mousemove="mouseHandler"
    >
        {{Coord.x}}
        {{Coord.y}}
    </div>
</template>

