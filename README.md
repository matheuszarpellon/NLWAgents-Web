# NLW Agents

Projeto desenvolvido durante o evento NLW da Rocketseat.

## Tecnologias utilizadas

### Principais dependências
- React 19 - Biblioteca para construção de interfaces
- TypeScript 5.0+ - Superset JavaScript com tipagem estática
- Tailwind CSS 3.4+ - Framework CSS utilitário
- React Query 5.0+ - Gerenciamento de estado assíncrono
- React Router 6.20+ - Roteamento para aplicações React
- Radix UI 1.0+ - Componentes UI acessíveis e sem estilos
- Lucide Icons 0.3+ - Biblioteca de ícones
- Vite 5.0+ - Build tool e servidor de desenvolvimento

### Variáveis de ambiente
Necessário criar um arquivo `.env` na raiz do projeto com:
```
VITE_API_URL= # URL da API
VITE_ENV=development # ou production
```

## Padrões e estrutura

### Estrutura de pastas
```
src/
├── components/    # Componentes reutilizáveis
│   └── ui/        # Componentes de UI básicos
├── pages/         # Páginas/rotas da aplicação
├── lib/           # Utilitários e helpers
└── styles/        # Estilos globais
```

### Padrões
- Componentes UI reutilizáveis
- Páginas separadas por rota
- Estilização com Tailwind CSS e utilitários (clsx, tailwind-merge)
- TypeScript para tipagem estática

## Setup do projeto

1. Instale as dependências:
```bash
npm install
```

2. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

3. Para build de produção:
```bash
npm run build
```


## Links úteis
- [Documentação do projeto]()
- [Repositório no GitHub]()
- [Evento NLW]()
