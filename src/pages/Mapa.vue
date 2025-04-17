<template>
    <v-container>
      <h1 class="text-h5 font-weight-bold mb-4">Mapa da Fazenda</h1>
  
      <v-card class="pa-4" elevation="2">
        <p class="mb-4">Abaixo você verá uma simulação do mapa (pode integrar o Leaflet futuramente).</p>
        <v-skeleton-loader type="image" height="300px" />
          <v-card-actions class="justify-end">
            <v-btn color="primary" @click="$router.push('/sistema')">Voltar</v-btn>
          </v-card-actions>
        />
      </v-card>
    </v-container>
  </template>

 