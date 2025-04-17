<template>
    <v-container>
      <h1 class="text-h5 font-weight-bold mb-4">Dashboard de produção</h1>

	  <v-row class="mb-4">
		<v-btn
			color="primary"
			class="ma-2"
			prepend-icon="mdi-map"
			@click="$router.push('/mapa')"
			>
		Mapa
		</v-btn>

		<v-btn
			color="primary"
			class="ma-2"
			prepend-icon="mdi-file-chart"
			@click="$router.push('/relatorios')"
		>
		Relatórios
		</v-btn>

		<v-btn
			color="primary"
			class="ma-2"
			prepend-icon="mdi-image"
			@click="$router.push('/fotos')"
		>
		Fotos
		</v-btn>
		</v-row>
  
      <!-- Filtros -->
      <v-row class="mb-6" dense>
        <v-col cols="12" md="4">
          <v-select
            v-model="selectedSafra"
            :items="safras"
            label="Selecione a Safra"
            dense
            outlined
          />
        </v-col>
  
        <v-col cols="12" md="4">
          <v-select
            v-model="selectedTalhao"
            :items="talhoes"
            label="Selecione o Talhão"
            dense
            outlined
          />
        </v-col>
  
        <v-col cols="12" md="4">
          <v-menu
            v-model="menu"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            min-width="290px"
          >
            <template #activator="{ props }">
              <v-text-field
                v-bind="props"
                v-model="formattedDate"
                label="Intervalo de Datas"
                readonly
                dense
                outlined
              />
            </template>
            <v-date-picker
              v-model="dateRange"
              range
              @change="menu = false"
            />
          </v-menu>
        </v-col>
      </v-row>
  
      <!-- Gráficos -->
      <v-row>
        <v-col cols="12" md="6">
          <v-card class="pa-4">
            <h3 class="text-subtitle-1 mb-2">Produtividade (kg/ha)</h3>
            <LineChart :chart-data="chartDataProdutividade" :chart-options="chartOptions" />
          </v-card>
        </v-col>
  
        <v-col cols="12" md="6">
          <v-card class="pa-4">
            <h3 class="text-subtitle-1 mb-2">NDVI</h3>
            <BarChart :chart-data="chartDataNDVI" :chart-options="chartOptionsNDVI" />
          </v-card>
        </v-col>
  
        <v-col cols="12">
          <v-card class="pa-4">
            <h3 class="text-subtitle-1 mb-2">Comparativo entre Talhões</h3>
            <ComparacaoTalhoes :chart-data="chartDataTalhoes" :chart-options="chartOptionsTalhoes" />
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  import { ref, computed, watch } from 'vue'
  import LineChart from '@/components/LineChart.vue'
  import BarChart from '@/components/BarChart.vue'
  import ComparacaoTalhoes from '@/components/ComparacaoTalhoes.vue'
  
  // Filtros
  const safras = ['2022/2023', '2023/2024', '2024/2025']
  const talhoes = ['Talhão 1', 'Talhão 2', 'Talhão 3', 'Talhão 4']
  const selectedSafra = ref('2023/2024')
  const selectedTalhao = ref('Talhão 1')
  const dateRange = ref({ start: new Date(), end: new Date() })
  const menu = ref(false)
  
  const formattedDate = computed(() => {
    const start = new Date(dateRange.value.start).toLocaleDateString()
    const end = new Date(dateRange.value.end).toLocaleDateString()
    return `${start} - ${end}`
  })
  
  // Exemplo fixo de dados
  const chartDataProdutividade = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr'],
    datasets: [
      {
        label: 'Produtividade',
        data: [2400, 3000, 2800, 3200],
        borderColor: '#1976D2',
        tension: 0.4
      }
    ]
  }
  
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false
  }
  
  const chartDataNDVI = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr'],
    datasets: [
      {
        label: 'NDVI',
        data: [0.65, 0.7, 0.68, 0.72],
        backgroundColor: '#43A047'
      }
    ]
  }
  
  const chartOptionsNDVI = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        min: 0,
        max: 1
      }
    }
  }
  
  const chartDataTalhoes = {
    labels: ['Talhão 1', 'Talhão 2', 'Talhão 3', 'Talhão 4'],
    datasets: [
      {
        label: 'Produtividade (kg/ha)',
        backgroundColor: ['#1E88E5', '#43A047', '#FB8C00', '#8E24AA'],
        data: [3200, 2800, 3500, 3000]
      }
    ]
  }
  
  const chartOptionsTalhoes = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: true },
      tooltip: { enabled: true }
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'kg/ha'
        }
      }
    }
  }
  
  // Aqui você pode usar watch para reagir à troca dos filtros futuramente
  watch([selectedSafra, selectedTalhao, dateRange], () => {
    console.log('Filtros atualizados:', selectedSafra.value, selectedTalhao.value, dateRange.value)
    // Lógica para atualizar dados via API ou computar localmente...
  })
  </script>
  
  <style scoped>
  canvas {
    max-height: 300px;
  }
  </style>
  