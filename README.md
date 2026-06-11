# School Classification Frontend

Interface web em React + TypeScript + Vite para classificação de escolas usando a API FastAPI.

## Tecnologias

- React 19.2.6
- TypeScript 6.0.2
- Vite 8.0.12
- CSS moderno com gradientes e animações

## Pré-requisitos

- Node.js 18+
- npm ou yarn

## Instalação

1. Clone o repositório e navegue até a pasta frontend:
```bash
cd frontend
```

2. Instale as dependências:
```bash
npm install
```

## Execução

### Modo Desenvolvimento

Execute o servidor de desenvolvimento:

```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`

### Build para Produção

Crie uma versão otimizada para produção:

```bash
npm run build
```

Os arquivos serão gerados na pasta `dist/`.

### Preview da Build

Para visualizar a build de produção localmente:

```bash
npm run preview
```

## Funcionalidades

- Formulário com 21 campos de entrada para dados escolares
- Validação de campos obrigatórios
- Integração com API FastAPI para classificação
- Modal animado com resultado da classificação
- Design responsivo com layout em grid
- Tratamento de erros
- Estados de loading

## Classes de Classificação

O modelo pode classificar as escolas em 4 categorias:
- `ESCOLA_FUND` - Escolas com foco no ensino fundamental
- `ESCOLA_MED` - Escolas com foco no ensino médio
- `ESCOLA_PEQUENA` - Escolas de pequeno porte
- `ESCOLA_TAMANHO_MEDIO` - Escolas de porte médio

## Configuração da API

A aplicação está configurada para se conectar à API em `http://localhost:8000/predict`.

Para alterar a URL da API, edite o arquivo `src/App.tsx` e modifique a linha:

```typescript
const response = await fetch('http://localhost:8000/predict', {
```

## Estrutura do Projeto

```
frontend/
├── src/
│   ├── App.tsx              # Componente principal com formulário
│   ├── App.css              # Estilos específicos do App
│   ├── main.tsx             # Entry point
│   └── index.css            # Estilos globais
├── public/                  # Arquivos estáticos
├── index.html               # Template HTML
├── package.json             # Dependências
├── tsconfig.json            # Configuração TypeScript
├── vite.config.ts           # Configuração Vite
├── .gitignore
└── README.md
```

## Variáveis de Entrada

O formulário aceita as seguintes variáveis:

**Matrículas:**
- QT_MAT_BAS - Matrículas Básicas
- QT_MAT_INF - Matrículas Infantil
- QT_MAT_INF_CRE - Matrículas Creche
- QT_MAT_INF_PRE - Matrículas Pré-escola
- QT_MAT_FUND - Matrículas Fundamental
- QT_MAT_FUND_AI - Matrículas Fundamental Anos Iniciais
- QT_MAT_FUND_AF - Matrículas Fundamental Anos Finais
- QT_MAT_MED - Matrículas Médio
- QT_MAT_PROF - Matrículas Profissionalizante
- QT_MAT_PROF_TEC - Matrículas Profissionalizante Técnico
- QT_MAT_EJA - Matrículas EJA

**Docentes:**
- QT_DOC_INF - Docentes Infantil
- QT_DOC_INF_CRE - Docentes Creche
- QT_DOC_INF_PRE - Docentes Pré-escola
- QT_DOC_FUND - Docentes Fundamental
- QT_DOC_FUND_AI - Docentes Fundamental Anos Iniciais
- QT_DOC_FUND_AF - Docentes Fundamental Anos Finais
- QT_DOC_MED - Docentes Médio
- QT_DOC_PROF - Docentes Profissionalizante
- QT_DOC_PROF_TEC - Docentes Profissionalizante Técnico
- QT_DOC_EJA - Docentes EJA

## Desenvolvimento

### Lint

Para verificar o código com ESLint:

```bash
npm run lint
```

## Notas

- Certifique-se de que a API backend está rodando antes de usar o frontend
- A API deve estar configurada com CORS para permitir requisições de `http://localhost:5173`

