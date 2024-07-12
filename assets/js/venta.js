const ventas = [
    {
        src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
        zona: 'Apartamento en el centro de la ciudad',
        descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
        direccion: '123 Main Street, Anytown, CA 91234',
        cantidadDeHabtaciones: '2 Habitaciones',
        cantidadDeBaños: '2 Baños',
        valor: '2.000',
        MascotasPermitidas: false,
        AreaDeFumadores: false,
    },
    {
        src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        zona: 'Apartamento luminoso con vista al mar',
        descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
        direccion: '456 Ocean Avenue, Seaside Town, CA 56789',
        cantidadDeHabtaciones: '3 Habitaciones',
        cantidadDeBaños: '3 Baños',
        valor: '2.500',
        MascotasPermitidas: true,
        AreaDeFumadores: true,
    },
    {
        src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        zona: 'Condominio moderno en zona residencial',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
        direccion: '123 Main Street, Anytown, CA 91234',
        cantidadDeHabtaciones: '2 Habitaciones',
        cantidadDeBaños: '2 Baños',
        valor: '2.200',
        MascotasPermitidas: false,
        AreaDeFumadores: false,
    },
    {
        src: 'https://images.adsttc.com/media/images/5128/abe0/b3fc/4b11/a700/4c79/newsletter/1285434474-house-in-menorca-dom-arquitectura----dom-arquitectura.jpg?1414370585',
        zona: 'Apartamento de diseño en centro cultural',
        descripcion: 'Moderno apartamento con diseño vanguardista en el corazón del centro cultural de la ciudad',
        direccion: '789 Cultural Avenue, Art District, CA 78901',
        cantidadDeHabtaciones: '3 Habitaciones',
        cantidadDeBaños: '3 Baños',
        valor: '3.300',
        MascotasPermitidas: true,
        AreaDeFumadores: true,
    },
    {
        src: 'https://images.adsttc.com/media/images/5c0f/d364/08a5/e54b/ad00/0352/newsletter/8526_18.jpg?1544541018', 
        zona: 'Piso contemporáneo con vistas al río',
        descripcion: 'Amplio piso contemporáneo con vistas panorámicas al río que atraviesa la ciudad',
        direccion: '456 Riverside Drive, Riverfront, CA 45678',
        cantidadDeHabtaciones: '4 Habitaciones',
        cantidadDeBaños: '3 Baños',
        valor: '4.500',
        MascotasPermitidas: false,
        AreaDeFumadores: true,
    },
    {
        src: 'https://images.adsttc.com/media/images/512a/52a9/b3fc/4b11/a700/8fb2/large_jpg/1303158968-000.jpg?1361728170', 
        zona: 'Casa de campo renovada con jardín',
        descripcion: 'Encantadora casa de campo renovada con amplio jardín ideal para actividades al aire libre',
        direccion: '789 Garden Lane, Green Valley, CA 23456',
        cantidadDeHabtaciones: '3 Habitaciones',
        cantidadDeBaños: '2 Baños',
        valor: '3.800',
        MascotasPermitidas: true,
        AreaDeFumadores: false,
    },
];
const seccionVentas = document.querySelector("#ventas");

let plantillaVentas = "";

ventas.forEach((propiedad, index) => {
    if (index < 6) {
        plantillaVentas += `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="${propiedad.src}" class="card-img-top" alt="Imagen de la propiedad"/>
                    <div class="card-body">
                        <h5 class="card-title">${propiedad.zona}</h5>
                        <p class="card-text">${propiedad.descripcion}</p>
                        <p><i class="fas fa-map-marker-alt"></i> ${propiedad.direccion}</p>
                        <p><i class="fas fa-bed"></i> ${propiedad.cantidadDeHabtaciones} |
                        <i class="fas fa-bath"></i> ${propiedad.cantidadDeBaños}</p>
                        <p><i class="fas fa-dollar-sign"></i> ${propiedad.valor}</p>
                        ${propiedad.AreaDeFumadores
                            ? `<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>`
                            : `<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>`
                        }
                        ${propiedad.MascotasPermitidas
                            ? `<p class="text-success"><i class="fas fa-paw"></i> Se permiten mascotas</p>`
                            : `<p class="text-danger"><i class="fas fa-paw"></i> No se permiten mascotas</p>`
                        }
                    </div>
                </div>
            </div>`;
    }
});


seccionVentas.innerHTML = plantillaVentas;