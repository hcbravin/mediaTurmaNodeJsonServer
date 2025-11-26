# 🎓 Aplicativo de Gestão de Notas de Estudantes (React Native)

Este projeto é uma aplicação mobile desenvolvida em **React Native** com o framework **Expo**, projetada para gerenciar as notas de estudantes, realizar operações CRUD (Criar, Ler, Atualizar, Excluir) e exibir estatísticas da turma.

O aplicativo utiliza uma API REST simulada (JSON Server) para persistência dos dados.

## 🌟 Funcionalidades Principais

* **CRUD Completo:** Cadastro, listagem, edição e exclusão de estudantes e suas respectivas notas.
* **Listagem de Estudantes:** Exibe o nome do estudante, notas (N1, N2, N3), e calcula e exibe a média e o status (Aprovado/Reprovado).
* **Estatísticas da Turma:**
    * Média Geral da turma.
    * Maior e Menor Média individual.
    * Contagem de Aprovados e Reprovados.
    * Gráfico de barras das médias individuais.
* **Navegação:** Utiliza navegação por abas inferiores (**Bottom Tabs**) para fácil acesso às diferentes telas.
* **Responsividade:** O layout se adapta a diferentes tamanhos de tela (smartphones e tablets) utilizando `useWindowDimensions`.

## 💻 Tecnologias Utilizadas

* **React Native**
* **Expo**
* **React Navigation** (para navegação por Bottom Tabs)
* **JSON Server** (para simular a API REST)
* **`react-native-chart-kit`** (para visualização de dados na tela de Estatística)
* **`@expo/vector-icons`** (Ionicons)

## 📁 Estrutura do Projeto

A estrutura do projeto segue a convenção comum de aplicações React Native, separando componentes, serviços e telas:

.
├── src/
│   ├── componentes/
│   │   ├── CardInfo.js         # Componente para exibição de dados estatísticos.
│   │   ├── EstudanteItem.js    # Componente de card para cada estudante na lista.
│   │   └── FabBotao.js         # Botão flutuante para adicionar novo estudante.
│   ├── servicos/
│   │   └── api.js              # Configuração da URL base da API.
│   └── telas/
│       ├── TelaEstatistica.js  # Exibe dados estatísticos e o gráfico.
│       ├── TelaEstudanteForm.js# Formulário para cadastro e edição de estudantes.
│       ├── TelaHome.js         # Tela principal com a lista de estudantes (R e D do CRUD).
│       └── TelaSobre.js        # Informações sobre o aplicativo e requisitos atendidos.
└── App.js                      # Configuração da navegação principal (Bottom Tabs).

## ⚙️ Como Executar o Projeto

Para rodar este projeto localmente, você precisará ter o Node.js e o npm/yarn instalados, além do Expo CLI.

### 1. Iniciar a API (JSON Server)

Este projeto depende de um servidor JSON simulado para funcionar.

1.  **Instale o JSON Server globalmente (se não tiver):**
    ```bash
    npm install -g json-server
    # ou
    yarn global add json-server
    ```

2.  **Crie o arquivo de dados `db.json`** na raiz do seu projeto com a estrutura inicial (ou use um arquivo de exemplo):
    ```json
    {
      "estudantes": [
        {"id": 1, "nome": "Exemplo Um", "n1": 8, "n2": 7, "n3": 9},
        {"id": 2, "nome": "Exemplo Dois", "n1": 5, "n2": 6, "n3": 4}
      ]
    }
    ```

3.  **Inicie o servidor JSON:**
    ```bash
    json-server --watch db.json --port 3000
    ```
    ⚠️ **Importante:** A URL da API está configurada em `src/servicos/api.js` como `http://localhost:3000`. Se você estiver testando em um dispositivo físico ou emulador na sua rede, você precisará **substituir `localhost`** pelo **endereço IP da sua máquina** onde o JSON Server está rodando.

### 2. Rodar o Aplicativo React Native

1.  **Instale as dependências:**
    ```bash
    npm install
    # ou
    yarn install
    ```

2.  **Inicie o projeto Expo:**
    ```bash
    npx expo start
    # ou
    yarn start
    ```

3.  O Metro Bundler será aberto. Você pode escanear o QR Code usando o aplicativo **Expo Go** no seu celular ou escolher a opção de rodar em um simulador/emulador.

## 📝 Requisitos do Projeto (Pós-Graduação)

O projeto foi desenvolvido atendendo aos seguintes requisitos propostos para a atividade final:

1.  **Múltiplas Telas Navegáveis:** Implementadas 4 telas (`Inicio`, `Novo Aluno`, `Estatistica`, `Sobre`).
2.  **Usabilidade e Design:** Uso de componentes reutilizáveis, feedback de carregamento e erros.
3.  **CRUD Completo:** Implementação completa de C, R, U, D para a entidade `Estudante` utilizando JSON Server.
4.  **Navegação por Bottom Tabs:** Uso do `createBottomTabNavigator` para a navegação principal.
5.  **Tela Responsiva:** Múltiplas telas (`TelaEstatistica`, `TelaEstudanteForm`, `EstudanteItem`) com layouts que se adaptam a diferentes dimensões de tela (celular vs. tablet).