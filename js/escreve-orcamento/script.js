const MODELS = {
    banner: {
        input: {
            QNT: {
                name: "Quantidade",
                type: "text",
                value: "1" 
            },
            S: {
                type: "plural",
                depends: "QNT",
                single: "",
                plural: "s"
            },
            L: {
                name: "Largura",
                type: "text",
                value: "40"
            },
            H: {
                name: "Altura",
                type: "text",
                value: "60"
            },
            M: {
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
                name: "Mìnimo de prazo",
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
        text: `$QNT banner$S com tamanho $H cm por $L cm com impressão ecossolvente em lona e acabamento de madeira e cordão
         fica$M no valor de *R$ $PRICE* tudo<br>
        Conseguimos entregar para um prazo de $MIN_DATE a $MAX_DATE dias úteis para a entrega`
    },
    lona: {
        input: {
            QNT: {
                name: "Quantidade",
                type: "text",
                value: "1" 
            },
            S: {
                type: "plural",
                depends: "QNT",
                single: "",
                plural: "s"
            },
            L: {
                name: "Largura",
                type: "text",
                value: "40"
            },
            H: {
                name: "Altura",
                type: "text",
                value: "60"
            },
            M: {
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
                name: "Mìnimo de prazo",
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
        text: `$QNT lona$S com tamanho $H cm por $L cm com impressão ecossolvente em lona e acabamento de bainha e ilhós
         fica$M no valor de *R$ $PRICE* tudo<br>
        Conseguimos entregar para um prazo de $MIN_DATE a $MAX_DATE dias úteis para a entrega`
    }
};

const text_class = "text";

main_div = document.getElementsByClassName("main")[0];

function updateText(product_name) {
    const product = MODELS[product_name];
    let text_field = document.getElementsByClassName(product_name + " " + text_class)[0];
    let text = product.text;

    for(let input_key in product.input) {
        if(product.input[input_key].type === "plural") {

            let cond_value = Number(document.getElementsByClassName(product_name + " " + 
                product.input[input_key].depends.toLowerCase())[0].value);
            let subs_str = product.input[input_key].single;

            if(isNaN(cond_value)) cond_value = 1;
            if(cond_value > 1) {
                subs_str = product.input[input_key].plural;
            }
            
            text = text.replace("$" + input_key.toUpperCase(), String(subs_str));
        }
        if(product.input[input_key].type === "number") {
            let value = Number(document.getElementsByClassName(product_name + " " + input_key.toLowerCase())[0].value);

            if(isNaN(value)) value = 1;

            text= text.replace("$" + input_key.toUpperCase(), String(value))
        }
        if(product.input[input_key].type === "text") {
            let value = document.getElementsByClassName(product_name + " " + input_key.toLowerCase())[0].value;

            text= text.replace("$" + input_key.toUpperCase(), value)
        }
    }
    console.log(text)
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