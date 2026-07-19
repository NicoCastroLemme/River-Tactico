let eligiendoSuplente = false;
let jugadorTitularElegido = null; // Para saber a qué jugador le estamos metiendo el suplente

// Variables globales que ahora arrancan vacías y se llenan con el JSON
let plantelPrimera = [];
let plantelReserva = [];
let plantelRumores = [];

const coleccionFormaciones = {
  '4-4-2': {
    'ARQ': [{ top: '80%', left: '50%' }],
    'LD':  [{ top: '60%', left: '85%' }],
    'DFC': [{ top: '65%', left: '38%' }, { top: '65%', left: '62%' }],
    'LI':  [{ top: '60%', left: '15%' }],
    'MC':  [{ top: '43%', left: '39%' }, { top: '43%', left: '62%' }],
    'MD':  [{ top: '38%', left: '85%' }],
    'MI':  [{ top: '38%', left: '15%' }],
    'DC':  [{ top: '18%', left: '35%' }, { top: '18%', left: '65%' }]
  },  
  '4-3-3': {
    'ARQ': [{ top: '80%', left: '50%' }],
    'LD':  [{ top: '60%', left: '85%' }],
    'DFC': [{ top: '65%', left: '38%' }, { top: '65%', left: '62%' }],
    'LI':  [{ top: '60%', left: '15%' }],
    'MCD': [{ top: '43%', left: '50%' }],
    'MC':  [{ top: '40%', left: '75%' }, { top: '40%', left: '25%' }],
    'ED':  [{ top: '20%', left: '85%' }],
    'DC':  [{ top: '18%', left: '50%' }],
    'EI':  [{ top: '20%', left: '15%' }]
  },
  '4-2-3-1': {
    'ARQ': [{ top: '80%', left: '50%' }],
    'LD':  [{ top: '60%', left: '85%' }],
    'DFC': [{ top: '65%', left: '38%' }, { top: '65%', left: '62%' }],
    'LI':  [{ top: '60%', left: '15%' }],
    'MC':  [{ top: '48%', left: '35%' }, { top: '48%', left: '65%' }],
    'MCO': [{ top: '33%', left: '50%' }],
    'ED':  [{ top: '33%', left: '80%' }],
    'DC':  [{ top: '18%', left: '50%' }],
    'EI':  [{ top: '33%', left: '20%' }]
  },
  '4-3-1-2': {
    'ARQ': [{ top: '80%', left: '50%' }],
    'LD':  [{ top: '60%', left: '85%' }],
    'DFC': [{ top: '65%', left: '38%' }, { top: '65%', left: '62%' }],
    'LI':  [{ top: '60%', left: '15%' }],
    'MCD': [{ top: '50%', left: '50%' }],
    'MC':  [{ top: '45%', left: '75%' }, { top: '45%', left: '25%' }],
    'MCO': [{ top: '33%', left: '50%' }],
    'DC':  [{ top: '18%', left: '35%' }, { top: '18%', left: '65%' }]
  },
  '4-1-4-1': {
    'ARQ': [{ top: '80%', left: '50%' }],
    'LD':  [{ top: '60%', left: '85%' }],
    'DFC': [{ top: '65%', left: '38%' }, { top: '65%', left: '62%' }],
    'LI':  [{ top: '60%', left: '15%' }],
    'MCD': [{ top: '50%', left: '50%' }],
    'MC':  [{ top: '35%', left: '40%' }, { top: '35%', left: '60%' }],
    'MI':  [{ top: '35%', left: '18%' }],
    'MD':  [{ top: '35%', left: '82%' }],
    'DC':  [{ top: '18%', left: '50%' }]
  },
  '4-4-1-1': {
    'ARQ': [{ top: '80%', left: '50%' }],
    'LD':  [{ top: '60%', left: '85%' }],
    'DFC': [{ top: '65%', left: '38%' }, { top: '65%', left: '62%' }],
    'LI':  [{ top: '60%', left: '15%' }],
    'MC':  [{ top: '45%', left: '35%' }, { top: '45%', left: '65%' }],
    'MD':  [{ top: '38%', left: '85%' }],
    'MI':  [{ top: '38%', left: '15%' }],
    'MCO': [{ top: '30%', left: '50%' }],
    'DC':  [{ top: '15%', left: '50%' }]
  },
  '4-3-2-1': {
    'ARQ': [{ top: '80%', left: '50%' }],
    'LD':  [{ top: '60%', left: '85%' }],
    'DFC': [{ top: '65%', left: '38%' }, { top: '65%', left: '62%' }],
    'LI':  [{ top: '60%', left: '15%' }],
    'MCD': [{ top: '50%', left: '50%' }],
    'MC':  [{ top: '45%', left: '75%' }, { top: '45%', left: '25%' }],
    'MCO': [{ top: '30%', left: '38%' }, { top: '30%', left: '62%' }],
    'DC':  [{ top: '18%', left: '50%' }]
  }, 
  '3-5-2': {
    'ARQ': [{ top: '80%', left: '50%' }],
    'DFC': [{ top: '60%', left: '26%' },  { top: '63%', left: '50%' }, { top: '60%', left: '74%' }],
    'MC':  [{ top: '45%', left: '39%' }, { top: '45%', left: '62%' }],
    'MD':  [{ top: '40%', left: '85%' }],
    'MI':  [{ top: '40%', left: '15%' }],
    'MCO': [{ top: '30%', left: '50%' }],
    'DC':  [{ top: '18%', left: '35%' }, { top: '18%', left: '65%' }]
  },
  '3-4-3': {
    'ARQ': [{ top: '80%', left: '50%' }],
    'DFC': [{ top: '60%', left: '26%' },  { top: '63%', left: '50%' }, { top: '60%', left: '74%' }],
    'MC':  [{ top: '45%', left: '39%' }, { top: '45%', left: '62%' }],
    'MD':  [{ top: '40%', left: '85%' }],
    'MI':  [{ top: '40%', left: '15%' }],
    'ED':  [{ top: '20%', left: '85%' }],
    'DC':  [{ top: '18%', left: '50%' }],
    'EI':  [{ top: '20%', left: '15%' }]
  },
  '3-4-2-1': {
    'ARQ': [{ top: '80%', left: '50%' }],
    'DFC': [{ top: '60%', left: '26%' },  { top: '63%', left: '50%' }, { top: '60%', left: '74%' }],
    'MC':  [{ top: '45%', left: '39%' }, { top: '45%', left: '62%' }],
    'MD':  [{ top: '40%', left: '85%' }],
    'MI':  [{ top: '40%', left: '15%' }],
    'MCO': [{ top: '29%', left: '35%' }, { top: '29%', left: '65%' }],
    'DC':  [{ top: '15%', left: '50%' }]
  },
  '5-3-2': {
    'ARQ': [{ top: '80%', left: '50%' }],
    'LD':  [{ top: '56%', left: '90%' }],
    'DFC': [{ top: '64%', left: '26%' },  { top: '67%', left: '50%' }, { top: '64%', left: '74%' }],
    'LI':  [{ top: '56%', left: '10%' }],
    'MCD': [{ top: '45%', left: '50%' }],
    'MC':  [{ top: '40%', left: '72%' }, { top: '40%', left: '28%' }],
    'DC':  [{ top: '18%', left: '35%' }, { top: '18%', left: '65%' }]
  },
  '5-4-1': {
    'ARQ': [{ top: '80%', left: '50%' }],
    'LD':  [{ top: '56%', left: '90%' }],
    'DFC': [{ top: '64%', left: '26%' },  { top: '67%', left: '50%' }, { top: '64%', left: '74%' }],
    'LI':  [{ top: '56%', left: '10%' }],
    'MI':  [{ top: '38%', left: '13%' }],
    'MC':  [{ top: '45%', left: '35%' }, { top: '45%', left: '65%' }],
    'MD':  [{ top: '38%', left: '87%' }],
    'DC':  [{ top: '18%', left: '50%' }]
  }
};

let formacionActual = '4-4-2';
let posicionesTacticas = coleccionFormaciones[formacionActual];
let jugadorSeleccionado = null; 
let cuposOcupados = {};

const playerListContainer = document.getElementById('player-list');
const pitch = document.getElementById('pitch');
const boxScoreContainer = document.getElementById('box-score-container');

// --- VARIABLES DE MEMORIA PARA PUNTAJES ---
// Carga las notas de la memoria si las hay, sino arranca vacío
let boletaPuntajes = JSON.parse(localStorage.getItem('rivertactico_puntajes')) || {}; 
let jugadorPuntuandoActual = null;

// --- DATOS SIMULADOS PARA PRUEBAS ---
let modoPuntajeActual = 'mis_puntajes'; // Arranca siempre en tu boleta

