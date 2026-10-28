/* ========================================================
   CampusAccess – Carte & Événements (Campus Mghilla)
   ======================================================== */

/* ---------- Données cartographiques du campus ---------- */
const MAP_EMBED_URL = 'https://www.google.com/maps/d/embed?mid=14zxMt5ioSaTqVhGO2Z7n1nW38HJNw8w&ehbc=2F806A';
const MAP_FULL_URL  = 'https://www.google.com/maps/d/u/0/viewer?mid=14zxMt5ioSaTqVhGO2Z7n1nW38HJNw8w';

/* Points de repère du campus (coordonnées réelles du KML) */
const CAMPUS_LOCATIONS = {
  entree: { id: 'entree', name: 'Entrée Principale (Portail Ouest)', lat: 32.366950, lng: -6.315350, icon: '🚪' },
  amphi_a: { id: 'amphi_a', name: 'Amphi A', lat: 32.3672359, lng: -6.3145983, icon: '🏛️', access: 'Rampe extérieure douce, portes automatiques, 4 emplacements PMR' },
  amphi_b: { id: 'amphi_b', name: 'Amphi B', lat: 32.3673386, lng: -6.3143086, icon: '🏛️', access: 'Plain-pied par la cour centrale, éclairage guidé' },
  amphi_c: { id: 'amphi_c', name: 'Amphi C', lat: 32.3671090, lng: -6.3141870, icon: '🏛️', access: 'Rampe latérale sécurisée avec main courante, sanitaires PMR' },
  amphi_d: { id: 'amphi_d', name: 'Amphi D', lat: 32.3669580, lng: -6.3144373, icon: '🏛️', access: 'Accès sans marche par porte inférieure réservée PMR' },
  bloc_a: { id: 'bloc_a', name: 'Bloc A (Administration & Salles)', lat: 32.3670471, lng: -6.3150033, icon: '🏢', access: 'Entrée principale sans seuil, couloirs larges' },
  bloc_b: { id: 'bloc_b', name: 'Bloc B (Amphithéâtres & TP)', lat: 32.3668606, lng: -6.3149014, icon: '🏢', access: 'Allée piétonne lisse goudronnée sans marche' },
  biblio: { id: 'biblio', name: 'Bibliothèque & Mosquée', lat: 32.3672268, lng: -6.3142943, icon: '📚', access: 'Ascenseur PMR spacieux, dalles podotactiles' },
  buvette: { id: 'buvette', name: 'Buvette & Cafétéria', lat: 32.3673235, lng: -6.3139974, icon: '☕', access: 'Terrasse de plain-pied, allée béton désactivé' }
};

