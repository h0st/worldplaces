import { Component, ViewChild } from '@angular/core';

import { Config, Platform, MenuController, Nav } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

import { IntroPage } from '../pages/intro/intro';
import { CompanyPage } from '../pages/company/company';
import { PlacesPage } from '../pages/places/places';
import { SettingsPage } from '../pages/settings/settings'
import { WelcomePage } from "../pages/welcome/welcome";
import { LoginPage } from "../pages/login/login"
import { SignupPage } from "../pages/signup/signup"
import { Settings } from '../providers';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage = WelcomePage; // IntroPage;
  //  
  pages: Array<{title: string, component: any}>;

  constructor(
    private translate: TranslateService,
    private config: Config,
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();
    this.initTranslate();

    // set our app's pages
    this.pages = [
      { title: 'Туристический сервис', component: IntroPage },
      { title: 'Список компаний', component: CompanyPage },
      { title: 'Список маршрутов', component: PlacesPage },
      { title: 'Настройки', component: SettingsPage },
      { title: 'Выход', component: WelcomePage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  initTranslate() {
    // Set the default language for translation strings, and the current language.
    this.translate.setDefaultLang('en');
    const browserLang = this.translate.getBrowserLang();

    if (browserLang) {
      if (browserLang === 'zh') {
        const browserCultureLang = this.translate.getBrowserCultureLang();

        if (browserCultureLang.match(/-CN|CHS|Hans/i)) {
          this.translate.use('zh-cmn-Hans');
        } else if (browserCultureLang.match(/-TW|CHT|Hant/i)) {
          this.translate.use('zh-cmn-Hant');
        }
      } else {
        this.translate.use(this.translate.getBrowserLang());
      }
    } else {
      this.translate.use('en'); // Set your language here
    }

    this.translate.get(['BACK_BUTTON_TEXT']).subscribe(values => {
      this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