// Simulamos notas analíticas (SofaScore) y pasionales (MilloStats)
const sofaScoreData = { 41: 7.2, 16: 6.8, 13: 7.0, 28: 6.5, 21: 5.5, 6: 7.5, 15: 7.1, 24: 6.9, 26: 8.8, 11: 9.6, 35: 8.2, 20: 6.5, 10: 7.0, 19: 6.8 };
const milloStatsData = { 41: 6.5, 16: 6.0, 13: 7.5, 28: 5.5, 21: 3.0, 6: 8.0, 15: 7.0, 24: 6.5, 26: 9.0, 11: 10.0, 35: 8.5, 20: 6.0, 10: 7.5, 19: 6.5 };

// Promedio simulado de los usuarios de tu web (un intermedio racional)
const promedioUsuariosData = { 41: 6.8, 16: 6.3, 13: 7.3, 28: 6.0, 21: 4.5, 6: 7.8, 15: 7.0, 24: 6.7, 26: 8.9, 11: 9.8, 35: 8.4, 20: 6.2, 10: 7.2, 19: 6.6 };

// Función para quedarse solo con el apellido
function obtenerApellido(nombreCompleto) {
  if (!nombreCompleto) return "";
  const partes = nombreCompleto.split(' ');
  // Si tiene más de una palabra, saltea la primera. Si no, devuelve lo que haya.
  return partes.length > 1 ? partes.slice(1).join(' ') : nombreCompleto;
}

function obtenerDatosActivos() {
  if (modoPuntajeActual === 'sofascore') return sofaScoreData;
  if (modoPuntajeActual === 'millostats') return milloStatsData;
  if (modoPuntajeActual === 'promedio_usuarios') return promedioUsuariosData;
  return boletaPuntajes;
}

// Escuchador de clics para cambiar de fuente
document.querySelectorAll('.source-tab').forEach(btn => {
  btn.addEventListener('click', (e) => {
    document.querySelectorAll('.source-tab').forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');
    modoPuntajeActual = e.target.dataset.source;
    cargarVistaPuntuacion(); // Redibujamos todo con los datos nuevos
  });
});

// --- MOTOR DE INTERPOLACIÓN DE COLOR (Rojo > Amarillo > Verde) ---
function obtenerColorExacto(nota) {
  const n = parseFloat(nota);
  if (isNaN(n)) return 'var(--text-muted)';

  const colorRojo = [218, 41, 28];        
  const colorAmarillo = [229, 164, 0];   
  const colorVerde = [0, 184, 83];       

  let r, g, b;

  if (n <= 1.0) {
    [r, g, b] = colorRojo;
  } else if (n <= 6.0) {
    const pct = (n - 1.0) / 5.0; 
    r = colorRojo[0] + (colorAmarillo[0] - colorRojo[0]) * pct;
    g = colorRojo[1] + (colorAmarillo[1] - colorRojo[1]) * pct;
    b = colorRojo[2] + (colorAmarillo[2] - colorRojo[2]) * pct;
  } else {
    const pct = Math.min((n - 6.0) / 4.0, 1); 
    r = colorAmarillo[0] + (colorVerde[0] - colorAmarillo[0]) * pct;
    g = colorAmarillo[1] + (colorVerde[1] - colorAmarillo[1]) * pct;
    b = colorAmarillo[2] + (colorVerde[2] - colorAmarillo[2]) * pct;
  }

  return `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`;
}

async function inicializarApp() {
  try {
    const respuesta = await fetch('plantel.json');
    const datos = await respuesta.json();
    
    plantelPrimera = datos.primera;
    plantelReserva = datos.reserva;
    plantelRumores = datos.rumores || [];

    dibujarEsquema();
    renderizarListaJugadores(plantelPrimera);
    cargarEstadoPizarra(); 
  } catch (error) {
    console.error("Error al cargar el plantel:", error);
    alert("Hubo un error al cargar la base de datos de jugadores.");
  }
}

function guardarEstadoPizarra() {
  const estado = {
    formacion: formacionActual,
    layoutCustom: posicionesTacticas, // NUEVO: Guardamos la táctica deformada por el usuario
    jugadores: []
  };
  
  document.querySelectorAll('#pitch .player-token').forEach(token => {
    let idSuplente = null;
    const cartelSuplente = token.querySelector('.nombre-suplente');
    if (cartelSuplente && !cartelSuplente.classList.contains('oculto')) {
       idSuplente = cartelSuplente.dataset.id;
    }

    estado.jugadores.push({
      id: parseInt(token.id.replace('token-', '')),
      top: token.style.top,
      left: token.style.left,
      slotTop: token.dataset.slotTop || token.style.top, 
      slotLeft: token.dataset.slotLeft || token.style.left,
      idSuplente: idSuplente 
    });
  });
  
  localStorage.setItem('rivertactico_estado', JSON.stringify(estado));
}

function cargarEstadoPizarra() {
  const guardado = localStorage.getItem('rivertactico_estado');
  
  // ESCUDO 1: Si no hay nada guardado, cortamos acá
  if (!guardado) return; 

  try {
    const estado = JSON.parse(guardado);

    const btnFormacion = Array.from(document.querySelectorAll('.btn-formation'))
      .find(btn => btn.innerText === estado.formacion);
      
    if (btnFormacion) {
        cambiarFormacion(estado.formacion, btnFormacion);
    }

    // --- ACÁ ESTABA EL ERROR ---
    if (estado.layoutCustom) {
        posicionesTacticas = estado.layoutCustom;
        dibujarEsquema(); // ¡ESTA ES LA LÍNEA MÁGICA QUE FALTABA! Esto hace que los círculos acompañen al jugador
    }

    if (estado.jugadores && Array.isArray(estado.jugadores)) {
        estado.jugadores.forEach(j => {
          const jugador = [...plantelPrimera, ...plantelReserva, ...plantelRumores].find(p => p.id === j.id);
          if (jugador) {
            jugadorSeleccionado = jugador;
            ubicarJugadorLibre({ top: j.top, left: j.left });
            
            const tokenRecienCreado = document.getElementById(`token-${jugador.id}`);
            if (tokenRecienCreado) {
                if (j.slotTop && j.slotLeft) {
                    tokenRecienCreado.dataset.slotTop = j.slotTop;
                    tokenRecienCreado.dataset.slotLeft = j.slotLeft;
                }

                if (j.idSuplente) {
                   const suplente = [...plantelPrimera, ...plantelReserva, ...plantelRumores].find(p => p.id == j.idSuplente);
                   if (suplente) {
                       const cartelSuplente = tokenRecienCreado.querySelector('.nombre-suplente');
                       const btnSuplente = tokenRecienCreado.querySelector('.btn-suplente');
                       
                       if (cartelSuplente && btnSuplente) {
                           cartelSuplente.textContent = suplente.nombre;
                           cartelSuplente.dataset.id = suplente.id;
                           cartelSuplente.classList.remove('oculto');
                           btnSuplente.classList.add('oculto');
                       }
                   }
                }
            }
          }
        });
    }
    
    actualizarPlaceholders();
    actualizarBoxScore();

  } catch (error) {
    console.warn("La memoria de la pizarra estaba corrupta y se ignoró.", error);
  }
}

function renderizarListaJugadores(plantelSeleccionado) {
  playerListContainer.innerHTML = ''; 
  jugadorSeleccionado = null; 
  
  plantelSeleccionado.forEach(jugador => {
    const row = document.createElement('div');
    row.className = 'player-row';
    row.id = `row-${jugador.id}`;
    row.dataset.posicion = jugador.posicion[0];

    const estaComoTitular = document.getElementById(`token-${jugador.id}`);
    const estaComoSuplente = document.querySelector(`.nombre-suplente[data-id="${jugador.id}"]`);
    
    if (estaComoTitular || estaComoSuplente) {
      row.classList.add('on-pitch');
    }

    const iconoLesion = jugador.lesionado ? '<span class="injury-icon" title="Lesionado">✚</span>' : '';
    const iconoNuevo = jugador.nuevo ? '<span class="new-badge">NEW</span>' : '';
    
    // NUEVO: Solo creamos la etiqueta del puntaje si es mayor a 0
    const htmlPuntaje = parseFloat(jugador.puntaje_promedio) > 0 
      ? `<span class="rating">${jugador.puntaje_promedio}</span>` 
      : '';

    row.innerHTML = `
      <span class="num">${jugador.numero}</span>
      <span class="name">${jugador.nombre}${iconoLesion}${iconoNuevo}</span>
      <span class="pos">${jugador.posicion[0]}</span>        
      ${htmlPuntaje} 
    `;
    
    row.onclick = () => marcarJugadorEnLista(jugador, row);
    playerListContainer.appendChild(row);
  });

  if (typeof aplicarFiltroVisual === 'function') {
    aplicarFiltroVisual();
  }
}

function cambiarPlantel(tipo, botonClicked) {
  document.querySelectorAll('.squad-tab').forEach(btn => btn.classList.remove('active'));
  botonClicked.classList.add('active');
  
  if (tipo === 'primera') renderizarListaJugadores(plantelPrimera);
  else if (tipo === 'reserva') renderizarListaJugadores(plantelReserva);
  else if (tipo === 'rumores') renderizarListaJugadores(plantelRumores); 
}

