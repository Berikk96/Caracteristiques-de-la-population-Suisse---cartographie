//charger d3 et topojson avant de compiler

//données sur la population prises de l'OFS

const d_pop = [
  {
    "id": "ZH",
    "habitants en milliers": 1504.3,
    "Etrangers en %": 26.7,
    "Moyen de transport principal: transports publics": 46.4,
    "Moyen de transport principal: transport privé motorisé": 40.6,
    "Infractions au Code Pénal en % de la population totale": 59.7
  },
  {
    "id": "BE",
    "habitants en milliers": 1031.1,
    "Etrangers en %": 16.2,
    "Moyen de transport principal: transports publics": 32.5,
    "Moyen de transport principal: transport privé motorisé": 49.7,
    "Infractions au Code Pénal en % de la population totale": 49.2
  },
  {
    "id": "LU",
    "habitants en milliers": 406.5,
    "Etrangers en %": 18.4,
    "Moyen de transport principal: transports publics": 25.5,
    "Moyen de transport principal: transport privé motorisé": 57.9,
    "Infractions au Code Pénal en % de la population totale": 46.4
  },
  {
    "id": "UR",
    "habitants en milliers": 36.3,
    "Etrangers en %": 12.0,
    "Moyen de transport principal: transports publics": 10.7,
    "Moyen de transport principal: transport privé motorisé": 67.3,
    "Infractions au Code Pénal en % de la population totale": 22.7
  },
  {
    "id": "SZ",
    "habitants en milliers": 157.3,
    "Etrangers en %": 21.1,
    "Moyen de transport principal: transports publics": 18.6,
    "Moyen de transport principal: transport privé motorisé": 67.5,
    "Infractions au Code Pénal en % de la population totale": 26
  },
  {
    "id": "OW",
    "habitants en milliers": 37.6,
    "Etrangers en %": 14.7,
    "Moyen de transport principal: transports publics": 13.2,
    "Moyen de transport principal: transport privé motorisé": 68.6,
    "Infractions au Code Pénal en % de la population totale": 33.2
  },
  {
    "id": "NW",
    "habitants en milliers": 43,
    "Etrangers en %": 14.6,
    "Moyen de transport principal: transports publics": 16.9,
    "Moyen de transport principal: transport privé motorisé": 68.1,
    "Infractions au Code Pénal en % de la population totale": 28.7
  },{
    "id": "GL",
    "habitants en milliers": 40.3,
    "Etrangers en %": 24.1,
    "Moyen de transport principal: transports publics": 15.0,
    "Moyen de transport principal: transport privé motorisé": 65.7,
    "Infractions au Code Pénal en % de la population totale": 26.8
  },{
    "id": "ZG",
    "habitants en milliers": 125.4,
    "Etrangers en %": 27.9,
    "Moyen de transport principal: transports publics": 30.6,
    "Moyen de transport principal: transport privé motorisé": 52.1,
    "Infractions au Code Pénal en % de la population totale": 39.4
  },
  {
    "id": "FR",
    "habitants en milliers": 315.1,
    "Etrangers en %": 22.5,
    "Moyen de transport principal: transports publics": 19.0,
    "Moyen de transport principal: transport privé motorisé": 70.9,
    "Infractions au Code Pénal en % de la population totale": 41.4
  },
  {
    "id": "SO",
    "habitants en milliers": 271.4,
    "Etrangers en %": 22.3,
    "Moyen de transport principal: transports publics": 21.7,
    "Moyen de transport principal: transport privé motorisé": 63.5,
    "Infractions au Code Pénal en % de la population totale": 54.7
  },
  {
    "id": "BS",
    "habitants en milliers": 193.9,
    "Etrangers en %": 36.0,
    "Moyen de transport principal: transports publics": 51.0,
    "Moyen de transport principal: transport privé motorisé": 17.4,
    "Infractions au Code Pénal en % de la population totale": 113.5
  },
  {
    "id": "BL",
    "habitants en milliers": 287.0,
    "Etrangers en %": 22.5,
    "Moyen de transport principal: transports publics": 37.1,
    "Moyen de transport principal: transport privé motorisé": 47.2,
    "Infractions au Code Pénal en % de la population totale": 38.8
  },
  {
    "id": "SH",
    "habitants en milliers": 81.4,
    "Etrangers en %": 26.0,
    "Moyen de transport principal: transports publics": 29.7,
    "Moyen de transport principal: transport privé motorisé": 54.9,
    "Infractions au Code Pénal en % de la population totale": 47.2
  },
  {
    "id": "AR",
    "habitants en milliers": 55.2,
    "Etrangers en %": 16.3,
    "Moyen de transport principal: transports publics": 20.4,
    "Moyen de transport principal: transport privé motorisé": 62.6,
    "Infractions au Code Pénal en % de la population totale": 28.5
  },
  {
    "id": "AI",
    "habitants en milliers": 16.1,
    "Etrangers en %": 11.4,
    "Moyen de transport principal: transports publics": 8.6,
    "Moyen de transport principal: transport privé motorisé": 68.8,
    "Infractions au Code Pénal en % de la population totale": 23.0
  },
  {
    "id": "SG",
    "habitants en milliers": 504.7,
    "Etrangers en %": 24.0,
    "Moyen de transport principal: transports publics": 22.0,
    "Moyen de transport principal: transport privé motorisé": 60.5,
    "Infractions au Code Pénal en % de la population totale": 34.3
  },
  {
    "id": "GR",
    "habitants en milliers": 197.9,
    "Etrangers en %": 18.6,
    "Moyen de transport principal: transports publics": 17.4,
    "Moyen de transport principal: transport privé motorisé": 53.6,
    "Infractions au Code Pénal en % de la population totale": 31.8
  },
  {
    "id": "AG",
    "habitants en milliers": 671.0,
    "Etrangers en %": 24.9,
    "Moyen de transport principal: transports publics": 24.6,
    "Moyen de transport principal: transport privé motorisé": 62.9,
    "Infractions au Code Pénal en % de la population totale": 35.6
  },
  {
    "id": "TG",
    "habitants en milliers": 273.8,
    "Etrangers en %": 24.7,
    "Moyen de transport principal: transports publics": 17.4,
    "Moyen de transport principal: transport privé motorisé": 67.4,
    "Infractions au Code Pénal en % de la population totale": 33.9
  },
  {
    "id": "TI",
    "habitants en milliers": 353.7,
    "Etrangers en %": 27.9,
    "Moyen de transport principal: transports publics": 18.1,
    "Moyen de transport principal: transport privé motorisé": 68.3,
    "Infractions au Code Pénal en % de la population totale": 39.7
  },
  {
    "id": "VD",
    "habitants en milliers": 791.1,
    "Etrangers en %": 33.5,
    "Moyen de transport principal: transports publics": 32.5,
    "Moyen de transport principal: transport privé motorisé": 56.3,
    "Infractions au Code Pénal en % de la population totale": 64.8
  },
  {
    "id": "VS",
    "habitants en milliers": 341.5,
    "Etrangers en %": 23.0,
    "Moyen de transport principal: transports publics": 13.9,
    "Moyen de transport principal: transport privé motorisé": 69.7,
    "Infractions au Code Pénal en % de la population totale": 36.1
  },
  {
    "id": "NE",
    "habitants en milliers": 178.0,
    "Etrangers en %": 25.4,
    "Moyen de transport principal: transports publics": 25.1,
    "Moyen de transport principal: transport privé motorisé": 62.3,
    "Infractions au Code Pénal en % de la population totale": 65.8
  },
  {
    "id": "GE",
    "habitants en milliers": 495.2,
    "Etrangers en %": 40.1,
    "Moyen de transport principal: transports publics": 46.0,
    "Moyen de transport principal: transport privé motorisé": 35.5,
    "Infractions au Code Pénal en % de la population totale": 102.8
  },
  {
    "id": "JU",
    "habitants en milliers": 73.3,
    "Etrangers en %": 14.7,
    "Moyen de transport principal: transports publics": 15.5,
    "Moyen de transport principal: transport privé motorisé": 72.7,
    "Infractions au Code Pénal en % de la population totale": 37.3
  }
];

