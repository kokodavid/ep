
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
// import { Keyboard } from '@ionic-native/keyboard/ngx';
// import { Uid } from '@ionic-native/uid/ngx';
// import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
// import { IonicImageLoader } from 'ionic-image-loader';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SpinnerDialog } from '@ionic-native/spinner-dialog/ngx';
import { AppVersion } from '@ionic-native/app-version/ngx';
// import { IonicStorageModule } from '@ionic/storage';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { Network } from '@ionic-native/network/ngx';
import { Device } from '@ionic-native/device/ngx';
import { Idle, IdleExpiry } from '@ng-idle/core'
import { from } from 'rxjs';
import { StreamingMedia } from '@ionic-native/streaming-media/ngx';
import {TooltipsModule} from 'ionic-tooltips';
import { HTTP, HTTPResponse } from '@ionic-native/http/ngx';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';
import { Screenshot } from '@ionic-native/screenshot/ngx';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    IonicModule.forRoot(),
    // IonicStorageModule.forRoot(),
    // IonicImageLoader.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    TooltipsModule.forRoot(),
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    NativeStorage,
    OneSignal,
    SpinnerDialog,
    UniqueDeviceID,
    Network,
    FileOpener,
    InAppBrowser,
    FileTransfer,
    AppVersion,
    FileTransferObject,
    File,
    Device,
    Idle,
    StreamingMedia,
    { provide: IdleExpiry, useClass: AppModule },
    InAppBrowser,
    HTTP,
    DocumentViewer,
    Screenshot
    // Keyboard,
    // Uid,
    // AndroidPermissions,
  ],
  bootstrap: [AppComponent]
})
export class AppModule extends IdleExpiry {
  public lastDate: Date;
  public mockNow: Date;

  last(value?: Date): Date {
    if (value !== void 0) {
      this.lastDate = value;
    }

    return this.lastDate;
  }

  now(): Date {
    return this.mockNow || new Date();
  }
}