function marcarJugadorEnLista(jugador, fila) {
  if (fila.classList.contains('on-pitch')) return;
  if (jugadorSeleccionado && jugadorSeleccionado.id === jugador.id) {
    jugadorSeleccionado = null;
    fila.classList.remove('selected');
    return;
  }
  document.querySelectorAll('.player-row').forEach(r => r.classList.remove('selected'));
  jugadorSeleccionado = jugador;
  fila.classList.add('selected');
}

function obtenerRutaFoto(idJugador) {
  const idNum = parseInt(idJugador); 
  
  if (plantelPrimera.find(p => p.id === idNum)) return `fotos/primera/${idNum}.png`;
  if (plantelReserva.find(p => p.id === idNum)) return `fotos/reserva/${idNum}.png`;
  if (plantelRumores.find(p => p.id === idNum)) return `fotos/rumores/${idNum}.png`;
  
  return `fotos/default2.png`; 
}

function dibujarEsquema() {
  document.querySelectorAll('.placeholder').forEach(el => el.remove());
  document.querySelectorAll('.player-row').forEach(row => {
    row.classList.remove('on-pitch');
    row.classList.remove('selected');
  });
  jugadorSeleccionado = null;
  boxScoreContainer.innerHTML = '';
  
  Object.entries(posicionesTacticas).forEach(([pos, coordsArray]) => {
    coordsArray.forEach(coords => {
      const placeholder = document.createElement('div');
      placeholder.className = 'placeholder';
      placeholder.style.top = coords.top;
      placeholder.style.left = coords.left;
      placeholder.innerText = '+'; 
      placeholder.dataset.pos = pos; 
      placeholder.onclick = () => ubicarJugadorLibre(coords);
      pitch.appendChild(placeholder);

      const boxRow = document.createElement('div');
      boxRow.className = 'box-score-row';
      boxRow.innerHTML = `<span>${pos}</span><span>—</span>`;
      boxScoreContainer.appendChild(boxRow);
    });
  });
}

function cambiarFormacion(nombreFormacion, botonClicked) {
  if (formacionActual === nombreFormacion) return;
  if (!coleccionFormaciones[nombreFormacion]) {
    alert(`Falta configurar la táctica ${nombreFormacion}.`);
    return;
  }

  const jugadoresEnCancha = [];
  document.querySelectorAll('#pitch .player-token').forEach(token => {
    const id = token.id.replace('token-', '');
    const jugador = [...plantelPrimera, ...plantelReserva, ...plantelRumores].find(p => p.id == id);
    if (jugador) {
       let idSuplente = null;
       const cartelSuplente = token.querySelector('.nombre-suplente');
       if (cartelSuplente && !cartelSuplente.classList.contains('oculto')) {
          idSuplente = cartelSuplente.dataset.id;
       }
       jugadoresEnCancha.push({ titular: jugador, idSuplente: idSuplente });
    }
  });

  document.querySelectorAll('.btn-formation').forEach(btn => btn.classList.remove('active'));
  botonClicked.classList.add('active');

  formacionActual = nombreFormacion;
  // Usamos JSON.parse(JSON.stringify(...)) para hacer una "fotocopia" desconectada del original
  posicionesTacticas = JSON.parse(JSON.stringify(coleccionFormaciones[formacionActual]));

  document.querySelectorAll('#pitch .player-token').forEach(el => el.remove());
  dibujarEsquema(); 

  let slotsDisponibles = [];
  Object.entries(posicionesTacticas).forEach(([puesto, coordsArray]) => {
    coordsArray.forEach(coords => {
      slotsDisponibles.push({ puesto, coords, ocupado: false });
    });
  });

  jugadoresEnCancha.forEach(pack => {
    const jugador = pack.titular;
    jugador.ubicado = false;
    jugador.slotAsignado = null;
    for (let i = 0; i < jugador.posicion.length; i++) {
      const puestoDeseado = jugador.posicion[i];
      const slotIdeal = slotsDisponibles.find(s => s.puesto === puestoDeseado && !s.ocupado);
      if (slotIdeal) {
        slotIdeal.ocupado = true;
        jugador.ubicado = true;
        jugador.slotAsignado = slotIdeal;
        break; 
      }
    }
  });

  jugadoresEnCancha.forEach(pack => {
    const jugador = pack.titular;
    if (!jugador.ubicado) {
      const esArquero = jugador.posicion.includes('ARQ');

      const slotVacio = slotsDisponibles.find(s => {
        if (s.ocupado) return false; 
        
        if (esArquero) {
          return s.puesto === 'ARQ'; 
        } else {
          return s.puesto !== 'ARQ'; 
        }
      });

      if (slotVacio) {
        slotVacio.ocupado = true;
        jugador.ubicado = true;
        jugador.slotAsignado = slotVacio;
      }
    }
  });

  jugadoresEnCancha.forEach(pack => {
    const jugador = pack.titular;
    if (jugador.slotAsignado) {
      const coords = jugador.slotAsignado.coords;
      
      const token = document.createElement('div');
      token.id = `token-${jugador.id}`;
      token.className = 'player-token';
      token.style.cursor = 'pointer'; 
      token.dataset.pos = jugador.slotAsignado.puesto; 
      token.onclick = () => {
        if (window.estaArrastrando) return; 
        ubicarJugadorLibre({ top: token.style.top, left: token.style.left });
      }; 

      token.innerHTML = `
        <img src="${obtenerRutaFoto(jugador.id)}" class="token-img" onerror="this.onerror=null; this.src='fotos/default2.png'">
        <div class="token-name">${obtenerApellido(jugador.nombre)}</div>
        <button class="btn-suplente">+</button>
        <div class="nombre-suplente oculto"></div>
      `;
      
      token.style.top = coords.top;
      token.style.left = coords.left;
      pitch.appendChild(token);
      hacerArrastrable(token);

      const btnSuplente = token.querySelector('.btn-suplente');
      const cartelSuplente = token.querySelector('.nombre-suplente');
      
      btnSuplente.onclick = (e) => {
        e.stopPropagation(); 
        eligiendoSuplente = true;
        jugadorTitularElegido = token;
        const posAbreviada = jugador.slotAsignado.puesto; 
        abrirModalSeleccion(posAbreviada, coords);
      };

      if (pack.idSuplente) {
         const suplente = [...plantelPrimera, ...plantelReserva, ...plantelRumores].find(p => p.id == pack.idSuplente);
         if (suplente) {
             cartelSuplente.textContent = suplente.nombre;
             cartelSuplente.dataset.id = suplente.id;
             cartelSuplente.classList.remove('oculto');
             btnSuplente.classList.add('oculto');
         }
      }

      cartelSuplente.onclick = (e) => {
         e.stopPropagation();
         const idSuplente = cartelSuplente.dataset.id;
         const filaSuplente = document.getElementById(`row-${idSuplente}`);
         if (filaSuplente) filaSuplente.classList.remove('on-pitch');
         
         cartelSuplente.classList.add('oculto');
         cartelSuplente.dataset.id = '';
         btnSuplente.classList.remove('oculto');
         guardarEstadoPizarra();
      };

      const placeholder = Array.from(document.querySelectorAll('.placeholder'))
        .find(p => p.style.top === coords.top && p.style.left === coords.left);
      
      if (placeholder) {
        placeholder.style.transition = 'none'; 
        placeholder.style.opacity = '0'; 
        setTimeout(() => placeholder.style.transition = '', 50); 
      }

      const fila = document.getElementById(`row-${jugador.id}`);
      if (fila) fila.classList.add('on-pitch');
    }
  });
  
  verificarOnce();
  actualizarBoxScore();
  guardarEstadoPizarra();
}

