<template>
  <div id="app">
    <custom-table
      :headers="$options.tableData.headers"
      :rows="$options.tableData.rows"
    >
      <template #version="{ value }">
        {{ formatVersion(value) }}
      </template>

      <template #creationDate="{ value }">
        {{ formatDate(value) }}
      </template>

      <template #status="{ value }">
        <span :class="`status--${value}`">
          {{ formatStatus(value) }}
        </span>
      </template>

      <template #modificationDate="{ value }">
        {{ formatDate(value) }}
      </template>

      <template #action="{ value }">
        <custom-button :variant="getActionButtonType(value)">
          {{ formatAction(value) }}
        </custom-button>
      </template>
    </custom-table>
  </div>
</template>

<script>
import CustomTable from './components/CustomTable';
import CustomButton from './components/CustomButton';

import { tableData, statusMap, actionMap } from './constants';
import { pretifyDate } from './helpers';

export default {
  name: 'App',

  components: {
    CustomTable,
    CustomButton,
  },

  tableData,

  methods: {
    formatVersion(version) {
      return `v ${version}`;
    },

    formatDate(date) {
      if (!date) {
        return '-';
      }
      return pretifyDate(date);
    },

    formatStatus(status) {
      return statusMap[status];
    },

    formatAction(action) {
      return actionMap[action].title;
    },

    getActionButtonType(action) {
      return actionMap[action].btnType;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

.status--1 {
  color: red;
}

.status--2 {
  color: green;
}
</style>
