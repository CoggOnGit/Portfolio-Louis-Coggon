import bookiD from '../assets/projetImg/booki-d.webp';
import bookiT from '../assets/projetImg/booki-t.webp';
import bookiM from '../assets/projetImg/booki-m.webp';

import bluel from '../assets/projetImg/bluel.webp';
import bluelA from '../assets/projetImg/bluel-admin.webp';
import bluelE from '../assets/projetImg/bluel-edit.webp';

import nina from '../assets/projetImg/nina.webp';
import ninaB from '../assets/projetImg/nina-bfr.webp';
import ninaA from '../assets/projetImg/nina-after.webp';

import kasa from '../assets/projetImg/kasa-accueil.webp';
import kasaL from '../assets/projetImg/kasa-logement.webp';
import kasaA from '../assets/projetImg/kasa-about.webp';

import grimoire from '../assets/projetImg/grimoire-accueil.webp';
import grimoireM from '../assets/projetImg/grimoire-modif.webp';
import grimoireL from '../assets/projetImg/grimoire-login.webp';

import leBienEtreB from '../assets/projetImg/lebienetre-bon.webp';
import leBienEtreE from '../assets/projetImg/lebienetre-exte.webp';
import leBienEtreI from '../assets/projetImg/lebienetre-inte.webp';
import leBienEtreP from '../assets/projetImg/lebienetre-pochette.webp';

import apprentisagesL from '../assets/projetImg/apprentisages-logo.webp';
import apprentisagesD from '../assets/projetImg/apprentisages-details.webp';
import apprentisagesL2 from '../assets/projetImg/apprentisages-logo2.webp';

import ea1 from '../assets/projetImg/EssentielActu1.webp';
import ea2 from '../assets/projetImg/EssentielActu2.webp';
import ea3 from '../assets/projetImg/EssentielActu3.webp';
import ea4 from '../assets/projetImg/EssentielActu4.webp';
import ea5 from '../assets/projetImg/EssentielActu5.webp';
import ea6 from '../assets/projetImg/EssentielActu6.webp';

import meditationChat from '../assets/projetImg/MéditationDuChat.webp';

import nvForge from '../assets/projetImg/NouvelleForge.webp';

import agape from '../assets/projetImg/Agapé.webp';

import tweeky from '../assets/projetImg/Tweeky.webp';

