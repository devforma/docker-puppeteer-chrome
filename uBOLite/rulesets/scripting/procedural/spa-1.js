/*******************************************************************************

    uBlock Origin - a browser extension to block requests.
    Copyright (C) 2014-present Raymond Hill

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see {http://www.gnu.org/licenses/}.

    Home: https://github.com/gorhill/uBlock
*/

/* jshint esversion:11 */

'use strict';

// ruleset: spa-1

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssProceduralImport() {

/******************************************************************************/

const argsList = [["{\"selector\":\".lay-sidebar > .sidebar__aside > .com-banner\",\"tasks\":[[\"upward\",1]]}","{\"selector\":\".lay-sidebar > .sidebar__aside > .mod-banner:only-child\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"#story-body > div.relative > div.items-center\",\"tasks\":[[\"has\",{\"selector\":\" > button > span\",\"tasks\":[[\"has-text\",\"Share\"]]}]]}"],["{\"selector\":\".text-center > small\",\"tasks\":[[\"has-text\",\"/Publicidade|publicidade/\"]]}"],["{\"selector\":\".MuiGrid-root > div[class^=\\\"style__Container\\\"]\",\"tasks\":[[\"has\",{\"selector\":\" > span\",\"tasks\":[[\"has-text\",\"Publicidade\"]]}]]}","{\"selector\":\".MuiGrid-root > div[style] > div[class^=\\\"style__Container-sc-\\\"]\",\"tasks\":[[\"has\",{\"selector\":\" > span.vertical\",\"tasks\":[[\"has-text\",\"Publicidade\"]]}]]}"],["{\"selector\":\"#ipsLayout_contentArea ins.adsbygoogle\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"div[data-tb-region-item]\",\"tasks\":[[\"has\",{\"selector\":\" > div.news-box > a > span > strong > em\",\"tasks\":[[\"has-text\",\"conteúdo patrocinado\"]]}]]}"],["{\"selector\":\"iframe#doublebillboard-1\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\".ipsList_reset > .ipsWidget.ipsWidget_horizontal[data-blocktitle=\\\"Custom Blocks\\\"]\",\"tasks\":[[\"has\",{\"selector\":\" > h3.ipsType_reset\",\"tasks\":[[\"has-text\",\"Publicidade\"]]}]]}"],["{\"selector\":\".hd-ad--background\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\"div[class^=\\\"Block__Component-\\\"]\",\"tasks\":[[\"has\",{\"selector\":\" > label\",\"tasks\":[[\"has-text\",\"/^Publicidade$/\"]]}]]}"],["{\"selector\":\".slick-track > .slick-slide > a[href*=\\\"?utm_campaign=homepedia:banner\\\"]\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"section > div > div > div[class] > div[class][id] > div[id^=\\\"div-gpt-\\\"]\",\"tasks\":[[\"upward\",2]]}"],["{\"selector\":\".sidebar > .sidebar-item[style] > iframe[src^=\\\"https://assets.naointendo.com.br/banners/\\\"]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".StyledDiv > .Title\",\"tasks\":[[\"has-text\",\"publicidade\"]]}"],["{\"selector\":\".p-body-inner > div.block\",\"tasks\":[[\"has\",{\"selector\":\" > div > h3\",\"tasks\":[[\"has-text\",\"/Patrocínio|Publicidade/\"]]}]]}","{\"selector\":\".p-sidebar-inner > div.block\",\"tasks\":[[\"has\",{\"selector\":\" > div > h3\",\"tasks\":[[\"has-text\",\"/Patrocínio|Publicidade/\"]]}]]}"],["{\"selector\":\"div[class^=\\\"aspect-ratio\\\"] > div[id^=\\\"div-gpt-\\\"]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".container > div[class]\",\"tasks\":[[\"has\",{\"selector\":\" > div.separator\",\"tasks\":[[\"has-text\",\"Publicidade\"]]}]]}"],["{\"selector\":\".automaticas-canais > .justify-content-center > .banner_wrapper\",\"tasks\":[[\"upward\",1]]}","{\"selector\":\".automaticas-canais > .leia_tambem_principal > .native_wrapper\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"div[class*=\\\" \\\"] > div[class] > div[style^=\\\"height:\\\"] + div[class]\",\"tasks\":[[\"has-text\",\"/^Anuncio$/\"],[\"upward\",2]]}"],["{\"selector\":\".sidebar > #fixed_bar > .sidebar_item\",\"tasks\":[[\"has\",{\"selector\":\" > h3\",\"tasks\":[[\"has-text\",\"/^Publicidad$/\"]]}]]}"],["{\"selector\":\"#sidebarGeral > .sidebar\",\"tasks\":[[\"has\",{\"selector\":\" > #tituloSidebar > center\",\"tasks\":[[\"has-text\",\"Patrocinadores\"]]}]]}"],["{\"selector\":\".Conteudo > .Lateral > .Titulo\",\"tasks\":[[\"has-text\",\"Publicidade\"]]}"],["{\"selector\":\"#root main[class] > div[class] > section[class] + aside[class]\",\"tasks\":[[\"has\",{\"selector\":\" > div[class] > p[class]\",\"tasks\":[[\"has-text\",\"PUBLICIDAD\"]]}]]}"],["{\"selector\":\".columns.ends > div.row\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}","{\"selector\":\"fieldset\",\"tasks\":[[\"has\",{\"selector\":\" > legend\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}]]}"],["{\"selector\":\".adsbygoogle\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".sidebar > div.widget\",\"tasks\":[[\"has\",{\"selector\":\" > div.section-heading > span\",\"tasks\":[[\"has-text\",\"Publicidade\"]]}]]}"],["{\"selector\":\".sidebar > .encabezados\",\"tasks\":[[\"has\",{\"selector\":\" > h2\",\"tasks\":[[\"has-text\",\"NOTICIAS SUGERIDAS\"]]}]]}"],["{\"selector\":\"main > div.MuiBox-root > div.MuiBox-root\",\"tasks\":[[\"has\",{\"selector\":\" > div[align=\\\"center\\\"] > div.MuiBox-root\",\"tasks\":[[\"has-text\",\"Publicidade\"]]}]]}"],["{\"selector\":\"#content > div.type-post > div[id^=\\\"_\\\"]\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\".sm-row > div.row > center > ins.adsbygoogle\",\"tasks\":[[\"upward\",\"div.row\"]]}"],["{\"selector\":\"div.encabezados\",\"tasks\":[[\"has\",{\"selector\":\" > h2\",\"tasks\":[[\"has-text\",\"PUBLICIDAD\"]]}]]}"],["{\"selector\":\"#contenido div[style^=\\\"height:250px;\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"grAnuncio.DisplayAds\"],[\"spath\",\" + div\"]]}]]}","{\"selector\":\"#zonanoticias > div[style]\",\"tasks\":[[\"has\",{\"selector\":\" > script\",\"tasks\":[[\"has-text\",\"grVista\"]]}]]}"],["{\"selector\":\".module-surround > div\",\"tasks\":[[\"has-text\",\"Publicidade SA\"]]}"],["{\"selector\":\".TPlayerNv > li.Button\",\"tasks\":[[\"has\",{\"selector\":\" > span\",\"tasks\":[[\"has-text\",\"Publicidad\"]]}]]}"],["{\"selector\":\"td[style=\\\"padding-right:15px;\\\"] > font\",\"tasks\":[[\"has-text\",\"/^Espacio publicitario$/\"]]}"],["{\"selector\":\".ad\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\".widget-area-right > aside.widget_custom_html\",\"tasks\":[[\"has\",{\"selector\":\" > div.textwidget > center\",\"tasks\":[[\"has-text\",\"Publicidad\"]]}]]}"],["{\"selector\":\".entry-content > p\",\"tasks\":[[\"has\",{\"selector\":\" > span\",\"tasks\":[[\"has-text\",\"ANUNCIOS\"]]}]]}","{\"selector\":\"h4.heading\",\"tasks\":[[\"has-text\",\"QUIZÁS TAMBIÉN\"]]}"],["{\"selector\":\".player_nav > ul[class] > li\",\"tasks\":[[\"has\",{\"selector\":\" > a[href]\",\"tasks\":[[\"has-text\",\"Ads\"]]}]]}"],["{\"selector\":\"ul[class^=\\\"Mb(0)\\\"] > li.js-stream-content\",\"tasks\":[[\"has\",{\"selector\":\" > div > a[rel=\\\"nofollow noopener noreferrer\\\"] + div\",\"tasks\":[[\"has-text\",\"Patrocinado\"]]}]]}"],["{\"selector\":\".well.z-body > .ad-title\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"p[align=\\\"center\\\"] > font\",\"tasks\":[[\"has-text\",\"/^advertising/\"]]}"],["{\"selector\":\".sidebar > .encabezados > h3\",\"tasks\":[[\"has-text\",\"Publicidad\"]]}"],["{\"selector\":\"#secondary section.widget_text\",\"tasks\":[[\"has\",{\"selector\":\" > h3.widget-title\",\"tasks\":[[\"has-text\",\"Publicidad\"]]}]]}"],["{\"selector\":\".container > h2.section__header\",\"tasks\":[[\"has\",{\"selector\":\" > span\",\"tasks\":[[\"has-text\",\"/^ANUNCIOS$/\"]]}]]}"],["{\"selector\":\".dmPhotoGalleryResp .photogallery-column > .photoGalleryThumbs a[href=\\\"https://calentadores.shoptena.com/\\\"]\",\"tasks\":[[\"upward\",\".photogallery-column\"]]}"],["{\"selector\":\"#ipsLayout_mainArea > .ipsBox\",\"tasks\":[[\"has\",{\"selector\":\" > h2 > a\",\"tasks\":[[\"has-text\",\"LFSPro Ads\"]]}]]}","{\"selector\":\"#ipsLayout_mainArea > section\",\"tasks\":[[\"has\",{\"selector\":\" > ol > li > h2 > a\",\"tasks\":[[\"has-text\",\"LFSPro Ads\"]]}]]}","{\"selector\":\".ipsList_reset > li.ipsWidget\",\"tasks\":[[\"has\",{\"selector\":\" > h3\",\"tasks\":[[\"has-text\",\"LFSPro Ads\"]]}]]}"],["{\"selector\":\".listagem-content > .table > tbody > tr > .table-responsive-fullwidth > .th-wrap > .is-vcentered > span.is-warning\",\"tasks\":[[\"has-text\",\"Anúncio\"],[\"upward\",4]]}"],["{\"selector\":\".content > div[id]\",\"tasks\":[[\"has\",{\"selector\":\" > center > b\",\"tasks\":[[\"has-text\",\"DESATIVE O ADBLOCK\"]]}]]}"],["{\"selector\":\".main-posts > .general-content > div[id^=\\\"container-ac\\\"]:only-child\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"div.encabezados\",\"tasks\":[[\"has\",{\"selector\":\" > h3\",\"tasks\":[[\"has-text\",\"Publicidad\"]]}]]}"],["{\"selector\":\"div[id^=\\\"odigi\\\"] > div.odigi-adlabel\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".web-log-post-grid > .post > .post-wrapper > .post-content-wrapper > .entry-content > script:first-child\",\"tasks\":[[\"has-text\",\"ad_idzone\"],[\"upward\",4]]}","{\"selector\":\"aside#secondary > .widget > h2.widget-title\",\"tasks\":[[\"has-text\",\"Publicidad\"],[\"upward\",1]]}"],["{\"selector\":\".col-md-4 > h2\",\"tasks\":[[\"has-text\",\"/^Publicidade$/\"]]}"],["{\"selector\":\"#Lateral > .Titulo\",\"tasks\":[[\"has-text\",\"Publicidade\"]]}"],["{\"selector\":\".uix_sidebarInner div.widget_text\",\"tasks\":[[\"has\",{\"selector\":\" > div.widget_text h3\",\"tasks\":[[\"has-text\",\"Publicidade\"]]}]]}"],["{\"selector\":\".sidebar-content-inner > div.widget\",\"tasks\":[[\"has\",{\"selector\":\" > div.widget-item-wrap > h2.widget-title > span.title-wrap\",\"tasks\":[[\"has-text\",\"Publicidad\"]]}]]}"],["{\"selector\":\"a[href^=\\\"https://www.pornolandia.xxx/webmaster/ref/\\\"]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".container > div[style$=\\\"z-index:9999999999999999999!important;\\\"]\",\"tasks\":[[\"upward\",1]]}"]];

const hostnamesMap = new Map([["lanacion.com.ar",0],["thecourier.com.au",1],["thesenior.com.au",1],["adrenaline.com.br",2],["climaaovivo.com.br",3],["clubedohardware.com.br",4],["correiobraziliense.com.br",5],["docero.com.br",6],["doceru.com",6],["gamersboard.com.br",7],["hardware.com.br",8],["hojeemdia.com.br",9],["homepedia.com.br",10],["minhaconexao.com.br",11],["naointendo.com.br",12],["nsctotal.com.br",13],["forum.politz.com.br",14],["shoptime.com.br",15],["submarino.com.br",15],["sub100.com.br",16],["noticiasdatv.uol.com.br",17],["paisdelosjuegos.com.co",18],["paisdelosjuegos.com.pe",18],["andro4all.com",19],["animesonlinep.com",20],["aovivonatv.com",21],["atresplayer.com",22],["bibliatodo.com",23],["definicionabc.com",24],["economiasc.com",25],["extremotvplay.com",26],["rojadirectaonlinetv.com",26],["app.kultivi.com",27],["muchohentai.com",28],["mundodonghua.com",29],["pirlotvonlinehd.com",30],["reforma.com",31],["sakuraanimes.com",32],["seriesgato.com",33],["subdivx.com",34],["tuasaude.com",35],["tv-porinternet.com",36],["universoformulas.com",37],["verepeliculas.com",38],["yahoo.com",39],["anitube.cx",40],["primedeportes.es",41],["extremotv.info",42],["deportealdia.live",43],["animetw.net",44],["globaltvapp.net",45],["forum.lfspro.net",46],["meupc.net",47],["sejasaudavel.net",48],["verdragonball.online",49],["rojadirectatv.pro",50],["odigital.sapo.pt",51],["palaygo.site",52],["unionleitor.top",53],["tudotv.tv",54],["fcporto.ws",55],["hentaiporno.xxx",56],["pornolandia.xxx",57],["animesonehd.xyz",58]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map(undefined);

self.proceduralImports = self.proceduralImports || [];
self.proceduralImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/