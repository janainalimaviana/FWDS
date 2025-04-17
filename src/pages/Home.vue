<script setup>
import image from '@/assets/Agricultura.jpg'
</script>

<template>
  <v-app>
    <v-main>
      <v-parallax
        :src="image"
        height="100vh"
        class="d-flex align-center justify-center"
      >
        <v-container class="text-center text-white">
          <h1 class="text-h3 font-weight-bold mb-4">
            Agricultura de precisão
          </h1>
          <p class="text-subtitle-1">
            Acompanhe mapas, relatórios e dados da sua produção em tempo real.
          </p>
          <v-btn
            color="primary"
            class="mt-6"
            large
            @click="$router.push('/login')"
          >
            Acessar área do Produtor
          </v-btn>
        </v-container>
      </v-parallax>
    </v-main>
  </v-app>
</template>
