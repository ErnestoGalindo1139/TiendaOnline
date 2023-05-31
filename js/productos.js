 // Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getDatabase, onValue, ref, set, child, get, update, remove} from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js";
import { getStorage,ref as refStorage, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-storage.js";

const firebaseConfig = {
    apiKey: "AIzaSyCbwwbFc_mE14zR0ZtqlIgbJvMl7pKneQw",
    authDomain: "sitioweb-tiendaonline.firebaseapp.com",
    databaseURL: "https://sitioweb-tiendaonline-default-rtdb.firebaseio.com",
    projectId: "sitioweb-tiendaonline",
    storageBucket: "sitioweb-tiendaonline.appspot.com",
    messagingSenderId: "476451669679",
    appId: "1:476451669679:web:f62147a8a95f1e3baab65a",
    measurementId: "G-211ZK808CS"
};

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();
const storage = getStorage();

// Generar Productos
let productos = document.getElementById('contenido-productos');
window.addEventListener('DOMContentLoaded',mostrarProductos);
let tarjetaG = document.getElementById('tarjetasGraficas');
let gabinete = document.getElementById('gabinetes');
let proc = document.getElementById('procesadores');
let tarjetaM = document.getElementById('tarjetasMadre');
let memoria = document.getElementById('memoriasRAM');
let todos = document.getElementById('todos');

function mostrarProductos(){
    const dbRef = ref(db, "productos");


    onValue(dbRef,(snapshot) => {
        productos.innerHTML = "";
        snapshot.forEach((childSnapshot) => {
            const childKey = childSnapshot.key;
            const childData = childSnapshot.val();
        
        if(childData.estatus=="1"){

            productos.innerHTML +=`
                <div class='producto'>
                <img class='img-item' src='${childData.urlImagen}'>
                <p class='nombre'>${childData.nombre}</p>
                <p class='descripcion' style='font-size: .9em;'>${childData.descripcion}</p>
                <p class='cantidad'>Cantidad: ${childData.cantidad}</p>
                <p class='precio'>\$${childData.precio}</p>
                <button class='boton-comprar' data-bs-toggle="modal" data-bs-target="#exampleModalToggle">Comprar</button>
                </div>
            `;
        }
        
        });
    },
    {
        onlyOnce: true,
    }
    );
}




function mostrarTarjetasGraficas(){
    const dbRef = ref(db, "productos");
    
    document.getElementById('tituloProductos').innerHTML = "Tarjetas Graficas";
    onValue(dbRef,(snapshot) => {
        productos.innerHTML = "";
        snapshot.forEach((childSnapshot) => {
            const childData = childSnapshot.val();
            
            
            if(childData.categoria==1 && childData.estatus=="1"){
                productos.innerHTML +=`
                    <div class='producto'>
                    <img class='img-item' src='${childData.urlImagen}'>
                    <p class='nombre'>${childData.nombre}</p>
                    <p class='descripcion' style='font-size: .9em;'>${childData.descripcion}</p>
                    <p class='cantidad'>Cantidad: ${childData.cantidad}</p>
                    <p class='precio'>\$${childData.precio}</p>
                    <button class='boton-comprar'>Comprar</button>
                    </div>
                `;
                
            }
            
            
        });
    },
    
    {
        onlyOnce: true,
    }
    );
} 


function mostrarGabinetes(){
    const dbRef = ref(db, "productos");
    
    document.getElementById('tituloProductos').innerHTML = "Gabinetes";

    onValue(dbRef,(snapshot) => {
        productos.innerHTML = "";
            snapshot.forEach((childSnapshot) => {
                const childData = childSnapshot.val();
                
                
                if(childData.categoria==2 && childData.estatus=="1"){
                    productos.innerHTML +=`
                        <div class='producto'>
                        <img class='img-item' src='${childData.urlImagen}'>
                        <p class='nombre'>${childData.nombre}</p>
                        <p class='descripcion' style='font-size: .9em;'>${childData.descripcion}</p>
                        <p class='cantidad'>Cantidad: ${childData.cantidad}</p>
                        <p class='precio'>\$${childData.precio}</p>
                        <button class='boton-comprar'>Comprar</button>
                        </div>
                    `;
                    
                }
                
                
            });
    },
    
    {
        onlyOnce: true,
    }
    );
    
} 

function mostrarProcesadores(){
    const dbRef = ref(db, "productos");
    
    document.getElementById('tituloProductos').innerHTML = "Procesadores";
    
    onValue(dbRef,(snapshot) => {
        productos.innerHTML = "";
        snapshot.forEach((childSnapshot) => {
            const childData = childSnapshot.val();
            

                if(childData.categoria==3 && childData.estatus=="1"){
                    productos.innerHTML +=`
                        <div class='producto'>
                        <img class='img-item' src='${childData.urlImagen}'>
                        <p class='nombre'>${childData.nombre}</p>
                        <p class='descripcion' style='font-size: .9em;'>${childData.descripcion}</p>
                        <p class='cantidad'>Cantidad: ${childData.cantidad}</p>
                        <p class='precio'>\$${childData.precio}</p>
                        <button class='boton-comprar'>Comprar</button>
                        </div>
                    `;
                    
                }
                
                
            });
        },
        
        {
            onlyOnce: true,
        }
        );
        
    } 

function mostrarTarjetasMadre(){
    const dbRef = ref(db, "productos");

    document.getElementById('tituloProductos').innerHTML = "Tarjetas Madre";
    
    onValue(dbRef,(snapshot) => {
        productos.innerHTML = "";
        snapshot.forEach((childSnapshot) => {
            const childData = childSnapshot.val();
            
            
            if(childData.categoria==4 && childData.estatus=="1"){
                productos.innerHTML +=`
                    <div class='producto'>
                    <img class='img-item' src='${childData.urlImagen}'>
                    <p class='nombre'>${childData.nombre}</p>
                    <p class='descripcion' style='font-size: .9em;'>${childData.descripcion}</p>
                    <p class='cantidad'>Cantidad: ${childData.cantidad}</p>
                    <p class='precio'>\$${childData.precio}</p>
                    <button class='boton-comprar'>Comprar</button>
                    </div>
                `;
                
            }
            
            
        });
    },
    
    {
        onlyOnce: true,
}
);

} 

function mostrarMemoria(){
    const dbRef = ref(db, "productos");
    
    document.getElementById('tituloProductos').innerHTML = "Memorias RAM";

    onValue(dbRef,(snapshot) => {
        productos.innerHTML = "";
        snapshot.forEach((childSnapshot) => {
            const childData = childSnapshot.val();
            
            
            if(childData.categoria==5 && childData.estatus=="1"){
                productos.innerHTML +=`
                    <div class='producto'>
                    <img class='img-item' src='${childData.urlImagen}'>
                    <p class='nombre'>${childData.nombre}</p>
                    <p class='descripcion' style='font-size: .9em;'>${childData.descripcion}</p>
                    <p class='cantidad'>Cantidad: ${childData.cantidad}</p>
                    <p class='precio'>\$${childData.precio}</p>
                    <button class='boton-comprar'>Comprar</button>
                    </div>
                `;
                
            }
            
            
        });
    },
    
    {
        onlyOnce: true,
    }
    );
    
} 

function mostrarTodos(){
    const dbRef = ref(db, "productos");

    document.getElementById('tituloProductos').innerHTML = "Nuestros Productos";

    onValue(dbRef,(snapshot) => {
        productos.innerHTML = "";
        snapshot.forEach((childSnapshot) => {
            const childKey = childSnapshot.key;
            const childData = childSnapshot.val();
        
        if(childData.estatus=="1"){
            productos.innerHTML +=`
                <div class='producto'>
                <img class='img-item' src='${childData.urlImagen}'>
                <p class='nombre'>${childData.nombre}</p>
                <p class='descripcion' style='font-size: .9em;'>${childData.descripcion}</p>
                <p class='cantidad'>Cantidad: ${childData.cantidad}</p>
                <p class='precio'>\$${childData.precio}</p>
                <button class='boton-comprar'>Comprar</button>
                </div>
            `;
        }
        
        });
    },
    {
        onlyOnce: true,
    }
    );
}

tarjetaG.addEventListener('click', mostrarTarjetasGraficas);
gabinete.addEventListener('click', mostrarGabinetes);
proc.addEventListener('click', mostrarProcesadores);
tarjetaM.addEventListener('click', mostrarTarjetasMadre);
memoria.addEventListener('click', mostrarMemoria);
todos.addEventListener('click', mostrarTodos);
