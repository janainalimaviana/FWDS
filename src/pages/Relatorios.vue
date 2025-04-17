<template>
  <v-container class="pa-4">

    <!-- Campo de filtro (v-model) -->
    <v-text-field
      v-model="filtro"
      label="Filtrar relatórios por título"
      prepend-icon="mdi-magnify"
      outlined
    ></v-text-field>

    <!-- Se houver relatórios filtrados (v-if) -->
    <v-row v-if="relatoriosFiltrados.length">
      <v-col
        v-for="(relatorio, index) in relatoriosFiltrados"
        :key="index"
        cols="12" sm="6" md="4"
      >
        <v-card class="pa-2" outlined>
          <v-card-title>{{ relatorio.titulo }}</v-card-title>
          <v-card-subtitle>{{ relatorio.data }}</v-card-subtitle>
          <v-card-text>{{ relatorio.descricao }}</v-card-text>
          <v-card-actions>
            <v-btn color="primary" @click="verDetalhes(relatorio)">
              Ver detalhes
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <!-- Se não houver resultados (v-else) -->
    <v-alert type="warning" class="mt-4" v-else>
      Nenhum relatório encontrado.
    </v-alert>
      <v-card-actions class="justify-end">
        <v-btn color="primary" @click="$router.push('/sistema')">Voltar</v-btn>
      </v-card-actions>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      filtro: '',
      relatorios: [
        {
          titulo: 'Relatório de Produção',
          data: '2025-04-15',
          descricao: 'Dados de produção agrícola do mês de abril.'
        },
        {
          titulo: 'Relatório de Clima',
          data: '2025-04-10',
          descricao: 'Informações climáticas semanais.'
        },
        {
          titulo: 'Relatório de Imagens',
          data: '2025-04-05',
          descricao: 'Análise visual da área plantada.'
        }
      ]
    };
  },
  computed: {
    relatoriosFiltrados() {
      return this.relatorios.filter(r =>
        r.titulo.toLowerCase().includes(this.filtro.toLowerCase())
      );
    }
  },
  methods: {
    verDetalhes(relatorio) {
      alert(`Título: ${relatorio.titulo}\nData: ${relatorio.data}\nDescrição: ${relatorio.descricao}`);
    }
  }
}
</script>
