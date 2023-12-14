{// // //1
// // let a;
// // let b;
// // let c;
// // a = 1;
// // b = "a";
// // c = true;
// // console.log(typeof a, typeof b, typeof c);

// // //2
// // let grade = 0 ;
// // let atas = 3.5;
// // let bawah = 3;

// // grade = 3.6;

// // if(grade >atas) console.log("Cumlaude");
// // else if(grade <atas && grade > bawah) console.log("Baik");
// // else console.log("Cukup");

// // console.log(typeof b);


// let array = [1,2,3];
// // console.log(typeof array);

// // array.pop();
// // console.log(array);

// // array.push([11]);
// // console.log(array);

// // array.shift();
// // console.log(array);

// // array.unshift([20]);
// // console.log(array);

// // //sort
// console.log(array.sort);
// // console.log(array.sort(function(a,b) {return b - a })); // buat angka

// let arr = [21,2,3,4,1,2,6,745,45,43,21]

// function sortArr(arr) {
//     let len = arr.length;
//     for (let i = 0; i < len - 1; i++) {
//         for (let j = 0; j < len - 1 - i; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 // Swap the elements if they are in the wrong order
//                 let temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }
//     return arr;
// }
// console.log(sortArr(arr));

// let a = 1
// let b = 2
// console.log(a=+b);
// a=1;
// console.log(a+=b);
// a=1;
// console.log(a++);
}


// let n = 5;
// let string = "";
// // External loop
// for (let i = 1; i <= n; i++) {
//   // printing spaces
//   for (let j = 1; j <= n - i; j++) {
//     string += " ";
//   }
//   // printing star
//   for (let k = 0; k < 2 * i - 1; k++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);

//  n = 5;
//  string = "";
// for (let i = 1; i <= n; i++) {
//   for (let j = 0; j < n - i; j++) {
//     string += " ";
//   }
//   for (let k = 0; k < i; k++) {
//     string += "*";
//   }
//   string += "\n";
// }
// for (let i = 1; i <= n - 1; i++) {
//   for (let j = 0; j < i; j++) {
//     string += " ";
//   }
//   for (let k = 0; k < n - i; k++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);


function cetakSegitigaTengah(jumlahbaris){
    for(let i = 1; i <= jumlahbaris; i++){
        let spasi = ' '.repeat(jumlahbaris -1);
        let bintang = '*'.repeat(i);
        console.log(spasi + bintang);
    }
}
function cetakSegitigaTengahKiri(jumlahbaris){
    for(let i =jumlahbaris; i>= 1; i--){
        let spasi = ' '.repeat(jumlahbaris-1);
        let  bintang= '*'.repeat(i);
        console.log(spasi + bintang);
    }
}
// cetakSegitigaTengah(4);
// cetakSegitigaTengahKiri(4);

function cetaksegitiga(n, posisi){
    switch(posisi){
        case "atas":
            cetakSegitigaTengah(n);
            break;
        case "bawah":
            cetakSegitigaTengahKiri(n);
            break;
        default:
            cetakSegitigaTengah(n);
            cetakSegitigaTengahKiri(n);
    }
}

cetaksegitiga(4,"bawah")
;
// console.log(cetakSegitigaTengah(4));
// console.log(cetakSegitigaTengahKiri(4));


function Mahasiswa(nama, jurusan){
    this.nama = nama;
    this.jurusan = jurusan;
    this.sapa = function(){
        console.log("halo, nama saya" + this.nama + " dari jurusan" + this.jurusan);

    };
}
let mahasiswa1 = new Mahasiswa("udin","teknik");
let mahasiswa2 = new Mahasiswa("ucok","sipil");

mahasiswa1.sapa();
mahasiswa2.sapa();

fetch()
