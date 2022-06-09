import Dropdown from './Dropdown'
import Modal from './Modal'

const FormationDropdown = () => {
  return (
    <div className="mt-5 flex flex-col gap-5">
      
      <Dropdown topic="Les Massages aux Huiles du Corps" type="1">
        <div className="grid grid-cols-5 items-center gap-10 text-center ">
          <div className="grow-0">
            <Modal title="Initiation" content = "Durée: 1 jours (cette journée peut être complété par d'autre permettant ainsi de réaliser un massage complet du corps)"
                                      content2 = "Nombre de participants: 1 à 6 personnes."
                                      content3 = "Cette formation vous fera découvrir l'ensemble des techniques professionelles de toucher utilisées dans un massage aux huiles , le choix et l'utilisation des huiles. Le positionnement du masseur, la réspiration, le rythme."/>
          </div>
          <div className="grow-0">
            <Modal title="Amincissant" content = "Durée: 2 jours"
                                      content3 = "Formation Professionnelle Certifiante  permettant de maîtriser les techniques des soins manuels amincissants et proposer des cures minceur spécifiques à chacun(e) des personnes vous consultant pour retrouver la ligne et rester en forme." />
          </div>
          <div className="grow-0">
            <Modal title="Tuina 1 &#38; 2" content = "Stage de 2Jours  (Petit groupe de 2 à 6 personnes)"
                                          content2 = "Face postérieure (Dos, Bras, Jambes, Pieds)"
                                          content3 = "Le Massage Tuina aux huiles est un massage relaxant et énergétique. En tant que Masseuse ou Masseur vous apprendrez à maitriser de nombreuses techniques de toucher :  pressions, effleurages, pétrissages, tapotements... Il se pratique avec des huiles, sur une table de massage."/>
          </div>
          <div className="grow-0">
            <Modal title="Femme Enceinte" content = "Durée: 3 jours "
                                          content2 = "Nombre de participants: 2 à 6 personnes  pour un apprentissage de qualité"
                                          content3 = "Acquérir les gestes techniques avec un protocole adapté à la position latérale, Connaître les différentes modalités d’installation pour un confort absolu de la femme enceinte et du praticien, Identifier les possibilités d’application et les limites d’intervention (modelage à but non thérapeutique et non médical). Connaître la physiologie et les étapes d’une grossesse. Savoir accueillir et répondre aux attentes d’une femme enceinte afin de créer un climat de confiance lors du massage."/>
          </div>
          <div className="grow-0">
            <Modal title="Personnes Agées" content = "Durée: 3 Jours  (Petit groupe de 2 à 6 personnes)"
            content3 = "Ce massage permet au corps de s’autoréguler, apporte une relaxation profonde et soulage les douleurs les plus courantes. Ces Massages sont adaptés parfaitement, pour la pratique des accompagnants, soignants et proches des personnes dépendantes, âgées, Hospitalisés. Les Bienfaits du Massage Pour la personne agée: Ce massage pratiqué régulièrement aide au maintien d'une bonne santé physiologique et psychologique   en participant à l’élimination des toxines et en réduisant le stress, l'anxiété et la douleur."/>
          </div>
          <div className="grow-0">
            <Modal title="Ayurvédique" content = "Durée: 3 Jours  (pour réaliser 1h de massage) "
            content2 = "Nombre de participants: Petit Groupe de 2 à 6 personnes"
            content3 = "Dos pieds, jambes, ventre, bras, mains, tête Le Massage Traditionnel  Indien  Ayurvédique 'Abyangha' est un massage qui Il utilise un mélange très varié de techniques de toucher (effleurement, friction, pétrissage, pincement, tapotement, balancement, pression ...)"/>
          </div>
          <div className="grow-0">
            <Modal title="Californien" content = "Durée: 1à 3 jours Formation aussi Disponible par Correspondance"
            content2 = "Objectifs: Réaliser des massage du corps ou 1 partie de 25min à 1h30."
            content3 = "Le Massage aux Huiles 'Californien' est  le  massage le plus pratiqué en France. Il est apprécié  pour la profonde relaxation qu'il apporte, générée par la diversité des techniques de toucher utlisées. C'est  la formation idéale si vous êtes débutant et que vous souhaitez découvrir les techniques des massages aux huiles. La formation s'éffectue sur une table de Massage. Massage Californien Aux Huiles Le massage le plus apprécié et demandé en France Formation Professionnelle Certifiante  ou vous apprendrez à masser:(dos, bras,mains jambes,pieds,ventre, tête, visage, épaules)"/>
          </div>
          <div className="grow-0">
            <Modal title="Pierres Chaudes" content = "Stage de 3 Jours  (Enchaînement  60min) Massage Dos, jambes, pieds, ventre, bras, main, tête 2 à 6 personnes  Seulement!!! pour vous apporter un enseignement de qualité"
            content3 = "Le Massage aux Pierres Chaudes génère une détente profonde en cumulant les effets de la stimulation sur le corps des mouvements glissés à l'aide des pierres. Et l'action décontractante et ré-équilibrante de la chaleur des pierres. (le Matériel nécessaire est prêté lors de la formation) Objectifs : durant les 3 journées de stage vous apprendrez à réaliser un massage complet durant minimum 1H. Savoir utiliser le matériel spécifique à cette technique (cuve chauffante,  pierres, huiles...) "/>
          </div>
          <div className="grow-0">
            <Modal title="Balinaiss" content = "Durée:  3 Jours (Petit groupe de 2 à 6 personnes."
            content3 = "Massage Traditionnel indonésien aux Huiles, le massage de l'île de Bali trouve ses origines comme celle de son peuple dans la culture indienne. Sa large palette de techniques de toucher (effleurement, pétrissage, digitopuncture... ) des mouvements glissés, variant tout autant dans le rythme et l'intensité, font du massage Balinais un massage de bien être complet à la fois doux et tonique, relaxant et énergétique."/>
          </div>
          <div className="grow-0">
            <Modal title="Lomi Lomi" />
          </div>
          <div className="col-start-2 grow-0">
            <Modal title="Drainage Lymphatique" content = "Durée:  2 Jours "
            content3 = "Les vertus du massage Lymphatique: Il participe à éliminer la Cellulite, augmente les défenses de l’organisme, il est aussi très employé chez les sportifs pour préparer les muscles à l'effort et permettre une meilleure récupération. Il régule les problèmes Circulatoires. Ouvert à tous : Particuliers, personnes en reconversion, Spa manager, massothérapeutes, esthéticiennes..."/>
          </div>
          <div className="grow-0">
            <Modal title="Sportif &#38; Suédois" content = "Durée:  3 Jours (Réaliser un Massage d'au Moins 60 minutes)"
            content3 = "Le Massage Sportif et Suédois ce pratique avant et/ou après l'effort. Après l'effort, le massage sportif assouplit la musculature, permet au sportif récupérer le plus rapidement possible et raccourci le temps de fatigue. Le pratiquer avant l'effort, permet de réchauffer la musculature du sportif, éviter les blessures notamment l'hiver, où l'on a tendance à plus se blesser que la normale."/>
          </div>
          <div className="grow-0">
            <Modal title="Ventre Chi Nei Tsang" content = "Durée: 3 Jours  (Petit groupe de 2 à 6 personnes)"
            content3 = "Les bienfaits du massage: Ce massage va permettre au corps de relâcher les tensions physiques et psychologiques localisées dans le ventre. Il permet d'améliorer certains problèmes digestifs mineurs (Constipation, spasmes, inflammations...) et de réduire les douleurs lombaires et dorsales."/>
          </div>
        </div>
      </Dropdown>
      <Dropdown topic="Les Massages Habillés sans huiles" type="1">
        <div className="grid grid-cols-5 items-center gap-10 text-center ">
          <div className="grow-0">
            <Modal title="Assis “Amma”" />
          </div>
          <div className="grow-0">
            <Modal title="Do In" />
          </div>
          <div className="grow-0">
            <Modal title="Shiatsu" />
          </div>
          <div className="grow-0">
            <Modal title="Femme Enceinte" />
          </div>
          <div className="grow-0">
            <Modal title="Thaïlandais" />
          </div>
          <div className="grow-0">
            <Modal title="Post Grossesse" />
          </div>
          <div className="grow-0">
            <Modal title="Bébé Shantala" />
          </div>
          <div className="grow-0">
            <Modal title="Massage de l’Enfant" />
          </div>
          <div className="grow-0">
            <Modal title="Animation Atelier Enfant" />
          </div>
          <div className="grow-0">
            <Modal title="Bébé &#38; Animation d'Atelier" />
          </div>
          <div className="col-start-3 grow-0">
            <Modal title="Assis “Amma” A distance" />
          </div>
        </div>
      </Dropdown>
      <Dropdown topic="Massages &#38; Réflexologie" type="1">
        <div className="grid grid-cols-5 items-center gap-10">
          <div className="grow-0">
            <Modal title="Massage Etoile" />
          </div>
          <div className="grow-0">
            <Modal title="Ventre Chi Nei Tsang" />
          </div>
          <div className="grow-0">
            <Modal title="Visage Indien Marmas" />
          </div>
          <div className="grow-0">
            <Modal title="Kobido" />
          </div>
          <div className="grow-0">
            <Modal title="Tête Mains Pieds" />
          </div>
          <div className="col-start-2 grow-0">
            <Modal title="Réflexologie Plantaire" />
          </div>
          <div className="grow-0">
            <Modal title="Réflexologie Palmaire" />
          </div>
          <div className="grow-0">
            <Modal title="Dien Chan" />
          </div>
        </div>
      </Dropdown>
    </div>
  )
}
export default FormationDropdown
