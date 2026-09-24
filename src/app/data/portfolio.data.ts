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
 * PENDING: the user testing sessions (milestone `pruebas`) still have no photo
 * (`src`) and no video link (`videoUrl`). Fill both in when they are ready.
 */

/** Hero copy. The subtitle is the single line under the title. */
export const HERO: HeroContent = {
  title: 'Grupo F — Cuydado al Volante',
  subtitle: 'Curso de Interacción Humano-Computadora · 7mo semestre · UNSA',
};

/** Project overview copy: 3–5 lines of context. */
export const OVERVIEW: OverviewContent = {
  heading: 'Resumen del proyecto',
  paragraphs: [
    'Cuydado al Volante es un videojuego colaborativo en realidad virtual. Dos cuyes acaban de robar dinero y joyas y huyen en su viejo Volkswagen Escarabajo mientras la policía los persigue por la ciudad. Tienen cinco minutos para llegar a su guarida, escondida a las afueras, antes de que los atrapen.',
    'Mientras uno de los cuyes mantiene el auto en el camino, el otro se encarga de que el Escarabajo siga funcionando. El tráfico, los animales que cruzan, el barro, los bloqueos policiales y las averías del auto obligan a los dos a coordinarse. Si el auto queda destruido, la policía los atrapa o se acaba el tiempo, el robo termina mal.',
    'Esta vez, robar fue fácil. Escapar será el verdadero problema.',
  ],
  image: {
    src: 'assets/images/storyboard/1.jpeg',
    alt: 'Boceto a lápiz de dos cuyes saliendo de una joyería con bolsas de dinero y joyas hacia un Volkswagen Escarabajo estacionado en la calle.',
    caption: 'Primer panel del storyboard: el robo.',
  },
};

