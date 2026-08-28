(function(){

  /* ============================================================
     ESCALA GENERAL DE LA PÁGINA
     ============================================================ */

  const page = document.getElementById("page");
  const pageWrap = document.getElementById("pageWrap");

  function scalePage(){

    if(!page || !pageWrap) return;

    const scale = Math.min(1, window.innerWidth / 1000);

    document.documentElement.style.setProperty(
      "--page-scale",
      scale
    );

    requestAnimationFrame(()=>{
      pageWrap.style.height =
        (page.offsetHeight * scale) + "px";
    });

  }

  window.addEventListener("resize", scalePage);
  window.addEventListener("load", scalePage);

  scalePage();


  /* ============================================================
     FECHA
     ============================================================ */

  const now = new Date();
  const start = new Date(2026,3,28);

  const dayNumber =
    Math.floor(
      (now-start)/(1000*60*60*24)
    ) + 1;

  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
  ];

  const days = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado"
  ];

  const date =
    document.getElementById("fechaTexto");

  if(date){

    date.textContent =
      `${months[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()} // Día ${dayNumber} // ${days[now.getDay()]}`;

  }


  /* ============================================================
     ============================================================
     MINI GLOBAL
     
     TODO EL CONTENIDO DE LA COLUMNA MINI SE CONTROLA AQUÍ.

     Para cambiar MINI en TODAS las páginas,
     solamente modifica los datos de este bloque.

     NO necesitas modificar cada HTML.
     ============================================================
     ============================================================ */

  /* ============================================================
     SIDEBAR GLOBAL

     Cambia el contenido aquí y se actualiza en todas las páginas
     que tengan <aside class="sidebar">.
     ============================================================ */

  const SIDEBAR = {
    portada: "imagenes/PORTADA-AGO.png",
    colaboracion: {
      titulo: "Desorden mental y una pizca de creatividad",
      autor: "Santiago Riojas",
      enlace: "SR_01.html"
    },
    instagram: {
      enlace: "https://www.instagram.com/delirio_revista",
      usuario: "@Delirio_revista"
    },
    poesia: {
      titulo: "Birdie",
      texto: "Si vuelves, si me buscas, si regresas, no importa cuando, ni como, dime donde, que solo quiero eso. Yo dejaré que me encuentres. Casi no le tengo miedo a nada; pero nunca dejar de sentir esto me tiene aterrada.",
      autor: "Natalia Regnier",
      enlace: "NR_01.html"
    },
    anuncio: "ANUNCIO",
    cumpleanos: {
      dia: "+100",
      mes: "DÍAS",
      nombre: "DELIRIO",
      texto: "REVISTA<br>DIGITAL"
    },
    acceso: {
      autores: "autores.html",
      revision: "agregar-entrada.html"
    }
  };


  /* ============================================================
     MINI GLOBAL

     TODO EL CONTENIDO DE <aside class="mini"> se controla aquí.
     Cambia los datos aquí y se actualizan todas las páginas.
     ============================================================ */

  const MINI = {
    portada: "imagenes/PORTADA-AGO.png",
    edicion: "AGOSTO 2026",
    colaboracion: {
      titulo: "Desorden mental y una pizca de creatividad",
      autor: "Santiago Riojas",
      enlace: "SR_01.html"
    },
    instagram: {
      enlace: "https://www.instagram.com/delirio_revista",
      usuario: "@Delirio_revista"
    },
    poesia: {
      titulo: "Birdie",
      texto: "Si vuelves, si me buscas, si regresas, no importa cuando, ni como, dime donde, que solo quiero eso. Yo dejaré que me encuentres. Casi no le tengo miedo a nada; pero nunca dejar de sentir esto me tiene aterrada. Sé que mereces el amor que yo te ofrezco, pero yo, no merezco el fallido intento de amor que te agradezco; aún así vuelve, que siento que me ahogo.",
      autor: "Natalia Regnier",
      enlace: "NR_01.html"
    },
    anuncio: "¿Es lícito un beso con los ojos abiertos?",
    cumpleanos: {
      dia: "+100",
      mes: "DÍAS",
      nombre: "DELIRIO",
      texto: "REVISTA<br>DIGITAL"
    },
    acceso: {
      autores: "autores.html",
      revision: "agregar-entrada.html"
    }
  };


  function construirSidebar(){

    document.querySelectorAll(".sidebar").forEach(sidebar => {

      sidebar.innerHTML = `
        <a href="revista.html">
          <img class="sidebar-cover" src="${SIDEBAR.portada}" alt="Portada de agosto">
        </a>

        <a class="sidebox mini-link" href="${SIDEBAR.colaboracion.enlace}">
          <h3>COLABORACIÓN</h3>
          <p><span class="star">★</span> ${SIDEBAR.colaboracion.titulo}</p>
          <div class="sideauthor">${SIDEBAR.colaboracion.autor}</div>
        </a>

        <a class="side-instagram" href="${SIDEBAR.instagram.enlace}" target="_blank" rel="noopener">
          <strong>Delirio</strong>
          <span>EN INSTAGRAM</span>
          <span>${SIDEBAR.instagram.usuario}</span>
        </a>

        <a class="birdie" href="${SIDEBAR.poesia.enlace}">
          <h3>${SIDEBAR.poesia.titulo}</h3>
          <p>${SIDEBAR.poesia.texto}</p>
          <div class="sideauthor">${SIDEBAR.poesia.autor}</div>
        </a>

        <div class="ad">${SIDEBAR.anuncio}</div>

        <div class="birthday">
          <div class="day">${SIDEBAR.cumpleanos.dia}</div>
          <div class="month">${SIDEBAR.cumpleanos.mes}</div>
          <div class="name">${SIDEBAR.cumpleanos.nombre}</div>
          <small>${SIDEBAR.cumpleanos.texto}</small>
        </div>

        <div class="mini-access">
          <a href="${SIDEBAR.acceso.autores}">AUTORES</a>
          <a href="${SIDEBAR.acceso.revision}">REVISIÓN</a>
        </div>
      `;

    });

  }

  construirSidebar();


  /* ============================================================
     CONSTRUCCIÓN AUTOMÁTICA DE MINI
     ============================================================ */

  function construirMini(){

    document.querySelectorAll(".mini").forEach(mini => {

      mini.innerHTML = `
        <a href="semanal.html" class="mini-semanal">
          <img
            src="imagenes/semanalim.png"
            alt="Semanal"
          >
        </a>

        <div class="mini-divider"></div>

        <a href="revista.html">
          <img
            class="cover"
            src="${MINI.portada}"
            alt="Portada de ${MINI.edicion}"
          >
        </a>

        <h3 class="mini-title">
          ${MINI.edicion}
        </h3>

        <a
          class="mini-box mini-link"
          href="${MINI.colaboracion.enlace}"
        >
          <h3>COLABORACIÓN</h3>

          <p>
            <span class="star">★</span>
            ${MINI.colaboracion.titulo}
          </p>

          <div class="mini-author">
            ${MINI.colaboracion.autor}
          </div>
        </a>

        <a
          class="instagram"
          href="${MINI.instagram.enlace}"
          target="_blank"
          rel="noopener"
        >
          <strong>Delirio</strong>
          <span>EN INSTAGRAM</span>
          <span>${MINI.instagram.usuario}</span>
        </a>

        <a
          class="mini-box mini-link"
          href="${MINI.poesia.enlace}"
        >
          <h3>
            <em>${MINI.poesia.titulo}</em>
          </h3>

          <p>
            ${MINI.poesia.texto}
          </p>

          <div class="mini-author">
            ${MINI.poesia.autor}
          </div>
        </a>

        <div class="ad">
          ${MINI.anuncio}
        </div>

        <div class="birthday">
          <div class="day">
            ${MINI.cumpleanos.dia}
          </div>

          <div class="month">
            ${MINI.cumpleanos.mes}
          </div>

          <div class="name">
            ${MINI.cumpleanos.nombre}
          </div>

          <small>
            ${MINI.cumpleanos.texto}
          </small>
        </div>

        <div class="mini-access">
          <a href="${MINI.acceso.autores}">
            AUTORES
          </a>

          <a href="${MINI.acceso.revision}">
            REVISIÓN
          </a>
        </div>
      `;

    });

  }

  /*
    Se ejecuta después de cargar el documento.
  */

  construirMini();


  /* ============================================================
     TEMA CLARO / OSCURO
     ============================================================ */

  const theme =
    document.getElementById("themeButton");

  function syncTheme(){

    if(!theme) return;

    theme.textContent =
      document.body.classList.contains("dark")
        ? "☀"
        : "☼";

  }

  if(
    localStorage.getItem("delirio-tema")
    === "dark"
  ){

    document.body.classList.add("dark");

  }

  syncTheme();

  theme?.addEventListener("click",()=>{

    document.body.classList.toggle("dark");

    localStorage.setItem(
      "delirio-tema",
      document.body.classList.contains("dark")
        ? "dark"
        : "light"
    );

    syncTheme();

  });


  /* ============================================================
     MENÚ
     ============================================================ */

  const menu =
    document.getElementById("menuPanel");

  document
    .getElementById("menuButton")
    ?.addEventListener(
      "click",
      ()=>{
        menu?.classList.add("open");
      }
    );

  document
    .getElementById("menuClose")
    ?.addEventListener(
      "click",
      ()=>{
        menu?.classList.remove("open");
      }
    );


  /* ============================================================
     SECCIÓN ACTIVA

     El menú se marca automáticamente según la página actual.
     Las entradas individuales de BLOG, POESÍA, NARRATIVA y CINE
     conservan en rojo únicamente su sección.
     ============================================================ */

  const currentFile = (window.location.pathname.split("/").pop() || "index.html").toLowerCase();

  const sectionByFile = {
    "index.html":"index.html",
    "blog.html":"blog.html",
    "aviario.html":"blog.html",
    "latidos-nocivos.html":"blog.html",
    "red.html":"blog.html",
    "orphea.html":"blog.html",
    "bitacora-de-cromo.html":"blog.html",
    "mientras-trato-de-vivir.html":"blog.html",
    "estante.html":"blog.html",
    "dh_01.html":"blog.html",
    "ec_01.html":"blog.html",
    "rt_01.html":"blog.html",
    "mv_01.html":"blog.html",
    "ar_01.html":"blog.html",
    "ub_01.html":"blog.html",
    "sr_01.html":"blog.html",
    "poesia.html":"poesia.html",
    "nr_01.html":"poesia.html",
    "nr_02.html":"poesia.html",
    "narrativa.html":"narrativa.html",
    "nr.res1.html":"narrativa.html",
    "rt.res1.html":"narrativa.html",
    "et.cuento1.html":"narrativa.html",
    "cine.html":"cine.html",
    "mv.res1.html":"cine.html",
    "revista.html":"revista.html"
  };

  const activeSection=sectionByFile[currentFile];
  if(activeSection){
    document.querySelectorAll(".menu-panel nav a, .nav a").forEach(link=>{
      link.classList.toggle("active", link.getAttribute("href")===activeSection);
    });
  }


  /* ============================================================
     BUSCADOR GLOBAL

     El índice se construye con los textos y enlaces actuales del sitio,
     por lo que la búsqueda funciona desde cualquier página.
     ============================================================ */

  const SITE_SEARCH_INDEX = [{"title": "Mis pasos se graban ahí", "author": "David Paredes Hernández", "href": "DH_01.html", "text": "Mis pasos se graban ahí David Paredes Hernández Lo más maravilloso de esta revista y del sitio web que la aguarda, es que este es un lugar acogedor, que abraza y que escucha. Aquí habitan párrafos cómplices y lectores que leen en las confesiones de los que escribimos aquí a las personas que extrañan, a las que necesitan o a las que aún les tienen un lugar reservado en el alma. Hay que dividir o clasificar, como recomendación personal, a los lugares. Los que no queremos compartir con nadie, los que queremos visitar nuevamente, los que necesitamos recorrer, en los que nos dan la certeza de que parándonos en ellos podemos obtener más años de vida o del sentimiento de estar vivo. También podemos ver a las personas como lugares. Podemos mirar paisajes infinitos abarrotados de flores, podemos ver un aviario inconmensurable con especies de todos tamaños, colores y cantos. Contamos con la facultad de ver casas tan bellas como el cielo y de la misma forma ver océanos, campos o calles desoladas. Tenemos la capacidad de mirar bulevares y recordar las últimas veces en que ahí descendimos de un automóvil o del transporte público, la persona que nos acompañaba, lo que nuestras manos sostenían y todo lo que emanaba del pensamiento propio en ese momento. Yo, fiel amante del cine y lector desde tercero de primaria, recuerdo también los lugares que he visto y leído. Recientemente vi Güeros (2014), un magnífico trabajo de Alonso Ruizpalacios. Puedo recordar los pasillos de la UNAM llenos de estudiantes que, si no mal recuerdo y por información que recabé de un video, tomaron las instalaciones incluso alterando un mural de David Alfaro Siqueiros con el fin de evitar el aumento de cuotas de inscripción, puesto que el largometraje se ambienta en el movimiento estudiantil de 1999 donde incluso se creó el Consejo General de Huelga (CGH). Recuerdo el departamento donde Santos y Sombra pasaban los días mientras la universidad se encontraba paralizada; el café con licor, los muchos cigarrillos que fumaba Sombra, la luz eléctrica que solo estaba presente cuando los papás de Aurora, la vecina, se ausentaban. Puedo recordar los escenarios inconfundibles de esta maravillosa película. Desde el auditorio donde se lleva a cabo la asamblea estudiantil hasta la pulquería donde encuentran al fin a Epigmenio Cruz. Los pasos de los personajes se graban en sus mundos de la misma forma en que los míos habitan los lugares en que perdura algo de mí. Recuerdo la descripción de Cristina Rivera Garza en Terrestre (Random house, 2025) acerca de la protagonista de El significado de la lluvia escribiendo el nombre de Julia O´Bradeigh en el muro de la paz en Cupar Way. Magnífica historia. Nunca se espera menos de tan maravillosa escritora. No es posible olvidar las imágenes que se crean en mi cabeza cuando leo. La imagen de Carlos sentado en el sofá con Mariana mientras él le confiesa su inocente amor a ella en Las batallas en el desierto (Tusquets, 2025), de José Emilio Pacheco. No me alargaré mencionando las tantas escenas que recuerdo y que puedo describir con una precisión no tan veraz. Comparto con quien me lea en este momento los lugares que visito a través de la palabra escrita o de los momentos inmortalizados digitalmente, pero no quiero compartir con nadie mi caja de nostalgia, mi escritorio glorioso, la calle con la casa azul en la esquina, en sitio donde se espera el transporte público, aquella banca del parque Colón. Por nada del universo compartiría con alguien el lugar de espera que alguien me enseñó a ocupar previo al encuentro. No encuentro la necesidad de compartir los rincones ganadores de mil batallas que se distribuyen en mí. No quiero compartir ni mis sueños a pesar de la existencia de algunos invasores. Mis pasos se graban ahí, donde leo y veo a quien más extraño, donde recuerdo mis indómitos pasos por esta tierra. Mis pasos se graban donde suspiro, donde queda todo lo que no seré, lo que perdí, lo que aún no recupero y lo que trae consigo el porvenir."}, {"title": "¿Dónde se aprende a olvidar?", "author": "Elizabeth Campos", "href": "EC_01.html", "text": "¿Dónde se aprende a olvidar? Elizabeth Campos Trato de sacarte de mi vida, de mi mente, pero creo que es algo imposible. Ya pasaron varios meses, tal vez uno que otro año, y aún me pregunto por qué sigues aquí. No sé si en mi mente o en mi corazón; quizá nunca aprendí a distinguir dónde se quedan las personas cuando ya no forman parte de nuestra vida. He intentado olvidarte muchas veces. A veces parece que lo logro, hasta que llega uno de esos momentos en los que nos cruzamos de lejos, apenas de reojo. O aparece un mensaje tuyo, uno tan simple que no debería mover nada dentro de mí. Una felicitación. Unas cuantas palabras. Y, aun así, algo vuelve a romper el silencio que tanto trabajo me costó construir. No sé qué quiero contigo. Mi razón tiene claro que nuestra historia terminó hace tiempo. Mi corazón, en cambio, todavía parece hacerse preguntas que ya no tienen respuesta. A veces imagino que estás frente a mí. No para volver ni para cambiar lo que pasó. Solo para preguntarte cómo has estado, cuáles son tus nuevos gustos, qué cosas te emocionan ahora o qué pasiones encontraste. Me gustaría conocerte de nuevo, pero desde tu propia voz y no a través de historias ajenas. Sé que es lo incorrecto. Entonces me pregunto: dónde se aprende a olvidar? ¿Existe una receta? ¿Una fórmula que haga que alguien deje de aparecer en los lugares donde ya no está? No hablamos y, aun así, sigues encontrando la manera de confundirme. Apareces en recuerdos, en canciones, en coincidencias. Te vuelves un desconocido por un tiempo y, cuando creo que por fin te has ido, regresas convertido en un pensamiento cualquiera. Supongo que olvidar nunca ha sido una decisión; es un proceso silencioso. Llega un día en el que dejas de buscar respuestas y simplemente aceptas que algunas personas tardan más en irse de nosotros, incluso cuando hace mucho que ya se fueron. Y quizá esa sea la única fórmula que existe: darle tiempo al tiempo. Sin apresurarlo, sin forzar el olvido. Porque, tarde o temprano, todo aquello que hoy pesa termina encontrando su lugar. “Te estoy correteando Ya sal de mi mente Que te quiero ver Ya van varios días enfermo de ti, Dale ven cúrame Cuéntame que ha sido de ti Extráñame Te extraño a ti” ~Latin Mafia"}, {"title": "Amar y callar", "author": "Renata Tetlamatzi", "href": "RT_01.html", "text": "Amar y callar Renata Tetlamatzi Hay personas que aman con flores, con cartas, con llamadas a medianoche o con abrazos que parecen durar una vida. Y luego estamos quienes amamos en silencio. No es falta de amor. Es, muchas veces, exceso de miedo. Miedo a parecer intensos. Miedo a ser demasiado. Miedo a que un “te quiero” llegue en el momento equivocado y termine alejando a quien más queremos cerca. Así que aprendemos a querer minimizando todo lo que sentimos. Nos convertimos en expertos en esconder el cariño detrás de bromas, en responder “estoy bien” cuando por dentro quisiéramos decir “quédate un rato más”. Nos acostumbramos a escribir mensajes que nunca enviamos y a borrar confesiones antes de que alguien pueda leerlas. Es curioso cómo el corazón puede hacer tanto ruido mientras la boca permanece completamente en silencio. Hay personas que nunca sabrán cuánto significaron para alguien. Nunca sabrán que existió alguien que sonrió al ver una notificación suya, que aprendió sus canciones favoritas sin proponérselo o que recordaba pequeños detalles que para el resto del mundo eran insignificantes. No lo sabrán porque hay amores que se viven en secreto y despedidas que ocurren sin que la otra persona siquiera se dé cuenta. A veces creemos que demostrar amor nos vuelve vulnerables. Y es verdad. Cuando alguien conoce lo que sentimos, también tiene el poder de rechazarnos. Quizá por eso elegimos callar. Pensamos que el silencio nos protege, cuando en realidad también nos lastima. Porque el problema de no demostrar lo que sentimos es que el tiempo nunca se detiene a esperarnos. Las personas cambian, se mudan, conocen a alguien más o simplemente siguen con su vida. Y un día descubrimos que la oportunidad de hablar se fue mientras nosotros seguíamos buscando el momento perfecto. La verdad es que ese momento pocas veces existe, ese momento es la excepción y no la regla; porque siempre habrá una excusa, una duda o un motivo para esperar un día más. Hasta que aceptas que ese día no va a llegar. Amar no siempre es gritar, muchas veces es callar cuando quisieras aprender a hablar."}, {"title": "Espejismo", "author": "Meredith Villalba", "href": "MV_01.html", "text": "Espejismo Meredith Villalba Existe un término para describir esa intensidad: love bombing . Traducido literalmente sería algo parecido a un “bombardeo de amor”, aunque, en realidad, el nombre se queda corto. No siempre consiste en amar demasiado; muchas veces consiste en entregar tanto afecto, atención y promesas en tan poco tiempo que la otra persona termina creyendo que encontró algo único. Es una intensidad que deslumbra antes de permitir que el tiempo haga la única pregunta importante: ¿esto nació del amor o de la necesidad de conquistar? Quizá por eso el love bombing resulta tan difícil de identificar. Nadie sospecha de quien parece quererlo todo contigo. Nadie desconfía de quien recuerda cada detalle, responde cada mensaje y hace sentir que el mundo entero desaparece cuando está presente. Desde dentro parece el inicio de una gran historia; desde fuera, a veces, solo es una ilusión construida demasiado deprisa. Lo más inquietante llega después. Un día esa intensidad desaparece. Los mensajes dejan de ser constantes, el interés parece diluirse y la persona que juraba permanecer comienza a alejarse sin explicación. Y entonces aparece una imagen que siempre me resulta inevitable: ese viejo chiste sobre los padres que “salieron por cigarros”. No porque las historias sean iguales, sino porque el comportamiento se parece demasiado. Se van sin decir realmente por qué, dejan a alguien esperando su regreso y, cuando deciden volver, esperan encontrar el mismo lugar, la misma paciencia y el mismo cariño que dejaron atrás. Como si la ausencia nunca hubiera existido. Tal vez esa sea la parte más peligrosa del love bombing . No la intensidad del principio, sino la confusión que deja después. La persona ya no intenta entender al otro; comienza a preguntarse qué hizo mal para que todo cambiara tan rápido. Busca respuestas donde nunca hubo preguntas y termina culpándose por una distancia que nunca provocó. Quizá mi manera de entender el love bombing sea precisamente esa: un espejismo emocional. No porque todo sea falso desde el principio, sino porque la intensidad es tan deslumbrante que impide ver la realidad con claridad. Un espejismo no existe para quien observa desde lejos; existe para quien tiene sed. Y quizá todos, en algún momento de la vida, hemos tenido la suficiente sed de afecto como para confundir una ilusión con un oasis. Tal vez el verdadero peligro nunca fue enamorarse demasiado rápido. Tal vez el verdadero peligro sea olvidar que el amor no se demuestra por la velocidad con la que llega, sino por la calma con la que decide quedarse."}, {"title": "Cinco minutos más", "author": "Amairany Rincón", "href": "AR_01.html", "text": "Cinco minutos más Amairany Rincón Porque, aunque sean producto de mi propia mente, tus abrazos son los más reales que he sentido. Nunca quiero soltarte. Nunca quiero despertar. Pero ahí está la crueldad. Abrir los ojos y descubrir que vuelvo a estar sola. Sé que suena absurdo. Sé que cualquiera diría que perdí la razón. Pero ¿qué se supone que debo hacer? ¿Cómo les explico a los demás que se siente tan real? Te siento cerca. Me sonríes con los ojos llenos de lágrimas, como si tú también supieras que el tiempo se nos terminó demasiado pronto. ¿Está todo en mi cabeza? Lo lógico es responder que sí. Pero hay una parte de mí que se niega. Prefiere creer que no me dejaste sola. Que sigues aquí, de una forma distinta. Que todavía encuentras la manera de alcanzarme cuando el mundo se queda en silencio. Y que, si algún día logro quedarme lo suficientemente quieta… si aprendo a escuchar el silencio con el corazón en lugar de los oídos… Tal vez vuelva a sentir tu calor acompañándome. Aunque solo sea por cinco minutos más. Qué ironía. De niña, cinco minutos más significaban retrasar el momento de despertar. Hoy significan retrasar el momento de perderte otra vez."}, {"title": "Peticiones para vivir sin ti", "author": "Ulises Burgo", "href": "UB_01.html", "text": "Peticiones para vivir sin ti Ulises Burgo Eres ahora de él. Solo te pediré algunas cosas: No lo desvistas de la misma forma que lo has hecho conmigo; altera el orden de tus acciones, aumenta o disminuye la velocidad con que lo acaricias. Habítalo tanto como yo quisiera ser un fragmento de ti. Cuando estés con él, involucra sentimientos y haz que el amor exista; debe hacerlo. No lo hagas esperar tanto como a mí. Enséñale las acciones que a mí me mostraste: cerrar la reja después de entrar, esperar tu indicación para caminar desde el sitio de espera hasta el de encuentro, ser sigiloso, evitar la mirada de los vecinos, actuar con rapidez. Antes de que deje sus pertenencias en un lugar equivocado, coméntale dónde es pertinente ponerlas. Dile que te tome como a ti te gusta, cosa que yo sé a la perfección. Que aproveche cada minuto contigo y que no deje pasar oportunidades de las que vaya a arrepentirse después. Que te abrace tanto como yo deseo hacerlo en este momento. Que te extrañe a los diez minutos de haber salido de tu hogar, como yo lo hice cada vez que ese fue mi papel. Indícale cómo llegar al destino de su encuentro: la esquina donde debe bajar del transporte público, así como la banqueta donde debe esperar, las calles que debe recorrer, los transeúntes que debe evitar y las cosas que es mejor no hacer. Que sienta tanto como pueda, que no te deje ir. Que viva esto contigo y que te retenga hasta que quieras volver a mí."}, {"title": "Desorden mental y una pizca de creatividad", "author": "Santiago Riojas", "href": "SR_01.html", "text": "Desorden mental y una pizca de creatividad Santiago Riojas Últimamente ha despertado mucho más mi necesidad de crear, no por alguna tendencia o por alguna otra causa, sino por querer sentirme vivo. Siempre cargo con un mar de ideas; buenas o malas, cumplen su función. A diario me empeño en poder materializar todas ellas, no por obligación, solo por la emoción. En el caos que se vive ahora, soltar mis ideas en papel me hace sentir tan bien; no por el resultado en general, lo veo más como experiencia para mi persona. Hay gente que no crea por pensar que su trabajo será malo, lo juzga sin aún estar empezado, algo que causa que al final no logren tener su idea por el miedo. Algunas acciones que recomiendo para poder crear sin miedo son: 1. No pensar en lo que dirán, tu obra es propia y única. 2. Anotar cualquier pensamiento, nunca sabes si será bueno hasta que lo traigas a tu mundo. 3. Crea para sentirte vivo, no para estar en tendencia. Hoy, la creatividad es algo vital en mis días; me hace poder crear cosas originales y únicas. Al mismo tiempo, el arte debería ser para todos, no solo para un grupo en específico. Los invito a siempre crear: no importa en qué campo del arte sea, manténganse vivos en constante cambio."}, {"title": "Birdie", "author": "Natalia Regnier", "href": "NR_01.html", "text": "Birdie Natalia Regnier Si vuelves, si me buscas, si regresas, no importa cuando, ni como, dime dónde, que solo quiero eso. Yo dejaré que me encuentres. Casi no le tengo miedo a nada; pero nunca dejar de sentir esto me tiene aterrada. Sé que mereces el amor que yo te ofrezco, pero yo, no merezco el fallido intento de amor que te agradezco; aun así vuelve, que siento que me ahogo. Solo di que sí, y dilo ahora, dime que soy a quien quieres; si quieres finge y hazme creer que lejos de mi mueres, yo lo sé, yo lo quiero creer, lo veo en tus ojos, esos que siento que siempre estuvieron frente a mí. Tal vez solo son un espejo de los míos. Pero dilo por favor, que es mi mayor anhelo; te guardo tu sitio, aunque siempre dejo que te vayas y siempre vuelves otra vez. Esta vez quédate por favor. Aunque sepamos que significa que es para toda la vida; vuelve y quédate. Si no te gusta esta vida, toma la mía. Me dueles, me envenenas, pero no importa, lejos de ti duele el doble. Vuelve y quédate que siempre acepto tus migajas, aun no te vayas, por favor, por última vez, una última vez, hazme sentir que me amas."}, {"title": "Falsa justificación", "author": "Natalia Regnier", "href": "NR_02.html", "text": "Falsa justificación Natalia Regnier Quiero una explicación. Un porqué de lo que pasó, que me digas que hice mal, qué no te gustó y te alejaste. Te fuiste como si nada, si no importó: ¿por qué jugaste? ¿No te gusté? ¿Por qué te alejaste, si no querías? ¿Por qué lo intentaste? Dame una explicación, UNA SIMPLE DISCUSIÓN. Que sepa que termina la ilusión; todo lo que me diste fue mentira, lo que dijiste y llegó a mi corazón, lo que no querías y aún así lo hiciste. Jugaste con mi mente sin razón. ¿Buscaste que te amara? Hallaste lo que pretendías. Me lastimaste sin compasión, te fuiste sin darme explicación, ahora la busco, y la necesito. Dime que hice mal, si quieres lo repito, no entiendo: ¿Por qué? ¿Cómo? ¿En qué momento te volviste indispensable? Eras invisible ante mis ojos hace años, luego te vi, me volví miserable. Dame una explicación por favor. Te odio por hacerme amarte, ¿por qué? ¿Por qué? Te odio con todo mi ser, porque te amé y me heriste, ser horrible, persona insoportable: no puedo sacarte de mi mente, ni olvidarte. ¿Cómo me hiciste esto? Cómo me dejaste, me olvidaste fácil, así igual me abandonaste. Dame una maldita explicación, lo que encuentres, lo que se te ocurra, que te creeré, falsa justificación. No sé cómo llegué aquí sin ti, sin tu amor, ese que tal vez nunca existió ¿Cómo estás tan bien? ¿Cómo no te puede doler? Me dejaste sin pensarlo, ni dos veces lo pensaste, no te despediste ni siquiera y, a mi dolor, no puedo matarlo. Cuando te fuiste no vi salida. ¿Para qué vivir? No tenía razones para seguir pero al final entendí que no me amaste, por eso finalmente te alejaste. Ahora quiero esa explicación: ¿Por qué hiciste lo que hiciste? Yo morí sin tu amor, pero sin mí en tu vida, tú jamás moriste, corazón."}, {"title": "«Los siete maridos de Evelyn Hugo» de Taylor Jenkins Reid", "author": "Natalia Regnier", "href": "NR.RES1.html", "text": "«Los siete maridos de Evelyn Hugo» de Taylor Jenkins Reid Natalia Regnier Los siete maridos de Evelyn Hugo Autora: Taylor Jenkins Reid País: España Editorial: Stefano Books Año: 2025 Longitud: 480 pp. Una historia atrapante, para cada apasionado por Hollywood, los amantes del poder en la belleza de una mujer, unas historias controversiales y algunos secretos bien guardados que esperan impacientes por revelarse, solo una mujer podría describir tal inteligente y seductor personaje, fácil podría ser la autobiografía de una genia o una mujer incomprendida, no podría decir más que tuviera mayor peso que el de dos figuras que vivirán eternamente en la fama y en mi corazón. CALIFICACIÓN: 4.5 / 5 Cita \"La había perdido. A mi amor. Mi Celia. Mi alma gemela. La mujer cuyo amor había anhelado toda mi vida. Se había ido. Irrevocablemente y para siempre\""}, {"title": "«El color de las cosas invisibles» de Andrea Longarela", "author": "Renata Tetlamatzi", "href": "RT.RES1.html", "text": "«El color de las cosas invisibles» de Andrea Longarela Renata Tetlamatzi El color de las cosas invisibles Autora: Andrea Longarela País: México Editorial: Crossbooks México Año: 2023 Longitud: 512 pp. El dolor puede tomar muchas formas, pero no hay nada que duela igual que un \"casi\" que nunca va a suceder Rain y Jack son dos personas que no podrían ser más diferentes. Se llevan fatal, vienen de mundos completamente distintos y parecen incompatibles en todo sentido, pero por alguna razón siempre terminan encontrándose otra vez. Primero en la escuela, después en un concierto y hasta años más tarde, cuando creían que ya no volverían a coincidir. Aunque los dos tienen formas muy distintas de ver la vida, empiezan a darse cuenta de que hay cosas que simplemente no pueden explicarse. Rain cree que nada pasa por casualidad, mientras que Jack piensa que no todo tiene una razón lógica. Y entre tantas coincidencias, ambos terminan entendiendo que el amor a veces rompe cualquier teoría. El color de las cosas invisibles es una historia que habla sobre el dolor de los “casi”, de esas cosas que estuvieron a punto de pasar pero que al final nunca sucedieron. De los sentimientos que se quedaron guardados, las palabras que nunca se dijeron y las oportunidades que se perdieron por miedo, inseguridad o simplemente por no saber cómo ser honestos con la otra persona. Y justo por eso la historia se siente tan real, porque muestra situaciones con las que es muy fácil identificarse. A simple vista parece una típica historia de enemies to lovers, porque los protagonistas tienen mucha tensión y una relación complicada, pero realmente va mucho más allá de eso. Se enfoca más en la frustración de todo lo que pudo haber sido y no fue, en cómo dos personas pueden quererse muchísimo y aun así alejarse por sus propios temores o por miedo a expresar lo que sienten a tiempo. Algo destacable es la forma en la que está narrada, porque la historia mezcla el presente con varios flashbacks que ayudan a entender mejor la relación entre los personajes y cómo llegaron hasta ese punto. Todo está dividido en diferentes etapas importantes de sus vidas, y poco a poco se van conectando las piezas para entender su historia completa. Es una novela muy emocional, llena de nostalgia, tensión y sentimientos que se quedan contigo incluso después de terminarla. CALIFICACIÓN: 4.5 / 5"}, {"title": "Recordatorio", "author": "Enrique Tinajero", "href": "ET.CUENTO1.html", "text": "Recordatorio Enrique Tinajero —No me chingues güey. Todos son iguales. Les vale madre. —Pero no soy así, carajo. Ya te dije que tengo novia. —Entonces vete a la chingada. —Vete a la chingada tú. No sé qué tipo de pendejos te han tocado. Ismael se aparta de ella y comienza a caminar. La chica se arrepiente; toma una actitud pacífica antes de volver a hablar. Él se para. Enciende un cigarrillo antes de seguir su camino. Ella lo interrumpe y se voltea prestando atención a lo que dice nuevamente. —Por lo menos dame el número de tu novia para decirle que vales la pena—sugiere en tono burlón. —No tiene teléfono propio. —Dame su dirección entonces. —Qué rápido te olvidaste de que ella fue tu amiga. Él continúa. Ahora es un punto diminuto, sin color y con prisa, que parte sin un destino definido. Se aleja. Dobla a la izquierda y desaparece."}, {"title": "«Emilia Pérez» y el arte de tomar malas decisiones", "author": "Meredith Villalba", "href": "MV.RES1.html", "text": "«Emilia Pérez» y el arte de tomar malas decisiones Meredith Villalba EMILIA PÉREZ Director: Jacques Audiard País: Francia (Coproducción con Bélgica y México) Año: 2024 Duración: 132 min. ¿Qué pasa cuando alguien intenta contar una historia sobre México sin comprender del todo la realidad que pretende representar? Para muchos espectadores, esa es precisamente la sensación que deja Emilia Pérez. Dirigida por un cineasta francés, y protagonizada en gran parte por actores que no son mexicanos, la película busca retratar temas profundamente ligados al país, pero termina ofreciendo una visión que numerosos espectadores consideran superficial, estereotipada y desconectada de la experiencia real de millones de mexicanos. Más allá de la polémica que la rodeó desde su estreno, el principal problema de la película es que muchas de sus decisiones creativas resultan difíciles de defender. Su narrativa avanza de manera irregular; varios momentos musicales parecen romper el tono de la historia en lugar de fortalecerlo, y algunos diálogos han sido objeto de burlas y memes en redes sociales por sonar poco naturales. Lo que pudo haber sido una obra ambiciosa terminó convirtiéndose en una de las películas más divisivas y criticadas. Y, a consideración mía, no se merecía ese Oscar. Otro de los aspectos más criticados de Emilia Pérez fue el trabajo actoral en español. Antes del estreno, las declaraciones de Eugenio Derbez sobre la interpretación de Selena Gómez generaron una gran polémica. Sin embargo, después de que muchas personas vieran la película, surgió un comentario recurrente en redes sociales: quizá Derbez no estaba exagerando tanto. Aunque Selena Gómez ha demostrado talento en otros proyectos, en esta película su pronunciación y fluidez en español fueron cuestionadas por una parte importante del público. En varios momentos, los diálogos suenan forzados y poco naturales, dificultando que el espectador conecte con el personaje; sinceramente, sonaba más borracha que otra cosa. Otro momento destacable es cuando Karla Sofía está dando un discurso: «Soy Emilia Pérez, una mujer mexicana, una mujer como las demás». Me recordó a un capítulo de *31 Minutos* en el que un títere dice: «Soy un hombre de plástico, que merece respeto, que merece humanidad». O, si la comparamos con la canción del Encantador en *Shrek*, sin duda esa tiene más ritmo. También destaca la canción «Papá», con su encantadora letra: «Hueles como papá Hueles a las montañas, a cuero y café Hueles a la comida, picante, picante Huele a azúcar, a cordero en el fuego Al olor del motor Hueles también a Coca-Cola Light con limón, hielo y sudor Hueles como papá Olía a piedrecitas calientes por el sol Olía a hierbabuena, a mezcal y guacamole Olía a los perros en los viajes en carro Olía a cigarro cuando nos abrazó» Y que nos dice que olía a madres; ya nada más le faltaba decir que olía a Central de Abastos, a escuela pública o a refrigerador. En la canción «Bienvenida», cantada por Selena Gómez, no se le entiende nada. Dios, parece que está invocando algo. Una de mis frases favoritas es: «Yo soy lo que siento y por primera vez siento un sentimiento». Se parece a lo que escribía a los 10 años; en fin. Película horrible. Emilia Pérez se ha convertido, para muchos espectadores, en un claro ejemplo de lo que puede salir mal cuando se intenta representar una realidad cultural sin comprenderla completamente. Más que demostrar que los extranjeros no pueden contar historias sobre México, la película pone en evidencia la importancia de escuchar a las personas que conocen de cerca el contexto, la cultura y las experiencias que se buscan retratar."}, {"title": "AVIARIO", "author": "David Paredes Hernández", "href": "aviario.html", "text": "AVIARIO David Paredes Hernández"}, {"title": "LATIDOS NOCIVOS", "author": "Elizabeth Campos", "href": "latidos-nocivos.html", "text": "LATIDOS NOCIVOS Elizabeth Campos"}, {"title": "RED", "author": "Amairany Rincón", "href": "red.html", "text": "RED Amairany Rincón"}, {"title": "ORPHÉA", "author": "Meredith Villalba", "href": "orphea.html", "text": "ORPHÉA Meredith Villalba"}, {"title": "BITÁCORA DE CROMO", "author": "Renata Tetlamatzi", "href": "bitacora-de-cromo.html", "text": "BITÁCORA DE CROMO Renata Tetlamatzi"}, {"title": "MIENTRAS TRATO DE VIVIR", "author": "Ulises Burgo", "href": "mientras-trato-de-vivir.html", "text": "MIENTRAS TRATO DE VIVIR Ulises Burgo"}, {"title": "ESTANTE", "author": "Varios autores", "href": "estante.html", "text": "ESTANTE Varios autores"}, {"title": "POESÍA", "author": "", "href": "poesia.html", "text": "POESÍA"}, {"title": "NARRATIVA", "author": "", "href": "narrativa.html", "text": "NARRATIVA"}, {"title": "CINE", "author": "", "href": "cine.html", "text": "CINE"}, {"title": "REVISTA", "author": "", "href": "revista.html", "text": "REVISTA"}];

  const searchInput = document.getElementById("searchInput");
  const searchDropdown = document.getElementById("searchDropdown");

  function normalizarBusqueda(value){
    return (value || "")
      .toString()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .trim();
  }

  function showSearch(){
    if(!searchDropdown || !searchInput) return;

    const q=normalizarBusqueda(searchInput.value);

    if(!q){
      searchDropdown.classList.remove("open");
      return;
    }

    const results=SITE_SEARCH_INDEX
      .filter(item=>{
        const haystack=normalizarBusqueda(
          `${item.title} ${item.author} ${item.text}`
        );
        return haystack.includes(q);
      })
      .slice(0,12);

    searchDropdown.innerHTML = results.length
      ? results.map(r=>`
          <a href="${r.href}">
            <strong>${r.title}</strong>
            <span>${r.author}</span>
          </a>
        `).join("")
      : '<div class="search-no">NO HAY RESULTADOS</div>';

    searchDropdown.classList.add("open");
  }

  searchInput?.addEventListener("input",showSearch);
  searchInput?.addEventListener("keydown",e=>{
    if(e.key==="Enter") showSearch();
    if(e.key==="Escape") searchDropdown?.classList.remove("open");
  });
  document.getElementById("searchButton")?.addEventListener("click",showSearch);
  document.getElementById("bannerSearch")?.addEventListener("click",()=>{
    searchInput?.focus();
    searchInput?.scrollIntoView({behavior:"smooth",block:"center"});
  });

  document.addEventListener("click",e=>{
    if(!e.target.closest(".tools")) searchDropdown?.classList.remove("open");
  });


  /* ============================================================
     GALERÍA — ÚNICAMENTE INICIO
     ============================================================ */

  const modal =
    document.getElementById("galleryModal");

  const modalImage =
    document.getElementById(
      "galleryModalImage"
    );

  const caption =
    document.getElementById(
      "galleryCaption"
    );


  document
    .querySelectorAll(".gallery-grid img")
    .forEach(img => {

      img.addEventListener(
        "click",
        ()=>{

          if(!modal) return;

          modalImage.src =
            img.src;

          modalImage.alt =
            img.alt;

          const author =
            img.dataset.author || "";

          caption.innerHTML = `

            <strong>
              ${img.dataset.title || img.alt}
            </strong>

            <span>
              ${author}
            </span>

          `;

          modal.classList.add("open");

        }
      );

    });


  document
    .getElementById("galleryClose")
    ?.addEventListener(
      "click",
      ()=>{
        modal?.classList.remove("open");
      }
    );


  modal?.addEventListener(
    "click",
    e => {

      if(e.target === modal){

        modal.classList.remove("open");

      }

    }
  );


  /* ============================================================
     TAMAÑO DE LETRA EN ENTRADAS
     ============================================================ */

  const articleText =
    document.getElementById(
      "articleText"
    );

  let fontSize = 18;


  document
    .getElementById("fontPlus")
    ?.addEventListener(
      "click",
      ()=>{

        fontSize =
          Math.min(
            28,
            fontSize + 2
          );

        if(articleText){

          articleText.style.fontSize =
            fontSize + "px";

        }

        scalePage();

      }
    );


  document
    .getElementById("fontMinus")
    ?.addEventListener(
      "click",
      ()=>{

        fontSize =
          Math.max(
            14,
            fontSize - 2
          );

        if(articleText){

          articleText.style.fontSize =
            fontSize + "px";

        }

        scalePage();

      }
    );


  /* ============================================================
     COMENTARIOS
     ============================================================ */

  window.enviado = function(){

    setTimeout(()=>{

      const msg =
        document.getElementById("mensaje");

      const form =
        document.querySelector(
          ".comment-form"
        );

      if(msg){

        msg.textContent =
          "Comentario enviado.";

      }

      form?.reset();

    },500);

  };


  /* ============================================================
     ACCESO DE DEMOSTRACIÓN
     AUTORES / REVISIÓN
     ============================================================ */

  document
    .querySelectorAll(".demo-login")
    .forEach(form => {

      form.addEventListener(
        "submit",
        e => {

          e.preventDefault();

          const user =
            form
              .querySelector("[name=user]")
              ?.value
              .trim();

          const pass =
            form
              .querySelector("[name=pass]")
              ?.value;

          const msg =
            form.querySelector(".status");

          const expected =
            form.dataset.password ||
            "DELIRIO";


          if(pass === expected){

            sessionStorage.setItem(
              "delirio-auth",
              "1"
            );

            if(form.dataset.redirect){

              window.location.href =
                form.dataset.redirect;

            }
            else if(msg){

              msg.textContent =
                "Acceso correcto.";

            }

          }
          else if(msg){

            msg.textContent =
              "Clave incorrecta.";

          }

        }
      );

    });


  /* ============================================================
     REVISIÓN
     ============================================================ */

  document
    .querySelectorAll(".review-open")
    .forEach(btn => {

      btn.addEventListener(
        "click",
        ()=>{

          document
            .getElementById("reviewEditor")
            ?.classList.add("open");

          scalePage();

        }
      );

    });


})();
