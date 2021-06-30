import { Injector, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of as observableOf, Subject } from 'rxjs';
import { ApiService } from './api.service';
import { CartService } from './cart.service';
import { SearchSevice } from './search.serice';
export class BaseComponent {
   public unsubscribe = new Subject();
   public _renderer:any;
   public _cart: CartService;
   public _api: ApiService;
   public _route: ActivatedRoute;
   public _search: SearchSevice;
   constructor(injector: Injector) {
      this._renderer = injector.get(Renderer2);
      this._api = injector.get(ApiService);
      this._route = injector.get(ActivatedRoute);
      this._cart = injector.get(CartService);
      this._search = injector.get(SearchSevice);
      }
   public loadScripts() {
         this.renderExternalScript('assets/js/main.js').onload = () => {
         }

         this.renderExternalScript('assets/plugins/jquery/dist/jquery.min.js').onload = () => {
         }
         this.renderExternalScript('assets/plugins/bootstrap/dist/js/bootstrap.min.js').onload = () => {
         }
         this.renderExternalScript('assets/plugins/jquery-bar-rating/dist/jquery.barrating.min.js').onload = () => {
         }
         this.renderExternalScript('assets/plugins/owl-carousel/owl.carousel.min.js').onload = () => {
         }
         this.renderExternalScript('assets/plugins/gmap3.min.js').onload = () => {
         }
         this.renderExternalScript('assets/plugins/imagesloaded.pkgd.js').onload = () => {
         }
         this.renderExternalScript('assets/plugins/isotope.pkgd.min.js').onload = () => {
         }
         this.renderExternalScript('assets/plugins/bootstrap-select/dist/js/bootstrap-select.min.js').onload = () => {
         }
         this.renderExternalScript('assets/plugins/jquery.matchHeight-min.js').onload = () => {
         }
         this.renderExternalScript('assets/plugins/slick/slick/slick.min.js').onload = () => {
         }
         this.renderExternalScript('assets/plugins/elevatezoom/jquery.elevatezoom.js').onload = () => {
         }
         this.renderExternalScript('assets/plugins/Magnific-Popup/dist/jquery.magnific-popup.min.js').onload = () => {
         }
         this.renderExternalScript('assets/plugins/jquery-ui/jquery-ui.min.js').onload = () => {
         }
         this.renderExternalScript('assets/plugins/revolution/js/jquery.themepunch.tools.min.js').onload = () => {
         }
         this.renderExternalScript('assets/plugins/revolution/js/jquery.themepunch.revolution.min.js').onload = () => {
         }
         this.renderExternalScript('assets/plugins/revolution/js/extensions/revolution.extension.video.min.js').onload = () => {
         }
         this.renderExternalScript('assets/plugins/revolution/js/extensions/revolution.extension.slideanims.min.js').onload = () => {
         }
         this.renderExternalScript('assets/plugins/revolution/js/extensions/revolution.extension.layeranimation.min.js').onload = () => {
         }
         this.renderExternalScript('assets/plugins/revolution/js/extensions/revolution.extension.navigation.min.js').onload = () => {
         }
         this.renderExternalScript('assets/plugins/revolution/js/extensions/revolution.extension.parallax.min.js').onload = () => {
         }
         this.renderExternalScript('assets/plugins/revolution/js/extensions/revolution.extension.actions.min.js').onload = () => {
         }
         this.renderExternalScript('assets/js/main.js').onload = () => {
         }
         this.renderExternalScript('assets/js/runtime.js').onload = () => {
         }

       }
       public renderExternalScript(src: string): HTMLScriptElement {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = src;
        script.async = true;
        script.defer = true;
        this._renderer.appendChild(document.body, script);
        return script;
      }
}
