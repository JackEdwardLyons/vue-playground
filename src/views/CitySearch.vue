<template>
    <div>
        <CityListView />
    </div>
</template>

<script>
import Index from '@/components/city_search/Index.vue'

export default {
  name: 'city-search',
  components: {
    CityListView: Index
  }
}
</script>
