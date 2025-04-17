<template>
    <v-container fluid class="fill-height pa-0">
      <v-row no-gutters class="fill-height">
  
        <!-- Imagem lateral -->
        <v-col cols="12" md="6">
          <v-img
            :src="imagem"
            alt="Imagem Agricultura"
            cover
            class="h-100"
          />
        </v-col>
  
        <!-- Formulário -->
        <v-col cols="12" md="6" class="d-flex align-center justify-center">
          <v-card class="pa-8" elevation="2" max-width="400">
            <v-card-title class="text-h5 text-center font-weight-bold mb-4">
              Acesso ao sistema
            </v-card-title>
  
            <!-- Mensagem de erro -->
            <v-alert
              v-if="erroLogin"
              type="error"
              class="mb-4"
              elevation="2"
            >
              E-mail ou senha incorretos.
            </v-alert>
  
            <v-form @submit.prevent="login">
              <v-text-field
                v-model="email"
                label="E-mail"
                prepend-icon="mdi-email"
                type="email"
                required
              />
              <v-text-field
                v-model="senha"
                label="Senha"
                prepend-icon="mdi-lock"
                type="password"
                required
              />
  
              <v-btn color="primary" block class="mt-4" type="submit">
                Entrar
              </v-btn>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import imagem from '@/assets/login-agricultura.jpg' // Importando a imagem para o componente
  
  
  const email = ref('')
  const senha = ref('')
  const erroLogin = ref(false)
  const router = useRouter()
  
  function login() {
    if (email.value === 'teste@email' && senha.value === '1234') {
      erroLogin.value = false
      router.push('/sistema')
    } else {
      erroLogin.value = true
    }
  }
  </script>
  
  <style scoped>
  .v-img {
    border-right: 1px solid #eee;
  }
  </style>
  