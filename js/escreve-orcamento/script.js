/*************************
 * COISAS A FAZER: 
 *     Adicionar o tipo checkbox e trocar impressão e material de adesivos com recorte
 *     Adicionar proteções para números, seja com o tipo number, seja com o text, qual ficar melhor
 *     Adicionar adesivo de vinil simples, impressão à jato de tinta em sulfite grande, impressões cartão e foto
 *         com e sem corte, apostilas
 *     Extrair o prazo para uma função padrão a todas
 */


const MODELS = {
    banner: {
        input: {
            QNT: {
                name: "Quantidade",
                type: "number",
                value: "1" 
            },
            NOUN_PLURAL: {
                type: "plural",
                depends: "QNT",
                single: "",
                plural: "s"
            },
            HEIGHT: {
                name: "Altura",
                type: "number",
                value: "60"
            },
            WIDTH: {
                name: "Largura",
                type: "number",
                value: "40"
            },
            VERB_PLURAL: {
                type: "plural",
                depends: "QNT",
                single: "",
                plural: "m"
            },
            PRICE: {
                name: "Preço",
                type: "number",
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
            DATE_COMPL: {
                name: "Tipo de data",
                type: "radio",
                options: [{name: "Dias Úteis", text: " dias úteis"}, {name: "Data fixa", text: ""}]
            }
        },
        title: "Banner",
        text: `$QNT banner$NOUN_PLURAL com tamanho $HEIGHT cm por $WIDTH cm com impressão ecossolvente em lona e acabamento de madeira e cordão
         fica$VERB_PLURAL no valor de *R$ $PRICE* tudo<br>
        Conseguimos entregar dentro de $MIN_DATE a $MAX_DATE$DATE_COMPL`
    },
    lona: {
        input: {
            QNT: {
                name: "Quantidade",
                type: "number",
                value: "1" 
            },
            NOUN_PLURAL: {
                type: "plural",
                depends: "QNT",
                single: "",
                plural: "s"
            },
            HEIGHT: {
                name: "Altura",
                type: "number",
                value: "60"
            },
            WIDTH: {
                name: "Largura",
                type: "number",
                value: "40"
            },
            VERB_PLURAL: {
                type: "plural",
                depends: "QNT",
                single: "",
                plural: "m"
            },
            PRICE: {
                name: "Preço",
                type: "number",
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
            DATE_COMPL: {
                name: "Tipo de data",
                type: "radio",
                options: [{name: "Dias Úteis", text: " dias úteis"}, {name: "Data fixa", text: ""}]
            }
        },
        title: "Lona",
        text: `$QNT lona$NOUN_PLURAL com tamanho $HEIGHT cm por $WIDTH cm com impressão ecossolvente em lona e acabamento de bainha e ilhós
         fica$VERB_PLURAL no valor de *R$ $PRICE* tudo<br>
         Conseguimos entregar dentro de $MIN_DATE a $MAX_DATE$DATE_COMPL`
    },
    adesivo_recorte: {
        input: {
            QNT: {
                name: "Quantidade",
                type: "number",
                value: "1" 
            },
            NOUN_PLURAL: {
                type: "plural",
                depends: "QNT",
                single: "",
                plural: "s"
            },
            HEIGHT: {
                name: "Altura",
                type: "number",
                value: "5"
            },
            WIDTH: {
                name: "Largura",
                type: "number",
                value: "5"
            },
            VERB_PLURAL: {
                type: "plural",
                depends: "QNT",
                single: "",
                plural: "m"
            },
            IMPRESSAO: {
                name: "Tipo de impressão",
                type: "radio",
                options: [{name: "Laser", text: "à laser"}, {name: "Ecossolvente", text: "ecossolvente"}]
            },
            MATERIAL: {
                name: "Tipo de material",
                type: "radio",
                options: [{name: "Papel adesivo fosco", text: "papel adesivo fosco"}, {name: "Vinil", text: "vinil adesivo"}]
            },
            PRICE: {
                name: "Preço",
                type: "number",
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
            DATE_COMPL: {
                name: "Tipo de data",
                type: "radio",
                options: [{name: "Dias Úteis", text: " dias úteis"}, {name: "Data fixa", text: ""}]
            }
        },
        title: "Adesivo de recorte",
        text: `$QNT adesivo$NOUN_PLURAL com tamanho $HEIGHT cm por $WIDTH cm com impressão $IMPRESSAO em $MATERIAL com recorte
         fica$VERB_PLURAL no valor de *R$ $PRICE* tudo<br>
         Conseguimos entregar dentro de $MIN_DATE a $MAX_DATE$DATE_COMPL`
    },
    adesivo: {
        input: {
            QNT: {
                name: "Quantidade",
                type: "number",
                value: "1" 
            },
            NOUN_PLURAL: {
                type: "plural",
                depends: "QNT",
                single: "",
                plural: "s"
            },
            HEIGHT: {
                name: "Altura",
                type: "number",
                value: "60"
            },
            WIDTH: {
                name: "Largura",
                type: "number",
                value: "60"
            },
            VERB_PLURAL: {
                type: "plural",
                depends: "QNT",
                single: "",
                plural: "m"
            },
            IMPRESSAO: {
                name: "Tipo de impressão",
                type: "radio",
                options: [{name: "Ecossolvente", text: "ecossolvente"}, {name: "Laser", text: "à laser"}]
            },
            MATERIAL: {
                name: "Tipo de material",
                type: "radio",
                options: [{name: "Vinil", text: "vinil adesivo"}, {name: "Papel adesivo fosco", text: "folha de papel adesivo fosco"}]
            },
            PRICE: {
                name: "Preço",
                type: "number",
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
            DATE_COMPL: {
                name: "Tipo de data",
                type: "radio",
                options: [{name: "Dias Úteis", text: " dias úteis"}, {name: "Data fixa", text: ""}]
            }
        },
        title: "Adesivo simples",
        text: `$QNT adesivo$NOUN_PLURAL com tamanho $HEIGHT cm por $WIDTH cm com impressão $IMPRESSAO em $MATERIAL
         fica$VERB_PLURAL no valor de *R$ $PRICE* tudo<br>
         Conseguimos entregar dentro de $MIN_DATE a $MAX_DATE$DATE_COMPL`
    },
    tag: {
        input: {
            QNT: {
                name: "Quantidade",
                type: "number",
                value: "1" 
            },
            NOUN_PLURAL: {
                type: "plural",
                depends: "QNT",
                single: "",
                plural: "s"
            },
            HEIGHT: {
                name: "Altura",
                type: "number",
                value: "5"
            },
            WIDTH: {
                name: "Largura",
                type: "number",
                value: "5"
            },
            VERB_PLURAL: {
                type: "plural",
                depends: "QNT",
                single: "",
                plural: "m"
            },
            IMPRESSAO: {
                name: "Tipo de impressão",
                type: "radio",
                options: [{name: "Laser", text: "à laser"}, {name: "Jato de tinta", text: "à jato de tinta"}]
            },
            MATERIAL: {
                name: "Tipo de material",
                type: "radio",
                options: [{name: "Papel couchê 300gr", text: "papel couchê 300gr"}, {name: "Papel cartão", text: "papel cartão"}, {name: "Papel matte", text: "papel matte"}]
            },
            PRICE: {
                name: "Preço",
                type: "number",
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
            DATE_COMPL: {
                name: "Tipo de data",
                type: "radio",
                options: [{name: "Dias Úteis", text: " dias úteis"}, {name: "Data fixa", text: ""}]
            }
        },
        title: "Tag",
        text: `$QNT tag$NOUN_PLURAL com tamanho $HEIGHT cm por $WIDTH cm com impressão $IMPRESSAO em $MATERIAL com recorte
         fica$VERB_PLURAL no valor de *R$ $PRICE* tudo<br>
         Conseguimos entregar dentro de $MIN_DATE a $MAX_DATE$DATE_COMPL`
    },
    cartao: {
        input: {
            QNT: {
                name: "Quantidade",
                type: "number",
                value: "1" 
            },
            NOUN_PLURAL: {
                type: "plural",
                depends: "QNT",
                single: "ão",
                plural: "ões"
            },
            HEIGHT: {
                name: "Altura",
                type: "number",
                value: "5"
            },
            WIDTH: {
                name: "Largura",
                type: "number",
                value: "5"
            },
            VERB_PLURAL: {
                type: "plural",
                depends: "QNT",
                single: "",
                plural: "m"
            },
            IMPRESSAO: {
                name: "Tipo de impressão",
                type: "radio",
                options: [{name: "Laser", text: "à laser"}, {name: "Jato de tinta", text: "à jato de tinta"}]
            },
            MATERIAL: {
                name: "Tipo de material",
                type: "radio",
                options: [{name: "Papel couchê 300gr", text: "papel couchê 300gr"}, {name: "Papel cartão", text: "papel cartão"}, {name: "Papel matte", text: "papel matte"}]
            },
            PRICE: {
                name: "Preço",
                type: "number",
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
            DATE_COMPL: {
                name: "Tipo de data",
                type: "radio",
                options: [{name: "Dias Úteis", text: " dias úteis"}, {name: "Data fixa", text: ""}]
            }
        },
        title: "Cartão",
        text: `$QNT cart$NOUN_PLURAL com tamanho $HEIGHT cm por $WIDTH cm com impressão $IMPRESSAO em $MATERIAL com recorte
         fica$VERB_PLURAL no valor de *R$ $PRICE* tudo<br>
         Conseguimos entregar dentro de $MIN_DATE a $MAX_DATE$DATE_COMPL`
    },
};

const text_class = "text";

main_div = document.getElementsByClassName("main")[0];


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
        if(product_input.type === "text" || product_input.type === "number") {
            let value = document.getElementsByClassName(product_name + " " + input_key.toLowerCase())[0].value;

            text= text.replaceAll("$" + input_key.toUpperCase(), value)
        }
        if(product_input.type === "radio") {
            product_input.options.forEach((option) => {
                let option_input = document.getElementById(product_name + "_" + option.name.replaceAll(" ", "_"));
                if(option_input.checked === true) {
                    text = text.replaceAll("$" + input_key.toUpperCase(), option.text);
                }
            });
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
            if(attr === "type") {
                form.type = "text"
            } else {
                form[attr] = input_obj[attr];
            }
            
        }
        form.className = product_name + " " + input_name.toLowerCase();
        form.addEventListener("keydown", (e) => {
            if(e.key.match(/[a-z]/i) && e.key.length===1) {
                e.preventDefault();
            }
        })
    }
    if(input_obj.type === "text") {
        for(let attr in input_obj) {
            form[attr] = input_obj[attr];
            form.className = product_name + " " + input_name.toLowerCase();
        }
    }
    if(input_obj.type === "radio") {
        form = document.createElement('div');
        form.className = product_name + " " + input_name.toLowerCase();
        let first = true;
        input_obj.options.forEach((option) => {

            let option_input = document.createElement('input');
            let option_label = document.createElement('label');

            option_input.type = "radio"
            option_input.className = product_name + " " + input_name.toLowerCase();
            option_input.name = product_name + "_" + input_obj.name.replaceAll(" ", "_");
            option_input.id = product_name + "_" + option.name.replaceAll(" ", "_");
            option_label.innerText = option.name;

            if(first) {
                first = false;
                option_input.checked = true;
            }

            form.appendChild(option_input);
            form.appendChild(option_label);
        });
    }

    form.addEventListener('change', () => {updateText(product_name)})
    form.addEventListener('keyup', () => {updateText(product_name)})
    form_paragraph.innerText = input_obj.name + ": ";
    form_paragraph.appendChild(form);
    console.log(form)
    div.appendChild(form_paragraph);
}