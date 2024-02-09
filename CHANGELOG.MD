## <2.4.2> - <2023/01/23>

### Sprint learnings

- Uso de Link , de react router, para navegar entre componentes 
- El hook useParams, que me ayudo a conectar mi componente con la api movie/details
- Use la extensión REACT, para analizar mis componentes
- verifiqué mis peticiones a la api, por medio de la consola, "RED"


### Added

- Selección de filtros (por género)
- Selección de orden de peliculas (+ popular a - popular)
- Vista de detalles de cada película (nuevo componente)
- botón para volver a "Home"

### Changed

- Cambie el selector con filtros, a 4 géneros de películas específicos y no a la selección completa entregada por la api.

### Fixed
- Arreglé un problema que tenía en la compaginación, ya que al cambiar de filtros y/o orden, no se comenzaba desde la página número 1. 
- Las peliculas estaban ordenadas por default por popularidad, así que lo cambie por revenue.desc, desde mi componente padre "Home"

## <1.3.0> - <2023/01/17>

### Sprint learnings

- Trabajar con la elevación de estados entre componentes 
- Uso del useState
- Test con Mock
- Hice peticiones de prueba a la API con Postman

### Added

- Botones de navegación entre las páginas
- visualización de número de página actual
- botón HOME, 

### Changed

- Cambie el "li" de Filter by genre, por un "select" con opciones.