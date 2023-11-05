import bookiD from '../assets/projetImg/booki-d.webp';
import bookiT from '../assets/projetImg/booki-t.webp';
import bookiM from '../assets/projetImg/booki-m.webp';

import bluel from '../assets/projetImg/bluel.webp';
import bluelA from '../assets/projetImg/bluel-admin.webp';
import bluelE from '../assets/projetImg/bluel-edit.webp';

import nina from '../assets/projetImg/nina.webp';
import ninaB from '../assets/projetImg/nina-bfr.webp';
import ninaA from '../assets/projetImg/nina-after.webp';

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
    }
]