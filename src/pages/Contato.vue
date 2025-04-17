<template>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="6">
          <h2 class="text-h5 mb-4">Fale conosco</h2>
          <v-text-field v-model="nome" label="Nome" />
          <v-text-field v-model="email" label="E-mail" />
          <v-textarea v-model="mensagem" label="Digite sua mensagem" rows="4" />
          <v-btn color="blue-darken-4" class="mt-4" @click="enviar" dark>Enviar</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const nome = ref('')
  const email = ref('')
  const mensagem = ref('')
  
  function enviar() {
    if (nome.value && email.value && mensagem.value) {
      alert('Mensagem enviada com sucesso!')
      nome.value = ''
      email.value = ''
      mensagem.value = ''
    } else {
      alert('Preencha todos os campos.')
    }
  }
  </script>
  