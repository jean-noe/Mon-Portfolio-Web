import { Component, OnInit } from '@angular/core';
import { MonPortfolio } from './modeles/mon-portfolio.modul';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  monBlock1! : MonPortfolio;
  monBlock2! : MonPortfolio;
  monBlock3! : MonPortfolio;

  ngOnInit(): void {
    this.monBlock1 = new MonPortfolio(
      'Projet : Licence Professionnelle',
      `Création d'un carnet de suivie virtuel pour étudiant(s)(es) ingénieurs de L'EISINE`,
      new Date(),
      `Le but de ce projet est de transformer la gestion du suivi des apprentis ingénieur au sein de l’EiSINe par une plateforme
       collaborative.
      Actuellement le suivi se fait par une série de documents PDF éditables. L’ensemble de ces documents doit être
      transformé en une série de formulaires sur le web. L’objectif est d’automatiser et de sécuriser ce suivi.
      Mon binôme et moi devons faire une « analyse de l’existant » des différents sites de présentation de projets du
      même style afin de voir quelles sont les caractéristiques de contenus et de présentation communs à tous ces sites et
      afin d’en déduire les fonctionnalités que nos supports de communication devront ou pourront gérer.
      Chaque carnet virtuel est suivi par un étudiant, un tuteur entreprise, un tuteur pédagogique, un directeur des études et
      la scolarité. Il y aura donc quatre profils de personnes ayant accès à ce carnet.
      Chaque formulaire aura une date limite de réponse avant laquelle, l’ensemble des intervenants dans le suivi doit avoir
      rempli ses parties respectives. Un premier rappel sera fait avant la date de clôture, puis un dernier. Si la date est
      dépassée, le formulaire est bloqué.
      Chaque participant ne doit avoir accès qu’aux parties du formulaire qu’il a le droit de remplir mais peut voir les
      informations déjà remplies par d’autres intervenants, sans possibilité de modification. Chacun doit aussi avoir accès aux
      précédents formulaires remplis sans possibilité de modification.
      Le tableau de bord donne une vue complète de l’état des formulaires de tous les apprentis. Il donne le nombre de jour
      restant pour le remplir, qui l’a rempli ou pas. Le responsable de formation peut choisir de débloquer un formulaire non
      rempli dans les temps ou un formulaire déjà rempli, pour y faire des corrections.`,
      'https://media.istockphoto.com/id/1075599562/photo/programmer-working-with-program-code.jpg?b=1&s=612x612&w=0&k=20&c=-wTGItN4uscm4sy8X07O4YXhyl2xOBnc9DfzMyUKxJ0='
    );

    this.monBlock2 = new MonPortfolio(
      `Projet : Fin d'étude de BTS`,
      'Ruche connectée',
      new Date(),
      `La surveillance à distance des ruches est intéressante à plusieurs niveaux :
      L’apiculteur peut vérifier sans se déplacer de la bonne santé du 
      rucher et il est automatiquement averti par SMS en cas de mesures 
      anormales ou de déplacement de sa ruche (tentative de vol).
      L’apiculteur est averti en cas de miellée abondante.
      Les données sont archivées sur Internet et il peut ainsimieux analyser 
      le fonctionnement de sa ruche.
      Nous étions 4 étudiants sur ce projet. L'Etudiant 1 était en charge de : 
      Mise en œuvre des jauges de contraintes. 
      Installation sur une maquette. 
      Développement du module logiciel de pesée. 
      L'Etudiant 2 était en charge de : 
      Choisir la batterie, le panneau solaire et les modules d’adaptation. 
      Réaliser le câblage et le programme de contrôle du niveau de batterie.
      Le 3e Etudiant s'occupait de la gestion du module SIM pour la connexion à 
      un serveur Web ou l’envoi/réception de SMS.
      Quant à moi j'étais en charge de Choisir un Framework de développement du site Web une
      mise en place du serveur Web pour l’échange des paramètres et modélisation 
      de la base de données de sauvegarde.`,
     'assets/images/IMG_20210318_141041.jpg'
    );

    this.monBlock3 = new MonPortfolio(
      'Projet : BTS 1',
      'Girouette',
      new Date(),
      `Le système doit permettre de donner l’orientation du vent.
      On doit donner l’information sur un afficheur et l’envoyer sur un smartphone, via une connexion Bluetooth + application Android App Inventor.
      Eventuellement crée une page graphique sous Processing.`,
      'assets/images/IMG_20200206_163025.jpg'
    );
  }
  
}
