const locators = {
    LOGIN: { // variaveis do login
        USER: '[data-test="email"]', //incluir usuario
        PASSWORD: '[data-test="passwd"]', // incluir senha
        BTN_LOGIN: '.btn'//botão logar     
    },
    MENU: {
        HOME: '[data-test=menu-home]', //botão para ir até pagina inicial
        SETTINGS: '[data-test="menu-settings"] > .fas', //clicar botão menu
        COUNT: '[href="/contas"]',  // clicar em contas
        RESET: '[href="/reset"]',//resetar contas
        MOVIMENTACAO: '[data-test=menu-movimentacao]',// menu movimentação
        EXTRATO: '[data-test=menu-extrato]',//extrato
    },
    CONTA: {
        NOME: '[data-test="nome"]', //inclusão novo nome
        BTN_SALVAR: '.btn', //salvar conta
        BTN_ALTERAR: ':nth-child(1) > :nth-child(2) > :nth-child(1) > .far', //editar conta
    },
    MOVIMENTACAO: {
        DESCRICAO: '[data-test=descricao]', //descrição da movimentação
        VALOR: '[data-test=valor]', //valor da mivimentação
        INTERESADO: '[data-test=envolvido]', //campo nome do interessado da movimentação
        STATUS: '[data-test=status]', //status da movimentação
        BTN_SALVAR: '.btn-primary' // botão salvar

    },
    EXTRATO: {
        LINHAS: '.list-group > li',//identificar colunas
        REMOVER_ELEMENTO: ':nth-child(7) > .row > .col > [href="#"] > .far'//botão de remoção
    },
    SALDO: {
        SALDOCONTA: 'tbody > :nth-child(1) > :nth-child(2)', //campo saldo conta
    },

    MESSAGE: '.toast-message'// mensagens informadas
}
 
export default locators;