/*************************
 * COISAS A FAZER: 
 *     Adicionar o tipo checkbox e trocar impressão e material de adesivos com recorte
 *     Adicionar proteções para números, seja com o tipo number, seja com o text, qual ficar melhor
 *     Adicionar adesivo de vinil simples, impressão à jato de tinta em sulfite grande, impressões cartão e foto
 *         com e sem corte, apostilas
 */


const MODELS = {
    banner: {
        input: {
            QNT: {
                name: "Quantidade",
                type: "text",
                value: "1" 
            },
            NOUN_PLURAL: {
                type: "plural",
                depends: "QNT",
                single: "",
                plural: "s"
            },
            WIDTH: {
                name: "Largura",
                type: "text",
                value: "40"
            },
            HEIGHT: {
                name: "Altura",
                type: "text",
                value: "60"
            },
            VERB_PLURAL: {
                type: "plural",
                depends: "QNT",
                single: "",
                plural: "m"
            },
            PRICE: {
                name: "Preço",
                type: "text",
                value: "100,00"
            },
            MIN_DATE: {
                name: "Mínimo de prazo",
                type: "text",
                value: "1"
            },
            MAX_DATE: {
                name: "Máximo de prazo",
                type: "text",
                value: "3"
            }
        },
        title: "Banner",
        text: `$QNT banner$NOUN_PLURAL com tamanho $HEIGHT cm por $WIDTH cm com impressão ecossolvente em lona e acabamento de madeira e cordão
         fica$VERB_PLURAL no valor de *R$ $PRICE* tudo<br>
        Conseguimos entregar para um prazo de $MIN_DATE a $MAX_DATE dias úteis`
    },
    lona: {
        input: {
            QNT: {
                name: "Quantidade",
                type: "text",
                value: "1" 
            },
            NOUN_PLURAL: {
                type: "plural",
                depends: "QNT",
                single: "",
                plural: "s"
            },
            WIDTH: {
                name: "Largura",
                type: "text",
                value: "40"
            },
            HEIGHT: {
                name: "Altura",
                type: "text",
                value: "60"
            },
            VERB_PLURAL: {
                type: "plural",
                depends: "QNT",
                single: "",
                plural: "m"
            },
            PRICE: {
                name: "Preço",
                type: "text",
                value: "100,00"
            },
            MIN_DATE: {
                name: "Mínimo de prazo",
                type: "text",
                value: "1"
            },
            MAX_DATE: {
                name: "Máximo de prazo",
                type: "text",
                value: "3"
            }
        },
        title: "Lona",
        text: `$QNT lona$NOUN_PLURAL com tamanho $HEIGHT cm por $WIDTH cm com impressão ecossolvente em lona e acabamento de bainha e ilhós
         fica$VERB_PLURAL no valor de *R$ $PRICE* tudo<br>
        Conseguimos entregar para $MIN_DATE a $MAX_DATE dias úteis`
    },
    adesivo_recorte: {
        input: {
            QNT: {
                name: "Quantidade",
                type: "text",
                value: "1" 
            },
            NOUN_PLURAL: {
                type: "plural",
                depends: "QNT",
                single: "",
                plural: "s"
            },
            WIDTH: {
                name: "Largura",
                type: "text",
                value: "5"
            },
            HEIGHT: {
                name: "Altura",
                type: "text",
                value: "5"
            },
            VERB_PLURAL: {
                type: "plural",
                depends: "QNT",
                single: "",
                plural: "m"
            },
            PRICE: {
                name: "Preço",
                type: "text",
                value: "100,00"
            },
            MIN_DATE: {
                name: "Mínimo de prazo",
                type: "text",
                value: "1"
            },
            MAX_DATE: {
                name: "Máximo de prazo",
                type: "text",
                value: "3"
            },
            IMPRESSAO: { //create the checkbox input and change this input and MATERIAL to it
                name: "Tipo de impressão",
                type: "text",
                value: "à laser"
            },
            MATERIAL: {
                name: "Tipo de material",
                type: "text",
                value: "papel adesivo fosco"
            }
        },
        title: "Adesivo de recorte",
        text: `$QNT adesivo$NOUN_PLURAL com tamanho $HEIGHT cm por $WIDTH cm com impressão $IMPRESSAO em $MATERIAL com recorte
         fica$VERB_PLURAL no valor de *R$ $PRICE* tudo<br>
        Conseguimos entregar para $MIN_DATE a $MAX_DATE dias úteis`
    },
};

const text_class = "text";

main_div = document.getElementsByClassName("main")[0];

function updateText(product_name) {
    const product = MODELS[product_name];
    let text_field = document.getElementsByClassName(product_name + " " + text_class)[0];
    let text = product.text;

    for(let input_key in product.input) {
        let product_input = product.input[input_key]
        if(product_input.type === "plural") {

            let cond_value = Number(document.getElementsByClassName(product_name + " " + 
                product.input[input_key].depends.toLowerCase())[0].value);
            let subs_str = product.input[input_key].single;

            if(isNaN(cond_value)) cond_value = 1;
            if(cond_value > 1) {
                subs_str = product.input[input_key].plural;
            }
            
            text = text.replaceAll("$" + input_key.toUpperCase(), String(subs_str));
        }
        if(product_input.type === "number") {
            let value = Number(document.getElementsByClassName(product_name + " " + input_key.toLowerCase())[0].value);

            if(isNaN(value)) value = 1;

            text= text.replaceAll("$" + input_key.toUpperCase(), String(value))
        }
        if(product_input.type === "text") {
            let value = document.getElementsByClassName(product_name + " " + input_key.toLowerCase())[0].value;

            text= text.replaceAll("$" + input_key.toUpperCase(), value)
        }
    }
    text_field.innerHTML = text;
}


function createInput(input_obj, div, product_name, input_name) {
    let form_paragraph = document.createElement('p');
    let form = document.createElement('input');

    if(input_obj.type === "plural") return;
    if(input_obj.type === "number") {
        for(let attr in input_obj) {
            form[attr] = input_obj[attr];
            form.className = product_name + " " + input_name.toLowerCase();
        }
    }
    if(input_obj.type === "text") {
        for(let attr in input_obj) {
            form[attr] = input_obj[attr];
            form.className = product_name + " " + input_name.toLowerCase();
        }
    }

    form.addEventListener('change', () => {updateText(product_name)})
    form.addEventListener('keyup', () => {updateText(product_name)})
    form_paragraph.innerText = input_obj.name + ": ";
    form_paragraph.appendChild(form)
    div.appendChild(form_paragraph);
}



for(let product_key in MODELS) {
    let product = MODELS[product_key]
    let title = document.createElement('h2')
    title.innerText = product['title'];

    let output_text = document.createElement('p');
    output_text.className = product_key + " " + text_class;
    main_div.appendChild(output_text);


    main_div.appendChild(title)
    for(let input_key in product.input) {
        createInput(product.input[input_key], main_div, product_key, input_key);
    }
    main_div.appendChild(output_text);
    updateText(product_key);
}