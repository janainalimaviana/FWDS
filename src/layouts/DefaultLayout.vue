<template>
    <v-app>
      <!-- Topo fixo e limpo -->
      <v-app-bar
        app
        flat
        color="indigo-darken-4"
        dark
        elevate-on-scroll
      >
        <v-app-bar-title class="font-weight-bold">Agricultura de Precisão</v-app-bar-title>
        
        <v-spacer />
  
        <v-btn to="/" text class="text-white">Home</v-btn>
        <v-btn to="/login" text class="text-white">Login</v-btn>
        <v-btn to="/sistema" text class="text-white">Área do Produtor</v-btn>
        <v-btn to="/contato" text class="text-white">Contato</v-btn>
      </v-app-bar>
  
      <!-- Conteúdo central -->
      <v-main class="bg-grey-lighten-5">
        <v-container fluid class="py-8 px-4">
          <slot />
        </v-container>
      </v-main>
    </v-app>
  </template>
  
  <script setup>
  // Nenhum import necessário aqui
  </script>
  
  <style scoped>
  .v-btn {
    font-weight: 500;
  }
  </style>
  