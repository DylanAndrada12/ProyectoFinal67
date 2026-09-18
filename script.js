let Usuarios = [];

const UsuariosGuardados = localStorage.getItem("Usuarios");

if (UsuariosGuardados !== null) {
    Usuarios = JSON.parse(UsuariosGuardados);
}


// ==============================
// CAPTURAR ELEMENTOS DEL HTML
// ==============================

const BotonNuevoUsuarioHTML = document.getElementById("boton-nuevo-usuario");
const SeccionNuevoUsuarioHTML = document.getElementById("seccion-nuevo-usuario");

const NombreUsuarioHTML = document.getElementById("nombre-usuario");
const DniUsuarioHTML = document.getElementById("dni-usuario");
const CursoUsuarioHTML = document.getElementById("curso-usuario");
const CorreoUsuarioHTML = document.getElementById("correo-usuario");
const TelefonoUsuarioHTML = document.getElementById("telefono-usuario");

const BotonGuardarUsuarioHTML = document.getElementById("boton-guardar-usuario");
const BotonCancelarUsuarioHTML = document.getElementById("boton-cancelar-usuario");

const BuscarNombreHTML = document.getElementById("buscar-nombre");
const BuscarDniHTML = document.getElementById("buscar-dni");
const BuscarCursoHTML = document.getElementById("buscar-curso");

const ListaUsuariosHTML = document.getElementById("lista-usuarios");


// ==============================
// DEJAR EL LISTADO VACÍO
// ==============================

ListaUsuariosHTML.textContent = "";


// ==============================
// MOSTRAR FORMULARIO
// ==============================

BotonNuevoUsuarioHTML.addEventListener("click", function () {

    SeccionNuevoUsuarioHTML.classList.remove("oculto");

});


// ==============================
// CANCELAR NUEVO USUARIO
// ==============================

BotonCancelarUsuarioHTML.addEventListener("click", function () {

    SeccionNuevoUsuarioHTML.classList.add("oculto");

});


// ==============================
// GUARDAR NUEVO USUARIO
// ==============================

BotonGuardarUsuarioHTML.addEventListener("click", function () {

    const Usuario = {
        Id: Usuarios.length + 1,
        Nombre: NombreUsuarioHTML.value,
        DNI: DniUsuarioHTML.value,
        Curso: CursoUsuarioHTML.value,
        Correo: CorreoUsuarioHTML.value,
        Telefono: TelefonoUsuarioHTML.value
    };

    Usuarios.push(Usuario);
    localStorage.setItem("Usuarios", JSON.stringify(Usuarios));

    MostrarUsuarios();

    NombreUsuarioHTML.value = "";
    DniUsuarioHTML.value = "";
    CursoUsuarioHTML.value = "";
    CorreoUsuarioHTML.value = "";
    TelefonoUsuarioHTML.value = "";

    SeccionNuevoUsuarioHTML.classList.add("oculto");

});


// ==============================
// MOSTRAR USUARIOS
// ==============================

function MostrarUsuarios() {

    ListaUsuariosHTML.textContent = "";
    const UltimosUsuarios = Usuarios.slice(-3);
    UltimosUsuarios.forEach(function (Usuario) {

        const Fila = document.createElement("tr");

        const Id = document.createElement("td");
        const Nombre = document.createElement("td");
        const DNI = document.createElement("td");
        const Curso = document.createElement("td");
        const Correo = document.createElement("td");
        const Telefono = document.createElement("td");
        const Acciones = document.createElement("td");

        Id.textContent = "#" + Usuario.Id;
        Nombre.textContent = Usuario.Nombre;
        DNI.textContent = Usuario.DNI;
        Curso.textContent = Usuario.Curso;
        Correo.textContent = Usuario.Correo;
        Telefono.textContent = Usuario.Telefono;

        Acciones.textContent = "👁️ ✏️ 🗑️";

        Fila.appendChild(Id);
        Fila.appendChild(Nombre);
        Fila.appendChild(DNI);
        Fila.appendChild(Curso);
        Fila.appendChild(Correo);
        Fila.appendChild(Telefono);
        Fila.appendChild(Acciones);

        ListaUsuariosHTML.appendChild(Fila);

    });

}


// ==============================
// BUSCAR USUARIOS
// ==============================

function BuscarUsuarios() {

    ListaUsuariosHTML.textContent = "";

    Usuarios.forEach(function (Usuario) {

        const NombreCoincide = Usuario.Nombre
            .toLowerCase()
            .includes(BuscarNombreHTML.value.toLowerCase());

        const DniCoincide = Usuario.DNI
            .includes(BuscarDniHTML.value);

        const CursoCoincide =
            BuscarCursoHTML.value === "" ||
            Usuario.Curso === BuscarCursoHTML.value;

        if (NombreCoincide && DniCoincide && CursoCoincide) {

            const Fila = document.createElement("tr");

            const Id = document.createElement("td");
            const Nombre = document.createElement("td");
            const DNI = document.createElement("td");
            const Curso = document.createElement("td");
            const Correo = document.createElement("td");
            const Telefono = document.createElement("td");
            const Acciones = document.createElement("td");

            Id.textContent = "#" + Usuario.Id;
            Nombre.textContent = Usuario.Nombre;
            DNI.textContent = Usuario.DNI;
            Curso.textContent = Usuario.Curso;
            Correo.textContent = Usuario.Correo;
            Telefono.textContent = Usuario.Telefono;

            Acciones.textContent = "👁️ ✏️ 🗑️";

            Fila.appendChild(Id);
            Fila.appendChild(Nombre);
            Fila.appendChild(DNI);
            Fila.appendChild(Curso);
            Fila.appendChild(Correo);
            Fila.appendChild(Telefono);
            Fila.appendChild(Acciones);

            ListaUsuariosHTML.appendChild(Fila);
        }

    });

}


// ==============================
// BOTÓN BUSCAR
// ==============================

document
    .getElementById("formulario-busqueda")
    .addEventListener("submit", function (evento) {

        evento.preventDefault();

        BuscarUsuarios();

    });
