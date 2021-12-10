console.log("Merhaba kodlama.io ben Cengizhan")

// JS type safe değildir

let dolarBugun = 9.30
let dolarDun = 9.20

{
    let dolarDun = 9.10
}

console.log(dolarDun)

//array
//camelCasing
let konutKredileri = ["Konut Kredisi", "Taşıt kredisi", "İhtiyaç Kredisi","Telefon kredisi"]

console.log(konutKredileri)

console.log("<ul>")
//i=index demek
//döngüyü konutKredileri uzunluğu kadar döndür.
for(let i = 0;i<konutKredileri.length;i++){
    console.log("<li>"+konutKredileri[i]+"</li>")//konutKredilerinin [i] ninci elemanını getir
}
console.log("</ul>")

//liste şekilnde yazdırdık.
