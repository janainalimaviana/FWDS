<template>
    <v-container>
      <h1 class="text-h5 font-weight-bold mb-4">Fotos de Monitoramento</h1>
  
      <v-row>
        <v-col cols="12" md="4" v-for="i in 3" :key="i">
          <v-card>
            <v-img
              :src="`https://source.unsplash.com/600x400/?farm,field,${i}`"
              height="200px"
              cover
            />
            <v-card-text>
              Foto aérea - Área {{ i }}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-card-actions class="justify-end">
        <v-btn color="primary" @click="$router.push('/sistema')">Voltar</v-btn>
      </v-card-actions>
    </v-container>
      
  </template>
  