/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import {
  MatchResults,
  RouterHistory,
} from '@stencil/router';

declare global {
  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;
    componentOnReady(done: (ele?: this) => void): void;
  }
}



import {
  AppHome as AppHome
} from './components/app-home/app-home';

declare global {
  interface HTMLAppHomeElement extends AppHome, HTMLStencilElement {
  }
  var HTMLAppHomeElement: {
    prototype: HTMLAppHomeElement;
    new (): HTMLAppHomeElement;
  };
  interface HTMLElementTagNameMap {
    "app-home": HTMLAppHomeElement;
  }
  interface ElementTagNameMap {
    "app-home": HTMLAppHomeElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "app-home": JSXElements.AppHomeAttributes;
    }
  }
  namespace JSXElements {
    export interface AppHomeAttributes extends HTMLAttributes {
      history?: RouterHistory;
    }
  }
}


import {
  AppPage as AppPage
} from './components/app-page/app-page';

declare global {
  interface HTMLAppPageElement extends AppPage, HTMLStencilElement {
  }
  var HTMLAppPageElement: {
    prototype: HTMLAppPageElement;
    new (): HTMLAppPageElement;
  };
  interface HTMLElementTagNameMap {
    "app-page": HTMLAppPageElement;
  }
  interface ElementTagNameMap {
    "app-page": HTMLAppPageElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "app-page": JSXElements.AppPageAttributes;
    }
  }
  namespace JSXElements {
    export interface AppPageAttributes extends HTMLAttributes {
      history?: RouterHistory;
      match?: MatchResults;
    }
  }
}


import {
  DLSButton as DlsButton
} from './components/dls-button/dls-button';

declare global {
  interface HTMLDlsButtonElement extends DlsButton, HTMLStencilElement {
  }
  var HTMLDlsButtonElement: {
    prototype: HTMLDlsButtonElement;
    new (): HTMLDlsButtonElement;
  };
  interface HTMLElementTagNameMap {
    "dls-button": HTMLDlsButtonElement;
  }
  interface ElementTagNameMap {
    "dls-button": HTMLDlsButtonElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "dls-button": JSXElements.DlsButtonAttributes;
    }
  }
  namespace JSXElements {
    export interface DlsButtonAttributes extends HTMLAttributes {
      history?: RouterHistory;
      page?: any;
    }
  }
}


import {
  DLSShowlog as DlsShowlog
} from './components/dls-showlog/dls-showlog';

declare global {
  interface HTMLDlsShowlogElement extends DlsShowlog, HTMLStencilElement {
  }
  var HTMLDlsShowlogElement: {
    prototype: HTMLDlsShowlogElement;
    new (): HTMLDlsShowlogElement;
  };
  interface HTMLElementTagNameMap {
    "dls-showlog": HTMLDlsShowlogElement;
  }
  interface ElementTagNameMap {
    "dls-showlog": HTMLDlsShowlogElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "dls-showlog": JSXElements.DlsShowlogAttributes;
    }
  }
  namespace JSXElements {
    export interface DlsShowlogAttributes extends HTMLAttributes {
      history?: RouterHistory;
    }
  }
}


import {
  DLSSoundboard as DlsSoundboard
} from './components/dls-soundboard/dls-soundboard';

declare global {
  interface HTMLDlsSoundboardElement extends DlsSoundboard, HTMLStencilElement {
  }
  var HTMLDlsSoundboardElement: {
    prototype: HTMLDlsSoundboardElement;
    new (): HTMLDlsSoundboardElement;
  };
  interface HTMLElementTagNameMap {
    "dls-soundboard": HTMLDlsSoundboardElement;
  }
  interface ElementTagNameMap {
    "dls-soundboard": HTMLDlsSoundboardElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "dls-soundboard": JSXElements.DlsSoundboardAttributes;
    }
  }
  namespace JSXElements {
    export interface DlsSoundboardAttributes extends HTMLAttributes {
      history?: RouterHistory;
    }
  }
}


import {
  DLSTwitter as DlsTwitter
} from './components/dls-twitter/dls-twitter';

declare global {
  interface HTMLDlsTwitterElement extends DlsTwitter, HTMLStencilElement {
  }
  var HTMLDlsTwitterElement: {
    prototype: HTMLDlsTwitterElement;
    new (): HTMLDlsTwitterElement;
  };
  interface HTMLElementTagNameMap {
    "dls-twitter": HTMLDlsTwitterElement;
  }
  interface ElementTagNameMap {
    "dls-twitter": HTMLDlsTwitterElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "dls-twitter": JSXElements.DlsTwitterAttributes;
    }
  }
  namespace JSXElements {
    export interface DlsTwitterAttributes extends HTMLAttributes {
      history?: RouterHistory;
    }
  }
}


import {
  LazyImg as LazyImg
} from './components/lazy-img/lazy-img';

declare global {
  interface HTMLLazyImgElement extends LazyImg, HTMLStencilElement {
  }
  var HTMLLazyImgElement: {
    prototype: HTMLLazyImgElement;
    new (): HTMLLazyImgElement;
  };
  interface HTMLElementTagNameMap {
    "lazy-img": HTMLLazyImgElement;
  }
  interface ElementTagNameMap {
    "lazy-img": HTMLLazyImgElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "lazy-img": JSXElements.LazyImgAttributes;
    }
  }
  namespace JSXElements {
    export interface LazyImgAttributes extends HTMLAttributes {
      alt?: string;
      src?: string;
    }
  }
}


import {
  MyApp as MyApp
} from './components/my-app/my-app';

declare global {
  interface HTMLMyAppElement extends MyApp, HTMLStencilElement {
  }
  var HTMLMyAppElement: {
    prototype: HTMLMyAppElement;
    new (): HTMLMyAppElement;
  };
  interface HTMLElementTagNameMap {
    "my-app": HTMLMyAppElement;
  }
  interface ElementTagNameMap {
    "my-app": HTMLMyAppElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "my-app": JSXElements.MyAppAttributes;
    }
  }
  namespace JSXElements {
    export interface MyAppAttributes extends HTMLAttributes {
      
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }
