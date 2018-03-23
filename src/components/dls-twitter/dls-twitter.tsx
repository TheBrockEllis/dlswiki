import { Component, Prop } from '@stencil/core';
import { RouterHistory } from '@stencil/router';

@Component({
  tag: 'dls-twitter',
  styleUrl: 'dls-twitter.scss'
})
export class DLSTwitter {

  @Prop() history: RouterHistory;

  componentDidLoad(){
  }

  goBack(){
    this.history.goBack();
  }

  render() {
    return (
      <ion-page>
        <ion-header>
          <ion-toolbar color='secondary'>
            <ion-buttons>
              <ion-button icon-only onClick={this.goBack.bind(this)}>
                Back
              </ion-button>
            </ion-buttons>

            <ion-title>@LebatardShow</ion-title>
          </ion-toolbar>
        </ion-header>

        <ion-content>
          <h1>Guerillmo, put it on the polls!</h1>
          <p>This page will eventually be where we embed all of the latest twitter polls and results. End goal would be to get push notifications sent to your phone every time a new poll is added to @LebatardShow</p>
        </ion-content>
      </ion-page>
    );
  }

}