/* ---------- Liste des événements du campus ---------- */
const EVENTS = [
  {
    id: 'ev-1',
    title: 'Conférence IA & Innovations Technologiques',
    category: 'Conférence',
    icon: '🤖',
    date: "Aujourd'hui, 14h30 - 16h30",
    dateTag: 'Bientôt en cours',
    locationId: 'amphi_a',
    room: 'Amphi A – Rez-de-chaussée',
    desc: 'Conférence sur les avancées de l’IA générative et de la vision par ordinateur animée par des chercheurs universitaires et industriels.',
    features: ['Rampe douce < 4%', 'Places PMR réservées', 'Sous-titrage direct'],
    routeSteps: {
      entree: [
        { title: "Départ au portail principal", desc: "Franchir l'entrée principale et s'engager sur l'allée piétonne centrale goudronnée.", dist: "40 m" },
        { title: "Bifurquer à gauche vers le Bloc A", desc: "Longer la façade nord du Bloc A sur la voie piétonne lisse et sans obstacle.", dist: "60 m" },
        { title: "Emprunter la rampe d'accès", desc: "Prendre la rampe douce d'accès à l'esplanade nord des amphithéâtres (double rambarde).", dist: "35 m" },
        { title: "Arrivée à l'Amphi A", desc: "Entrée de plain-pied par la porte automatique. Rangée PMR dès l'entrée.", dist: "25 m" }
      ],
      bloc_a: [
        { title: "Sortie du Bloc A", desc: "Sortir par le hall nord de plain-pied.", dist: "20 m" },
        { title: "Traverser l'esplanade", desc: "Suivre la voie pavée plane vers l'Amphi A.", dist: "50 m" },
        { title: "Arrivée à l'Amphi A", desc: "Entrée directe par la porte automatique.", dist: "20 m" }
      ],
      buvette: [
        { title: "Départ de la buvette", desc: "Descendre la rampe de la terrasse vers l'allée centrale.", dist: "30 m" },
        { title: "Longer la bibliothèque", desc: "Suivre l'allée ombragée vers l'ouest.", dist: "70 m" },
        { title: "Arrivée à l'Amphi A", desc: "Entrée accessible sur votre droite.", dist: "20 m" }
      ]
    },
    routeStats: { dist: '160 m', time: '2 min', score: '100% accessible PMR' }
  },
  {
    id: 'ev-2',
    title: 'Atelier Dev Web & Applications Modernes',
    category: 'Atelier',
    icon: '💻',
    date: 'Demain, 10h00 - 12h30',
    dateTag: 'Inscriptions ouvertes',
    locationId: 'bloc_a',
    room: 'Bloc A – Salle Multimédia 102',
    desc: 'Atelier pratique de conception web et d’interfaces réactives. Encadrement assuré par les tuteurs du club d’informatique.',
    features: ['Plain-pied complet', 'Postes adaptés', 'Sanitaires PMR'],
    routeSteps: {
      entree: [
        { title: "Départ entrée campus", desc: "S'engager sur l'allée piétonne directe vers le Bloc A.", dist: "30 m" },
        { title: "Approche du bâtiment", desc: "Avancer tout droit vers la porte principale vitrée du Bloc A.", dist: "30 m" },
        { title: "Entrée Bloc A", desc: "Porte automatique coulissante sans marche.", dist: "10 m" },
        { title: "Salle 102", desc: "La salle multimédia se situe immédiatement sur votre droite dans le hall.", dist: "10 m" }
      ],
      amphi_a: [
        { title: "Départ Amphi A", desc: "Descendre la rampe vers l'allée piétonne.", dist: "35 m" },
        { title: "Entrée Bloc A", desc: "Franchir la porte nord du Bloc A.", dist: "35 m" },
        { title: "Salle 102", desc: "Accès immédiat au RDC.", dist: "10 m" }
      ],
      buvette: [
        { title: "Départ buvette", desc: "Prendre l'allée goudronnée en direction de l'ouest.", dist: "100 m" },
        { title: "Entrée Bloc A", desc: "Entrer par la porte principale.", dist: "30 m" },
        { title: "Salle 102", desc: "Salle à droite.", dist: "10 m" }
      ]
    },
    routeStats: { dist: '80 m', time: '1 min', score: 'Accès le plus rapide' }
  },
  {
    id: 'ev-3',
    title: 'Forum Entreprises & Carrières Étudiantes',
    category: 'Vie étudiante',
    icon: '💼',
    date: 'Jeudi 30 oct., 09h30 - 17h00',
    dateTag: 'Journée entière',
    locationId: 'amphi_b',
    room: 'Amphi B & Cour Centrale',
    desc: 'Rencontrez plus de 25 recruteurs, start-ups et institutions pour des offres de stages, d’alternance et de projets professionnels.',
    features: ['Guides bénévoles', 'Stands adaptés', 'Plan sonore'],
    routeSteps: {
      entree: [
        { title: "Passage du portail", desc: "Prendre l'allée centrale bordée d'arbres.", dist: "50 m" },
        { title: "Contourner le jardin", desc: "Suivre la voie pavée douce longeant le parvis ouest.", dist: "80 m" },
        { title: "Esplanade centrale", desc: "Traverser la cour reliant les amphithéâtres A et B.", dist: "45 m" },
        { title: "Entrée Amphi B", desc: "Accès par la double porte battante du hall principal.", dist: "25 m" }
      ],
      bloc_a: [
        { title: "Départ Bloc A", desc: "Traverser la voie pavée vers l'esplanade centrale.", dist: "60 m" },
        { title: "Arrivée Amphi B", desc: "Entrée directe dans le hall d'accueil.", dist: "25 m" }
      ],
      buvette: [
        { title: "Départ buvette", desc: "Marcher vers l'ouest le long de la bibliothèque.", dist: "50 m" },
        { title: "Arrivée Amphi B", desc: "Accès par l'entrée est de l'amphithéâtre.", dist: "30 m" }
      ]
    },
    routeStats: { dist: '200 m', time: '2-3 min', score: '100% accessible PMR' }
  },
  {
    id: 'ev-4',
    title: 'Exposition Culturelle & Rencontre Poétique',
    category: 'Culture',
    icon: '🎨',
    date: 'Vendredi 31 oct., 15h00 - 18h00',
    dateTag: 'Entrée libre',
    locationId: 'biblio',
    room: 'Bibliothèque Universitaire – Hall d’exposition',
    desc: 'Vernissage d’œuvres artistiques créées par les étudiants, suivi de lectures de poésie et d’une visite guidée des archives.',
    features: ['Ascenseur spacieux', 'Rampes bilatérales', 'Audio-description'],
    routeSteps: {
      entree: [
        { title: "Allée principale", desc: "Avancer tout droit sur l'allée goudronnée.", dist: "80 m" },
        { title: "Passage devant les amphis", desc: "Continuer sur le chemin goudronné en direction de l'aile est.", dist: "90 m" },
        { title: "Parvis de la bibliothèque", desc: "Suivre la signalétique bleue accessible au sol.", dist: "40 m" },
        { title: "Rampe de la bibliothèque", desc: "Emprunter la rampe d'accès douce avec main courante continue.", dist: "30 m" }
      ],
      bloc_a: [
        { title: "Départ Bloc A", desc: "Longer l'allée vers l'est.", dist: "110 m" },
        { title: "Rampe bibliothèque", desc: "Prendre la rampe sud.", dist: "30 m" }
      ],
      buvette: [
        { title: "Départ buvette", desc: "Aller directement au sud vers le parvis de la bibliothèque.", dist: "40 m" },
        { title: "Entrée bibliothèque", desc: "Accès de plain-pied.", dist: "10 m" }
      ]
    },
    routeStats: { dist: '240 m', time: '3 min', score: 'Parcours balisé et ombragé' }
  },
  {
    id: 'ev-5',
    title: 'Café Associatif & Échange de Projets',
    category: 'Vie étudiante',
    icon: '☕',
    date: 'Lundi 03 nov., 11h30 - 13h30',
    dateTag: 'Convivial',
    locationId: 'buvette',
    room: 'Buvette du Campus – Terrasse & Espace Lounge',
    desc: 'Moment d’échange chaleureux entre étudiants, associations universitaires et porteurs d’initiatives citoyennes.',
    features: ['Terrasse sans seuil', 'Tables adaptées', 'Allée stabilisée'],
    routeSteps: {
      entree: [
        { title: "Allée nord", desc: "Prendre l'allée piétonne le long de l'espace vert nord.", dist: "100 m" },
        { title: "Voie pavée", desc: "Poursuivre sur le revêtement stabilisé anti-dérapant.", dist: "110 m" },
        { title: "Abord de la buvette", desc: "Tourner à droite vers la terrasse aménagée.", dist: "40 m" },
        { title: "Terrasse Buvette", desc: "Arrivée de plain-pied sur la terrasse.", dist: "20 m" }
      ],
      bloc_a: [
        { title: "Départ Bloc A", desc: "Remonter vers l'allée nord du campus.", dist: "80 m" },
        { title: "Rejoindre la buvette", desc: "Avancer vers la terrasse.", dist: "60 m" }
      ],
      amphi_a: [
        { title: "Départ Amphi A", desc: "Prendre l'allée est vers la buvette.", dist: "70 m" },
        { title: "Terrasse", desc: "Arrivée directe.", dist: "20 m" }
      ]
    },
    routeStats: { dist: '270 m', time: '3-4 min', score: 'Revêtement régulier sans gravier' }
  },
  {
    id: 'ev-6',
    title: 'Séminaire Climat & Transition Écologique',
    category: 'Conférence',
    icon: '🌱',
    date: 'Mardi 04 nov., 14h00 - 16h30',
    dateTag: 'À venir',
    locationId: 'amphi_d',
    room: 'Amphi D – Amphithéâtre Sud',
    desc: 'Table ronde sur les défis de la durabilité environnementale, la gestion de l’eau et l’écologie sur les campus régionaux.',
    features: ['Porte latérale PMR', 'Boucle auditive', 'Places réservées'],
    routeSteps: {
      entree: [
        { title: "Départ du portail", desc: "S'engager sur l'allée principale puis obliquer vers l'aile sud.", dist: "60 m" },
        { title: "Passage Bloc B", desc: "Contourner le Bloc B par le côté ouest dégagé.", dist: "55 m" },
        { title: "Rampe latérale Amphi D", desc: "Prendre la rampe douce équipée de double rambarde de protection.", dist: "45 m" },
        { title: "Entrée Amphi D", desc: "Entrée directe par la porte PMR de plain-pied en bas de l'amphithéâtre.", dist: "20 m" }
      ],
      bloc_a: [
        { title: "Départ Bloc A", desc: "Descendre l'allée sud vers le Bloc B.", dist: "50 m" },
        { title: "Rampe Amphi D", desc: "Prendre la rampe latérale ouest.", dist: "45 m" },
        { title: "Entrée Amphi D", desc: "Accès direct au premier rang.", dist: "20 m" }
      ],
      buvette: [
        { title: "Départ buvette", desc: "Traverser l'allée centrale vers le sud-ouest.", dist: "120 m" },
        { title: "Amphi D", desc: "Arrivée par la rampe ouest.", dist: "40 m" }
      ]
    },
    routeStats: { dist: '180 m', time: '2-3 min', score: 'Accès sans marches via rampe' }
  }
];

