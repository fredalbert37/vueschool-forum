<template>
  <span :title="humanFriendlyDate">
    <p>{{ diffForHumans }}</p>
  </span>
</template>

<script>
import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime'
import localizedDate from 'dayjs/plugin/localizedFormat'
dayjs.extend(relativeTime)
dayjs.extend(localizedDate)

export default {
  name: "AppDate",
  props: {
    timestamp: {
      type: Number,
      required: true
    }
  },
  computed:{
    diffForHumans(){
      return dayjs.unix(this.timestamp).fromNow()
    },
    humanFriendlyDate(){
      return dayjs.unix(this.timestamp).format('llll')
    }
  }
}
</script>

<style scoped>

</style>
