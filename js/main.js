$(document).ready(function(){

    const form = $('#form-contatcs');
    const nome = [];
    const tell = [];

    let totalContatos = 0;
    let linhas = '';

    $('#Number').mask('(00) 00000-0000')

    $('#form-contatcs').validate({
        rules: {
            nome: {
                required: true 
            },
            telefone: {
                required: true
            },
        },
        messages:{
            nome:`<span class="error"> Adicione um nome</span> `,
            telefone:`<span class="error"> Adicione um número</span> `,
        },
        submitHandler: function(form){

            adicionaLinha();
            atualizaTabela();
            contatosTotal();
            limpaFormulario();

            console.log(form)

        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids();
            if(camposIncorretos){
                $('.menssagem').text(`Existem ${camposIncorretos} campos incorretos. Preencha-os corretamente`)
            }
        },
    })

    function adicionaLinha(){
        const inputNome = $('#Name').val();
        const inputTell= $('#Number').val();

        switch(true){
            case nome.includes(inputNome):
                    $('.menssagem').html(`Você já possui um contato com o nome <strong>${inputNome}</strong>, verifique se não é o mesmo, caso seja outro contato adicione um sobrenome`)
                break;
            case tell.includes(inputTell):
                    $('.menssagem').html(`O número <strong>${inputTell}</strong> já está salvo, verifique se este é o número correto.`)
                break;
            default:
                nome.push(inputNome);
                tell.push(inputTell);

                console.log(nome);
                console.log(tell);

                let linha = '<tr>';
                linha += `<td>${inputNome}</td>`;
                linha += `<td>${inputTell}</td>`;
                linha += '</tr>';

                linhas += linha;
                contatosTotal();
        };

    }

    function atualizaTabela(){
        const corpoTabela = $('tbody');
        $(corpoTabela).html(linhas);
    }

    function contatosTotal(){
        totalContatos = nome.length ;
        $('#total_contatcts').text( totalContatos);
    }

    function limpaFormulario(){
        $('#form-contatcs').each(function(){
            $('input').val('');
        });
    }

})



