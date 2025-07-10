# NLW Agents - Web

## Sobre o Projeto

Aplicação web desenvolvida durante o NLW da Rocketseat para gerenciamento de salas e perguntas a serem respondidas por agentes inteligentes de forma automática.

## Fluxo do Sistema

1. **Criação e Configuração**:
   - Usuários criam salas para tópicos específicos
   - Gravam áudios explicativos que são automaticamente transcritos e armazenados

2. **Interação**:
   - Participantes enviam perguntas relacionadas ao tópico
   - O sistema utiliza a API do Gemini para:
     - Analisar o contexto gravado
     - Gerar respostas inteligentes e contextualizadas
     - Manter a coerência do diálogo

3. **Visualização**:
   - Todas as perguntas e respostas são organizadas em uma lista
   - Interface intuitiva para acompanhar as discussões

## Funcionalidades Técnicas

- Integração com Gemini API para processamento de linguagem natural
- Sistema de transcrição automática de áudio
- Armazenamento e recuperação eficiente de contextos
- Interface otimizada para diferentes dispositivos

## Tecnologias

### Core
- React 19 + TypeScript 5.0+
- Vite 5.0+ (Build tool)
- Tailwind CSS 3.4+ (Estilização)

### Bibliotecas
- React Query 5.0+ (Gerenciamento de estado)
- Radix UI 1.0+ (Componentes acessíveis)
- Lucide Icons 0.3+ (Ícones)
- Day.js (Manipulação de datas)

### Estrutura do Projeto
```
src/
├── components/    # Componentes reutilizáveis
│   ├── ui/        # Componentes de UI básicos
│   ├── question-* # Componentes de perguntas
│   └── room-*     # Componentes de salas
├── pages/         # Páginas/rotas
│   ├── create-room.tsx
│   ├── room.tsx
│   └── record-room-audio.tsx
├── http/          # Hooks e tipos para API
│   ├── use-*.ts   # Hooks de chamadas HTTP
│   └── types/     # Tipos de requisições/respostas
├── lib/           # Utilitários (dayjs, helpers)
└── index.css      # Estilos globais
```

## Configuração

1. Instale as dependências:
```bash
npm install
```

2. Execute o servidor:
```bash
npm run dev
```

3. Para produção:
```bash
npm run build
```

## Links

- [Repositório no GitHub](https://github.com/matheuszarpellon/NLWAgents-Web)
- [Site da Rocketseat](https://www.rocketseat.com.br)
- [Evento NLW](https://www.rocketseat.com.br/nlw)
