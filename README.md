
# geo-management-front

Esse teste tem o objetivo de me ajudar a passar no processo seletivo da vaga de desenvolvedor Fullstack. Segue abaixo algumas informações sobre como ele foi feito e como rodá-lo.

## Navegação

Haverão duas telas:

- App: Para se cadastrar na newsletter

- Sucess: Te avisará do cadastro bem sucedido

## Especificações

O Front-End foi dividido de acordo com boas práticas na hora de organizar a aplicação, sendo as pastas principais:

- Components: Pasta utilizada para guardar os componentes reutilizáveis e menores da aplicação

- Templates: As páginas em si, com a parte que sofre alterações sendo representada pelos arquivos desta pasta

- Context: O arquivo onde será guardado o estado global do Alert.

- Assets: Pasta onde são guardados imagens que são utilizadas na aplicação.

- Husky: Irá guardar os comandos que serão rodados antes do commit via o terminal git.

## Instalação

Clone o repositório com o comando git clone no github e abra o arquivo com o terminal de sua escolha.

Depois rode o comando:

```bash
  npm i
```

Após isso rode o projeto com o comando npm run dev

```bash
  npm run dev
```

E pronto, o projeto já o Front-End já vai estar rodando. Vale salienter que o Back-End deve ter sido totalmente funcional antes para que as funcionalidades no Front funcionem normalmente.

## Bibliotecas utilizadas

### Dependencies

**axios:** Uma biblioteca JavaScript popular usada para fazer solicitações HTTP do navegador. Ela fornece uma API simples e consistente para interagir com serviços RESTful.

**postcss-cli:** Uma ferramenta de linha de comando para usar PostCSS, um processador CSS que permite a utilização de plugins para transformar o CSS. Pode ser usado para tarefas como autoprefixação, minificação e otimização de CSS.

**tailwindcss:** Uma framework CSS utilitária que fornece um conjunto de classes para criar designs personalizados e responsivos rapidamente. Simplifica o desenvolvimento CSS ao permitir a composição de estilos diretamente no HTML.

**autoprefixer:** Um plugin PostCSS que adiciona automaticamente prefixos de navegadores ao CSS, garantindo compatibilidade entre navegadores ao usar propriedades CSS que requerem prefixos.

**react-dom:** A biblioteca que fornece métodos específicos para o DOM para uso com React. Ela é usada para renderizar componentes React em elementos da árvore DOM, permitindo que os componentes React sejam integrados a uma página web.

**react-hook-form:** Uma biblioteca para gerenciamento de formulários em React que utiliza hooks. Ela é leve e eficiente, proporcionando uma maneira simples de controlar os estados dos formulários, validações e envio, com foco em performance.

**react-router-dom:** Uma biblioteca para gerenciamento de rotas em aplicações React. Ela permite a navegação e a criação de rotas dinâmicas dentro de uma aplicação React, oferecendo componentes como BrowserRouter, Route, e Link para criar uma experiência de navegação fluida e dinâmica.

### Dev-dependencies

**axios-mock-adapter:** Um adaptador para Axios que permite a simulação de respostas HTTP em testes, útil para testar fluxos de dados e interações sem precisar de uma API real.

**babel-jest:** Um pacote que integra o Babel com o Jest, permitindo que o Jest teste arquivos JavaScript que foram transformados pelo Babel.

**eslint:** Uma ferramenta de análise estática de código para identificar e corrigir problemas em JavaScript e TypeScript, promovendo um código limpo e consistente.

**eslint-config-airbnb:** Uma configuração compartilhável do ESLint que aplica as regras de codificação do Airbnb, uma das mais populares guias de estilo para JavaScript e React.

**eslint-config-prettier:** Uma configuração compartilhável do ESLint que desativa regras do ESLint que podem conflitar com o Prettier, permitindo que o Prettier cuide da formatação do código.

**eslint-plugin-import:** Um plugin ESLint que lida com o linting de importações ES6, ajudando a garantir que os módulos sejam importados de forma consistente e válida.

**eslint-plugin-jsx-a11y:** Um plugin ESLint que reforça boas práticas de acessibilidade no JSX, ajudando a construir interfaces acessíveis para todos os usuários.

**eslint-plugin-prettier:** Um plugin ESLint que executa o Prettier como uma regra ESLint, permitindo que você mantenha a consistência do estilo de código enquanto se beneficia do linting padrão.

**eslint-plugin-react:** Um plugin ESLint que lida com o linting de código React, fornecendo regras específicas para garantir que as práticas recomendadas sejam seguidas ao desenvolver com React.

**eslint-plugin-react-hooks:** Um plugin ESLint para verificar as regras de uso dos Hooks em React, garantindo que os hooks sejam usados corretamente para evitar bugs.

**eslint-plugin-react-refresh:** Um plugin ESLint para suportar o React Refresh durante o desenvolvimento, ajudando a detectar problemas que poderiam quebrar o hot reloading em projetos React.

**husky:** Uma ferramenta para gerenciar hooks de Git, que permite automatizar tarefas como linting, testes, e formatação antes de commits ou push, ajudando a garantir que somente código de qualidade seja enviado ao repositório.

**jest:** Um framework de testes em JavaScript com foco em simplicidade e suporte a testes assíncronos, mocks, e cobertura de código. Ideal para testar código React e JavaScript em geral.

**jest-environment-jsdom:** Um ambiente de testes para o Jest que simula o DOM no Node.js, permitindo que componentes React sejam testados como se estivessem em um navegador.

**lint-staged:** Uma ferramenta para executar scripts de linting e formatação apenas nos arquivos que foram modificados em um commit, melhorando a performance e garantindo que os commits sigam as convenções do projeto.

**prettier:** Um formatador de código opinativo que automaticamente estiliza o código para seguir um padrão consistente, facilitando a leitura e a manutenção do código.

**tailwindcss:** Um framework CSS utilitário que fornece classes para criar layouts responsivos e personalizados diretamente no HTML, simplificando a estilização e promovendo um design consistente.

**ts-jest:** Um predefinido de Jest para TypeScript, que permite o teste de código TypeScript diretamente, sem necessidade de compilar para JavaScript antes de rodar os testes.

**typescript:** Um superset de JavaScript que adiciona tipagem estática opcional, ajudando a detectar erros de tipo durante o desenvolvimento e proporcionando ferramentas avançadas de IDE.

**vite:** Uma ferramenta de build rápida e moderna para projetos web, focada em desenvolvimento ágil com suporte a módulos ES e recursos avançados para frameworks como React e Vue.


