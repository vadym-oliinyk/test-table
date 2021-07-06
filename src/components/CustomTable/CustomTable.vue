<template>
  <div>
    <table-filters
      class="filters"
      :fields="localHeaders"
      @change="filtersChangeHandler"
    />

    <div class="table-wrap">
      <table>
        <thead>
          <th v-for="header in filteredHeaders" :key="header.name">
            <slot name="th" :value="header">{{ header.title }}</slot>
          </th>
        </thead>

        <tbody>
          <tr v-for="(row, index) in filteredRows" :key="index">
            <td v-for="(col, key) in row" :key="key">
              <slot :name="key" :value="col">{{ col }}</slot>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import TableFilters from './components/TableFilters';

import { cloneDeep } from '../../helpers';

export default {
  name: 'CustomTable',

  components: {
    TableFilters,
  },

  props: {
    headers: {
      type: Array,
      required: true,
    },
    rows: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      localHeaders: cloneDeep(this.headers),
    };
  },

  computed: {
    filteredHeaders() {
      return this.localHeaders.filter(({ isHidden }) => !isHidden);
    },

    hiddenFieldsNames() {
      return this.localHeaders.reduce((acc, { isHidden, name }) => {
        if (isHidden) {
          acc.push(name);
        }
        return acc;
      }, []);
    },

    filteredRows() {
      return this.rows.map((row) => {
        return Object.entries(row).reduce((acc, [key, value]) => {
          if (!this.hiddenFieldsNames.includes(key)) {
            acc[key] = value;
          }
          return acc;
        }, {});
      });
    },
  },

  methods: {
    filtersChangeHandler({ checked, name }) {
      const currentHeader = this.localHeaders.find(
        ({ name: headerName }) => headerName === name
      );

      if (!currentHeader) {
        return;
      }
      this.$set(currentHeader, 'isHidden', !checked);
    },
  },
};
</script>

<style scoped>
.filters {
  margin-bottom: 30px;
}

table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
}

thead {
  border-bottom: 1px solid #d3d3d3;
}

th {
  padding: 15px 15px 10px;
  color: #ababab;
}

td {
  padding: 15px;
}

@media (max-width: 768px) {
  .table-wrap {
    max-width: 100%;
    overflow-x: auto;
  }

  table {
    min-width: max-content;
  }
}
</style>
