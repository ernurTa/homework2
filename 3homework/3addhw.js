var names = ['milk' ,'beer','beer', 'milk' ,  'milk']
var blacklist = ['beer']
for (var i = 0; i < names.length; i++){
if(blacklist.includes(names[i].toLowerCase())){
    console.log(` bad `);
    continue
}
console.log(`good`)}
