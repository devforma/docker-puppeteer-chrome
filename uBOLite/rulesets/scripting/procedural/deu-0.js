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

// ruleset: deu-0

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssProceduralImport() {

/******************************************************************************/

const argsList = [["{\"selector\":\"p\",\"tasks\":[[\"has\",{\"selector\":\"button\",\"tasks\":[[\"has-text\",\"Highspeed-Download\"]]}]]}"],["{\"selector\":\".avgrid_1_of_1.viewlet-bottom\",\"tasks\":[[\"has\",{\"selector\":\"h2\",\"tasks\":[[\"has-text\",\"Advertorials\"]]}]]}","{\"selector\":\".gridteaser.gridteaser-m\",\"tasks\":[[\"has\",{\"selector\":\"h4\",\"tasks\":[[\"has-text\",\"Sponsored Post\"]]}]]}"],["{\"selector\":\".col4\",\"tasks\":[[\"has\",{\"selector\":\"h3\",\"tasks\":[[\"has-text\",\"Unterstützt durch:\"]]}]]}"],["{\"selector\":\".teaser-m-default\",\"tasks\":[[\"has-text\",\"Native Advertising\"]]}","{\"selector\":\".teaser-m-default\",\"tasks\":[[\"has-text\",\"Publireportage\"]]}"],["{\"selector\":\".list_item\",\"tasks\":[[\"has\",{\"selector\":\".dachzeile\",\"tasks\":[[\"has-text\",\"Partnerzone\"]]}]]}"],["{\"selector\":\".custom\",\"tasks\":[[\"has\",{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}"],["{\"selector\":\".core-rail > div > div[id^=\\\"ember\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"Gesponsert\"]]}]]}"],["{\"selector\":\".teaser_container.teaser-htmlcode.relative.row\",\"tasks\":[[\"has\",{\"selector\":\".f1de-container-title\",\"tasks\":[[\"has-text\",\"Die besten Leasing-Deals\"]]}]]}"],["{\"selector\":\"article.message--post\",\"tasks\":[[\"has\",{\"selector\":\"span.username\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}"],["{\"selector\":\"div.wpb_text_column\",\"tasks\":[[\"has\",{\"selector\":\"h5\",\"tasks\":[[\"has-text\",\"Werbung\"]]}]]}","{\"selector\":\"div.wpb_text_column\",\"tasks\":[[\"has\",{\"selector\":\"h6\",\"tasks\":[[\"has-text\",\"Werbung\"]]}]]}"],["{\"selector\":\".eight.columns.alpha.content\",\"tasks\":[[\"has\",{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"Advertorial\"]]}]]}"],["{\"selector\":\".m-teaser\",\"tasks\":[[\"has\",{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"Sponsored\"]]}]]}"],["{\"selector\":\".m-article-teaser\",\"tasks\":[[\"has\",{\"selector\":\"div\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}"],["{\"selector\":\".code-block\",\"tasks\":[[\"has\",{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"/ANZEIGE|Anzeige|Werbung|WERBUNG/\"]]}]]}"],["{\"selector\":\".Subchapter div[id][class][style=\\\"display: flex;\\\"]\",\"tasks\":[[\"has-text\",\"ANZEIGE\"]]}","{\"selector\":\".mt-md > div\",\"tasks\":[[\"has-text\",\"Gesponserte Empfehlung\"]]}","{\"selector\":\"a.secondary\",\"tasks\":[[\"has\",{\"selector\":\".Badge__Content\",\"tasks\":[[\"has-text\",\"/anzeige|gesponsert/\"]]}]]}","{\"selector\":\"article > a\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}","{\"selector\":\"div[id][style*=\\\"min-height:\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"div\",\"tasks\":[[\"has-text\",\"/Anzeige|WERBUNG/\"]]}]]}","{\"selector\":\"section > div[id]\",\"tasks\":[[\"has-text\",\"Gesponserte Empfehlung\"]]}"],["{\"selector\":\"div.text-asset.text-width\",\"tasks\":[[\"has\",{\"selector\":\"p.text-width\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}"],["{\"selector\":\"article.gridArea__teaserM\",\"tasks\":[[\"has\",{\"selector\":\"div.teaserBlock__label\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}"],["{\"selector\":\".td_block_wrap\",\"tasks\":[[\"has\",{\"selector\":\"a\",\"tasks\":[[\"has-text\",\"Sponsored Post\"]]}]]}"],["{\"selector\":\".entry.hitlistitem.balken\",\"tasks\":[[\"has\",{\"selector\":\".flag2\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}"],["{\"selector\":\".node.teaser\",\"tasks\":[[\"has\",{\"selector\":\"a\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}"],["{\"selector\":\".b-module\",\"tasks\":[[\"has\",{\"selector\":\"h2\",\"tasks\":[[\"has-text\",\"Anzeigen\"]]}]]}","{\"selector\":\".mfe-lex\",\"tasks\":[[\"has\",{\"selector\":\"h2\",\"tasks\":[[\"has-text\",\"Anzeigen\"]]}]]}"],["{\"selector\":\".node--article\",\"tasks\":[[\"has\",{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}"],["{\"selector\":\"h4\",\"tasks\":[[\"has\",{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"ANZEIGEN\"]]}]]}"],["{\"selector\":\".content-item-medium\",\"tasks\":[[\"has\",{\"selector\":\"data\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}","{\"selector\":\".content-item-small\",\"tasks\":[[\"has\",{\"selector\":\"h3\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}"],["{\"selector\":\".alice-teaser-list-item\",\"tasks\":[[\"has\",{\"selector\":\".alice-teaser-meta-text\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}"],["{\"selector\":\".af-block-native\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}","{\"selector\":\".af-block-native\",\"tasks\":[[\"has-text\",\"Sponsored Post\"]]}"],["{\"selector\":\".px-4.md\\\\:px-6.py-3.h-full.bg-gray-50\",\"tasks\":[[\"has\",{\"selector\":\".mb-3.text-xs.leading-none.text-center\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}","{\"selector\":\"p\",\"tasks\":[[\"has-text\",\"=== Anzeige / Sponsorenhinweis ===\"],[\"spath\",\" + p + p\"]]}","{\"selector\":\"p\",\"tasks\":[[\"has-text\",\"=== Anzeige / Sponsorenhinweis ===\"],[\"spath\",\" + p\"]]}","{\"selector\":\"p\",\"tasks\":[[\"has-text\",\"=== Anzeige / Sponsorenhinweis ===\"]]}","{\"selector\":\"p\",\"tasks\":[[\"has-text\",\"=== Anzeige / Sponsorenhinweis ende===\"]]}"],["{\"selector\":\".swiper\",\"tasks\":[[\"has\",{\"selector\":\".headline\",\"tasks\":[[\"has-text\",\"Partner\"]]}]]}"],["{\"selector\":\".recommender-wrapper\",\"tasks\":[[\"has-text\",\"Gesponsert\"]]}"],["{\"selector\":\".small-12.column\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}"],["{\"selector\":\".appetizer\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}"],["{\"selector\":\".text-center\",\"tasks\":[[\"has-text\",\"- Werbung -\"]]}"],["{\"selector\":\".result\",\"tasks\":[[\"has\",{\"selector\":\".mark\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}","{\"selector\":\".result\",\"tasks\":[[\"has\",{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"Partnershop\"]]}]]}"],["{\"selector\":\".sp-module\",\"tasks\":[[\"has\",{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"Kleinanzeigen\"]]}]]}"],["{\"selector\":\".moduletable.text-center\",\"tasks\":[[\"has\",{\"selector\":\".bildunterschrift\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}"],["{\"selector\":\".card-body\",\"tasks\":[[\"has-text\",\"Sponsoren\"]]}"],["{\"selector\":\".outer-spacing--xxlarge-top\",\"tasks\":[[\"has-text\",\"Werbung von\"]]}"],["{\"selector\":\"div.box\",\"tasks\":[[\"has\",{\"selector\":\"span.banner-text + h4\",\"tasks\":[[\"has-text\",\"/Partner-Angebot|Angebote/\"]]}]]}"],["{\"selector\":\".services-item\",\"tasks\":[[\"has-text\",\"bei Amazon\"]]}"],["{\"selector\":\".content-view-containerbox\",\"tasks\":[[\"has-text\",\"SONDER-VERÖFFENTLICHUNG\"]]}"],["{\"selector\":\".fc_bloglist_item\",\"tasks\":[[\"has\",{\"selector\":\"a\",\"tasks\":[[\"has-text\",\"Advertorial\"]]}]]}","{\"selector\":\".mod_flexicontent_standard_wrapper\",\"tasks\":[[\"has\",{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"Advertorial\"]]}]]}"],["{\"selector\":\"article.message--post\",\"tasks\":[[\"has\",{\"selector\":\"a\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}"],["{\"selector\":\".td_module_wrap\",\"tasks\":[[\"has\",{\"selector\":\".td-post-author-name\",\"tasks\":[[\"has-text\",\"Werbung\"]]}]]}"],["{\"selector\":\"div[id^=\\\"T-\\\"][onfocus^=\\\"A('zid=\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"a\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}"],["{\"selector\":\"article.article-tile\",\"tasks\":[[\"has\",{\"selector\":\"span.article-tile__badge2\",\"tasks\":[[\"has-text\",\"ANZEIGE\"]]}]]}"],["{\"selector\":\".td_block_wrap\",\"tasks\":[[\"has\",{\"selector\":\"a\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}"],["{\"selector\":\".small-12.column.space\",\"tasks\":[[\"has\",{\"selector\":\"p\",\"tasks\":[[\"has-text\",\"--Anzeige--\"]]}]]}"],["{\"selector\":\".artikel-preview-content\",\"tasks\":[[\"has\",{\"selector\":\"p\",\"tasks\":[[\"has-text\",\"-ANZEIGE-\"]]}]]}"],["{\"selector\":\".footnote\",\"tasks\":[[\"has\",{\"selector\":\".headline-box\",\"tasks\":[[\"has-text\",\"Werbung\"]]}]]}","{\"selector\":\".module.c1.hidden-xs\",\"tasks\":[[\"has\",{\"selector\":\"span.issuerPromotionHint\",\"tasks\":[[\"has-text\",\"Werbung\"]]}]]}","{\"selector\":\".newsflash\",\"tasks\":[[\"has\",{\"selector\":\"span.suffix.wo-inline-block.pull-right\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}","{\"selector\":\".sliderItem.active\",\"tasks\":[[\"has\",{\"selector\":\"span.news-item:has(img[alt=\\\"Anzeige\\\"])\"}]]}","{\"selector\":\"tr\",\"tasks\":[[\"has\",{\"selector\":\"td.right:has(img[alt=\\\"Anzeige\\\"])\"}]]}"],["{\"selector\":\"div[id][data-qa]\",\"tasks\":[[\"has\",{\"selector\":\".c-buelent-linkbox__label\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}"],["{\"selector\":\"div.ExtraPostBlock\",\"tasks\":[[\"has\",{\"selector\":\"div.post_block\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}],[\"spath\",\":not(.with_rep)\"]]}"],["{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"/ANZ|EIGE/\"],[\"spath\",\" + button\"]]}","{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"/ANZ|EIGE/\"],[\"spath\",\" + div\"]]}"],["{\"selector\":\".panels-flexible-region\",\"tasks\":[[\"has\",{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"Gesponsert\"]]}]]}"],["{\"selector\":\"#ContainerFull\",\"tasks\":[[\"has\",{\"selector\":\"a\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}"],["{\"selector\":\".jeg_post.jeg_pl_md_2.pr.format-standard\",\"tasks\":[[\"has\",{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"PR-INFO\"]]}]]}"],["{\"selector\":\".post-overview\",\"tasks\":[[\"has\",{\"selector\":\"div\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}"],["{\"selector\":\".mleft-10\",\"tasks\":[[\"has-text\",\"Werbung\"],[\"spath\",\" + .box\"]]}","{\"selector\":\".mleft-10.small-font.light-grey\",\"tasks\":[[\"has-text\",\"Werbung\"],[\"spath\",\" + .box + .border-blue-2\"]]}"],["{\"selector\":\".text-right.text-white.col-6\",\"tasks\":[[\"has-text\",\"präsentiert von\"]]}"]];

const hostnamesMap = new Map([["ddl-warez.cc",0],["avguide.ch",1],["games.ch",2],["handelszeitung.ch",3],["pctipp.ch",4],["kajak-magazin.com",5],["linkedin.com",6],["motorsport-total.com",7],["android-hilfe.de",8],["apfeltalk.de",9],["bergsteiger.de",10],["berliner-kurier.de",11],["berliner-zeitung.de",12],["bitreporter.de",13],["chip.de",14],["computerbase.de",15],["computerbild.de",16],["cyclingmagazine.de",17],["dastelefonbuch.de",18],["dkamera.de",19],["ebay.de",20],["emotion.de",21],["fazemag.de",22],["gamestar.de",23],["giga.de",24],["gofeminin.de",25],["heise.de",26],["imsueden.de",27],["kaufland.de",28],["lausitz-tv.de",29],["marbacher-zeitung.de",30],["meissen-fernsehen.de",31],["metager.de",32],["mmnews.de",33],["nur-positive-nachrichten.de",34],["o-sport.de",35],["onvista.de",36],["pcwelt.de",37],["pollenflug.de",38],["report-d.de",39],["satvision.de",40],["skodacommunity.de",41],["smartphonemag.de",42],["t-online.de",43],["www-t--online-de.cdn.ampproject.org",43],["tag24.de",44],["tonight.de",45],["um-tv.de",46],["unicum.de",47],["wallstreet-online.de",48],["welt.de",49],["winfuture-forum.de",50],["zentrum-der-gesundheit.de",51],["barfuss.it",52],["stol.it",53],["swz.it",54],["carpediem.life",55],["finanzen.net",56],["sportdeutschland.tv",57]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map(undefined);

self.proceduralImports = self.proceduralImports || [];
self.proceduralImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/