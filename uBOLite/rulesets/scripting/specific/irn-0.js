/*******************************************************************************

    uBlock Origin - a browser extension to block requests.
    Copyright (C) 2019-present Raymond Hill

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
(function uBOL_cssSpecificImports() {

/******************************************************************************/

const argsList = [".banner-cafe,\n.center-talgh",".col-xs-12.col-md-6.main-sidebar > center,\ncenter:nth-of-type(2)","[href^=\"/advertisements/\"]",".widget_custom_html.widget.container-wrapper.widget_text",".ads-title",".stream-item-above-post.stream-item,\n.stream-item-mag.mag-box",".ads-post",".link-paeen",".adcontainer,\n.enhanced-text-widget.widget_text.vc-widget.widget.w-nt.h-ni,\n.insert-post-ads,\n.widget_better_rss_widget.widget.primary-sidebar-widget.w-t.h-ni,\n.xjehomzgnw",".ads-text-sid,\n.pt-3.text-center.py-2.bg-all-box,\n.text-center.py-3.bg-all-box","#text-25",".main-zxc","#footer_js_d1,\n.banner-container,\n.col-sm-3 > .block > .img:not(:has(a[href*=\"aftabir.com\"]))","#left2","#ads",".yn-bnr","#pos-article-display-66259",".ag-agah",".ads_place,\n.app_introduce","#toshare-dl-link",".announce,\n.dsp-ad,\n.promote-puls,\ndiv[type=\"aparat\"]:has(> .link)",".side-ads",".baner",".header-ad",".top-ad",".mks_ads_widget",".webgardi",".bottom-ad","a[href*=\"nobitex.ir\"]","#kaprila_linktable",".box[class^=\"asan\"],\n.content-box,\n.text-asan,\narticle.post.game:not(:has(.button,.post-cat))",".right-sidebar > p > a > img[title=\"رپورتاژ\"]",".advRemove,\n.click1000_allcontent,\n.webgardi_main > #txtadv5 > a[href*=\"asriran.com/fa/ads/redirect/\"]","figure.size-full.wp-block-image",".alert-dismissible,\ndiv.text-center.col-md-3 > .paddingAll10.panel-success.panel","#middlead",".medicaldirectory-sidebar:nth-of-type(5) > .claims.sidebar-content > .cbp-l-project-details-title > span",".pix_of_day,\ndiv[style=\"margin-top:4px;overflow:hidden;\"],\ndiv[style=\"margin-top:5px;margin-bottom:3px; overflow:hidden;\"]","#bil_fix_top_pc,\n#headerbar,\n.c-ads-banner,\n.content-slider,\n.countclick,\n.hamsan-container,\n.m-banner-r,\ndiv[class^=\"pcfadv\"]",".ads_link8,\n.blog-home-ads-blog,\n.blog_center_bar > center > a[href*=\"eramblog.com/action/static_ads\"],\n.hamsandiv",".col-md-3 > .panel > .tarh-forosh,\n.col-md-3 > .panel > center,\n.leftads",".parent_txt_adv_container2","figcaption","#custom_html-51",".mtn-ads-content-sticky,\nimg[alt=\"ad banner\"]",".widget_custom_html.widget.primary-sidebar-widget.w-t.h-ni.widget_text",".widget_text.widget.primary-sidebar-widget.w-t.h-i","[href*=\"/banners/click/\"]",".weblink",".bd-adsbar,\n.delta-content-ads,\n.delta-top-content-ads",".digiBannerArea,\n.homeMainBanner,\n.todaysNewsList__sidebar",".mb-4:has(.mr-auto.text-caption.ai-center),\n.radius-large-lg:has([class*=\"SponsoredBrandCarousel\"]),\n[class*=\"ProductContent\"]:has(.mr-auto.text-caption.ai-center)",".ADS_wrapper,\n.WK_ads,\n.blog_list,\n.home_mid_ads,\na[href*=\"dlfox.com/adspage\"] > img,\na[href*=\"gameriver.ir\"]","#home-2-col > .bs-vc-wrapper > .vc_col-sm-3.vc_column_container.bs-vc-column.wpb_column,\n.widget_nav_menu.widget.primary-sidebar-widget.w-t.h-ni",".zxc","[href^=\"/advertisements/triggered/\"]",".custom-ad-one,\n.zxc-m",".adsfix_box",".ads_txtcv,\naside.lefts_sides:nth-of-type(6)",".ads","#ADbox-2,\n.popup-ads","a[href^=\"https://zaya.io/\"]","div.medicaldirectory-sidebar:nth-of-type(6) > .claims.sidebar-content > .cbp-l-project-details-title > span",".sidebar-home:has(.ads_0)",".advs-wrapper",".backlink,\n.shopping_list,\n.talfighat-BS,\n.tiny_linky_boxes,\n[href*=\"/advertisements/triggered/\"]",".adv",".adv-ttl","#ad640a,\n#head728,\n#sidebar300 > .mywidget > .titles,\ndiv.mywidget:nth-of-type(6)","#middle a > img[title*=\"تبلیغات\"],\n#sidebar a:not([href*=\"elmevarzesh.com/\"]) > img[width=\"300\"][height=\"200\"],\n.col-md-8 a:not([href*=\"elmevarzesh.com/\"]) > img[width=\"728\"][height=\"90\"]",".stream-item-widget",".widget-ad-image",".centernews_soc,\n.left_pos_mod > .l_box.imgs,\n.newstopads,\n.r_box:has(p)",".text-ads","#ynpos-10831,\n.ezp30-ads,\n.fix-ez",".advertisement",".kpl_linktable",".clearfix.boxed-content-wrapper img[alt=\"Advertising\"],\n.top-banner-ads",".news_slider_sec2,\n.webgardi_adv",".header-adv,\n.others_media,\n.sticky_notify2,\n.zxc-stik",".txt-adv-box",".zxc-visible-fixed",".ads-dashed-banner,\n.cas-pubg.cas,\n.gtm-farsroid-ads,\n.site-middle-banners,\n.swiper-wrapper > .swiper-slide:not(:has(a[href*=\"farsroid.com/\"]))",".download-link-ads-below",".inline-news-box,\n.talfighat-row,\n.ul-talfigh-con",".results__a","#fix-advertise,\n#image-advertise,\n#top-banners,\n.content-ads",".bottom-ads,\n.card-ads",".tads","#ads-main-home,\n.ads-img","div.post:has(a[href^=\"https://www.tarhdokan.com/\"]),\nul#tabligh,\nul#tablighc",".sticky-ad",".sidebar-right","aside.sidebar .widget:has(a.external)",".primary-sidebar-widget:has(a[rel*=\"sponsored\"])",".secondary-sidebar-widget:has(a[rel*=\"sponsored\"])","div[class^=\"cr-banner-\"]",".q2am-page-advert","#topAdver,\n.Top2Adssss,\ndiv.CBS.CenterBlock:nth-of-type(2),\ndiv.CBS.CenterBlock:nth-of-type(3),\ndiv.CBS.CenterBlock:nth-of-type(5),\ndiv.CBS.CenterBlock:nth-of-type(6)","#floating-region-zone,\n.ads-div-block",".sin-part","#banners-position-14,\n#slideshow[class=\"rounded\"]",".ads-box","#NR-Ads,\n.listing-item-blog:has(a[href*=\"/author/ads/\"])","script[id^=\"wccp_\"]",".col-xs-36.col-sm-4.col-md-4.col-lg-4,\n.hidden-xs.col-sm-4.col-md-4.col-lg-4",".stream-item-top-wrapper","#block-3,\n#block-4,\nli:has([href^=\"https://jalebamooz.com/reportage/\"])",".widget_custom_html,\naside:nth-of-type(2)","#table10,\n#table10 > tbody > tr > .textBoldColor,\n#table4 > tbody > tr > td > table > tbody > tr > td > center,\n.bgleftmenu > div > div,\ntable#table9.bgtable:nth-of-type(13)","div.white-block:nth-of-type(2)","[href^=\"/nf/sponsor/\"]","[class^=\"zxc\"]",".sticky_notify",".news-bottom-link","#ads_f,\n#banners_120_top_1,\n#block-block-120,\n.track-click",".peyvand,\n[href*=\"/advertisements/\"]",".inline_ads",".ads.box","#box358,\n#top-ad",".zxc_home",".mrauto,\n.position-g5",".mobile-fixed-banner","a[href^=\"/advertisements/triggered/\"]",".ads-placment",".advertisement-in-topic,\n.banner-wrapper,\n.bannercontainer,\n.homepage-content",".msg_ad_explain,\n.msg_ad_pictorial,\n.msg_ad_subject","a[href^=\"https://bit.ly/\"]","#custom_html-4,\n#text-31,\n#text-35,\n.adbar","#text-13,\n.adwrap-widget","#ads-container",".alert-new,\n.text-center.mt-3.py-3.bg-all-box",".mdiaad,\nsection.sidebox:nth-of-type(4)",".widget_text.widget",".sponsors","#sponsor_wrapper,\ndiv.banner_v",".srjtbaungo","#ads__bottom_of_the_header",".news-col-2 .related-news",".opanel-ads",".ads-banner","#advertise,\n#promotion",".Dr.D2.Cu.o",".stream-item-above-post","#text-5",".banner_sidebar,\n.box-ads-single,\n.box-custom.box_other,\ndiv.box-tag-single:nth-of-type(2)","div.all_adv_mrg,\ndiv.box:has(img[alt=\"icon_ads\"]),\ndiv.fixed_box_adv,\ndiv.padding_news_right_adv","#forum-native-ad,\n.ad-wrapper",".advertorial",".ADS_header_all","#header-ad1,\n#p30konkor-ads-p a[rel=\"follow\"],\n#p30konkor-ads-p div:has(p > a[rel]):not(:has(a[href*=\"p30konkor.com\"]))",".post-ads,\n.sidebar-ads",".ad_global_header","#ad_global_below_navbar","#ads-120,\n.block-ads,\n.block-ads2,\n.block-ads4",".Res005,\n.WCBC,\n.topadver",".adv_img,\n.agahi-view",".widget_whmcs_ads_widget.widget,\n.wpb_content_element.sidebar.wpb_widgetised_column",".topbanners",".multi-ads-container","div.tab.sidebar-box:nth-of-type(2) > .sidebar-box-content,\ndiv.tab.sidebar-box:nth-of-type(2) > h3",".ads_box",".aa-container",".download-dialog",".ads.big_post,\n.cat","#block-block-22.ads",".bannermiddle,\n.mybannerimg",".adv-box",".adloc-is-banner,\n.widget_better-ads",".advertising","#middle-ads",".fara-main","#header-banner-4,\n#rt-backlinks-pos,\n.mb-3.top-1.sticky-top,\n.w-100.justify-content-center.d-flex",".bannersHome","#header-ads",".bannergroup",".ads2",".ush_image_2",".GSAdsLR,\n.OpenTable5",".adv_top,\ndiv[style=\"margin-bottom:10px\"]:has(> .txt_adv_content)",".bannergroupsam-full-width",".cyt-ad-content,\n.homebar a[href=\"https://setare.com/%d8%aa%d8%a8%d9%84%db%8c%d8%ba%d8%a7%d8%aa/\"] > img,\n.pb0.stickyscroll_widget","#block-views-ad-link-block-2,\n#block-views-shabake2-clone-of-ad-link-block,\n.field-name-ads-under-summery,\n.popup-box-wrapper","#g-top,\n.ads2col,\n.flexbanneritem",".qxsbniv",".header_adv",".side_adv",".top_adv",".b_box","#inline_agahi_z0,\n.generalBoxStyle[data-element-name=\"FRONT_M\"],\n.generalBoxStyle[data-element-name=\"SHARE_NEWS\"],\n.mauto_div,\n.mnb_wrapper,\n.noagahi.otherMedia",".banner9,\n.bannerLarge","#PopAlert,\n#RightPan,\n#advBan,\n.AdvertiseD2Ban,\n.DTOPBan,\n.adv_text",".ads-link",".middle-ads",".adss,\n.container_ads","div.mask",".adcbar",".link-ads",".ad-item,\n.ads-footer",".baners,\n.left-ads",".right-ads",".col-xs-12 > article:has(a[href*=\"/category/pr/\"])",".tab-cpc,\n.tab-dpd-post,\ndiv[class^=\"ads\"]",".full-width-tabligh,\n.home-web-surfing,\n.tj-ad-box,\n.tj-ad-wrapper,\ndiv.widget.aside-widget:nth-of-type(5) > .section-title--dotted.section-title > .section-title__h",".rmp-ad-container",".fade,\n.popup_block",".slider-banners.partial,\n.sponsor-link",".ads-box-green,\n.ads-box-red",".light-text.footer-widgets",".seller-element.shop-card:has(.click_vijhe)","div#popupModal,\ndiv.ads,\ndiv.modal-backdrop",".upbu","div.col-ms-36 > section:has(div.txt_adv_content),\ndiv.row > section:has(a[href*=\"/ads/redirect/\"]),\ndiv.style-text-adv",".zxc_matni",".adbox:not(.adbar),\n.left-side-ad-col","div.side22:nth-of-type(1)",".tabligh","#text-12,\n#text-24",".top-ads",".ads-block,\n.row.fixed-post.post,\n.sidebar-textads","#BannerHome,\n.BannerA,\n.DetailArea > .AdAreaDetail,\ndiv[id^=\"BehinAva\"]","#sidebar-alt",".no-mobile.out-container:nth-of-type(3)",".adsside,\n.elementor-element-d41b3d1,\n.size-large.attachment-large","#site-footer .col-sm-4:has(a[rel=\"noopener\"][target=\"_blank\"]),\n.eif:not(:has(a[href*=\"farnet.io\"]))","[class^=\"RequireAuth_mainBox\"]",".js-userLogin-popup",".col-md-offset-6.col-md-3,\n.kanban-col",".khp-site-info p,\n.left.col-md-4,\n.skip-container p:not(:has(a[href*=\"1da.ir\"])):has(img)",".phoenixad,\na[rel=\"dofollow\"]",".e3lan","#text-2,\n#text-3,\n#text-4,\n#text-6,\n#text-7",".herald-ad:not(:has(a[href*=\"kurdsoft\"])):not(:has(a[href*=\"7ganj.ir\"])),\n.meta-ad",".links_footer",".main22,\n.up_submit > span","x",".adv_l,\n.adv_r_news2",".co-ads","#popular,\n.lolo",".tab_news > a[href*=\"gameup.ir\"]",".app_ads_banner",".ads-side",".asiatech,\n[id^=\"linkcat\"] > ul > li:not(:has(a[href*=\"apktops.ir\"]))",".banner",".abox","#featured > .owl-stage-outer",".all_adv,\n.others_web,\n.reportage","#ad-hoc-2,\n.bdaia-e3-container,\n.widget_text.bdaia-widget.widget",".stream-item","#iddivtoplevelscript,\ndiv[style]:nth-of-type(3)",".ads-margin-bot,\n[href*=\"bourse24.ir/ads/click/\"]",".linkbox",".block-simpleads",".clads-inner","#ADbox-1,\n.ads-sidebar,\n.ads-sticky,\nscript[id^=\"wpcp_\"]",".after-post-ads",".Js_Div5",".adsboxfix,\ndiv[style*=\"position: fixed; right: 0px; bottom: 0px;\"]:has(> .close-fixedSd)","div[id^=\"ads\"]","#mediaad-vFkp","#header-bar,\n.sidebar-digiads","div[itemtype=\"https://schema.org/WPAdBlock\"]",".index-adstop > a:not([href*=\"dlrozaneh.ir\"])",".top-full-ads,\naside img[alt=\"جایگاه تبلیغات\"]",".d1yekta,\n[id^=\"pos-article-display-\"],\nsection li:not(:has([href^=\"https://download1music.ir/\"]))","#faradars,\n#page-content > .wpb_row:has(a[href*=\"faradars.org\"])",".ads-fix-post,\n.ads-matni",".advertise-place,\n.province-advertise,\nmain > div:has([href*=\"/advertising/\"])",".all_ads","#ContentPlaceHolder1_divBanner","[class*=\"text_ads\"]",".emojo-ad,\n.pzbkcvuqrn",".news-web",".list,\n.t-adv,\ndiv.post:nth-of-type(2)",".header-mdh,\n.pull-right.zm-post-lay-a-area",".ad-mobile-none,\n.ads-native",".custom,\n.customads",".FixedAdvertising,\n.left.sidebar_widget:nth-of-type(3),\n.left_ads,\n.right_ads,\n.top_ads",".post-ad-box","#next1-231,\n.asd_top,\n.fl.block_right > div.box_sh.ads_2","div[class*=\"linkads\"]",".sidebar_tabliq,\n[href^=\"/ads/\"]",".doctor-ads-item","#header_ad,\n.sb_ad",".banner468,\n.tab_box","[href^=\"/redirect/ads/\"]","div[data-testid=\"more-Button-TestId\"],\ndiv[data-testid^=\"filterItem_tab\"],\ndiv[style=\"display: flex; flex-flow: column nowrap; justify-content: center; align-items: center;\"]:has(img[alt=\"Advertisement\"]),\ndiv[tabindex]:has(div[data-testid^=\"specialServices\"])","#mainadv,\n#pos-article-display-70266,\n.biga,\n.htmlad","div.owl-item:has(> li[id^=\"ad\"]),\nsection.box.ads",".advertise_default",".c-forceToLogin__message.o-box,\n.c-forceToLogin__overlay",".im-header-ad",".textads",".go-left.main > div.row.box:nth-of-type(1),\n.middle.inner-el.container > div.row.box:nth-of-type(2),\ndiv.black.row.box","#textads-contents,\n.ads-containter","#ads-container > .list-thumbs.title-only.list.box,\n#header-ad,\n.bg-gray-links.box",".ads_bt_box,\n.ads_singles_post,\n.top_img_ads",".type-sticky.status-publish",".ads-widget",".down-box-ads,\n.down-box1",".singleads","[id^=\"ad\"]","a[href=\"http://www.asalchat.skin\"],\na[href=\"https://www.tarhpardaz.ir\"]","#bottombanner,\n.apnl,\n.b","#sezfvg-2,\n.sezfvg,\n.sticky-column:not(:has(a[href*=\"modirnameh.ir\"]))",".txt-ads-sl",".banneritem:has(a[href*=\"/banners/click/\"]),\n.eb-inst",".txt-box:has(> .txt_adv_content)",".adspanel",".adsblockpop,\n.afc_popup,\n.banners,\n.textAds","#fxp,\n#kaprila_p30download_ir_related,\n#kaprila_p30download_ir_related-top-post,\n.basic-list-linkdump,\n.sidebar-tabliq,\n.text-tabliq",".body_wrapper > div:nth-of-type(4)","div.block-simpleads","#custom_html-108,\n.stream-item-top,\n.widget_custom_html:has(img[src*=\".gif\"])","div > div > a.toolt > .onsc",".dlbtnhidden",".ad--content",".ytn-hamsan","script[src^=\"data:text/javascript;base64,ZG9jdW\"][src$=\"hdWx0KCl9fQ==\"]",".c-advertisement",".banner-box",".center.body_c > div > div,\n.center.body_c > div:nth-of-type(2),\n.txtad","#ad7_40,\n.footer-ads","[href*=\"/fa/ads/\"]",".left_banner,\n.links","#arasideadvertising","#ads3,\n.main-ads,\n.morders,\n.textads2",".heading-ads,\n.sidebar-right > div.box:nth-of-type(1)",".adv_mobile",".textwidget,\naside:nth-of-type(5)",".backoritybase,\n.news-box,\n.text-ads-1,\n.widgets.bg-custom.box","#cycle_adv_tabnak","section#LeftPanel > div.leftads","[class^=\"adv\"]:not(.adv8,.adv19)","div.col3:has(div.txt_adv_content)",".inner-wrapper-sticky > .mb-3,\n.sidebar-banners",".type-resource-image",".side1:has(a[title][rel=\"noopener noreferrer\"])",".advertisment","#fpc-banner-top,\n#top-right-ad,\n.content-container:has(.ad-reportage),\n.square-ad:not(:has(#featured-posts))",".full2.box.right,\ndiv.sideheader2:nth-of-type(3)",".ad-link",".footer-back-link,\n.free_ad_con,\n.logo_full_view","a[href*=\"utm_source=uptrack\"]","#tabligh",".ads120,\n.ads468,\n.fixpost,\n.gsh,\n.headads",".bottom_ads,\n.fix_ads,\n.stream-item-widget:has(a[href*=\"faradars.org\"])",".textad,\n[href^=\"/ad/\"]","#kaprila_linktable_left,\n.left-block-top","#slider-box,\n.mortabet-links,\ndiv.row:nth-of-type(2) > .col-xs-12 > .category-side-ads",".advertisements",".sideads",".main-top-ads,\n.wide-ad-row,\ndiv.a1-banner",".wide-adv-row,\n[class*=\"BrowseArticleItem___StyledFlex\"]:has(a[href*=\"/pr/\"]),\n[class^=\"AdvertisingParser\"],\n[class^=\"DisplaySkeleton__DisplayRoot\"]",".flex-ad-body","#ads-sticky","#ads-text",".box-title,\n.moreads.widget_text,\n.pm",".mom_custom_text.widget,\n.widget_custom_html.widget.widget_text",".ads-container,\n.ads-row,\n.ads-row-left,\n.mediaad-row,\n.mediaad-row-top,\n.mediaad-top-row,\n.top-ad-row","#ad14,\n.ad-cell,\n.widget_text",".content_item:has(a[href*=\"/category/ads/\"]),\n.sidebar-area .image",".adpar30,\n.adsidimg",".fixedbanner,\n.sidebar-box-shop,\n.top-large-ads,\n[href^=\"https://playpod.ir/\"]",".my-single-t-p",".dailylink,\nbody > div > font,\ncenter > center > center > center,\ncenter:nth-of-type(2) > center,\ndiv > font > font > .menuheader,\ndiv > font > font > font > p",".adv-cnt,\n.home-zxc,\n.padding-bottom-8,\n.sanjagh,\n.side_txt_zxc,\n.zxc-header-zxc,\n.zxc-padding-custom","#box_1398,\n#popbox-blackout",".AdsContainer",".special_links,\n.text_adds_container",".zxc_news",".featured_news",".zxc_left",".ads-full-banner-img",".vebgardi",".jmb_banner",".inline-4d",".adrightPanel,\n.container55,\narticle > .box > a[href*=\"salampnu.com\"]",".vfozk",".aligncenter.wp-image-9273.size-full,\n.size-full.attachment-full",".Topadver",".behtarinseo",".myside.right-sidebar",".advertise,\n.bottom-left-ad,\n.bottom-right-ad",".adsBanner,\n.two-ad-banners,\n.widget_media_image.widget.container-wrapper","#posts_single_ads,\n#top_ads","div.back_links","#titr-box,\n.maincontent > center,\ntbody","#sidebar_ad,\n.b-hd,\n.hidden-xs.hidden-sm.block,\n.hideOnMobile",".new-banner",".abvertise > .container > a:not(a[href=\"https://t.me/filmha_top\"])",".tabliq"];