function ubicarJugadorLibre(coords) {
  const tokenExistente = Array.from(document.querySelectorAll('#pitch .player-token'))
    .find(token => token.style.top === coords.top && token.style.left === coords.left);

  const placeholderExistente = Array.from(document.querySelectorAll('.placeholder'))
    .find(p => p.style.top === coords.top && p.style.left === coords.left);

  const posAbreviada = tokenExistente ? tokenExistente.dataset.pos : (placeholderExistente ? placeholderExistente.dataset.pos : '');

  if (!jugadorSeleccionado) {
    if (tokenExistente) {
      const oldId = tokenExistente.id.replace('token-', '');
      const filaVieja = document.getElementById(`row-${oldId}`);
      if (filaVieja) filaVieja.classList.remove('on-pitch');
      
      const cartelSuplente = tokenExistente.querySelector('.nombre-suplente');
      if (cartelSuplente && !cartelSuplente.classList.contains('oculto')) {
          const filaSuplenteViejo = document.getElementById(`row-${cartelSuplente.dataset.id}`);
          if (filaSuplenteViejo) filaSuplenteViejo.classList.remove('on-pitch');
      }

      tokenExistente.remove();
      
      if (placeholderExistente) placeholderExistente.style.opacity = '1';
      
      verificarOnce();
      actualizarBoxScore();
      return;
    }
    
    eligiendoSuplente = false;
    abrirModalSeleccion(posAbreviada, coords);
    return;
  }

  if (eligiendoSuplente && jugadorTitularElegido) {
      const btnSuplente = jugadorTitularElegido.querySelector('.btn-suplente');
      const cartelSuplente = jugadorTitularElegido.querySelector('.nombre-suplente');
      
      btnSuplente.classList.add('oculto');
      cartelSuplente.textContent = jugadorSeleccionado.nombre;
      cartelSuplente.dataset.id = jugadorSeleccionado.id; 
      cartelSuplente.classList.remove('oculto');

      cartelSuplente.onclick = (e) => {
         e.stopPropagation();
         const idSuplente = cartelSuplente.dataset.id;
         const filaSuplente = document.getElementById(`row-${idSuplente}`);
         if (filaSuplente) filaSuplente.classList.remove('on-pitch');
         
         cartelSuplente.classList.add('oculto');
         cartelSuplente.dataset.id = '';
         btnSuplente.classList.remove('oculto');
         guardarEstadoPizarra();
      };

      const filaJugador = document.getElementById(`row-${jugadorSeleccionado.id}`);
      if (filaJugador) {
        filaJugador.classList.remove('selected');
        filaJugador.classList.add('on-pitch');
      }

      eligiendoSuplente = false;
      jugadorTitularElegido = null;
      jugadorSeleccionado = null;
      guardarEstadoPizarra();
      return;
  }

  if (tokenExistente) {
    const oldId = tokenExistente.id.replace('token-', '');
    const filaVieja = document.getElementById(`row-${oldId}`);
    if (filaVieja) filaVieja.classList.remove('on-pitch');
    
    const cartelSuplenteViejo = tokenExistente.querySelector('.nombre-suplente');
    if (cartelSuplenteViejo && !cartelSuplenteViejo.classList.contains('oculto')) {
        const filaSuplenteViejo = document.getElementById(`row-${cartelSuplenteViejo.dataset.id}`);
        if (filaSuplenteViejo) filaSuplenteViejo.classList.remove('on-pitch');
    }

    tokenExistente.remove();
  }

  const idToken = `token-${jugadorSeleccionado.id}`;
  const token = document.createElement('div');
  token.id = idToken;
  token.className = 'player-token';
  token.style.cursor = 'pointer';
  token.dataset.pos = posAbreviada;
  token.onclick = () => {
    if (window.estaArrastrando) return;
    ubicarJugadorLibre({ top: token.style.top, left: token.style.left });
  };

  token.innerHTML = `
    <img src="${obtenerRutaFoto(jugadorSeleccionado.id)}" class="token-img" onerror="this.onerror=null; this.src='fotos/default2.png'">
    <div class="token-name">${obtenerApellido(jugadorSeleccionado.nombre)}</div>
    <button class="btn-suplente">+</button>
    <div class="nombre-suplente oculto"></div>
  `;
  
  token.style.top = coords.top;
  token.style.left = coords.left;
  pitch.appendChild(token);

  const btnSuplente = token.querySelector('.btn-suplente');
  btnSuplente.onclick = (e) => {
    e.stopPropagation(); 
    eligiendoSuplente = true;
    jugadorTitularElegido = token;
    abrirModalSeleccion(posAbreviada, coords);
  };

  if (placeholderExistente) placeholderExistente.style.opacity = '0';

  const filaJugador = document.getElementById(`row-${jugadorSeleccionado.id}`);
  if (filaJugador) {
    filaJugador.classList.remove('selected');
    filaJugador.classList.add('on-pitch');
  }

  jugadorSeleccionado = null;
  verificarOnce();
  actualizarBoxScore();
  guardarEstadoPizarra();
  hacerArrastrable(token);
  actualizarPlaceholders();
}

function abrirModalSeleccion(posAbreviada, coords) {
  const modal = document.getElementById('modal-seleccion');
  
  if (eligiendoSuplente) {
      document.getElementById('modal-seleccion-titulo').innerText = `ELEGIR SUPLENTE: ${posAbreviada}`;
  } else {
      document.getElementById('modal-seleccion-titulo').innerText = `ELEGIR TITULAR: ${posAbreviada}`;
  }

  const tabsModal = document.querySelectorAll('.modal-squad-tab');
  
  function dibujarListasModal(plantelSeleccionado) {
    const listaRecomendados = document.getElementById('lista-recomendados');
    const listaResto = document.getElementById('lista-resto');
    listaRecomendados.innerHTML = '';
    listaResto.innerHTML = '';

    const idsTitulares = Array.from(document.querySelectorAll('#pitch .player-token'))
      .map(t => parseInt(t.id.replace('token-', '')));
      
    const idsSuplentes = Array.from(document.querySelectorAll('.nombre-suplente:not(.oculto)'))
      .map(s => parseInt(s.dataset.id));
      
    const idsOcupados = [...idsTitulares, ...idsSuplentes];

    const disponibles = plantelSeleccionado.filter(p => !idsOcupados.includes(p.id));

    const recomendados = [];
    const resto = [];

    disposibles.forEach(p => {
      const arrayPosiciones = Array.isArray(p.posicion) ? p.posicion : [p.posicion];
      if (arrayPosiciones.includes(posAbreviada)) {
        recomendados.push(p);
      } else {
        resto.push(p);
      }
    });

    const dibujarFila = (jugador, contenedor) => {
      const row = document.createElement('div');
      row.className = 'modal-player-row';
      const iconoLesion = jugador.lesionado ? '<span class="injury-icon" style="font-size:10px;">✚</span>' : '';
      const iconoNuevo = jugador.nuevo ? '<span class="new-badge" style="font-size: 7px; padding: 1px 3px;">NEW</span>' : '';
      
      row.innerHTML = `
        <span style="font-weight: bold; color: var(--text-muted);">${jugador.numero}</span>
        <span style="font-weight: bold; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${jugador.nombre}${iconoLesion}${iconoNuevo}</span>
        <span class="m-pos">${Array.isArray(jugador.posicion) ? jugador.posicion[0] : jugador.posicion}</span>
      `;
      
      row.onclick = () => {
        modal.classList.remove('active');
        jugadorSeleccionado = jugador;
        ubicarJugadorLibre(coords);
      };
      contenedor.appendChild(row);
    };

    if (recomendados.length > 0) {
      recomendados.forEach(j => dibujarFila(j, listaRecomendados));
    } else {
      listaRecomendados.innerHTML = '<div style="padding: 10px; font-size: 11px; color: var(--text-muted); text-align: center;">No hay jugadores disponibles con esta posición.</div>';
    }

    if (resto.length > 0) {
      resto.forEach(j => dibujarFila(j, listaResto));
    } else {
      listaResto.innerHTML = '<div style="padding: 10px; font-size: 11px; color: var(--text-muted); text-align: center;">Plantel agotado.</div>';
    }
  }

  // --- LÓGICA DE LAS PESTAÑAS (CORREGIDA PARA INCLUIR RUMORES) ---
  tabsModal.forEach(btn => {
    btn.onclick = (e) => {
      tabsModal.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      
      const plantelElegido = e.target.dataset.plantel;
      if (plantelElegido === 'reserva') {
         dibujarListasModal(plantelReserva);
      } else if (plantelElegido === 'rumores') {
         dibujarListasModal(plantelRumores);
      } else {
         dibujarListasModal(plantelPrimera);
      }
    };
  });

  // Chequeo inicial según el panel activo de la izquierda
  const tabActivaIzquierda = document.querySelector('.squad-tab.active').innerText;
  tabsModal.forEach(b => b.classList.remove('active'));
  
  if (tabActivaIzquierda.includes('RESERVA')) {
    document.querySelector('.modal-squad-tab[data-plantel="reserva"]').classList.add('active');
    dibujarListasModal(plantelReserva);
  } else if (tabActivaIzquierda.includes('RUMORES')) {
    document.querySelector('.modal-squad-tab[data-plantel="rumores"]').classList.add('active');
    dibujarListasModal(plantelRumores);
  } else {
    document.querySelector('.modal-squad-tab[data-plantel="primera"]').classList.add('active');
    dibujarListasModal(plantelPrimera);
  }

  document.getElementById('btn-cerrar-seleccion').onclick = () => {
    modal.classList.remove('active');
    eligiendoSuplente = false;
    jugadorTitularElegido = null;
  };

  modal.classList.add('active');
}

document.addEventListener('DOMContentLoaded', inicializarApp);

const themeBtns = document.querySelectorAll('.theme-toggle-btn');

themeBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });
});

function verificarOnce() {
  const cantidadEnCancha = document.querySelectorAll('#pitch .player-token').length;
  const btnCompartir = document.getElementById('btn-compartir');
  if(btnCompartir) {
    if (cantidadEnCancha === 11) {
      btnCompartir.disabled = false;
    } else {
      btnCompartir.disabled = true;
    }
  }
}

const btnLimpiar = document.getElementById('btn-limpiar');
if(btnLimpiar) {
  btnLimpiar.addEventListener('click', () => {
    document.querySelectorAll('#pitch .player-token').forEach(el => el.remove());
    document.querySelectorAll('.player-row').forEach(row => row.classList.remove('on-pitch'));
    dibujarEsquema();
    verificarOnce();
    actualizarBoxScore(); 
    guardarEstadoPizarra(); 
  });
}