//ces variables sont utilisées plus tard dans le code pour la projection de la carte
var width = 1600;
var height = 600;

//Projection de type geoAlbers (comme défini sur le site pour avoir la carte telle quelle)
const Maprojection = d3.geoAlbers()
.rotate([0, 0])
.center([8.3, 46.8])
.scale(16000)
.translate([width / 3, height / 2])
.precision(.1);

//dessin des formes qui correspondent aux pays. Générer des chemins ("paths")
const genererchemins = d3.geoPath().projection(Maprojection);

const canevas = d3.select('svg');

// Sélection du critère
const selection = document.getElementById("selection");
critere = selection.options[selection.value-1].innerHTML

// nombre de couleurs pour la légende
const nombreDeCouleurs = 8

//données pour la carte
d3.json("https://gist.githubusercontent.com/mbostock/4207744/raw/3232c7558742bab53227e242a437f64ae4c58d9e/readme-swiss.json")
.then(swiss => {

  //sélectionne le critère sélectionné
  d3.select('#selection').on("change", function () { // chaque fois qu'on change la sélection
    critere = selection.options[selection.value-1].innerHTML
    render() // on réaffiche
  })

  // couleurs utilisées
  const colors = d3.schemeBlues[nombreDeCouleurs];

  //Echelle couleur pour le choropleth
  let echelleCouleur = d3.scaleQuantize(colors);

  // on définit les cantons
  let cantons = topojson.feature(swiss, swiss.objects.cantons);
  const chemins = canevas.selectAll('path')
  .data(cantons.features).enter()
  .append('path')
  .attr('class', 'canton');

  // contient la légende
  var legend = canevas.append('g')
  .attr('transform', 'translate(1040, 30)')

  const titles = chemins.append('title')

  // taille des éléments de la légende
  const legendCellSize = 20
  const legendCellSizeHeight = 40

  //mets le nom du canton sur chaque canton
  canevas.selectAll('text')
  .data(cantons.features)
  .enter()
  .append('text')
  .attr("transform", function(d) { return "translate(" + genererchemins.centroid(d) + ")"; }) //effectue une translation du texte pour qu'il soit au milieu du canton
  .attr("dy", ".35em")
  .text(function(d) { return d.properties.name; })

  // titre de la légende
  canevas.append('g').append('text')
  .attr("x", 1014)
  .attr("y", 10)
  .attr("text-anchor", "middle")
  .style("fill", "#000000")
  .style("font-weight", "200")
  .style("font-size", "15px")
  .text("Source : OFS 2017");

  // on affiche une première fois
  render()

  // fonction qui affiche et met à jour la carte
  function render() {
    console.log("j'affiche la carte avec ", critere)

    const minPop = d3.min(d_pop,d=>d[critere]);
    const maxPop = d3.max(d_pop,d=>d[critere])

    // met à jour le range pour l'échelle
    echelleCouleur
    .domain([
      minPop, //met la population  minimum
      maxPop])

      chemins
      .attr('fill', function(d){ //fonction pour remplir le canton avec l'échelle de couleur selon la donnée
        info = d_pop.filter(x => x.id == d.id)[0]
        return echelleCouleur(info[critere])

      })
      .attr('d', genererchemins)//l'écriture d'un path a un attribut d. Correspond à des coordonnées.

      titles
      .text(function(d){
        info = d_pop.filter(x => x.id == d.id)[0] // sélectionne les informations du canton selon les id correspondants
        if(info) {
          console.log(info[critere])
          return info[critere]
        }
        else { // si aucune information sur le canton est trouvée, affiche erreur
          return "Erreur"
        }
      });//permet d'afficher les données

      // rectangle de couleur de la légende
      legend.selectAll()
      .data(d3.range(colors.length))
      .enter().append('svg:rect')
      .attr('height', legendCellSizeHeight + 'px')
      .attr('width', legendCellSize + 'px')
      .attr('x', 5)
      .attr('y', function(d) { return d * legendCellSizeHeight; })
      .style("fill", function(d) { return colors[d]; });

      // définit les chiffres de l'échelle
      // place la légende à la bonne taille
      // définit l'intervalle
      var legendScale = d3.scaleLinear().domain([minPop, maxPop])
      .range([0, colors.length * legendCellSizeHeight]);

      // définit le bon nombre de tirets
      var valeurDesChiffres = d3.range(minPop, maxPop+1, (maxPop-minPop)/(nombreDeCouleurs));

      // appelle l'échelle des chiffres
      legend.call( d3.axisLeft(legendScale).tickPadding(17).tickValues(valeurDesChiffres)
      );
    }
  });