const hostnamesMap = new Map([["cannews.aero",0],["myhastidl.cam",1],["mojnews.co",2],["eghtesadnews.com",[2,54,64]],["fartaknews.com",[2,84]],["moroornews.com",[2,54,80]],["parsnews.com",[2,156]],["ilna.ir",[2,54]],["tinn.ir",[2,336]],["borna.news",[2,26,186]],["tourismonline.co",[3,4,5]],["koolakmag.ir",3],["skinak.ir",[4,326]],["1abzar.com",[6,7]],["gadgetnews.net",[6,360]],["1pezeshk.com",8],["abipic.com",9],["mihandownload.com",[9,131]],["accpress.com",10],["afkarnews.com",11],["aftabir.com",12],["akharinnews.com",[13,14]],["harmonydl.us",[14,391]],["alamto.com",[15,16]],["power-music.ir",[15,317]],["androidgozar.com",17],["androidha.com",18],["androidsharp.com",19],["aparat.com",[20,21]],["mihanvideo.com",21],["applicationha.com",22],["arga-mag.com",[23,24,25,26,27]],["icivil.ir",23],["plus.ir",24],["beautyhome.ir",[25,247]],["arzcenter.com",28],["asandl.com",[29,30]],["alldriver.ir",[29,238]],["cafejozve.ir",29],["dehlinks.ir",[29,259]],["khoshamoz.ir",29],["p30day.ir",[29,59,309]],["20file.org",[29,377]],["asemooni.com",31],["asriran.com",32],["avapedia.com",33],["barsadic.com",34],["bazimag.com",35],["brain.be-teb.com",36],["benawa.com",37],["beytoote.com",38],["blogsazan.com",39],["boyernews.com",40],["bultannews.com",41],["charbzaban.com",42],["chetor.com",43],["chibepoosham.com",44],["delbaraneh.com",[45,46]],["rouzegar.com",[46,168]],["delgarm.com",[47,48]],["payamekhabar.ir",48],["deltapayam.com",49],["digiato.com",50],["digikala.com",51],["dlfox.com",52],["doctorwp.com",53],["donya-e-eqtesad.com",[54,55,56]],["ecoiran.com",[54,55]],["eghtesadonline.com",[54,65]],["etemadonline.com",54],["fardanews.com",[54,79,80,81]],["khabarerooz.com",[54,114]],["khabarfoori.com",[54,116]],["khanefootball.com",[54,120,121]],["mojnews.com",[54,80]],["mosalasonline.com",[54,81,113,138]],["sharghdaily.com",[54,120,185]],["shayanews.com",[54,186,187]],["shomavaeghtesad.com",[54,66]],["varandaz.com",[54,81,213]],["bartarinha.ir",[54,246]],["rokna.net",[54,366]],["55online.news",[54,120,213,370,371]],["sobhtazeh.news",[54,374]],["doostihaa.com",[57,58]],["mer30download.com",[57,59]],["downloadha.com",[59,60]],["e-teb.com",59],["elmefarda.com",[59,68]],["mehrnews.com",[59,130]],["salameno.com",59],["shabakeh-mag.com",[59,182]],["tasnimnews.com",[59,198]],["vipofilm.com",[59,216]],["4tools.ir",59],["imna.ir",[59,130,285]],["khabaronline.ir",[59,285,295]],["shahraranews.ir",[59,323]],["shmi.ir",[59,324]],["androidina.net",[59,355,356]],["par30games.net",[59,363]],["tebyan.net",59],["drdmag.com",61],["ravan.e-teb.com",62],["eghtesademeli.com",63],["ejiga.com",[66,67]],["fa-tools.ir",[66,273]],["elmevarzesh.com",69],["ensafnews.com",[70,71]],["netpaak.com",[70,143,144]],["bikarsho.ir",[70,248]],["wikihoax.org",[70,71,384]],["mag.khanoumi.com",71],["etelanews.com",[72,73]],["gahar.ir",[73,278]],["mihand.ir",73],["ezp30.com",74],["faaltarin.com",75],["faceit.ir",[75,274]],["farachart.com",[76,77]],["androidzoom.ir",[76,230]],["fararu.com",78],["farsroid.com",[82,83]],["p30afzar.com",[83,149]],["fastdic.com",85],["gamefa.com",86],["gharbtv.com",87],["ghatreh.com",88],["gooyait.com",89],["graphiran.com",90],["hamgardy.com",91],["harfetaze.com",92],["honarfardi.com",93],["idehalmag.com",94],["idehaltech.com",95],["imvbox.com",96],["irancircle.com",97],["irannaz.com",98],["iranstar.com",99],["itarfand.com",100],["itbazar.com",101],["itgheymat.com",102],["itresan.com",103],["jafekri.com",104],["jahannews.com",105],["jalebamooz.com",[106,107]],["vgdl.ir",[106,143,346]],["jesarat.com",108],["k2cod.com",109],["ketabesabz.com",110],["khabarban.com",111],["khabareazad.com",[112,113]],["khabarfarsi.com",115],["khabarpu.com",117],["khabarvarzeshi.com",[118,119]],["salamatnews.com",118],["hamshahrionline.ir",118],["irna.ir",118],["gostaresh.news",[120,370,372]],["khodrobank.com",122],["khodrotak.com",123],["kilipo.com",124],["kojaro.com",125],["lamtakam.com",126],["learnparsi.com",127],["lenzak.com",128],["majalesalamat.com",129],["mihanfal.com",132],["mihangame.com",133],["mihanmarket.com",134],["news.mihanmarket.com",135],["minevisam.com",136],["moderndl.com",137],["movienama.com",139],["mybia4music.com",140],["namayesh.com",141],["namnak.com",142],["20tayi.ir",[144,230,231]],["niksalehi.com",145],["niniban.com",146],["ninisite.com",147],["nodud.com",148],["p30konkor.com",150],["p30world.com",151],["forum.p30world.com",[152,153]],["parsipet.ir",[152,311]],["parsfootball.com",154],["parsnaz.com",155],["parstools.com",[157,158]],["taktemp.com",[158,197]],["peivast.com",159],["persiangfx.com",160],["persianv.com",161],["radiojavan-iran.com",[161,164]],["picofile.com",162],["podbean.com",163],["rajanews.com",165],["rayamag.com",166],["roozno.com",167],["rozblog.com",[169,170]],["sid.ir",[169,325]],["rozmusic.com",171],["saednews.com",172],["sakhtafzar.com",173],["sakhtafzarmag.com",[174,175]],["seemorgh.com",[175,180]],["sargarme.com",176],["sariasan.com",177],["sarzamindownload.com",178],["sedayiran.com",179],["setare.com",181],["shahrsakhtafzar.com",183],["shanbemag.com",184],["shereno.com",188],["shomanews.com",189],["simcart.com",190],["softgozar.com",191],["sourceiran.com",[192,193]],["dolatebahar.ir",192],["tak3da.com",194],["takhfifan.com",195],["takhfife.com",196],["techfars.com",[199,200]],["varzesh3.com",[200,214]],["technews-iran.com",201],["techrato.com",202],["tejaratnews.com",203],["telewebion.com",204],["tigatravel.com",205],["tiwall.com",206],["top2download.com",207],["topnaz.com",208],["torob.com",209],["uploadboy.com",210],["upmusics.com",211],["vananews.com",212],["vazeh.com",215],["wikisemnan.com",217],["yasdl.com",[218,219]],["downloadsoftware.ir",[218,266]],["zibamoon.com",220],["icoff.ee",221],["shirazsong.in",222],["konkur.info",223],["farnet.io",224],["rasm.io",225],["virgool.io",226],["1000site.ir",227],["1da.ir",228],["1ea.ir",229],["7ganj.ir",232],["8pic.ir",[233,234]],["imgurl.ir",[233,284]],["uupload.ir",[233,344]],["abadis.ir",235],["aftabnews.ir",236],["aftabyazdonline.ir",237],["anaj.ir",239],["androidparsi.ir",240],["artmusics.top",240],["anzalweb.ir",241],["apktops.ir",242],["b2n.ir",[243,244]],["timecity.ir",[243,335]],["barato.ir",245],["softsaaz.ir",248],["youc.ir",248],["bils.ir",249],["bourse24.ir",250],["buzdid.ir",251],["citna.ir",252],["click.ir",253],["coffeeapps.ir",254],["computeruser.ir",255],["dabi.ir",256],["dailymobile.ir",257],["daneshchi.ir",258],["digiboy.ir",260],["digiro.ir",261],["dlrozaneh.ir",262],["download.ir",263],["download1music.ir",264],["downloadly.ir",265],["econews.ir",267],["eghtesadepooya.ir",268],["rastannews.ir",268],["emalls.ir",269],["emeil.ir",270],["emojo.ir",271],["entekhab.ir",272],["farsnews.ir",275],["freedownload.ir",276],["freescript.ir",277],["gamesib.ir",279],["getandroid.ir",280],["gsm.ir",281],["hidoctor.ir",282],["imemar.icivil.ir",283],["my.irancell.ir",286],["iranjib.ir",287],["isna.ir",288],["itna.ir",289],["jobinja.ir",290],["kafebook.ir",291],["kalakamuz.ir",[292,293]],["varoone.ir",[292,345]],["ariapix.net",292],["tarfandha.org",[292,381]],["my-film.pw",[292,387]],["khaandaniha.ir",294],["khodropluss.ir",296],["languagedownload.ir",297],["lastsecond.ir",298],["listen2music.ir",299],["loudmusic.ir",300],["mashreghnews.ir",301],["maxstars.ir",302],["mobile.ir",303],["modirnameh.ir",304],["montiego.ir",305],["moviemag.ir",306],["nabzefanavari.ir",307],["omidnamehnews.ir",308],["p30download.ir",310],["payju.ir",312],["pedal.ir",313],["pgnews.ir",314],["phonroid.ir",315],["plaza.ir",316],["public-psychology.ir",318],["rahnamato.ir",319],["rond.ir",320],["rozup.ir",321],["sena.ir",322],["smusic.ir",327],["snn.ir",328],["sornamusic.ir",329],["subf2m.ir",330],["tabnak.ir",331],["taknaz.ir",332],["tehranrasaneh.ir",333],["tejaratemrouz.ir",334],["iranart.news",336],["top90.ir",337],["topseda.ir",338],["toranji.ir",339],["up44.ir",340],["uploadkon.ir",341],["uplod.ir",342],["uptrack.ir",343],["vista.ir",347],["webgoo.ir",348],["webii.ir",349],["yun.ir",350],["zohur12.ir",351],["zoomg.ir",352],["zoomit.ir",353],["filmino.me",354],["salamdl.rip",[356,388]],["cooldl.net",357],["dlbook.net",358],["footballi.net",359],["jeyran.net",361],["par30dl.net",362],["parsroid.net",364],["pichak.net",365],["takblog.net",367],["yektablog.net",367],["article.tebyan.net",368],["uplooder.net",369],["mobo.news",373],["techna.news",375],["titr.online",376],["bazdeh.org",378],["gold-team.org",379],["talab.org",380],["texahang.org",382],["tgju.org",383],["zoomtech.org",385],["ana.press",386],["oila.tj",389],["filmha.top",390]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map(undefined);

self.specificImports = self.specificImports || [];
self.specificImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