const btnCompartir = document.getElementById('btn-compartir');
if(btnCompartir) {
  btnCompartir.addEventListener('click', () => {
    const cancha = document.getElementById('pitch');
    
    const contenidoOriginal = btnCompartir.innerHTML;
    btnCompartir.innerHTML = '⏳';
    
    html2canvas(cancha, {
      scale: 3,                 
      useCORS: true,              
      backgroundColor: '#ffffff', 
      
    }).then(canvas => {
      canvas.toBlob(function(blob) {
        const file = new File([blob], "Mi_11_River.png", { type: "image/png" });
        
        if (navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
          navigator.share({
            title: '¡Mirá mi 11 ideal de River!',
            text: 'Armé mi formación en mi11river.com 🐔',
            files: [file]
          }).then(() => {
            btnCompartir.innerHTML = contenidoOriginal; 
          }).catch(error => {
            btnCompartir.innerHTML = contenidoOriginal;
          });
        } else {
          const enlace = document.createElement('a');
          enlace.download = 'Mi_Formacion_River.png';
          enlace.href = canvas.toDataURL('image/png');
          enlace.click();
          btnCompartir.innerHTML = contenidoOriginal; 
        }
      });
    });
  });
}

function normalizarTexto(texto) {
  return texto.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

let filtroActivo = null;
let textoBusqueda = ''; 

const diccionarioPosiciones = {
  'arqueros': ['POR', 'ARQ', 'PT'],
  'defensores': ['DFC', 'LD', 'LI', 'CAD', 'CAI', 'LIB', 'DEF'],
  'mediocampistas': ['VOL', 'MC', 'MCD', 'MCO', 'MD', 'MI', 'MED'],
  'delanteros': ['DC', 'ED', 'EI', 'SD', 'EXD', 'EXI', 'MP', 'DEL']
};

const searchInput = document.getElementById('search-player');
if(searchInput) {
  searchInput.addEventListener('input', (e) => {
    textoBusqueda = e.target.value.toLowerCase().trim();
    aplicarFiltroVisual();
  });
}

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const categoria = e.target.dataset.categoria;
    if (filtroActivo === categoria) {
      filtroActivo = null;
      e.target.classList.remove('active');
    } else {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      filtroActivo = categoria;
    }
    aplicarFiltroVisual();
  });
});

function aplicarFiltroVisual() {
  const busquedaNormalizada = normalizarTexto(textoBusqueda);

  document.querySelectorAll('.player-row').forEach(row => {
    const posJugador = row.dataset.posicion;
    const idJugador = parseInt(row.id.replace('row-', ''));
    const jugador = [...plantelPrimera, ...plantelReserva, ...plantelRumores].find(p => p.id === idJugador);
    let nombreParaBuscar = jugador ? jugador.nombre : '';

    if (idJugador === 28) {
      nombreParaBuscar += " Martinez Quarta";
    }

    const nombreNormalizado = normalizarTexto(nombreParaBuscar);

    let pasaPosicion = false;
    if (!filtroActivo || diccionarioPosiciones[filtroActivo].includes(posJugador)) {
      pasaPosicion = true;
    }

    let pasaBusqueda = false;
    if (nombreNormalizado.includes(busquedaNormalizada)) {
      pasaBusqueda = true;
    }

    if (pasaPosicion && pasaBusqueda) {
      row.style.display = ''; 
    } else {
      row.style.display = 'none'; 
    }
  });
}

let pestanaMisJugadores = 'titulares';

function actualizarBoxScore() {
  const container = document.getElementById('box-score-container');
  if (!container) return;
  container.innerHTML = ''; 

  const orden = ['ARQ', 'LD', 'DFC', 'LI', 'MCD', 'MC', 'VOL', 'MD', 'MCO', 'MI', 'ED', 'DC', 'EI'];
  
  const posicionesOrdenadas = Object.keys(posicionesTacticas).sort((a, b) => {
    let pesoA = orden.indexOf(a);
    let pesoB = orden.indexOf(b);
    if (pesoA === -1) pesoA = 99;
    if (pesoB === -1) pesoB = 99;
    return pesoA - pesoB;
  });

  let contTitulares = 0;

  posicionesOrdenadas.forEach(pos => {
    posicionesTacticas[pos].forEach(coords => {
      const token = Array.from(document.querySelectorAll('#pitch .player-token'))
        .find(t => {
           const sTop = t.dataset.slotTop || t.style.top;
           const sLeft = t.dataset.slotLeft || t.style.left;
           return sTop === coords.top && sLeft === coords.left;
        });
      if (token) contTitulares++;
    });
  });

  const tituloEl = document.getElementById('titulo-mis-jugadores');
  if (tituloEl) {
    tituloEl.innerText = `Mis Jugadores · ${contTitulares}/11`;
  }

  posicionesOrdenadas.forEach(pos => {
    posicionesTacticas[pos].forEach(coords => {
      const token = Array.from(document.querySelectorAll('#pitch .player-token'))
        .find(t => {
           const sTop = t.dataset.slotTop || t.style.top;
           const sLeft = t.dataset.slotLeft || t.style.left;
           return sTop === coords.top && sLeft === coords.left;
        });

      if (token) {
         const idToken = token.id.replace('token-', '');
         const jugador = [...plantelPrimera, ...plantelReserva, ...plantelRumores].find(p => p.id == idToken);
         const nombreMostrar = token.querySelector('.token-name').innerText;

         if (jugador) {
             const esArquero = jugador.posicion.includes('ARQ') || jugador.posicion === 'ARQ';
             
             // --- NUEVO: Extraemos los datos del JSON de forma segura ---
             // Si el jugador no tiene el bloque "estadisticas", usamos un objeto vacío {}
             const stats = jugador.estadisticas || {}; 
             const minutos = stats.minutos || 0; // Si no hay minutos, pone 0
             
             let htmlStats = '';
             if (esArquero) {
                const golesRecibidos = stats.goles_recibidos || 0;
                const vallasInvictas = stats.vallas_invictas || 0;
                htmlStats = `
                  <div class="stat-item" title="Minutos">⏱️ ${minutos}'</div>
                  <div class="stat-item" title="Goles Recibidos">🥅 ${golesRecibidos}</div>
                  <div class="stat-item" title="Vallas Invictas">🧤 ${vallasInvictas}</div>
                `;
             } else {
                const goles = stats.goles || 0;
                const asistencias = stats.asistencias || 0;
                htmlStats = `
                  <div class="stat-item" title="Minutos">⏱️ ${minutos}'</div>
                  <div class="stat-item" title="Goles">⚽ ${goles}</div>
                  <div class="stat-item" title="Asistencias">👟 ${asistencias}</div>
                `;
             }

             // NUEVO: Control visual para ocultar el 0.0 en la tabla derecha
             const valorPuntaje = parseFloat(jugador.puntaje_promedio);
             const htmlPromedioFinal = valorPuntaje > 0 
                ? `<span class="avg-score">${valorPuntaje.toFixed(1)}</span>` 
                : ''; 

             const estiloNombre = 'color: var(--text-main); font-weight: bold;';

             const row = document.createElement('div');
             row.className = 'box-score-row';
             row.innerHTML = `
               <span style="${estiloNombre} white-space: nowrap; overflow: hidden; text-overflow: ellipsis; padding-right: 5px;">${nombreMostrar}</span>
               ${htmlPromedioFinal}
               <div class="box-score-stats">${htmlStats}</div>
             `;
             container.appendChild(row);
         }
      }
    });
  });
}

const btnPizarra = document.getElementById('btn-pizarra');
const btnPuntuar = document.getElementById('btn-puntuar');
const viewPizarra = document.getElementById('view-pizarra');
const viewPuntuar = document.getElementById('view-puntuar');

// Variable para recordar si tenías las camisetas prendidas o no
let teniaCamisetasActivadas = false;

if(btnPizarra && btnPuntuar) {
  btnPizarra.addEventListener('click', () => {
    btnPizarra.classList.add('active');
    btnPuntuar.classList.remove('active');
    viewPizarra.style.display = 'grid';
    viewPuntuar.style.display = 'none';
    
    // Si tenías las camisetas activadas, te las vuelve a poner al volver a la pizarra
    if (teniaCamisetasActivadas) {
        document.body.classList.add('modo-camisetas');
    }
  });

  btnPuntuar.addEventListener('click', () => {
    btnPuntuar.classList.add('active');
    btnPizarra.classList.remove('active');
    viewPuntuar.style.display = 'grid';
    viewPizarra.style.display = 'none';
    
    // Anota si tenías las camisetas puestas y luego APAGA el modo para esta vista
    teniaCamisetasActivadas = document.body.classList.contains('modo-camisetas');
    document.body.classList.remove('modo-camisetas');
    
    cargarVistaPuntuacion();
  });
}