/* ---------- État de l'application ---------- */
let currentView = 'map';
let selectedEventId = 'ev-1';
let currentDeparture = 'entree';
let eventFilter = 'all';
let searchQuery = '';

/* ---------- Utilitaires ---------- */
const $ = s => document.querySelector(s);
function toast(msg){
  const t = $('#toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2800);
}

/* ---------- Navigation SPA (2 sections uniquement) ---------- */
function show(view){
  currentView = view;
  document.querySelectorAll('.view').forEach(v => {
    v.classList.toggle('active', v.id === 'view-' + view);
  });
  document.querySelectorAll('.nav-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.view === view);
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
document.querySelectorAll('.nav-btn').forEach(b => {
  b.onclick = () => show(b.dataset.view);
});
$('#btnGoEvents').onclick = () => show('events');

/* ---------- Moteur Carte Google My Maps ---------- */
function renderMap(){
  const container = $('#map');
  if(!container.querySelector('iframe')){
    container.innerHTML = `
      <iframe 
        src="${MAP_EMBED_URL}" 
        width="100%" 
        height="480" 
        style="border:0;" 
        allowfullscreen="" 
        loading="lazy" 
        title="Plan interactif du campus - Google My Maps"
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>
      <div class="map-actions">
        <span class="map-hint">📍 Utilisez les boutons + / - et explorez les repères réels du campus</span>
        <a href="${MAP_FULL_URL}" target="_blank" rel="noopener noreferrer" class="map-ext-btn">
          Ouvrir la carte en plein écran ↗
        </a>
      </div>`;
  }
}

/* ---------- Affichage de la bannière d'itinéraire actif ---------- */
function renderRouteBanner(){
  const banner = $('#routeBanner');
  const ev = EVENTS.find(e => e.id === selectedEventId);
  if(!ev){
    banner.style.display = 'none';
    return;
  }
  const loc = CAMPUS_LOCATIONS[ev.locationId] || {};
  banner.style.display = 'flex';
  banner.innerHTML = `
    <div class="banner-left">
      <span class="banner-icon">${ev.icon}</span>
      <div>
        <strong>Itinéraire optimisé actif :</strong> ${ev.title}
        <div class="banner-sub">📍 <b>${loc.name || ev.room}</b> • ⏱️ ${ev.routeStats.time} (${ev.routeStats.dist})</div>
      </div>
    </div>
    <div class="banner-actions">
      <button class="banner-btn" onclick="openLiveGps()">Lancer le guidage GPS ↗</button>
    </div>`;
}

/* ---------- Panneau d'itinéraire optimisé (Panneau latéral) ---------- */
function renderRoutePanel(){
  const panel = $('#routePanel');
  const ev = EVENTS.find(e => e.id === selectedEventId) || EVENTS[0];
  const destLoc = CAMPUS_LOCATIONS[ev.locationId] || { name: ev.room, lat: 32.3672359, lng: -6.3145983 };
  const originLoc = CAMPUS_LOCATIONS[currentDeparture] || CAMPUS_LOCATIONS.entree;

  // Calcul du lien Google Maps GPS piéton direct
  const gmapsWalkingUrl = `https://www.google.com/maps/dir/?api=1&origin=${originLoc.lat},${originLoc.lng}&destination=${destLoc.lat},${destLoc.lng}&travelmode=walking`;

  // Récupération des étapes selon le point de départ
  const steps = (ev.routeSteps && ev.routeSteps[currentDeparture]) || ev.routeSteps['entree'] || [];

  panel.innerHTML = `
    <div class="route-header">
      <span class="pill-category ${getCategoryClass(ev.category)}">${ev.category}</span>
      <h2 class="route-title">${ev.title}</h2>
      <div class="route-destination">
        <span class="dest-icon">📍</span>
        <div>
          <b>${destLoc.name}</b>
          <small>${ev.room}</small>
        </div>
      </div>
      <div class="event-time-badge">🕒 ${ev.date}</div>
    </div>

    <!-- Sélecteur de départ -->
    <div class="departure-box">
      <label for="departureSelect"><b>Point de départ :</b></label>
      <select id="departureSelect" class="styled-select" aria-label="Sélectionner le point de départ">
        <option value="entree" ${currentDeparture==='entree'?'selected':''}>🚪 Entrée Principale (Portail Ouest)</option>
        <option value="bloc_a" ${currentDeparture==='bloc_a'?'selected':''}>🏢 Bloc A (Administration & Salles)</option>
        <option value="buvette" ${currentDeparture==='buvette'?'selected':''}>☕ Buvette & Cafétéria</option>
        <option value="amphi_a" ${currentDeparture==='amphi_a'?'selected':''}>🏛️ Amphi A</option>
      </select>
    </div>

    <!-- Statistiques de l'itinéraire -->
    <div class="route-stats-grid">
      <div class="stat-box">
        <span class="stat-icon">⏱️</span>
        <div><b>${ev.routeStats.time}</b><small>Temps de marche</small></div>
      </div>
      <div class="stat-box">
        <span class="stat-icon">📏</span>
        <div><b>${ev.routeStats.dist}</b><small>Distance</small></div>
      </div>
      <div class="stat-box">
        <span class="stat-icon">♿</span>
        <div><b>PMR 100%</b><small>Sans obstacle</small></div>
      </div>
    </div>

    <!-- Étapes pas-à-pas -->
    <div class="route-steps-section">
      <h3 class="steps-heading">Étapes du parcours optimisé</h3>
      <div class="steps-timeline">
        ${steps.map((st, idx) => `
          <div class="timeline-step">
            <div class="step-marker">${idx + 1}</div>
            <div class="step-content">
              <b>${st.title}</b>
              <p>${st.desc}</p>
              <span class="step-dist">${st.dist}</span>
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- Accessibilité du lieu -->
    <div class="access-highlight">
      <b>♿ Accessibilité du lieu :</b>
      <p>${destLoc.access || ev.features.join(' • ')}</p>
    </div>

    <!-- Boutons d'action -->
    <div class="route-actions">
      <a href="${gmapsWalkingUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-gps">
        🚶 Lancer la navigation piétonne Google Maps ↗
      </a>
      <button class="btn btn-ghost" onclick="show('events')">
        📅 Voir les autres événements
      </button>
    </div>
  `;

  // Écouteur pour changer le point de départ en direct
  const depSelect = $('#departureSelect');
  if(depSelect){
    depSelect.onchange = (e) => {
      currentDeparture = e.target.value;
      renderRoutePanel();
      toast(`Départ mis à jour : ${CAMPUS_LOCATIONS[currentDeparture].name}`);
    };
  }
}

/* Ouvre directement le guidage GPS piéton */
window.openLiveGps = function(){
  const ev = EVENTS.find(e => e.id === selectedEventId) || EVENTS[0];
  const destLoc = CAMPUS_LOCATIONS[ev.locationId] || { lat: 32.3672359, lng: -6.3145983 };
  const originLoc = CAMPUS_LOCATIONS[currentDeparture] || CAMPUS_LOCATIONS.entree;
  const url = `https://www.google.com/maps/dir/?api=1&origin=${originLoc.lat},${originLoc.lng}&destination=${destLoc.lat},${destLoc.lng}&travelmode=walking`;
  window.open(url, '_blank', 'noopener,noreferrer');
};

/* ---------- Liste des événements sur la vue Carte ---------- */
function renderMapEventsList(){
  const container = $('#mapEventsList');
  container.innerHTML = EVENTS.map(ev => {
    const loc = CAMPUS_LOCATIONS[ev.locationId] || {};
    const isSel = ev.id === selectedEventId;
    return `
      <div class="card map-event-card ${isSel ? 'active' : ''}" data-id="${ev.id}">
        <div class="map-ev-top">
          <span class="ev-cat-badge ${getCategoryClass(ev.category)}">${ev.category}</span>
          <span class="ev-time-pill">${ev.dateTag}</span>
        </div>
        <h3 class="map-ev-title">${ev.title}</h3>
        <p class="map-ev-loc">📍 <b>${loc.name || ev.room}</b></p>
        <div class="map-ev-footer">
          <span class="map-ev-dist">📏 ${ev.routeStats.dist} • ${ev.routeStats.time}</span>
          <button class="btn-sm ${isSel ? 'active-btn' : ''}" onclick="jumpToEvent('${ev.id}')">
            ${isSel ? '✓ Sélectionné' : 'Itinéraire ➔'}
          </button>
        </div>
      </div>
    `;
  }).join('');
}

/* ---------- Vue Événements : Grille complète ---------- */
function renderEventsGrid(){
  const container = $('#eventsGrid');
  const filtered = EVENTS.filter(ev => {
    const matchCat = (eventFilter === 'all' || ev.category === eventFilter);
    const searchTarget = (ev.title + ' ' + ev.desc + ' ' + ev.room + ' ' + ev.category).toLowerCase();
    const matchSearch = searchTarget.includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  if(!filtered.length){
    container.innerHTML = `
      <div class="empty-state">
        <p>🔍 Aucun événement ne correspond à votre recherche.</p>
        <button class="btn btn-ghost" onclick="resetFilters()">Réinitialiser les filtres</button>
      </div>`;
    return;
  }

  container.innerHTML = filtered.map(ev => {
    const loc = CAMPUS_LOCATIONS[ev.locationId] || {};
    const isSel = ev.id === selectedEventId;
    return `
      <article class="card event-card ${isSel ? 'highlight' : ''}">
        <div class="event-card-header">
          <div class="event-icon-bubble">${ev.icon}</div>
          <div>
            <span class="pill-category ${getCategoryClass(ev.category)}">${ev.category}</span>
            <span class="event-tag">${ev.dateTag}</span>
          </div>
        </div>

        <h2 class="event-card-title">${ev.title}</h2>
        <div class="event-meta-row">
          <span>🕒 <b>${ev.date}</b></span>
          <span>📍 <b>${loc.name || ev.room}</b> (${ev.room})</span>
        </div>

        <p class="event-desc">${ev.desc}</p>

        <div class="event-features">
          ${ev.features.map(f => `<span class="feat-badge">✔ ${f}</span>`).join('')}
        </div>

        <div class="event-card-footer">
          <div class="route-hint">
            <span>🚶 Itinéraire optimisé :</span>
            <b>${ev.routeStats.dist} (~${ev.routeStats.time})</b>
          </div>
          <button class="btn btn-jump-route" onclick="jumpToEvent('${ev.id}')">
            📍 Voir sur la carte & itinéraire ➔
          </button>
        </div>
      </article>
    `;
  }).join('');
}

/* ---------- Action de saut vers la carte & itinéraire ---------- */
window.jumpToEvent = function(eventId){
  selectedEventId = eventId;
  const ev = EVENTS.find(e => e.id === eventId);
  const loc = CAMPUS_LOCATIONS[ev ? ev.locationId : ''] || {};

  renderRoutePanel();
  renderRouteBanner();
  renderMapEventsList();
  renderEventsGrid();

  show('map');
  toast(`🎯 Itinéraire optimisé vers ${loc.name || 'le lieu'} affiché !`);
};

/* ---------- Gestionnaires de filtres & recherche ---------- */
$('#eventFilterTabs').onclick = e => {
  if(!e.target.classList.contains('filter-chip')) return;
  document.querySelectorAll('#eventFilterTabs .filter-chip').forEach(b => b.classList.remove('active'));
  e.target.classList.add('active');
  eventFilter = e.target.dataset.cat;
  renderEventsGrid();
};

$('#eventSearchInput').oninput = e => {
  searchQuery = e.target.value.trim();
  renderEventsGrid();
};

window.resetFilters = function(){
  eventFilter = 'all';
  searchQuery = '';
  $('#eventSearchInput').value = '';
  document.querySelectorAll('#eventFilterTabs .filter-chip').forEach(b => {
    b.classList.toggle('active', b.dataset.cat === 'all');
  });
  renderEventsGrid();
};

function getCategoryClass(cat){
  if(cat === 'Conférence') return 'cat-conf';
  if(cat === 'Atelier') return 'cat-atelier';
  if(cat === 'Vie étudiante') return 'cat-vie';
  if(cat === 'Culture') return 'cat-culture';
  return 'cat-default';
}

/* ---------- Initialisation ---------- */
renderMap();
renderRoutePanel();
renderRouteBanner();
renderMapEventsList();
renderEventsGrid();
