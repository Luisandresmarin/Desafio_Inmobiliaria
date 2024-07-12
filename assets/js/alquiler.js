const alquileres = [
    {
        src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
        zona: 'Apartamento de lujo en zona exclusiva',
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        direccion: '123 Luxury Lane, Prestige Suburb, CA 45678',
        cantidadDeHabtaciones: '4 Habitaciones',
        cantidadDeBaños: '4 Baños',
        valor: '5.000',
        MascotasPermitidas: false,
        AreaDeFumadores: true,
    },
    {
        src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
        zona: 'Apartamento acogedor en la montaña',
        descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
        direccion: '789 Mountain Road, Summit Peaks, CA 23456',
        cantidadDeHabtaciones: '2 Habitaciones',
        cantidadDeBaños: '1 Baños',
        valor: '1.200',
        MascotasPermitidas: true,
        AreaDeFumadores: true,
    },
    {
        src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
        zona: 'Penthouse de lujo con terraza panorámica',
        descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
        direccion: '567 Skyline Avenue, Skyview City, CA 56789',
        cantidadDeHabtaciones: '3 Habitaciones',
        cantidadDeBaños: '3 Baños',
        valor: '4.500',
        MascotasPermitidas: false,
        AreaDeFumadores: false,
    },
    {
        src: 'https://mathiasklotz.com/wp-content/uploads/2021/11/2-6-655x344.jpg',
        zona: 'Casa moderna en suburbio',
        descripcion: 'Casa moderna con diseño contemporáneo ubicada en un tranquilo suburbio',
        direccion: '456 Quiet Street, Serenity Suburb, CA 67890',
        cantidadDeHabtaciones: '4 Habitaciones',
        cantidadDeBaños: '3 Baños',
        valor: '3.800',
        MascotasPermitidas: true,
        AreaDeFumadores: false,
    },
    {
        src: 'https://arquitecturayempresa.es/sites/default/files/content/matias_klotz_casa_para_11_mujeres_vista_inferior.jpg', 
        zona: 'Apartamento histórico en el centro',
        descripcion: 'Espacioso apartamento histórico situado en el corazón del centro histórico de la ciudad',
        direccion: '789 Heritage Square, Downtown, CA 34567',
        cantidadDeHabtaciones: '2 Habitaciones',
        cantidadDeBaños: '2 Baños',
        valor: '2.700',
        MascotasPermitidas: true,
        AreaDeFumadores: true,
    },
    {
        src: 'https://images.adsttc.com/media/images/5128/7cd4/b3fc/4b11/a700/448e/medium_jpg/1280349913-38102-100326-047d.jpg?1413953131', 
        zona: 'Casa de campo con vistas panorámicas',
        descripcion: 'Encantadora casa de campo con vistas panorámicas a las montañas circundantes',
        direccion: '123 Tranquil Road, Countryside, CA 12345',
        cantidadDeHabtaciones: '3 Habitaciones',
        cantidadDeBaños: '2 Baños',
        valor: '3.400',
        MascotasPermitidas: false,
        AreaDeFumadores: true,
    },
];

const seccionAlquileres = document.querySelector("#alquiler");

let plantillaAlquileres = "";

alquileres.forEach((propiedad, index) => {
    if (index < 6) {
        plantillaAlquileres += `
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

seccionAlquileres.innerHTML = plantillaAlquileres;
