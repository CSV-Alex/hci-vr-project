import {
  FooterContent,
  HeroContent,
  Milestone,
  OverviewContent,
} from '../models/portfolio.model';

/**
 * =============================================================================
 * PORTFOLIO CONTENT — this is the only file you need to edit to add material.
 * =============================================================================
 *
 * HOW TO ADD CONTENT
 * ------------------
 * 1. Drop your images into `src/assets/images/<subfolder>/`.
 *    Subfolders: brainstorm/, storyboard/, testing/, game/
 * 2. Reference them as `assets/images/<subfolder>/<file>`.
 * 3. Every image needs a descriptive `alt`; the model enforces that field, so
 *    the build will fail if it is missing.
 *
 * Keep ideation proposals separate from mechanics verified in Roblox Studio.
 */

/** Hero copy. The subtitle is the single line under the title. */
export const HERO: HeroContent = {
  title: 'Grupo F — Cuidado al Volante',
  subtitle: 'Curso de Interacción Humano-Computadora · 7mo semestre · UNSA',
};

/** Project overview copy: 3–5 lines of context. */
export const OVERVIEW: OverviewContent = {
  heading: 'Resumen del proyecto',
  paragraphs: [
    'En Cuydado al Volante, dos cuyes huyen en un Escarabajo mientras la policía los persigue. Uno conduce y el otro puede ocuparse de los pedales y los cables del auto. Para escapar, tienen que trabajar juntos.',
    'El camino está lleno de tráfico, patrullas y obstáculos. El volante tiene un botón para saltar, y la meta está al final de un túnel. Podemos jugar con visor VR o probar los controles con teclado y ratón; el reto de los cables también acepta toques en pantalla.',
  ],
  image: {
    src: 'assets/images/game/volante.jpeg',
    alt: 'Vista desde la cabina del Escarabajo amarillo en Roblox, con el volante al frente y una calle con casas.',
    caption: 'Desde el asiento del conductor.',
  },
};