/** Progress log entries, in chronological order. */
export const MILESTONES: readonly Milestone[] = [
  {
    id: 'ideacion',
    label: 'Fase 1 · Ideación',
    title: 'Lluvia de ideas y elección del concepto',
    blocks: [
      {
        type: 'text',
        paragraphs: [
          'Hicimos la ideación en un tablero de Miro. Primero cada uno de los cinco integrantes propuso sus propias ideas de juego. Después las agrupamos según el tipo de interacción que pedían y elegimos un concepto. Con esa idea definimos las funcionalidades del videojuego y cómo debía responder el jugador a cada situación.',
        ],
      },
      {
        type: 'brainstorm',
        title: 'Tablero de ideación (Miro)',
        sections: [
          {
            title: 'Lluvia de ideas individuales',
            description:
              'Cada integrante escribió sus propuestas en notas adhesivas. Entre ellas estaban esquivar obstáculos con seguimiento del cuerpo, desactivar una bomba o escapar de un hotel con pistas compartidas, detener meteoritos combinando colores con las manos, un blackjack al revés comunicado con gestos y un juego de conducción guiado por señas.',
            image: {
              src: 'assets/images/brainstorm/lluvia ideas.jpg',
              alt: 'Captura del tablero de Miro con notas adhesivas amarillas que contienen las ideas de juego de cada integrante del grupo.',
            },
          },
          {
            title: 'Agrupación de ideas',
            description:
              'Ordenamos las propuestas según el tipo de interacción que pedían: acciones concretas, gestos o señas, puzzles y acciones con el Oculus, reconocimiento facial o realidad aumentada, y juegos que requieren un manual. Así pudimos comparar las ideas por la forma de jugar que proponía cada una.',
            image: {
              src: 'assets/images/brainstorm/agrupacion ideas.jpg',
              alt: 'Captura del tablero de Miro con las notas adhesivas ordenadas en filas por categoría: acciones concretas, gestos o señas, puzzle o acciones del Oculus, reconocimiento facial o realidad aumentada, y requiere un manual.',
            },
          },
          {
            title: 'Elección de idea',
            description:
              'Elegimos el juego colaborativo de conducción que propuso David Alejandro Espinoza Barrios: un integrante maneja sin ver la pista y los demás le dan indicaciones con gestos o señas. En el tablero lo acompañamos con una imagen de referencia del concepto, que no corresponde exactamente al juego.',
            image: {
              src: 'assets/images/brainstorm/eleccion idea.jpg',
              alt: 'Nota adhesiva con la idea elegida, un juego colaborativo de conducción, y debajo una imagen de referencia de un simulador de manejo con indicaciones por gestos.',
            },
          },
          {
            title: 'Funcionalidades del videojuego',
            description:
              'Listamos las mecánicas que queríamos considerar: conducir (avanzar y parar), obstáculos mecánicos, policías que pueden detener al conductor con una penalización de tiempo, peatones y animales que se cruzan (un niño con una pelota, un perro, gente en el semáforo), climas dinámicos y un intercambio repentino de roles.',
            image: {
              src: 'assets/images/brainstorm/funcionalidades.jpg',
              alt: 'Captura del tablero de Miro con notas adhesivas que listan las funcionalidades del videojuego, como conducción, obstáculos mecánicos, policías, climas dinámicos e intercambio de roles.',
            },
          },
          {
            title: 'Interacción',
            description:
              'Definimos cómo responde el jugador con el cuerpo a cada situación: girar el timón con las dos manos, agitar la mano para limpiar el parabrisas, levantar las manos ante la policía y girar la cabeza para mirar los costados o el espejo. El segundo jugador indica con señas si hay que avanzar o detenerse. Si la cámara detecta que el conductor aparta la mirada, el auto empieza a desviarse.',
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
    title: 'Storytelling y storyboard',
    blocks: [
      {
        type: 'text',
        paragraphs: [
          'Con el concepto elegido escribimos el storytelling: dos cuyes roban dinero y joyas, escapan de la policía en su viejo Escarabajo y tienen cinco minutos para llegar a su guarida. Luego lo pasamos a un storyboard de 13 paneles dibujados a lápiz. Casi todos muestran la vista en primera persona del conductor, que es la que tendrá el jugador en VR.',
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
          'Llevamos las mecánicas del storyboard a un prototipo en realidad virtual. Las capturas se tomaron desde el visor en modo VR. En varias se ve un panel de depuración con el estado de cada mano, si el jugador está conduciendo (el timón se toma con las dos manos), el ángulo del timón y la velocidad.',
        ],
      },
      {
        type: 'screenshots',
        title: 'Capturas del juego en VR',
        columns: 2,
        shots: [
          {
            src: 'assets/images/game/inicio.jpeg',
            alt: 'Vista en VR de una calle frente a una tienda, con el Escarabajo amarillo estacionado y la opción «Abrir/Cerrar guantera» sobre él.',
            caption: 'Inicio: el Escarabajo frente a la tienda.',
          },
          {
            src: 'assets/images/game/volante.jpeg',
            alt: 'Vista del conductor dentro del Escarabajo amarillo, con el volante en primer plano y una calle con casas al frente.',
            caption: 'Cabina del conductor.',
          },
          {
            src: 'assets/images/game/pedales_gas.jpeg',
            alt: 'Pedal del acelerador resaltado en verde dentro del auto, junto al panel de depuración del modo VR.',
            caption: 'Pedal de gas.',
          },
          {
            src: 'assets/images/game/pedales_freno.jpeg',
            alt: 'Pedal del freno resaltado en rojo dentro del auto, junto al panel de depuración del modo VR.',
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
    ],
  },
  {
    id: 'pruebas',
    label: 'Fase 4 · Pruebas',
    title: 'Pruebas con usuarios',
    blocks: [
      {
        type: 'text',
        paragraphs: [
          'Probamos el prototipo con usuarios que jugaron con el visor puesto. Cada recuadro corresponde a una sesión de prueba y enlaza al video grabado durante esa sesión.',
        ],
      },
      {
        type: 'testing',
        title: 'Sesiones de prueba',
        orientation: 'landscape',
        // TODO(content): add each photo as `src: 'assets/images/testing/<file>'`
        // and paste the Google Drive link of each session into `videoUrl`.
        photos: [
          {
            alt: 'Espacio reservado para la foto de la sesión de prueba 1.',
            caption: 'Sesión 1',
            videoUrl: '',
          },
          {
            alt: 'Espacio reservado para la foto de la sesión de prueba 2.',
            caption: 'Sesión 2',
            videoUrl: '',
          },
          {
            alt: 'Espacio reservado para la foto de la sesión de prueba 3.',
            caption: 'Sesión 3',
            videoUrl: '',
          },
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
