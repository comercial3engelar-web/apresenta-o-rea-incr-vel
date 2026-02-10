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
    title: 'Expedição Confirmada: 23/02',
    subtitle: 'Casas Padrão com Laje Convencional',
    content: {
      subSections: [
        {
          title: 'Detalhamento da Carga (29 Unidades)',
          items: [
            '16 un - Padrão 39m²',
            '08 un - 48m² com Suíte',
            '05 un - Padrão 52m²'
          ]
        },
        {
          title: 'Status Geral',
          items: [
            '32 casas com projetos já aprovados.',
            'Entrega final de todos os projetos desta fase: até 24 de fevereiro.'
          ]
        }
      ]
    }
  },
  {
    id: 5,
    type: 'standard',
    title: 'Laje em Steel Frame',
    subtitle: 'Adaptação dos Projetos Padrão',
    responsible: 'Felipe',
    content: {
      subSections: [
        {
          title: 'Escopo de Projetos (Steel Frame)',
          items: [
            'Adaptação das mesmas tipologias da fase anterior:',
            'Casas Padrão 39m²',
            'Casas 48m² com Suíte',
            'Casas Padrão 52m²'
          ]
        },
        {
          title: 'Cronograma e Produção',
          items: [
            'Envio dos projetos para aprovação: até 20 de fevereiro.',
            'REGRA DE PRODUÇÃO: O início da fabricação ocorre de 11 a 12 dias APÓS a aprovação do projeto.'
          ]
        }
      ]
    }
  },
  {
    id: 6,
    type: 'timeline',
    title: 'Casas Personalizadas',
    subtitle: 'Cronograma de Prioridades',
    responsible: 'Rifferson',
    content: {
      subSections: [
        {
          title: 'Fase 1 (Atual): Laje Convencional',
          items: [
            'Esta Semana: Casas do empreendimento Dinápolis e Projeto Siena.',
            'Próxima Semana: Residencial Ravena 2.'
          ]
        },
        {
          title: 'Fase 2 (Sequencial): Laje Steel Frame',
          items: [
            'Início dos projetos apenas após o envio das personalizadas com laje convencional.',
            'Mantém-se a regra de produção: 11 a 12 dias após aprovação.'
          ]
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
    subtitle: 'Regras para produção e entregas',
    content: {
      subSections: [
        {
          title: 'Próximos Marcos',
          items: [
            '20/02: Limite para envio dos projetos Steel Frame (Felipe).',
            '23/02: Expedição das Casas Padrão (Convencional).',
            '24/02: Conclusão dos projetos Padrão Convencional.'
          ]
        },
        {
          title: 'Política de Produção',
          items: [
            'Lead Time: A produção é iniciada de 11 a 12 dias após a aprovação formal do projeto.',
            'Prioridade: Finalizar personalizadas laje convencional antes de iniciar personalizadas Steel Frame.'
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