/** Progress log entries, in chronological order. */
export const MILESTONES: readonly Milestone[] = [
  {
    id: 'ideacion',
    label: 'Fase 1 · Ideación',
    title: 'Ideación del videojuego',
    blocks: [
      {
        type: 'text',
        paragraphs: [
          'Empezamos con una lluvia de ideas en Miro. Cada integrante compartió una propuesta; después las agrupamos, elegimos la que más nos interesó y pensamos cómo se jugaría.',
        ],
      },
      {
        type: 'brainstorm',
        title: 'Lluvia de ideas, agrupación y elección',
        sections: [
          {
            title: 'Lluvia de ideas individuales',
            description:
              'Llenamos el tablero con ideas de juegos: esquivar obstáculos con el cuerpo, resolver pistas, usar gestos y conducir con ayuda de otras personas.',
            image: {
              src: 'assets/images/brainstorm/lluvia_ideas.jpg',
              alt: 'Captura del tablero de Miro con notas adhesivas amarillas que contienen las ideas de juego de cada integrante del grupo.',
            },
          },
          {
            title: 'Agrupación de ideas',
            description:
              'Agrupamos las propuestas por la forma de jugar: movimientos del cuerpo, gestos, acertijos y recursos de realidad virtual. Así pudimos ver qué tenían en común.',
            image: {
              src: 'assets/images/brainstorm/agrupacion_ideas.jpg',
              alt: 'Captura del tablero de Miro con las notas adhesivas ordenadas en filas por categoría: acciones concretas, gestos o señas, puzzle o acciones del Oculus, reconocimiento facial o realidad aumentada, y requiere un manual.',
            },
          },
          {
            title: 'Elección de idea',
            description:
              'Elegimos la idea de conducción en equipo propuesta por David Alejandro Espinoza Barrios: una persona maneja sin ver la pista y sus compañeros la guían con señas. La imagen del tablero nos ayudó a imaginar esa experiencia.',
            image: {
              src: 'assets/images/brainstorm/eleccion_idea.jpg',
              alt: 'Nota adhesiva con la idea elegida, un juego colaborativo de conducción, y debajo una imagen de referencia de un simulador de manejo con indicaciones por gestos.',
            },
          },
        ],
      },
      {
        type: 'brainstorm',
        title: 'Funcionalidades del videojuego e interacción',
        sections: [
          {
            title: 'Funcionalidades del videojuego',
            description:
              'Imaginamos un recorrido con tráfico, policías, peatones, animales y cambios de clima. También pensamos en intercambiar los roles durante la partida.',
            image: {
              src: 'assets/images/brainstorm/funcionalidades.jpg',
              alt: 'Captura del tablero de Miro con notas adhesivas que listan las funcionalidades del videojuego, como conducción, obstáculos mecánicos, policías, climas dinámicos e intercambio de roles.',
            },
          },
          {
            title: 'Interacción',
            description:
              'Pensamos en jugar con movimientos del cuerpo: girar el volante, limpiar el parabrisas con la mano, mirar por las ventanas y usar señas para ayudar al conductor. También exploramos cómo la dirección de la cabeza podría influir en el auto.',
            image: {
              src: 'assets/images/brainstorm/interaccion.jpg',
              alt: 'Captura del tablero de Miro con notas adhesivas que describen las interacciones del jugador, como girar el timón con las dos manos, agitar la mano para limpiar el parabrisas y levantar las manos ante la policía.',
            },
          },
        ],
      },
    ],
  },
  {
    id: 'narrativa',
    label: 'Fase 2 · Narrativa',
    title: 'Storytelling y bocetos del juego',
    blocks: [
      {
        type: 'text',
        paragraphs: [
          'Nuestra historia comienza cuando dos cuyes roban dinero y joyas y escapan en su Escarabajo. Tienen cinco minutos para llegar a su guarida antes de que la policía los alcance. Dibujamos 13 escenas para contar la huida, casi todas desde el asiento del conductor.',
        ],
      },
      {
        type: 'storyboard',
        title: 'Paneles del storyboard',
        panels: [
          {
            src: 'assets/images/storyboard/1.jpeg',
            alt: 'Boceto a lápiz de dos cuyes saliendo de una joyería con bolsas de dinero y joyas hacia un Volkswagen Escarabajo.',
            caption: 'El robo: los cuyes salen de la joyería con el botín.',
          },
          {
            src: 'assets/images/storyboard/2.jpeg',
            alt: 'Vista en primera persona desde el asiento del conductor, con las patas en el volante del Escarabajo, el velocímetro y joyas sobre el tablero.',
            caption: 'Al volante: comienza la huida.',
          },
          {
            src: 'assets/images/storyboard/3.jpeg',
            alt: 'Vista hacia el piso del auto, con los pedales y una pata del conductor.',
            caption: 'Los pedales del Escarabajo.',
          },
          {
            src: 'assets/images/storyboard/4.jpeg',
            alt: 'Vista del conductor en una avenida, con un auto que se cruza por la izquierda.',
            caption: 'Tráfico en la ciudad.',
          },
          {
            src: 'assets/images/storyboard/5.jpeg',
            alt: 'Vista del conductor avanzando por una calle con casas, árboles y un auto más adelante.',
            caption: 'La huida sigue por la ciudad.',
          },
          {
            src: 'assets/images/storyboard/6.jpeg',
            alt: 'Vista del conductor tomando una curva cerrada con el volante girado.',
            caption: 'Curvas que obligan a girar el volante.',
          },
          {
            src: 'assets/images/storyboard/7.jpeg',
            alt: 'Vista hacia la ventana trasera, con un patrullero de la policía siguiendo al auto y bolsas de dinero y joyas en los asientos.',
            caption: 'La policía comienza la persecución.',
          },
          {
            src: 'assets/images/storyboard/8.jpeg',
            alt: 'Vista del conductor a alta velocidad en una carretera con un camión adelante, una pata en el volante y otra presionando un botón del tablero.',
            caption: 'Esquivar el tráfico en la carretera.',
          },
          {
            src: 'assets/images/storyboard/9.jpeg',
            alt: 'Vista del interior del auto con los pedales y, a la derecha, un compartimento abierto con cables sueltos.',
            caption: 'Avería: cables sueltos.',
          },
          {
            src: 'assets/images/storyboard/10.jpeg',
            alt: 'Patas del copiloto frente a un panel abierto, conectando pares de cables.',
            caption: 'El copiloto reconecta los cables.',
          },
          {
            src: 'assets/images/storyboard/11.jpeg',
            alt: 'Vista del conductor frente a dos patrulleros y barreras que bloquean la carretera, con una pata presionando un botón del tablero.',
            caption: 'Un bloqueo policial más adelante.',
          },
          {
            src: 'assets/images/storyboard/12.jpeg',
            alt: 'El Escarabajo salta sobre un resorte por encima de dos patrulleros que bloquean la calle.',
            caption: 'Salto sobre el bloqueo.',
          },
          {
            src: 'assets/images/storyboard/13.jpeg',
            alt: 'Vista del conductor llegando a un galpón de madera abierto entre árboles, con las bolsas del botín adentro.',
            caption: 'Llegada a la guarida.',
          },
        ],
      },
    ],
  },
  {
    id: 'prototipo',
    label: 'Fase 3 · Prototipo VR',
    title: 'Prototipo en realidad virtual',
    blocks: [
      {
        type: 'text',
        paragraphs: [
          'En Roblox Studio convertimos los bocetos en un recorrido jugable. Estas capturas muestran la cabina, los pedales, la reparación de cables, el botón de salto y la salida del túnel.',
        ],
      },
      {
        type: 'screenshots',
        title: 'Capturas del juego en VR',
        columns: 2,
        shots: [
          {
            src: 'assets/images/game/volante.jpeg',
            alt: 'Vista del conductor dentro del Escarabajo amarillo, con el volante en primer plano y una calle con casas al frente.',
            caption: 'Cabina del conductor.',
          },
          {
            src: 'assets/images/game/pedales_gas.jpeg',
            alt: 'Pedal verde del acelerador visto desde el interior del auto.',
            caption: 'Pedal de gas.',
          },
          {
            src: 'assets/images/game/pedales_freno.jpeg',
            alt: 'Pedal rojo del freno visto desde el interior del auto.',
            caption: 'Pedal de freno.',
          },
          {
            src: 'assets/images/game/cables.jpeg',
            alt: 'Panel con cuatro cables de colores (rojo, naranja, azul y verde) que unen conectores del mismo color, sobre un fondo rojo de alerta.',
            caption: 'Reparación: conectar los cables por color.',
          },
          {
            src: 'assets/images/game/salto.jpeg',
            alt: 'Primer plano del volante del Escarabajo con un gran botón verde en el centro.',
            caption: 'Botón de salto en el centro del volante.',
          },
          {
            src: 'assets/images/game/salida.jpeg',
            alt: 'Carretera con doble línea amarilla que lleva a una salida iluminada al final de un túnel.',
            caption: 'Salida.',
          },
        ],
      },
      {
        type: 'text',
        title: 'Feedback, mapeamiento, restricciones y visibilidad',
        paragraphs: [
          'Feedback: al mover los mandos, vemos girar el volante y cambiar la dirección del auto; al accionar un pedal, el movimiento responde. En la reparación, un borde blanco confirma el cable elegido y aparece una línea cuando unimos sus extremos. Los choques se oyen y producen chispas.',
          'Mapeamiento: el movimiento de los mandos se traduce en el giro del volante. El pedal de gas acelera y el de freno reduce la velocidad; para reparar un cable, elegimos su extremo y después el puerto del mismo color.',
          'Restricciones: los pedales solo responden al estar cerca y solo se activa el que hemos seleccionado. El salto requiere estar en el puesto del conductor. Si se rompe un cable de gas o freno, ese pedal deja de funcionar hasta que lo reparemos.',
          'Visibilidad: una flecha y un brillo verde o rojo señalan el pedal que podemos seleccionar por cercanía. En el panel de reparación, los colores y los extremos sueltos muestran qué cables faltan unir; el botón de salto está a la vista en el volante.',
        ],
      },
    ],
  },
  {
    id: 'pruebas',
    label: 'Fase 4 · Pruebas',
    title: 'Evaluación con usuarios',
    blocks: [
      {
        type: 'text',
        paragraphs: [
          'Probamos el juego con participantes que usaron el visor y los mandos VR. En las fotos se ve cómo jugaron y, en los videos, podemos seguir las seis sesiones de prueba.',
        ],
      },
      {
        type: 'testing',
        title: 'Fotografías de las pruebas',
        orientation: 'landscape',
        photos: [
          {
            src: 'assets/images/testing/WhatsApp Image 2026-09-24 at 12.27.29 PM.jpeg',
            alt: 'Participante con visor y dos mandos VR frente a una computadora portátil que muestra la cabina del juego.',
            caption: 'La partida también se ve en la computadora.',
          },
          {
            src: 'assets/images/testing/WhatsApp Image 2026-09-24 at 12.27.30 PM.jpeg',
            alt: 'Participante con visor VR sostiene dos mandos mientras una computadora portátil muestra el interior del vehículo.',
            caption: 'Prueba del juego con ambos mandos.',
          },
          {
            src: 'assets/images/testing/WhatsApp Image 2026-09-24 at 12.27.52 PM.jpeg',
            alt: 'Participante con visor VR y dos mandos extiende los brazos mientras otras personas observan.',
            caption: 'Una sesión de prueba con el visor VR.',
          },
        ],
      },
      {
        type: 'testing',
        title: 'Videos de las sesiones',
        orientation: 'landscape',
        photos: [
          {
            alt: 'Grabación en video de la sesión de prueba 1.',
            caption: 'Sesión 1',
            embedUrl: 'https://drive.google.com/file/d/1a-HAL8yGAkSQ3tXU0OU2c02wSz7SPKDe/preview',
            videoUrl: 'https://drive.google.com/file/d/1a-HAL8yGAkSQ3tXU0OU2c02wSz7SPKDe/view',
          },
          {
            alt: 'Grabación en video de la sesión de prueba 2.',
            caption: 'Sesión 2',
            embedUrl: 'https://drive.google.com/file/d/1rTdsOErWjQj--rsYAFmdUMGBpg-Zg3HR/preview',
            videoUrl: 'https://drive.google.com/file/d/1rTdsOErWjQj--rsYAFmdUMGBpg-Zg3HR/view',
          },
          {
            alt: 'Grabación en video de la sesión de prueba 3.',
            caption: 'Sesión 3',
            embedUrl: 'https://drive.google.com/file/d/16QmXAD5tlhMKXCyRD6qPsekUyeb3y8Gv/preview',
            videoUrl: 'https://drive.google.com/file/d/16QmXAD5tlhMKXCyRD6qPsekUyeb3y8Gv/view',
          },
          {
            alt: 'Grabación en video de la sesión de prueba 4.',
            caption: 'Sesión 4',
            embedUrl: 'https://drive.google.com/file/d/1t37omNvuxoVxiCZUl-CxO-qcIz3Pvwl5/preview',
            videoUrl: 'https://drive.google.com/file/d/1t37omNvuxoVxiCZUl-CxO-qcIz3Pvwl5/view',
          },
          {
            alt: 'Grabación en video de la sesión de prueba 5.',
            caption: 'Sesión 5',
            embedUrl: 'https://drive.google.com/file/d/1A3MgDFfWxdQzJVQ-_Dqk5phOQIyDTmMU/preview',
            videoUrl: 'https://drive.google.com/file/d/1A3MgDFfWxdQzJVQ-_Dqk5phOQIyDTmMU/view',
          },
          {
            alt: 'Grabación en video de la sesión de prueba 6.',
            caption: 'Sesión 6',
            embedUrl: 'https://drive.google.com/file/d/1Gc9kuKxUVolm1iIpfLmkXjotV3Lw_Os5/preview',
            videoUrl: 'https://drive.google.com/file/d/1Gc9kuKxUVolm1iIpfLmkXjotV3Lw_Os5/view',
          },
        ],
      },
    ],
  },
  {
    id: 'analisis-hci',
    label: 'Análisis HCI',
    title: 'Cómo jugamos y qué usamos',
    blocks: [
      {
        type: 'text',
        title: 'Objetivo del videojuego',
        paragraphs: [
          'La meta es llegar a la salida del túnel en el Escarabajo mientras escapamos de la policía. Para conseguirlo, nos coordinamos: una persona conduce y otra puede ocuparse de los pedales y de reparar los cables cuando fallan. Esta meta compartida da sentido a las acciones del recorrido.',
        ],
      },
      {
        type: 'text',
        title: 'Uso de sentidos',
        paragraphs: [
          'La experiencia usa sobre todo la vista y el oído. Vemos la carretera, los obstáculos, la flecha que señala el pedal y los colores de los cables para decidir qué hacer. Las sirenas y los sonidos de choque nos avisan de lo que ocurre alrededor. En VR, también movemos la cabeza para explorar el entorno.',
        ],
      },
      {
        type: 'text',
        title: 'Interacción y reconocimiento de movimientos',
        paragraphs: [
          'En VR, el visor sigue hacia dónde miramos y los mandos representan nuestras manos. Su posición se usa para girar el volante; con los controles también podemos accionar un pedal o activar el salto. Para reparar un cable, seleccionamos un extremo y luego el conector del mismo color.',
          'Esta interacción se basa en el movimiento de las manos y en la selección de objetos. El juego no reconoce expresiones faciales ni emociones.',
        ],
      },
      {
        type: 'text',
        title: 'Atención y concentración',
        paragraphs: [
          'Conducir requiere atención sostenida: mirar el camino y ajustar la dirección mientras aparecen autos y patrullas. Si hay una avería, cambiamos el foco de atención al panel de cables y luego volvemos al recorrido. Al repartir la conducción y los pedales, los jugadores comparten la atención y se coordinan para avanzar.',
        ],
      },
    ],
  },
];

/** Closing credits: team members, in the order listed on the Miro board. */
export const FOOTER: FooterContent = {
  heading: 'Integrantes',
  members: [
    'Alex Enrique Cañapataña Vargas',
    'Jose Rodrigo Cari Almiron',
    'David Alejandro Espinoza Barrios',
    'Ivan Alexander Lopez Zegarra',
    'Owen Haziel Roque Sosa',
  ],
};
