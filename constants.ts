import { SlideData } from './types';

export const SLIDES: SlideData[] = [
  {
    id: 0,
    type: 'cover',
    title: 'Status do Empreendimento',
    subtitle: 'Construtora Área Incrível: Análise de Escopo, Mudanças e Prazos',
    content: {
      text: 'Fevereiro 2024'
    }
  },
  {
    id: 1,
    type: 'standard',
    title: 'Contexto Inicial',
    subtitle: 'Cenário original aprovado no fechamento do contrato',
    content: {
      bullets: [
        'Empreendimento fechado inicialmente com 7 projetos de telhados.',
        'Casas padrão com laje convencional.',
        'Escopo original totalmente definido e aprovado.'
      ]
    }
  },
  {
    id: 2,
    type: 'standard',
    title: 'Alterações de Escopo',
    subtitle: 'Mudanças solicitadas após o fechamento',
    content: {
      subSections: [
        {
          title: 'Solicitação Inicial',
          items: ['Alteração de algumas casas para laje em Steel Frame.']
        },
        {
          title: 'Nova Alteração (Impacto Alto)',
          items: [
            'Inclusão de 22 casas personalizadas.',
            'Cada casa personalizada exige um projeto exclusivo de telhado.',
            'Alterações não previstas no cronograma inicial, impactando o setor de projetos e liberação para produção.'
          ]
        }
      ]
    }
  },
  {
    id: 3,
    type: 'numbers',
    title: 'Escopo Total Atualizado',
    subtitle: 'Comparativo de volumes de projeto',
    content: {
      text: 'O volume de projetos aumentou significativamente com as personalizações.'
    },
    chartData: [
      { name: 'Padrão Convencional', value: 7, fill: '#2E3E58' },
      { name: 'Padrão Steel Frame', value: 6, fill: '#8aa73b' },
      { name: 'Personalizadas', value: 22, fill: '#5c6b7f' },
    ],
    highlight: 'Total Geral: 35 Projetos'
  },
  {
    id: 4,
    type: 'standard',
    title: 'Primeira Entrega',
    subtitle: 'Casas Padrão com Laje Convencional',
    content: {
      subSections: [
        {
          title: 'Status Atual',
          items: [
            'O setor de projetos trabalhou de forma intensiva.',
            '32 casas com projetos já aprovados.'
          ]
        },
        {
          title: 'Prazos Definidos',
          items: [
            'Expedição prevista: 23 de fevereiro.',
            'Entrega final dos projetos: até 24 de fevereiro.'
          ]
        }
      ]
    }
  },
  {
    id: 5,
    type: 'standard',
    title: 'Laje em Steel Frame',
    subtitle: 'Casas Padrão (39 m²)',
    responsible: 'Felipe',
    content: {
      subSections: [
        {
          title: 'Cronograma de Projetos',
          items: [
            'Envio do primeiro projeto: até terça-feira da próxima semana.',
            'Envio total para aprovação: até 20 de fevereiro.'
          ]
        },
        {
          title: 'Produção',
          items: [
            'Total: 6 projetos de casas padrão.',
            'Produção e expedição previstas para a 1ª semana de março.'
          ]
        }
      ]
    }
  },
  {
    id: 6,
    type: 'timeline',
    title: 'Casas Personalizadas',
    subtitle: 'Laje Convencional',
    responsible: 'Rinser São',
    content: {
      subSections: [
        {
          title: 'Esta Semana',
          items: ['Casas do empreendimento Dinápolis', 'Projeto Siena']
        },
        {
          title: 'Próxima Semana',
          items: ['Residencial Ravena 2']
        }
      ]
    }
  },
  {
    id: 7,
    type: 'critical',
    title: 'Ponto Crítico: Rufos de Divisa',
    subtitle: 'Desafios técnicos para produção antecipada',
    content: {
      bullets: [
        'Impossível produzir todos antecipadamente: Ausência de mapa completo e variações de desníveis.',
        'Ação Engelar: Envio apenas dos rufos de casas com vizinhos definidos.',
        'Responsabilidade Cliente: Controle e aplicação (peças não reutilizáveis).'
      ]
    }
  },
  {
    id: 8,
    type: 'summary',
    title: 'Resumo e Prazos-Chave',
    subtitle: 'Próximos passos consolidados',
    content: {
      subSections: [
        {
          title: 'Fevereiro',
          items: [
            'Até 20/02: Envio dos 6 projetos Steel Frame.',
            'Até 23/02: Expedição Casas Padrão.',
            'Até 24/02: Entrega de 32 telhados padrão.'
          ]
        },
        {
          title: 'Março',
          items: [
            '1ª Semana: Produção Laje Steel Frame.'
          ]
        }
      ]
    }
  },
  {
    id: 9,
    type: 'cover',
    title: 'Obrigado',
    subtitle: 'Estamos à disposição para alinhar os próximos passos.',
    content: {
      text: 'Engelar - Estruturas em Aço Leve'
    }
  }
];