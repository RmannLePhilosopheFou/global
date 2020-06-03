import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrestationsService {



  public  services = [
    {
      id: 1,
      img: 'assets/images/app_landing1/icons/1-1.png',
      title: 'Représentation commerciale',
      description: 'A remplir apres.'
    },
    {
      id: 2,
      img: 'assets/images/app_landing1/icons/1-2.png',
      title: 'Placement de fonds',
      description: 'A remplir apres.'
    },
    { id: 3,
      img: 'assets/images/app_landing1/icons/1-3.png',
      title: 'Transfert d\'argent rapide',
      description: 'A remplir apres.'
    },
    {
      id: 4,
      img: 'assets/images/app_landing1/icons/1-3.png',
      title: 'Achat,vente,échange,prise en bails',
      description: 'A remplir apres.'
    },
    {
      id: 5,
      img: 'assets/images/app_landing1/icons/car.png',
      title: 'Achat et vente de véhicule d\'occasion',
      description: 'A remplir apres.'
    },
    {
      id: 6,
      img: 'assets/images/app_landing1/icons/1-3.png',
      title: 'Entretien de véhicules (lavage et graissage)',
      description: 'A remplir apres.'
    },
    {
      id: 7,
      img: 'assets/images/app_landing1/icons/1-3.png',
      title: 'Tous travaux de bâtiments et travaux publics',
      description: 'A remplir apres.'
    },
    {
      id: 8,
      img: 'assets/images/app_landing1/icons/1-3.png',
      title: 'Création, acquisition et exploitations de tous services de transport et espionnage de tous nature',
      description: 'A remplir apres.'
    },
    {
      id: 9,
      img: 'assets/images/app_landing1/icons/1-3.png',
      title: 'Service de courtage',
      description: 'A remplir apres.'
    },
    {
      id: 10,
      img: 'assets/images/app_landing1/icons/1-3.png',
      title: 'Organisation et exploitations des magasins généraux (MAD)',
      description: 'A remplir apres.'
    },
    {
      id: 11,
      img: 'assets/images/app_landing1/icons/1-3.png',
      title: 'Commerce général: IMPORT-EXPORT',
      description: 'A remplir apres.'
    },

  ];
  constructor() { }
}
