"use strict";(self.webpackChunkpokenet=self.webpackChunkpokenet||[]).push([[308],{5308:(M,r,i)=>{i.r(r),i.d(r,{default:()=>L});var n=i(5879),_=i(6814),p=i(7635),g=i(8645),l=i(4664),m=i(9773),h=i(6399),u=i(6230),f=i(7279),d=i(9642);function E(t,a){if(1&t&&(n.ynx(0),n._UZ(1,"app-basic-pokemon-card",8),n.BQk()),2&t){const e=a.$implicit;n.xp6(1),n.Q6J("pokemon",e)}}function O(t,a){if(1&t&&(n.ynx(0),n.YNc(1,E,2,1,"ng-container",7),n.BQk()),2&t){const e=n.oxw().ngIf,o=n.oxw();n.xp6(1),n.Q6J("ngForOf",e.list)("ngForTrackBy",o.trackById)}}const x=function(){return[5,10,25]};function I(t,a){if(1&t){const e=n.EpF();n.TgZ(0,"mat-paginator",9),n.NdJ("page",function(s){n.CHM(e);const c=n.oxw(2);return n.KtG(c.paginationSearch(s))}),n.qZA()}if(2&t){const e=n.oxw().ngIf;n.Q6J("length",e.count)("pageSize",10)("pageSizeOptions",n.DdM(3,x))}}function k(t,a){if(1&t&&(n.ynx(0),n.TgZ(1,"div",0)(2,"div",3),n._uU(3,"Lista de Pok\xe9mon"),n.qZA(),n.TgZ(4,"div",4),n._uU(5),n.ALo(6,"i18nPlural"),n.qZA()(),n.TgZ(7,"div",5),n.YNc(8,O,2,2,"ng-container",1),n.qZA(),n.YNc(9,I,1,4,"mat-paginator",6),n.BQk()),2&t){const e=a.ngIf,o=n.oxw(),s=n.MAs(4);n.xp6(5),n.hij(" ",n.xi3(6,4,e.list.length,o.counterMapping),""),n.xp6(3),n.Q6J("ngIf",e.list.length)("ngIfElse",s),n.xp6(1),n.Q6J("ngIf",e.list.length>1)}}function v(t,a){1&t&&n._UZ(0,"app-common-no-information")}let L=(()=>{var t;class a{constructor(o){this.pokenetService=o,this.pokemonList$=this.pokenetService.pokemonList$,this.counterMapping={"=0":"Sin Pok\xe9mon","=1":"Un Pok\xe9mon",other:"# Pok\xe9mon encontrados"},this.searchUtilitySrv=(0,n.f3M)(h.E),this.unsubscribe$=new g.x}ngOnInit(){this.searchByIdOrName(),this.searchUtilitySrv.showInput=!0}ngOnDestroy(){this.unsubscribe$.next(),this.unsubscribe$.complete(),this.searchUtilitySrv.showInput=!1}searchByIdOrName(){this.searchUtilitySrv.searchText$.pipe((0,l.w)(o=>o?this.pokenetService.searchByIdOrName(o):this.pokenetService.pokemonList()),(0,m.R)(this.unsubscribe$)).subscribe()}paginationSearch({pageIndex:o,pageSize:s}){this.pokenetService.pokemonList(o*s,s).pipe((0,m.R)(this.unsubscribe$)).subscribe()}trackById(o,s){return s.id??o}}return(t=a).\u0275fac=function(o){return new(o||t)(n.Y36(d.k))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-list"]],standalone:!0,features:[n.jDz],decls:5,vars:4,consts:[[1,"w-full"],[4,"ngIf","ngIfElse"],["noPokemonInfo",""],[1,"text-xl"],[1,"text-secondary"],[1,"grid","grid-cols-1","sm:grid-cols-2","md:grid-cols-3","lg:grid-cols-4","gap-6","w-full","min-w-0","mt-10","mb-8","animate__animated","animate__fadeIn"],["class","shadow-2xl",3,"length","pageSize","pageSizeOptions","page",4,"ngIf"],[4,"ngFor","ngForOf","ngForTrackBy"],[3,"pokemon"],[1,"shadow-2xl",3,"length","pageSize","pageSizeOptions","page"]],template:function(o,s){if(1&o&&(n.TgZ(0,"div",0),n.YNc(1,k,10,7,"ng-container",1),n.ALo(2,"async"),n.YNc(3,v,1,0,"ng-template",null,2,n.W1O),n.qZA()),2&o){const c=n.MAs(4);n.xp6(1),n.Q6J("ngIf",n.lcZ(2,2,s.pokemonList$))("ngIfElse",c)}},dependencies:[_.ez,_.sg,_.O5,_.Ov,_.Gx,p.TU,p.NW,u.R,f.G],encapsulation:2,changeDetection:0}),a})()}}]);