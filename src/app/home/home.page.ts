import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AuthPageModule } from '../auth/auth.module'
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    public modalController: ModalController,
    public AuthPageModule: AuthPageModule
    ) { }

  ngOnInit() {
  }
  public async openModal(){
    const modal = await this.modalController.create({
      component: AuthPageModule,
      animated:true,
    });
    return await modal.present();
  }
}