export const projetsData = [
    {
        "id": "1",
        "category_id":"W",
        "title":"Booki, agence de voyage",
        "tags": [
            "HTML",
            "CSS",
            "Responsif"
        ],
        "lien":"https://github.com/CoggOnGit/Booki.git",
        "description":"Booki est une entreprise fictive souhaitant développer un site internet qui permet aux usagers de trouver des hébergements et des activités dans la ville de leur choix. J'ai été chargé d'intégrer l'interface responsive du site pour ordinateur, tablette et mobile, en HTML et CSS.",
        "pictures": [
            bookiD,
            bookiT,
            bookiM]
    },

    {
        "id": "2",
        "category_id":"W",
        "title":"Sophie Bluel, architecte d'intérieur",
        "tags": [
            "JavaScript",
            "Front-End",
            "Swagger"
        ],
        "lien":"https://github.com/CoggOnGit/SophieBluel.git",
        "description":"Sophie Bluel, Architecte d’intérieur, est une cliente fictive qui souhaitait mettre en ligne son site vitrine qui servirait de portfolio pour pouvoir présenter ses travaux.",
        "contraintes":"Le site devait récupérer dynamiquement les données des travaux via l’API et afficher les projets dans une galerie triable par catégorie. Il fallait intégrer la page de connexion et la rendre fonctionnelle afin que la cliente puisse se connecter en mode administrateur. En mode administrateur, la cliente devait pouvoir cliquer sur un bouton pour afficher la modale de gestion des projets. Elle devait pouvoir aussi supprimer un projet ou en ajouter un grace à un formulaire, le tout pour rendre le site dynamique, et qu’elle puisse continuer de mettre à jour son site. Pour ce projet, j’avais acces au Figma de la maquette desktop, le code HTML / CSS pour la page d’accueil et le code back-end.",
        "pictures": [
            bluel,
            bluelA,
            bluelE
        ]
    },

    {
        "id": "3",
        "category_id":"W",
        "title":"Nina Carducci, photographe",
        "tags": [
            "Référencement",
            "Optimisation",
            "Accessibilité"
        ],
        "lien":"https://github.com/CoggOnGit/Nina.git",
        "description": "Nina Carducci, photographe, est une cliente fictive qui souhaitait améliorer les performances de son site.",
        "contraintes": "Pour ce projet, il fallait faire une optimisation globale du site, que ce soit sur les performances que sur le SEO. Il fallait mettre en place le référencement local, ajouter les metas pour les réseaux sociaux, modifier le site pour qu’il soit plus accessible et faire un rapport d’optimisation pour présenter toutes les actions effectuées et leur impacts.",
        "pictures": [
            nina,
            ninaB,
            ninaA
        ]
    },

    {
        "id": "4",
        "category_id":"W",
        "title":"Kasa, agence de location d'appartements",
        "tags": [
            "React",
            "React Router",
            "SCSS",
            "Responsif"
        ],
        "lien":"https://github.com/CoggOnGit/Kasa.git",
        "description": "Kasa, est une agence fictive de location d'appartements, voulait lancer une refonte totale pour passer à une stack complète en JavaScript avec NodeJS côté back-end, et React côté front-end",
        "contraintes": "Pour ce projet, le but était d'intégrer avec React et en SCSS une maquette responsive, avec des animations sur des collapses et des carousels et qui devait afficher dynamiquement le contenu des pages en fonction des données que nous avions dans notre fichier de data.",
        "pictures": [
            kasa,
            kasaL,
            kasaA
        ]
    },

    {
        "id": "5",
        "category_id":"W",
        "title":"Mon Vieux Grimoire, référencement et notation de livres",
        "tags": [
            "Back-End",
            "Node.js",
            "MongoDB"
        ],
        "lien":"https://github.com/CoggOnGit/Grimoire.git",
        "description": "Mon Vieux Grimoire, une petite chaîne de librairies fictives, souhaitaient développer un site permettant de référencer et noter des ouvrages.",
        "contraintes": "Pour ce projet, en fonction du Front-End, il a fallut paramétrer le Back-End pour récupérer les informations stockées sur MongoDB afin de permettre aux utilisateurs de se créer un compte de manière sécurisée, de pouvoir publier un livre avec un ajout de fichier, de pouvoir le modifier et de noter les livres créés par d'autres utilisateurs.",
        "pictures": [
            grimoire,
            grimoireM,
            grimoireL
        ]
    },

    {
        "id": "6",
        "category_id":"P",
        "title":"LeBienEtre.fr, cadeaux bien-être",
        "tags": [
            "Print",
            "Photoshop",
            "Illustrator",
            "InDesign"
        ],
        "description": "LeBienEtre.fr, plateforme de bons cadeaux bien-être en ligne souhaitait une refonte totale de leurs bons.",
        "contraintes": "Pour ce projet, j'ai entièrement revu le design du bon, que ce soit pour la version imprimable, que la version numérique. Je suis passé d'un format portrait à un format paysage, j'ai revu les couleurs et modifié le contenu afin que la personne qui reçoit le bon, sache tout de suite, qu'il s'agit d'une carte cadeau pour une prestation Bien-Être.",
        "pictures": [
            leBienEtreB,
            leBienEtreE,
            leBienEtreI,
            leBienEtreP
        ]
    },

    {
        "id": "7",
        "category_id":"L",
        "title":"Apprenti Sages, conseils en développement personnel",
        "tags": [
            "Logo",
            "Illustrator",
            "Vectoriel"
        ],
        "description": "Apprenti Sages, est un conseiller en développement personnel qui souhaitait un logo afin de représenter son entreprise.",
        "contraintes": "Pour ce projet, j'ai repris le 'A' et le 'S' du nom afin de représenter un Colibri, symbole de générosité et de courage. Pour ce logo, j'ai choisi d'utiliser des teintes de bleus afin de véhiculer une image de connaissance et de sérénité.",
        "pictures": [
            apprentisagesL,
            apprentisagesD,
            apprentisagesL2
        ]
    },

    {
        "id": "8",
        "category_id":["L","P","D"],
        "title":"EssentilActu.com, actualités tech et jeux vidéos",
        "tags": [
            "Logo",
            "Print",
            "Web design",
            "Charte graphique"
        ],
        "description": "EssentielActu.com, est un site d'actualités sur les nouvelles technologies, les nouveaux films et jeux vidéos",
        "contraintes": "Pour ce projet, j'ai revu toute l'image de marque du site. En passant du logo, par la charte graphique, jusqu'à la création de la maquette du site. Pour le logo, j'ai revu le fantôme qui servait de logo en respectant la proportion dorée et en rajoutant un micro afin que l'on comprenne au premier regard qu'il s'agit d'un logo pour de l'actualité. Pour la maquette du site, j'ai choisi le noir et le blanc, synonymes de sobriété et d'élégance afin d'inspirer la confiance.",
        "pictures": [
            ea1,
            ea2,
            ea3,
            ea4,
            ea5,
            ea6
        ]
    },

    {
        "id": "9",
        "category_id":"L",
        "title":"La Méditation du Chat, mode art et création",
        "tags": [
            "Logo",
        ],
        "description": "La Méditation du Chat est une particulière qui souhaitait un logo pour son activité de crochet.",
        "pictures": [
            meditationChat
        ]
    },

    {
        "id": "10",
        "category_id":"P",
        "title":"Nouvelle Forge, expertise design",
        "tags": [
            "Print",
            "InDesign",
            "Brochure"
        ],
        "description": "La Nouvelle Forge est une pépinière d'entreprise qui souhaitait publier une brochure afin de pouvoir communiquer sur leurs actualités.",
        "pictures": [
            nvForge
        ]
    },

    {
        "id": "11",
        "category_id":"D",
        "title":"Agapé, formation et coaching",
        "tags": [
            "Web Design",
            "Illustrator",
            "InDesign"
        ],
        "description": "Agapé est une formatrice qui a contacté Pop School pour réaliser la maquette de son site afin de pouvoir étendre son activité sur le web.",
        "pictures": [
            agape
        ]
    },

    {
        "id": "12",
        "category_id":"D",
        "title":"Tweeky, la santé à portée de main",
        "tags": [
            "Web Design",
            "Illustrator",
            "InDesign"
        ],
        "description": "Tweeky est une start-up qui voulait créer le lavage des mains de demain.",
        "contraintes": "Le but était de créer un one-page afin que les utilisateurs puissent s'abonner à la Newsletter afin de recevoir les actualités en attendant la commercialisation du produit.",
        "pictures": [
            tweeky
        ]
    }
]