// ACÁ ACTUALIZÁS EL EQUIPO REAL CADA SEMANA
const ultimoPartido = {
  titulares: [
    { id: 41, pos: "ARQ", top: 80, left: 50 },
    { id: 20, pos: "LD", top: 60, left: 85 },     
    { id: 28, pos: "DFC", top: 65, left: 62 },     
    { id: 13, pos: "DFC", top: 65, left: 38 },     
    { id: 21, pos: "LI", top: 60, left: 15 },      
    { id: 15, pos: "MC", top: 48, left: 65 },     
    { id: 6, pos: "MC", top: 48, left: 35 },      
    { id: 11, pos: "EI", top: 33, left: 20 },       
    { id: 26, pos: "MCO", top: 33, left: 50 },     
    { id: 24, pos: "ED", top: 33, left: 80 },     
    { id: 19, pos: "DC", top: 18, left: 50 }       
  ],
  suplentes: [
    { id: 8, pos: "MC", jugo: true },           
    { id: 18, pos: "DC", jugo: true },            
    { id: 35, pos: "MP", jugo: true },          
    { id: 25, pos: "EI", jugo: true },           
  ]
};

function cargarVistaPuntuacion() {
  const pitchRating = document.getElementById('pitch-rating');
  const benchList = document.getElementById('bench-list');
  const datosActivos = obtenerDatosActivos(); 
  
  // Verificamos si este usuario ya mandó sus votos
  const yaVoto = localStorage.getItem('rivertactico_ya_voto') === 'true';

  // Limpiamos las fichas viejas
  const fichasViejas = pitchRating.querySelectorAll('.player-token');
  fichasViejas.forEach(f => f.remove());

  // 1. DIBUJAMOS LOS TITULARES REALES
  ultimoPartido.titulares.forEach(p => {
    const jugadorBD = [...plantelPrimera, ...plantelReserva, ...plantelRumores].find(j => j.id === p.id);
    if (!jugadorBD) return;

    const token = document.createElement('div');
    token.className = 'player-token'; 
    token.id = `rating-token-${p.id}`; 
    
    token.style.top = `${p.top}%`;
    token.style.left = `${p.left}%`;

    let htmlNotaFlotante = '';
    if (datosActivos[p.id]) {
      const nota = parseFloat(datosActivos[p.id]).toFixed(1);
      const colorCalibrado = obtenerColorExacto(nota);
      htmlNotaFlotante = `<div class="nota-flotante" style="color: ${colorCalibrado}; border-color: ${colorCalibrado};">${nota}</div>`;
    }

    token.innerHTML = `
      ${htmlNotaFlotante}
      <img src="${obtenerRutaFoto(p.id)}" class="token-img" onerror="this.onerror=null; this.src='fotos/default2.png'">
      <div class="token-name">${obtenerApellido(jugadorBD.nombre)}</div>
    `;

    if (modoPuntajeActual === 'mis_puntajes') {
      if (!yaVoto) {
        token.style.cursor = 'pointer';
        token.onclick = () => abrirModalNota(p.id, jugadorBD.nombre);
      } else {
        token.style.cursor = 'default'; // Si ya votó, sacamos la manito
      }
    }
    
    pitchRating.appendChild(token);
  });

  // 2. DIBUJAMOS EL BANCO DE SUPLENTES
  const benchContainers = document.querySelectorAll('.bench-tokens');
  
  benchContainers.forEach(contenedor => {
    contenedor.innerHTML = ''; 
    
    ultimoPartido.suplentes.forEach(p => {
      const jugadorBD = [...plantelPrimera, ...plantelReserva, ...plantelRumores].find(j => j.id === p.id);
      if (!jugadorBD) return;

      const token = document.createElement('div');
      token.className = 'player-token';
      
      token.style.position = 'relative';
      token.style.top = 'auto';
      token.style.left = 'auto';
      token.style.transform = 'none';

      let htmlNotaFlotante = '';

      if (p.jugo) {
        if (datosActivos[p.id]) {
          const nota = parseFloat(datosActivos[p.id]).toFixed(1);
          const colorCalibrado = obtenerColorExacto(nota);
          htmlNotaFlotante = `<div class="nota-flotante" style="color: ${colorCalibrado}; border-color: ${colorCalibrado};">${nota}</div>`;
        }
        if (modoPuntajeActual === 'mis_puntajes') {
          if (!yaVoto) {
            token.style.cursor = 'pointer';
            token.onclick = () => abrirModalNota(p.id, jugadorBD.nombre);
          } else {
            token.style.cursor = 'default';
          }
        }
      } else {
        token.style.opacity = '0.4';
        token.style.filter = 'grayscale(100%)';
        token.style.cursor = 'not-allowed';
      }

      token.innerHTML = `
        ${htmlNotaFlotante}
        <img src="${obtenerRutaFoto(p.id)}" class="token-img" onerror="this.onerror=null; this.src='fotos/default2.png'">
        <div class="token-name">${obtenerApellido(jugadorBD.nombre)}</div>
      `;
      
      contenedor.appendChild(token);
    });
  });

  actualizarBoletaEnVivo();
}

const modalPuntaje = document.getElementById('modal-puntaje');
const sliderNota = document.getElementById('nota-slider');
const sliderValueInput = document.getElementById('slider-value-input');
const btnCancelarModal = document.getElementById('btn-cancelar-modal');
const btnGuardarModal = document.getElementById('btn-guardar-modal');

function actualizarColorInteractivo(valor) {
  const n = parseFloat(valor);
  sliderValueInput.value = valor;
  sliderValueInput.className = 'slider-value-display';
  sliderValueInput.style.color = obtenerColorExacto(n); 
}

sliderNota.addEventListener('input', (e) => {
  const valor = parseFloat(e.target.value).toFixed(1);
  actualizarColorInteractivo(valor);
});

sliderValueInput.addEventListener('input', (e) => {
  let notaProcesada = registrarNotaTeclado(e.target.value); 
  if (notaProcesada !== null) {
    sliderNota.value = notaProcesada;
    actualizarColorInteractivo(notaProcesada.toFixed(1));
  }
});

sliderValueInput.addEventListener('change', () => {
  let notaProcesada = registrarNotaTeclado(sliderValueInput.value) || 6.0;
  const formateada = notaProcesada.toFixed(1);
  actualizarColorInteractivo(formateada);
});

btnCancelarModal.onclick = () => {
  modalPuntaje.classList.remove('active');
};

btnGuardarModal.onclick = () => {
  let notaProcesada = registrarNotaTeclado(sliderValueInput.value) || 6.0;
  guardarNota(notaProcesada.toFixed(1));
};

function abrirModalNota(idJugador, nombreJugador) {
  jugadorPuntuandoActual = idJugador;
  document.getElementById('modal-nombre-jugador').innerText = `Puntuar a ${nombreJugador}`;

  const notaActual = boletaPuntajes[idJugador] ? boletaPuntajes[idJugador] : "6.0";
  sliderNota.value = notaActual;
  actualizarColorInteractivo(notaActual);

  modalPuntaje.classList.add('active');
}

