case 'lista':
let lista = leo.prepareMessageFromContent(from,{
"listMessage": {
"title": `${pushname}`,
"description": `Este es un Mensaje de lista`,
"buttonText": "Click Aqui",
"listType": "SINGLE_SELECT",
"sections": [
{ "title": `Seccion 1`,
"rows": [
{
"title": 'Lista 1',
"description": 'Desc 1',
"rowId": `row1`
}
]
},
{
"title": `Seccion 2`,
"rows": [
{
"title": 'Lista 2',
"description": 'Desc 2',
"rowId": `row 2`
}
]    
},
"footerText": '© Creator 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊,
]
}
}, {quoted: choute})
leo.relayWAMessage(lista)          
break
