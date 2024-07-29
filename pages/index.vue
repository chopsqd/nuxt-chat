<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8>

    </v-flex>
  </v-layout>
</template>

<script>
export default {
  sockets: {
    connect() {
      console.log('weg')
    }
  },
  methods: {
    message() {
      this.$socket.emit('createMessage', {
        text: 'FROM CLIENT'
      })
    }
  }
};
</script>