function guardarNota(nota) {
  if (!jugadorPuntuandoActual) return;
  boletaPuntajes[jugadorPuntuandoActual] = nota;
  modalPuntaje.classList.remove('active');
  
  // 1. GUARDAMOS EN MEMORIA (por si actualiza la página sin querer)
  localStorage.setItem('rivertactico_puntajes', JSON.stringify(boletaPuntajes));

  // 2. MAGIA DEL AUTOSCROLL (Si llegó a los 11 titulares)
  const cantidadPuntuados = Object.keys(boletaPuntajes).length;
  
  // Si justo llegó a 11 y está en un celular (pantalla chica)
  if (cantidadPuntuados === 11 && window.innerWidth <= 768) {
      setTimeout(() => {
          const bancoMovil = document.querySelector('.banco-suplentes-container.solo-movil');
          if (bancoMovil) {
              // Lo desliza suavemente hacia los suplentes y el botón de enviar
              bancoMovil.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
      }, 300); // Le damos un mini delay de 300ms para que se cierre el modal primero
  }

  cargarVistaPuntuacion(); 
}

function registrarNotaTeclado(texto) {
  let limpio = texto.replace(',', '.');
  let n = parseFloat(limpio);
  if (isNaN(n)) return null;
  if (n < 1.0) n = 1.0;
  if (n > 10.0) n = 10.0;
  return n;
}

let boletaSortMode = 'puntaje'; 

document.querySelectorAll('.sort-tab').forEach(btn => {
  btn.addEventListener('click', (e) => {
    document.querySelectorAll('.sort-tab').forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');
    boletaSortMode = e.target.dataset.sort;
    actualizarBoletaEnVivo(); 
  });
});

function actualizarBoletaEnVivo() {
  const btnEnviar = document.getElementById('btn-enviar-boleta');
  const sortControls = document.getElementById('boleta-sort-controls');
  const listContainer = document.getElementById('rated-players-container');
  const promElement = document.getElementById('boleta-promedio');
  const mvpContainer = document.getElementById('boleta-mvp-container');
  const datosActivos = obtenerDatosActivos(); 
  
  if (!btnEnviar) return; 

  const puntuados = Object.keys(datosActivos).length;
  const yaVoto = localStorage.getItem('rivertactico_ya_voto') === 'true';
  
  // --- CONTROL DEL BOTÓN SEGÚN EL ESTADO ---
  if (modoPuntajeActual !== 'mis_puntajes') {
    btnEnviar.innerText = 'MODO LECTURA';
    btnEnviar.disabled = true;
  } else if (yaVoto) {
    btnEnviar.innerText = 'PUNTAJES ENVIADOS ✓';
    btnEnviar.disabled = true;
  } else {
    btnEnviar.innerText = 'ENVIAR PUNTAJES';
    btnEnviar.disabled = (puntuados === 0);
  }

  if (puntuados > 0) {
    let sumaTotal = 0;
    let mvpId = null;
    let mvpNota = -1;
    const jugadoresPuntuadosObj = []; 

    for (const [id, notaStr] of Object.entries(datosActivos)) {
      const nota = parseFloat(notaStr);
      sumaTotal += nota;
      
      if (nota > mvpNota) {
        mvpNota = nota;
        mvpId = id;
      }

      const jugadorPartido = [...ultimoPartido.titulares, ...ultimoPartido.suplentes].find(j => j.id == id);
      
      if (jugadorPartido) {
        const jugadorBD = [...plantelPrimera, ...plantelReserva, ...plantelRumores].find(p => p.id == id);
        const nombreReal = jugadorBD ? jugadorBD.nombre : 'Desconocido';

        jugadoresPuntuadosObj.push({ 
            id: id,
            name: nombreReal,
            pos: jugadorPartido.pos,
            notaFinal: nota 
        });
      }
    }
    
    const promedio = (sumaTotal / puntuados).toFixed(1);
    promElement.innerText = promedio;
    promElement.style.color = obtenerColorExacto(promedio);

    if (mvpId) {
      const jugadorMvp = jugadoresPuntuadosObj.find(j => j.id == mvpId);
      if (jugadorMvp) {
        mvpContainer.style.display = 'block';
        const imgMvp = document.getElementById('boleta-mvp-img');
        
        if (imgMvp) {
            imgMvp.src = obtenerRutaFoto(jugadorMvp.id);
            imgMvp.onerror = function() { this.src = 'fotos/default2.png'; };
        }
        
        document.getElementById('boleta-mvp-name').innerText = jugadorMvp.name;
        const mvpRatingEl = document.getElementById('boleta-mvp-rating');
        mvpRatingEl.innerText = mvpNota.toFixed(1);
        mvpRatingEl.style.color = obtenerColorExacto(mvpNota);
      }
    }

    sortControls.style.display = 'block';
    
    if (boletaSortMode === 'puntaje') {
      jugadoresPuntuadosObj.sort((a, b) => b.notaFinal - a.notaFinal);
    } else {
      const ordenPos = ['ARQ', 'LD', 'DFC', 'LI', 'MCD', 'MC', 'VOL', 'MD', 'MCO', 'MI', 'ED', 'DC', 'EI'];
      jugadoresPuntuadosObj.sort((a, b) => {
        let pesoA = ordenPos.indexOf(a.pos);
        let pesoB = ordenPos.indexOf(b.pos);
        if (pesoA === -1) pesoA = 99;
        if (pesoB === -1) pesoB = 99;
        return pesoA - pesoB;
      });
    }

    listContainer.innerHTML = '';
    jugadoresPuntuadosObj.forEach(p => {
      const row = document.createElement('div');
      row.className = 'boleta-score-row';
      const esMVP = (p.id == mvpId);
      const iconoMVP = esMVP ? '⭐ ' : '';
      const estiloNombre = esMVP ? 'color: #e5a400; font-weight: 900;' : ''; 
      
      row.innerHTML = `
        <span class="pos">${p.pos}</span>
        <span class="name" style="${estiloNombre}">${iconoMVP}${p.name}</span>
        <span class="rating" style="color: ${obtenerColorExacto(p.notaFinal)};">${p.notaFinal.toFixed(1)}</span>
      `;
      listContainer.appendChild(row);
    });

  } else {
    promElement.innerText = '-';
    promElement.style.color = '#fff'; 
    
    mvpContainer.style.display = 'none';
    if(sortControls) sortControls.style.display = 'none';
    listContainer.innerHTML = '';
  }
}

const btnEnviarBoleta = document.getElementById('btn-enviar-boleta');
const modalAdvertencia = document.getElementById('modal-advertencia');
const btnCancelarEnvio = document.getElementById('btn-cancelar-envio');
const btnConfirmarEnvio = document.getElementById('btn-confirmar-envio');

if (btnEnviarBoleta) {
  btnEnviarBoleta.onclick = () => {
    const suplentesQueJugaron = ultimoPartido.suplentes.filter(s => s.jugo).length;
    const totalAEvaluar = ultimoPartido.titulares.length + suplentesQueJugaron;
    const puntuados = Object.keys(boletaPuntajes).length;

    if (puntuados < totalAEvaluar) {
      const faltantes = totalAEvaluar - puntuados;
      
      document.getElementById('modal-advertencia-texto').innerText = 
        `Ojo: Te faltó puntuar a ${faltantes} jugador(es).\n\n¿Querés enviar tu boleta de todos modos?`;
      
      modalAdvertencia.classList.add('active');
      return; 
    }

    ejecutarEnvioFinal();
  };
}

if (btnCancelarEnvio) {
  btnCancelarEnvio.onclick = () => {
    modalAdvertencia.classList.remove('active');
  };
}

if (btnConfirmarEnvio) {
  btnConfirmarEnvio.onclick = () => {
    modalAdvertencia.classList.remove('active');
    ejecutarEnvioFinal();
  };
}

function ejecutarEnvioFinal() {
  const modalExito = document.getElementById('modal-exito');
  const btnEnviarBoleta = document.getElementById('btn-enviar-boleta');
  
  // 1. Cambiamos el texto del botón para que el usuario sepa que está cargando
  const textoOriginal = btnEnviarBoleta.innerText;
  btnEnviarBoleta.innerText = 'ENVIANDO... ⏳';
  btnEnviarBoleta.disabled = true;

  // 2. Armamos el paquete con la fecha exacta y las notas que puso el usuario
  const paqueteDeVotos = {
    fecha: new Date().toISOString(),
    puntajes: boletaPuntajes
  };

  // 3. ACA PONES TU LINK (OJO: tiene que terminar sí o sí en /votos.json)
  const urlFirebase = 'PEGÁ-TU-LINK-ACÁ/votos.json'; // <-- ¡Acordate de volver a pegar tu link acá!

  // 4. Disparamos los datos hacia los servidores de Google
  fetch(urlFirebase, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(paqueteDeVotos)
  })
  .then(respuesta => respuesta.json())
  .then(datos => {
    // Si llegó bien, mostramos el modal de éxito
    if (modalExito) {
      modalExito.classList.add('active');
    }
    
    // Restauramos el texto del botón
    btnEnviarBoleta.innerText = textoOriginal;
    
    // --- MAGIA NUEVA: Dejamos asentado que ya votó y NO borramos las notas ---
    localStorage.setItem('rivertactico_ya_voto', 'true');
    cargarVistaPuntuacion(); 
  })
  .catch(error => {
    console.error("Error enviando datos:", error);
    alert("Hubo un error de conexión. ¡Intentá de nuevo!");
    btnEnviarBoleta.innerText = textoOriginal;
    btnEnviarBoleta.disabled = false;
  });
}

const fondoModalPuntaje = document.getElementById('modal-puntaje');
if (fondoModalPuntaje) {
  fondoModalPuntaje.addEventListener('click', function(e) {
    if (e.target === this) {
      this.classList.remove('active');
    }
  });
}

const fondoModalSeleccion = document.getElementById('modal-seleccion');
if (fondoModalSeleccion) {
  fondoModalSeleccion.addEventListener('click', function(e) {
    if (e.target === this) {
      this.classList.remove('active');
      eligiendoSuplente = false;
      jugadorTitularElegido = null;
    }
  });
}

const fondoModalAdvertencia = document.getElementById('modal-advertencia');
if (fondoModalAdvertencia) {
  fondoModalAdvertencia.addEventListener('click', function(e) {
    if (e.target === this) {
      this.classList.remove('active');
    }
  });
}

const btnCerrarExito = document.getElementById('btn-cerrar-exito');
if (btnCerrarExito) {
  btnCerrarExito.onclick = () => {
    document.getElementById('modal-exito').classList.remove('active');
  };
}

const fondoModalExito = document.getElementById('modal-exito');
if (fondoModalExito) {
  fondoModalExito.addEventListener('click', function(e) {
    if (e.target === this) {
      this.classList.remove('active');
    }
  });
}

const toggleSuplentes = document.getElementById('toggle-suplentes');

if (toggleSuplentes) {
  document.body.classList.add('hide-subs');

  toggleSuplentes.addEventListener('change', (e) => {
    if (e.target.checked) {
      document.body.classList.remove('hide-subs');
    } else {
      document.body.classList.add('hide-subs');
    }
  });
}

