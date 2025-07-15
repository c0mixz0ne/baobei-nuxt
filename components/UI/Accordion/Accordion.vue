<template>
    <div class="accordion">
        <div v-for="(item, index) in items" :key="index" class="accordion-item">
            <div class="accordion-header" @click="toggleItem(index)">
                <h3>{{ item.title }}</h3>
                <span class="accordion-icon">{{ isOpen(index) ? '−' : '+' }}</span>
            </div>
            <div v-if="item.list" class="accordion-content" v-show="isOpen(index)">
                <ul>
                    <li v-for="(list, i) in item.content" :key="i" v-html="list"></li>
                </ul>
            </div>
            <div v-else class="accordion-content" v-show="isOpen(index)">
                <p v-html="item.content"></p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
    items: {
        type: Array,
        required: true,
        validator: (value) => {
            return value.every(item => 'title' in item && 'content' in item);
        }
    },
    multiple: {
        type: Boolean,
        default: false
    }
});

const openItems = ref([]);

const isOpen = (index) => {
    return openItems.value.includes(index);
};

const toggleItem = (index) => {
    if (props.multiple) {
        const currentIndex = openItems.value.indexOf(index);
        if (currentIndex === -1) {
            openItems.value.push(index);
        } else {
            openItems.value.splice(currentIndex, 1);
        }
    } else {
        if (openItems.value[0] === index) {
            openItems.value = [];
        } else {
            openItems.value = [index];
        }
    }
};
</script>

<style scoped>
.accordion {
    width: 100%;
    margin: 0 auto;
    font-family: Arial, sans-serif;
}

.accordion-item {
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-bottom: 8px;
    overflow: hidden;
}

.accordion-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 16px;
    background-color: #f5f5f5;
    cursor: pointer;
    transition: background-color 0.3s;
}

.accordion-header:hover {
    background-color: #e9e9e9;
}

.accordion-header h3 {
    margin: 0;
    font-size: 16px;
}

.accordion-icon {
    font-size: 18px;
    font-weight: bold;
}

.accordion-content {
    padding: 16px;
    background-color: white;
    border-top: 1px solid #eee;
}

.accordion-content ul {
    list-style-type: none;
    padding: 0;
}

.accordion-content a {
    color: #0066cc;
    text-decoration: underline;
}

.accordion-content a:hover {
    color: #004499;
}
</style>