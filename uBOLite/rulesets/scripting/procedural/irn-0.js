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

// ruleset: irn-0

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssProceduralImport() {

/******************************************************************************/

const argsList = [["{\"selector\":\"a#btnDownload\",\"tasks\":[[\"others\",\"\"]]}","{\"selector\":\"section#left-side > aside > h4\",\"tasks\":[[\"has-text\",\"تبلیغات\"],[\"upward\",\"aside\"]]}"],["{\"selector\":\".block > header > h2\",\"tasks\":[[\"has-text\",\"/وبگردی|نیازمندی|رپرتاژ/\"],[\"upward\",\".block\"]]}","{\"selector\":\".carousel-inner > .item > .row > .col-md-4 > article:has(a[href*=\\\"aftabir.com/reportages\\\"])\",\"tasks\":[[\"upward\",\".col-md-4\"]]}"],["{\"selector\":\".yn-bnr\",\"tasks\":[[\"upward\",\".custom\"]]}"],["{\"selector\":\".sidebar.col-4 > ul > li > h4\",\"tasks\":[[\"has-text\",\"رپورتاژ آگهی\"],[\"upward\",\"li\"]]}"],["{\"selector\":\".post-sticky\",\"tasks\":[[\"upward\",\".row\"]]}"],["{\"selector\":\"#yektanet-pos-2\",\"tasks\":[[\"upward\",\".boxsh\"]]}","{\"selector\":\".menu_left-side-ads\",\"tasks\":[[\"upward\",\".boxsh\"]]}","{\"selector\":\".menu_right-side-ads\",\"tasks\":[[\"upward\",\".boxsh\"]]}"],["{\"selector\":\".widget-asan > span > a\",\"tasks\":[[\"upward\",\".widget-asan\"]]}"],["{\"selector\":\".col-sm-12 span\",\"tasks\":[[\"has-text\",\"وبگردی\"],[\"upward\",\".col-sm-12\"]]}"],["{\"selector\":\"#yt_spotlight3 .klatest-items-div > .modtitle\",\"tasks\":[[\"has-text\",\"تبلیغات متنی\"],[\"upward\",\".klatest-items-div\"]]}"],["{\"selector\":\".mpbb_ads img\",\"tasks\":[[\"upward\",\".mp_box_x1\"]]}"],["{\"selector\":\".benawa_contentarea .benawa_treeads\",\"tasks\":[[\"upward\",\".benawa_contentarea\"]]}"],["{\"selector\":\"#macy-container > article > .articlebox > a[href*=\\\"/blogsazan.com/mag/reportage\\\"]\",\"tasks\":[[\"upward\",\"article\"]]}","{\"selector\":\".blog_center_bar > .main_title\",\"tasks\":[[\"has-text\",\"مطالب پیشنهادی\"]]}","{\"selector\":\".blog_right_bar > .main_title\",\"tasks\":[[\"has-text\",\"آخرین مطالب مجله\"],[\"spath\",\" + .main_content_free\"]]}","{\"selector\":\".blog_right_bar > .main_title\",\"tasks\":[[\"has-text\",\"آخرین مطالب مجله\"]]}"],["{\"selector\":\".main_content[style=\\\"border-radius:10px;\\\"] > div[style=\\\"padding: 10px; text-align:center; font-size:13px;\\\"] > a\",\"tasks\":[[\"upward\",\".main_content\"]]}"],["{\"selector\":\".widget\",\"tasks\":[[\"has\",{\"selector\":\".widgettitle\",\"tasks\":[[\"has-text\",\"/پیشنهاد|مفید/\"]]}]]}"],["{\"selector\":\".linkbox\",\"tasks\":[[\"upward\",4]]}"],["{\"selector\":\".bd-sidebar > div > .widget > .block-title\",\"tasks\":[[\"has-text\",\"تبلیغات\"],[\"upward\",\".widget\"]]}"],["{\"selector\":\"#primary\",\"tasks\":[[\"not\",{\"selector\":\" > .categoriesPageHead\",\"tasks\":[[\"has-text\",\"رپورتاژ آگهی\"]]}],[\"spath\",\".rowList > li:has(a[href*=\\\"/promoted/\\\"])\"]]}"],["{\"selector\":\"[class*=\\\"VerticalProductCard\\\"]:has(.mr-auto.text-caption.ai-center)\",\"tasks\":[[\"upward\",\"[class^=\\\"product-list\\\"]\"]]}"],["{\"selector\":\".shbanner_cover\",\"tasks\":[[\"upward\",\"div[class^=\\\"col\\\"]\"]]}"],["{\"selector\":\".general-box\",\"tasks\":[[\"has\",{\"selector\":\".box-header\",\"tasks\":[[\"has-text\",\"وب گردی\"]]}]]}"],["{\"selector\":\".latestContents\",\"tasks\":[[\"has\",{\"selector\":\".bTitle\",\"tasks\":[[\"has-text\",\"وب گردی\"]]}]]}"],["{\"selector\":\"#carousel\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\".footer-content .tag-cloud\",\"tasks\":[[\"upward\",\".foot-col\"]]}"],["{\"selector\":\".p-single.blog-post\",\"action\":[\"style\",\"width: 100% !important;\"],\"tasks\":[[\"upward\",1]]}","{\"selector\":\".sidebar > *\",\"tasks\":[[\"has\",{\"selector\":\".widget-title\",\"tasks\":[[\"has-text\",\"تبلیغات\"]]}]]}"],["{\"selector\":\"\",\"tasks\":[[\"not\",{\"selector\":\"\",\"tasks\":[[\"matches-path\",\"/author/post/\"]]}],[\"spath\",\" #posts-body > .posts > .box > .d-block > .border-bottom .row .image > span.text-white\"],[\"has-text\",\"رپرتاژ آگهی\"],[\"upward\",\".d-block\"]]}"],["{\"selector\":\"table > tbody > tr > td > .dagh > strong\",\"tasks\":[[\"has-text\",\"اخبار تبلیغاتی\"]]}"],["{\"selector\":\"div[id$=\\\"col-up\\\"]\",\"tasks\":[[\"has-text\",\"تبلیغات\"],[\"spath\",\" + div[id$=\\\"col-body\\\"]\"]]}","{\"selector\":\"div[id$=\\\"col-up\\\"]\",\"tasks\":[[\"has-text\",\"تبلیغات\"]]}"],["{\"selector\":\"\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"not\",{\"selector\":\"\",\"tasks\":[[\"matches-path\",\"/reportage\"]]}],[\"spath\",\" .main-term-4998\"]]}"],["{\"selector\":\"\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"not\",{\"selector\":\"\",\"tasks\":[[\"matches-path\",\"/reportage\"]]}],[\"spath\",\" .main-term-4662\"]]}"],["{\"selector\":\".m-ads\",\"tasks\":[[\"upward\",\".sidebar-left-item.content\"]]}"],["{\"selector\":\"style\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has-text\",\"@media print\"]]}","{\"selector\":\"style\",\"tasks\":[[\"has-text\",\"@media print\"]]}"],["{\"selector\":\".rbox .rbox-h\",\"tasks\":[[\"has-text\",\"تبلیغات\"],[\"upward\",\".rbox\"]]}"],["{\"selector\":\".bahavadaran-news > .header-section\",\"tasks\":[[\"has-text\",\"دیگر رسانه ها\"]]}"],["{\"selector\":\"[onclick^=\\\"sendBannerDataLayer\\\"]\",\"action\":[\"remove-attr\",\"onclick\"]}","{\"selector\":\"[onclick^=\\\"sendCardDataLayer\\\"]\",\"action\":[\"remove-attr\",\"onclick\"]}","{\"selector\":\"[onclick^=\\\"sendDataLayer\\\"]\",\"action\":[\"remove-attr\",\"onclick\"]}","{\"selector\":\"[onclick^=\\\"sendViewMoreDataLayer\\\"]\",\"action\":[\"remove-attr\",\"onclick\"]}"],["{\"selector\":\"section.other_news > header\",\"tasks\":[[\"has-text\",\"رپرتاژ\"],[\"spath\",\" + div\"]]}","{\"selector\":\"section.other_news > header\",\"tasks\":[[\"has-text\",\"رپرتاژ\"]]}"],["{\"selector\":\".footer_column > div > ul > li > a\",\"tasks\":[[\"has-text\",\"طراحی سایت\"]]}","{\"selector\":\".lnk > center > a > img[alt=\\\"ADS\\\"]\",\"tasks\":[[\"upward\",\"center\"]]}"],["{\"selector\":\"aside\",\"tasks\":[[\"has\",{\"selector\":\"aside > div > div > span\",\"tasks\":[[\"has-text\",\"تبلیغ\"]]}]]}"],["{\"selector\":\".sidebar_item > .sidebar_item__inner > .sidebar_item__title\",\"tasks\":[[\"has-text\",\"تبلیغات متنی\"],[\"upward\",\".sidebar_item\"]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"window.open\"]]}"],["{\"selector\":\"aside#left > .box > .title\",\"tasks\":[[\"has-text\",\"تبلیغات\"],[\"upward\",\".box\"]]}","{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"pa_vc_url\"]]}"],["{\"selector\":\".widget\",\"tasks\":[[\"has\",{\"selector\":\".h-text\",\"tasks\":[[\"has-text\",\"لینک های پیشنهادی\"]]}]]}"],["{\"selector\":\".right-sidebar > aside > .tit-side\",\"tasks\":[[\"has-text\",\"لینک های مفید\"],[\"upward\",\"aside\"]]}"],["{\"selector\":\".dinu\",\"tasks\":[[\"upward\",\".widget\"]]}"],["{\"selector\":\".box\",\"tasks\":[[\"has\",{\"selector\":\"header\",\"tasks\":[[\"has-text\",\"مفید\"]]}]]}"],["{\"selector\":\".widget > h3\",\"tasks\":[[\"has-text\",\"مطالب مفید\"],[\"upward\",\".widget\"]]}"],["{\"selector\":\".GSBlock > div > .title > h3\",\"tasks\":[[\"has-text\",\"لینک های ویژه\"],[\"upward\",\".GSBlock\"]]}","{\"selector\":\".GSLiveTab > .tab_container1 > #tab3 > h2\",\"tasks\":[[\"has-text\",\"مقالات\"],[\"upward\",\".GSLiveTab\"]]}","{\"selector\":\".OpenTable > div > center > a[rel=\\\"nofollow\\\"] > .img-responsive\",\"tasks\":[[\"upward\",\".OpenTable\"]]}","{\"selector\":\".OpenTable > h2\",\"tasks\":[[\"has-text\",\"مقالات\"],[\"upward\",\".OpenTable\"]]}"],["{\"selector\":\"\",\"tasks\":[[\"not\",{\"selector\":\"\",\"tasks\":[[\"matches-path\",\"/fa/news/pr\"]]}],[\"spath\",\" .items-row\"],[\"has\",{\"selector\":\".sazitem_imgcat\",\"tasks\":[[\"has-text\",\"رپورتاژ آگهی\"]]}]]}"],["{\"selector\":\".widget\",\"tasks\":[[\"has\",{\"selector\":\".widget_title\",\"tasks\":[[\"has-text\",\"پیوند\"]]}]]}"],["{\"selector\":\"input.filter\",\"action\":[\"remove-attr\",\"disabled\"]}","{\"selector\":\"input.filter\",\"action\":[\"remove-class\",\"filter\"]}"],["{\"selector\":\"style\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has-text\",\"user-select\"]]}"],["{\"selector\":\"style\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has-text\",\"wccp\"]]}"],["{\"selector\":\"div.col-md-3 > .box.style-1 > .box-header\",\"tasks\":[[\"has-text\",\"/تبلیغات رپورتاژ|لوگو اسپانسر/\"],[\"upward\",\".box\"]]}"],["{\"selector\":\".column-side > .block > .block-title\",\"tasks\":[[\"has-text\",\"وبگردی\"],[\"upward\",\".block\"]]}"],["{\"selector\":\"\",\"tasks\":[[\"not\",{\"selector\":\"\",\"tasks\":[[\"matches-path\",\"/category/website/reportage/\"]]}],[\"spath\",\" .box\"],[\"has-text\",\"رپورتاژ آگهی\"]]}"],["{\"selector\":\".sidebar > .d-flex > aside > section > figure:has(a[href*=\\\"ad.technews-iran.com/\\\"])\",\"tasks\":[[\"upward\",\".sidebar\"]]}"],["{\"selector\":\"\",\"tasks\":[[\"not\",{\"selector\":\"\",\"tasks\":[[\"matches-path\",\"/tag/رپورتاژ-آگهی/\"]]}],[\"spath\",\" .posts-list > article.tag-8164 > .clearfix > a[class=\\\"title\\\"][href$=\\\"reportage/\\\"]\"],[\"upward\",\"article\"]]}","{\"selector\":\".widget > p > #KajAds_Panel\",\"tasks\":[[\"upward\",\".widget\"]]}"],["{\"selector\":\"input[type=\\\"hidden\\\"]:is(input[name=\\\"usr_login\\\"],input[name=\\\"referer\\\"],input#usr_resolution,input#usr_os,input#usr_browser)\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\"aside > .title\",\"tasks\":[[\"has-text\",\"تبلیغات\"],[\"upward\",\"aside\"]]}"],["{\"selector\":\".LeftSide > .TableOfContent > div[style=\\\"text-align:center;\\\"]\",\"tasks\":[[\"has-text\",\"صفحات مرتبط\"],[\"upward\",\".TableOfContent\"]]}"],["{\"selector\":\".part-content-wordpres > .title-section\",\"tasks\":[[\"has-text\",\"پست تبلیغاتی\"],[\"upward\",\".part-content-wordpres\"]]}","{\"selector\":\".small-tab-news > .sidebar-news > ul\",\"tasks\":[[\"has-text\",\"تبلیغات متنی\"],[\"upward\",\".small-tab-news\"]]}","{\"selector\":\"section.tabliqat-text > header\",\"tasks\":[[\"has-text\",\"تبلیغات متنی\"],[\"upward\",\"section.tabliqat-text\"]]}"],["{\"selector\":\".content-column\",\"tasks\":[[\"not\",{\"selector\":\" > .archive-title\",\"tasks\":[[\"has-text\",\"رپرتاژ تبلیغاتی\"]]}],[\"spath\",\" .item-inner:has(a[href*=\\\"/pr/\\\"])\"]]}"],["{\"selector\":\"input[type=\\\"hidden\\\"]:is(input#log_id,input#log_code)\",\"action\":[\"remove-attr\",\"value\"]}"],["{\"selector\":\".herald-sidebar .widget\",\"tasks\":[[\"has\",{\"selector\":\".widget-title\",\"tasks\":[[\"has-text\",\"تبلیغات\"]]}],[\"spath\",\" p:not(:has(a[href*=\\\"kurdsoft\\\"])):not(:has(a[href*=\\\"7ganj.ir\\\"]))\"]]}"],["{\"selector\":\".widget > .widget-top\",\"tasks\":[[\"has-text\",\"آگهی متنی\"],[\"upward\",\".widget\"]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"vc_url\"]]}"],["{\"selector\":\"#sidebar .widget a[href*=\\\"faradars.org\\\"] > img[alt*=\\\"فرادرس\\\"]\",\"tasks\":[[\"upward\",\".widget\"]]}","{\"selector\":\"#sidebar .widget div[id^=\\\"kaprila_linktable\\\"]\",\"tasks\":[[\"upward\",\".widget\"]]}"],["{\"selector\":\"\",\"tasks\":[[\"not\",{\"selector\":\"\",\"tasks\":[[\"matches-path\",\"/category/رپرتاژ/\"]]}],[\"spath\",\" article > footer > span.post-meta-cat\"],[\"has-text\",\"رپرتاژ\"],[\"upward\",\"article\"]]}","{\"selector\":\"aside > div > span > a.ani[target=\\\"_blank\\\"][title]\",\"tasks\":[[\"upward\",\"div\"]]}"],["{\"selector\":\".apktops-slider-section ul > li:not(:has(a[href=\\\"https://t.me/+UgVXT9YqXOs0MQTy\\\"]))\",\"action\":[\"remove\",\"\"]}","{\"selector\":\".post-article > .content > .row .entry-content\",\"tasks\":[[\"has-text\",\"اسپاتیفای پرمیوم از APKTOPS\"],[\"upward\",\".post-article\"]]}","{\"selector\":\".spcontent\",\"tasks\":[[\"upward\",\".post\"]]}"],["{\"selector\":\".page-body > .post:not(article) > .yn-bnr:empty\",\"tasks\":[[\"upward\",\".post\"]]}","{\"selector\":\".page-body > .post:not(article) > [id^=\\\"pos-article-\\\"]:empty\",\"tasks\":[[\"upward\",\".post\"]]}","{\"selector\":\".sidebar-right > .box > .title\",\"tasks\":[[\"has-text\",\"لینک های مفید\"],[\"upward\",\".box\"]]}"],["{\"selector\":\"#sidebar > .block > h5\",\"tasks\":[[\"has-text\",\"لینک های متنی\"],[\"upward\",\".block\"]]}"],["{\"selector\":\".slider-tab-ring\",\"tasks\":[[\"not\",{\"selector\":\"\",\"tasks\":[[\"has\",{\"selector\":\" > *\",\"tasks\":[[\"has-text\",\"دیدگاه\"]]}]]}]]}"],["{\"selector\":\".main-term-none > .listing > .type-post > .item-inner > .featured > .term-badges\",\"tasks\":[[\"has-text\",\"رپورتاژ آگهی\"],[\"upward\",\".type-post\"]]}","{\"selector\":\".main-term-none > .listing > .type-post > .item-inner > .post-meta > .post-author-a > .author\",\"tasks\":[[\"has-text\",\"واحد تبلیغات\"],[\"upward\",\".type-post\"]]}"],["{\"selector\":\".linkbox > header\",\"tasks\":[[\"has-text\",\"تبلیغات متنی\"],[\"upward\",\".linkbox\"]]}"],["{\"selector\":\".parsi-ads\",\"tasks\":[[\"upward\",\".widget\"]]}","{\"selector\":\"aside > .widget .textwidget-title\",\"tasks\":[[\"has-text\",\"تبلیغات\"],[\"upward\",\".widget\"]]}"],["{\"selector\":\"#kaprila_downloadly_ir_side-2\",\"tasks\":[[\"upward\",\".g-cols\"]]}","{\"selector\":\"#kaprila_downloadly_ir_static-post\",\"tasks\":[[\"upward\",\".g-cols\"]]}","{\"selector\":\"#kaprila_downloadly_ir_top-side\",\"tasks\":[[\"upward\",\".g-cols\"]]}","{\"selector\":\"#kaprila_linktable\",\"tasks\":[[\"upward\",\".g-cols\"]]}","{\"selector\":\".postfixedafterpost\",\"tasks\":[[\"upward\",\".g-cols\"]]}"],["{\"selector\":\"\",\"tasks\":[[\"not\",{\"selector\":\"\",\"tasks\":[[\"matches-path\",\"/رپورتاژ\"]]}],[\"spath\",\" .art-post > .head-post > .cat-post\"],[\"has-text\",\"رپورتاژ\"],[\"upward\",\".art-post\"]]}"],["{\"selector\":\".attention > header\",\"tasks\":[[\"has-text\",\"وبگردی\"],[\"upward\",\".attention\"]]}"],["{\"selector\":\".aside-inner > .widget-sidebar > .title\",\"tasks\":[[\"has-text\",\"/بنر شماره|تبلیغات متنی/\"],[\"upward\",\".widget-sidebar\"]]}"],["{\"selector\":\".widget > .widget_title\",\"tasks\":[[\"has-text\",\"پیوندهای مفید\"],[\"upward\",\".widget\"]]}"],["{\"selector\":\".sidebar > .box > .behtarinbacklink\",\"tasks\":[[\"upward\",\".box\"]]}"],["{\"selector\":\"#ads-container > .box > header\",\"tasks\":[[\"has-text\",\"وبگردی\"],[\"upward\",\".box\"]]}"],["{\"selector\":\".box\",\"tasks\":[[\"has\",{\"selector\":\"header\",\"tasks\":[[\"has-text\",\"تبلیغات متنی\"]]}]]}"],["{\"selector\":\".aside_boxs > .title_nt_box\",\"tasks\":[[\"has-text\",\"تبلیغ\"],[\"upward\",\".aside_boxs\"]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"document.oncontextmenu=\"]]}","{\"selector\":\"style\",\"tasks\":[[\"has-text\",\"user-select\"]]}","{\"selector\":\"style[media=\\\"print\\\"]\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has-text\",\"display:none\"]]}","{\"selector\":\"style[media=\\\"print\\\"]\",\"tasks\":[[\"has-text\",\"display:none\"]]}"],["{\"selector\":\".side_left > .side > .title\",\"tasks\":[[\"has-text\",\"تبلیغات متنی\"],[\"upward\",\".side_left\"]]}"],["{\"selector\":\".entry\",\"tasks\":[[\"has\",{\"selector\":\".title\",\"tasks\":[[\"has-text\",\"تبلیغات\"]]}]]}"],["{\"selector\":\".side_left > .side > .title\",\"tasks\":[[\"has-text\",\"تبلیغات متنی\"],[\"upward\",\".side\"]]}"],["{\"selector\":\".footer-sections2\",\"tasks\":[[\"has\",{\"selector\":\"h4\",\"tasks\":[[\"has-text\",\"لینک ها\"]]}],[\"spath\",\" > ul > li:not(:has(a[href*=\\\"p30download.ir\\\"]))\"]]}"],["{\"selector\":\".post > .post__content > .post__category\",\"tasks\":[[\"has-text\",\"رپورتاژ آگهی\"],[\"upward\",\".post\"]]}"],["{\"selector\":\".sidbar > p > strong\",\"tasks\":[[\"has-text\",\"پیوندها\"],[\"upward\",\".sidbar\"]]}"],["{\"selector\":\"p\",\"tasks\":[[\"has-text\",\"خرید فالوور\"]]}"],["{\"selector\":\".box\",\"tasks\":[[\"has\",{\"selector\":\".top_title\",\"tasks\":[[\"has-text\",\"نیازمندیها\"]]}]]}","{\"selector\":\".film_box\",\"tasks\":[[\"has-text\",\"مدرسه آنلاین\"]]}","{\"selector\":\".stitle_box\",\"tasks\":[[\"has\",{\"selector\":\".top_title\",\"tasks\":[[\"has-text\",\"وب گردی\"]]}]]}"],["{\"selector\":\"section#RightPanel > div.RBC > div.CCTS\",\"tasks\":[[\"has-text\",\"تبلیغات متنی\"],[\"upward\",\"div.RBC\"]]}"],["{\"selector\":\"#mostvisited\",\"tasks\":[[\"has\",{\"selector\":\".widget-title\",\"tasks\":[[\"has-text\",\"تبلیغات متنی\"]]}]]}"],["{\"selector\":\"aside.widget_text > div.aside_box_title\",\"tasks\":[[\"has-text\",\"لینک های ویژه\"],[\"upward\",\"aside.widget_text\"]]}"],["{\"selector\":\"\",\"tasks\":[[\"not\",{\"selector\":\"\",\"tasks\":[[\"matches-path\",\"/author/d-reportages\"]]}],[\"spath\",\" ul#posts-container > li.post-item > .post-details > .post-meta > .author-meta\"],[\"has-text\",\"دپارتمان تبلیغات\"],[\"upward\",\"li.post-item\"]]}","{\"selector\":\".widget > .widget-title\",\"tasks\":[[\"has-text\",\"تبلیغات\"],[\"upward\",\".widget\"]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"bannersAsJson\"]]}"],["{\"selector\":\"[class*=\\\"SupporterText\\\"]\",\"tasks\":[[\"upward\",\"[class^=\\\"col__Col\\\"]\"]]}","{\"selector\":\"footer a[href*=\\\"parspack.com?utm_source=zoomit\\\"]\",\"tasks\":[[\"upward\",\".col-sm-5\"]]}"],["{\"selector\":\".form-inline\",\"tasks\":[[\"others\",\"\"]]}"],["{\"selector\":\"form[action^=\\\"link/topPageSubmit/\\\"], div#linkStr\",\"tasks\":[[\"others\",\"\"]]}"],["{\"selector\":\".col-md-12 > .title\",\"tasks\":[[\"has-text\",\"لینک دوستان\"]]}"],["{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\":scope > div > div > strong\",\"tasks\":[[\"has-text\",\"تبلیغ\"]]}]]}"],["{\"selector\":\".fixedadv\",\"tasks\":[[\"upward\",3]]}"],["{\"selector\":\"noscript\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\".box-doc > .documentary-news-cnt > header\",\"tasks\":[[\"has-text\",\"بازرگانی\"],[\"upward\",\".box-doc\"]]}","{\"selector\":\".news-col-1 #rssbank\",\"tasks\":[[\"upward\",\".container\"]]}","{\"selector\":\".various-cnt > header\",\"tasks\":[[\"has-text\",\"بازرگانی\"],[\"upward\",\".various-cnt\"]]}"],["{\"selector\":\"#webgardi_list\",\"tasks\":[[\"upward\",\".section_cnt\"]]}"],["{\"selector\":\"li[id^=\\\"ad\\\"]\",\"tasks\":[[\"upward\",\"section.box\"]]}","{\"selector\":\"section.box ul > li.bklnk\",\"tasks\":[[\"upward\",\"section.box\"]]}"],["{\"selector\":\"[class=\\\"widget_text sidebar-box\\\"]\",\"tasks\":[[\"has-text\",\"تبلیغ\"]]}","{\"selector\":\"[class=\\\"widget_text sidebar-box\\\"]\",\"tasks\":[[\"has-text\",\"وبگردی\"]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"protoUrl\"]]}"],["{\"selector\":\".widget > .section-heading > .h-text\",\"tasks\":[[\"has-text\",\"لینکستون\"],[\"upward\",\".widget\"]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"ad.setAttribute\"]]}"],["{\"selector\":\"[id^=\\\"ads-\\\"]\",\"tasks\":[[\"upward\",\".panel\"]]}"],["{\"selector\":\"a[name^=\\\"Advertisement\\\"]\",\"tasks\":[[\"upward\",\".wb_element\"]]}"],["{\"selector\":\".left > .box > .title\",\"tasks\":[[\"has-text\",\"تبلیغات\"],[\"upward\",\".box\"]]}"],["{\"selector\":\".cside1 > .hside2\",\"tasks\":[[\"has-text\",\"تبلیغات\"],[\"upward\",\".cside1\"]]}"]];

const hostnamesMap = new Map([["aftabir.com",1],["akharinnews.com",2],["alamto.com",3],["androidgozar.com",4],["arga-mag.com",5],["asandl.com",6],["asriran.com",7],["bazimag.com",8],["behmusic.com",9],["benawa.com",10],["blogsazan.com",[11,12]],["trustseal.e-rasaneh.ir",12],["trustseal.enamad.ir",12],["logo.samandehi.ir",12],["charbzaban.com",13],["chetor.com",14],["deltapayam.com",15],["digiato.com",16],["digikala.com",17],["dlfox.com",18],["donya-e-eqtesad.com",19],["ecoiran.com",20],["eghtesadonline.com",21],["elmevarzesh.com",22],["farachart.com",23],["gamefa.com",24],["ghatreh.com",25],["graphiran.com",26],["idehalmag.com",27],["idehaltech.com",28],["iranidata.com",29],["jafekri.com",30],["coffeeapps.ir",[30,69]],["khabarpu.com",31],["khanefootball.com",32],["khanoumi.com",33],["khodrotak.com",34],["lordroid.com",35],["marzfun.com",36],["moderndl.com",37],["musickhone.com",38],["power-music.ir",[38,89]],["mybia4music.com",39],["p30konkor.com",40],["par30media.com",41],["sakhtafzarmag.com",42],["salameno.com",43],["sariasan.com",44],["sarzamindownload.com",45],["shahrsakhtafzar.com",46],["shereno.com",47],["takhfifan.com",48],["takmili.com",[49,50]],["kihanb.ir",[49,83]],["takskin.com",51],["tarafdari.com",52],["techfars.com",53],["technews-iran.com",54],["techrato.com",55],["uploadboy.com",56],["vipofilm.com",57],["zibamoon.com",58],["konkur.in",59],["farnet.io",60],["virgool.io",61],["7ganj.ir",62],["amazing.ir",63],["androidparsi.ir",64],["dailymobile.ir",64],["tarfandha.org",64],["androidzoom.ir",65],["anzalweb.ir",66],["apktops.ir",67],["avaz-kurd.ir",68],["digiboy.ir",70],["digiro.ir",71],["dlrozaneh.ir",72],["download.ir",73],["downloadly.ir",74],["downloadsoftware.ir",75],["entekhab.ir",76],["farsifilm.ir",77],["filmsky.ir",78],["gamesetup.ir",79],["hamshahrionline.ir",80],["imna.ir",81],["khodropluss.ir",82],["listen2music.ir",84],["mihand.ir",85],["nex11music.ir",86],["p30download.ir",87],["plaza.ir",88],["subf2m.ir",90],["tabnak.ir",91],["taknaz.ir",92],["toranji.ir",93],["uptrack.ir",94],["youc.ir",95],["zoomg.ir",96],["zoomit.ir",[96,97]],["xip.li",98],["opizo.me",99],["androidina.net",100],["par30dl.net",101],["par30games.net",102],["pichak.net",103],["rokna.net",104],["55online.news",105],["saat24.news",106],["techna.news",107],["bandmoviez.one",108],["bazdeh.org",109],["tgju.org",110],["98oldmusics.site",111],["takvim.tj",112],["artmusics.top",113],["harmonydl.us",114]]);

const entitiesMap = new Map([["hamtamovie",0]]);

const exceptionsMap = new Map(undefined);

self.proceduralImports = self.proceduralImports || [];
self.proceduralImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