const btnToggleFotos = document.getElementById('btn-toggle-fotos');
const iconUser = document.querySelector('.icon-user');
const iconShirt = document.querySelector('.icon-shirt');

if (btnToggleFotos) {
  btnToggleFotos.addEventListener('click', () => {
    document.body.classList.toggle('modo-camisetas');
    
    if (document.body.classList.contains('modo-camisetas')) {
      iconUser.style.display = 'none';
      iconShirt.style.display = 'block';
    } else {
      iconUser.style.display = 'block';
      iconShirt.style.display = 'none';
    }
  });
}

window.estaArrastrando = false;

function hacerArrastrable(token) {
  let isDragging = false;
  let startX, startY;
  let initialLeft, initialTop;
  let pitchRect;

  token.addEventListener('mousedown', dragStart);
  token.addEventListener('touchstart', dragStart, { passive: false });

  function dragStart(e) {
    if (e.target.closest('.btn-suplente') || e.target.closest('.nombre-suplente')) return;
    if (eligiendoSuplente || jugadorSeleccionado) return;

    if (!token.dataset.slotTop) {
      token.dataset.slotTop = token.style.top;
      token.dataset.slotLeft = token.style.left;
    }

    const evt = e.type.includes('mouse') ? e : e.touches[0];
    startX = evt.clientX;
    startY = evt.clientY;

    initialLeft = parseFloat(token.style.left);
    initialTop = parseFloat(token.style.top);
    pitchRect = document.getElementById('pitch').getBoundingClientRect();

    isDragging = false;
    window.estaArrastrando = false;

    document.addEventListener('mousemove', dragMove);
    document.addEventListener('touchmove', dragMove, { passive: false });
    document.addEventListener('mouseup', dragEnd);
    document.addEventListener('touchend', dragEnd);
  }

  function dragMove(e) {
    const evt = e.type.includes('mouse') ? e : e.touches[0];
    const dx = evt.clientX - startX;
    const dy = evt.clientY - startY;

    if (Math.abs(dx) > 3 || Math.abs(dy) > 3) {
      isDragging = true;
      window.estaArrastrando = true;
      token.style.transition = 'none'; 
      token.style.zIndex = 1000;       
      
      if (e.type.includes('touch')) e.preventDefault(); 
    }

    if (isDragging) {
      let moveXPct = (dx / pitchRect.width) * 100;
      let moveYPct = (dy / pitchRect.height) * 100;

      let newLeft = initialLeft + moveXPct;
      let newTop = initialTop + moveYPct;

      newLeft = Math.max(0, Math.min(100, newLeft));
      newTop = Math.max(0, Math.min(100, newTop));

      token.style.left = `${newLeft}%`;
      token.style.top = `${newTop}%`;
    }
  }

  function dragEnd(e) {
    document.removeEventListener('mousemove', dragMove);
    document.removeEventListener('touchmove', dragMove);
    document.removeEventListener('mouseup', dragEnd);
    document.removeEventListener('touchend', dragEnd);

    if (isDragging) {
      token.style.transition = 'all 0.3s cubic-bezier(0.25, 1, 0.5, 1)';
      token.style.zIndex = 10;
      
      // --- MAGIA: MOVER EL CÍRCULO INVISIBLE CON EL JUGADOR ---
      const oldTop = token.dataset.slotTop;
      const oldLeft = token.dataset.slotLeft;
      const newTop = token.style.top;
      const newLeft = token.style.left;
      
      if (oldTop && oldLeft) {
          // 1. Movemos el círculo físico en la cancha
          const placeholder = Array.from(document.querySelectorAll('.placeholder'))
            .find(p => p.style.top === oldTop && p.style.left === oldLeft);
          
          if (placeholder) {
             placeholder.style.top = newTop;
             placeholder.style.left = newLeft;
          }
          
          // 2. Modificamos la táctica maestra para que se aprenda la nueva ubicación
          const pos = token.dataset.pos;
          if (posicionesTacticas[pos]) {
             const coordObj = posicionesTacticas[pos].find(c => c.top === oldTop && c.left === oldLeft);
             if (coordObj) {
                coordObj.top = newTop;
                coordObj.left = newLeft;
             }
          }
          
          // 3. Le decimos al jugador cuál es su nuevo "hogar"
          token.dataset.slotTop = newTop;
          token.dataset.slotLeft = newLeft;
      }
      // --------------------------------------------------------
      
      guardarEstadoPizarra(); 
      actualizarPlaceholders(); 
      
      setTimeout(() => {
        window.estaArrastrando = false;
        isDragging = false;
      }, 50);
    }
  }
}

function actualizarPlaceholders() {
  document.querySelectorAll('.placeholder').forEach(p => {
     const tokenEncima = Array.from(document.querySelectorAll('#pitch .player-token')).find(t => {
        const topToken = t.dataset.slotTop || t.style.top;
        const leftToken = t.dataset.slotLeft || t.style.left;
        return topToken === p.style.top && leftToken === p.style.left;
     });
     
     p.style.opacity = tokenEncima ? '0' : '1';
     p.style.pointerEvents = tokenEncima ? 'none' : 'auto'; 
  });
}

function vincularJugadoresAHuecos() {
  const placeholders = Array.from(document.querySelectorAll('.placeholder'));
  const tokens = Array.from(document.querySelectorAll('#pitch .player-token'));
  
  let huecosDisponibles = placeholders.filter(p => {
     return !tokens.some(t => t.dataset.slotTop === p.style.top && t.dataset.slotLeft === p.style.left);
  });

  tokens.forEach(token => {
    if (!token.dataset.slotTop) {
      let huecoMasCercano = null;
      let distanciaMinima = Infinity;
      
      huecosDisponibles.forEach(p => {
        const dx = parseFloat(p.style.left) - parseFloat(token.style.left);
        const dy = parseFloat(p.style.top) - parseFloat(token.style.top);
        const distancia = Math.sqrt(dx * dx + dy * dy);
        
        if (distancia < distanciaMinima) {
          distanciaMinima = distancia;
          huecoMasCercano = p;
        }
      });
      
      if (huecoMasCercano) {
        token.dataset.slotTop = huecoMasCercano.style.top;
        token.dataset.slotLeft = huecoMasCercano.style.left;
        
        huecosDisponibles = huecosDisponibles.filter(p => p !== huecoMasCercano);
      }
    }
  });
}

const canchaObserver = document.querySelector('.pitch-container');
if (canchaObserver) {
  const observer = new MutationObserver(() => {
    vincularJugadoresAHuecos(); 
    actualizarPlaceholders();   
    actualizarBoxScore();       
  });
  observer.observe(canchaObserver, { childList: true, subtree: true });
}

const buscadorModal = document.getElementById('buscador-modal');

if (buscadorModal) {
  buscadorModal.addEventListener('input', (e) => {
    const textoBusqueda = e.target.value.toLowerCase();
    
    const filasJugadores = document.querySelectorAll('#lista-recomendados > div, #lista-resto > div'); 

    filasJugadores.forEach(fila => {
      const nombreJugador = fila.innerText.toLowerCase();
      
      if (nombreJugador.includes(textoBusqueda)) {
        fila.style.display = ''; 
      } else {
        fila.style.display = 'none'; 
      }
    });
  });
}

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal-squad-tab')) {
     if (buscadorModal) {
         buscadorModal.value = ''; 
     }
  }
});

// --- MOTOR PARA COMPARTIR LA IMAGEN DE LOS PUNTAJES ---
const btnCompartirPuntaje = document.getElementById('btn-compartir-puntaje');
if(btnCompartirPuntaje) {
  btnCompartirPuntaje.addEventListener('click', () => {
    // Acá le apuntamos a la cancha de puntuación, no a la otra
    const canchaPuntaje = document.getElementById('pitch-rating');
    
    const contenidoOriginal = btnCompartirPuntaje.innerHTML;
    btnCompartirPuntaje.innerHTML = '⏳';
    
    html2canvas(canchaPuntaje, {
      scale: 3,                 
      useCORS: true,              
      backgroundColor: '#ffffff'
    }).then(canvas => {
      canvas.toBlob(function(blob) {
        const file = new File([blob], "Mis_Puntajes_River.png", { type: "image/png" });
        
        if (navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
          // Si está en celular, abre el menú nativo de WhatsApp, Instagram, etc.
          navigator.share({
            title: '¡Mirá mis puntajes de River!',
            text: 'Yo ya puntué a los jugadores en mi11river.com 🐔',
            files: [file]
          }).then(() => {
            btnCompartirPuntaje.innerHTML = contenidoOriginal; 
          }).catch(error => {
            btnCompartirPuntaje.innerHTML = contenidoOriginal;
          });
        } else {
          // Si está en PC, le descarga la imagen directo
          const enlace = document.createElement('a');
          enlace.download = 'Mis_Puntajes_River.png';
          enlace.href = canvas.toDataURL('image/png');
          enlace.click();
          btnCompartirPuntaje.innerHTML = contenidoOriginal; 
        }
      });
    });
  });
}