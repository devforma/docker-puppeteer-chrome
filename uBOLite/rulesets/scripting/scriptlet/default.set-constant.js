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

// ruleset: default

/******************************************************************************/

// Important!
// Isolate from global scope

(function uBOL_setConstant() {

/******************************************************************************/

const scriptletGlobals = new Map(); // jshint ignore: line

const argsList = ["[\"ytInitialPlayerResponse.adPlacements\",\"undefined\"]","[\"playerResponse.adPlacements\",\"undefined\"]","[\"abp\",\"false\"]","[\"oeo\",\"noopFunc\"]","[\"nsShowMaxCount\",\"0\"]","[\"objVc.interstitial_web\",\"\"]","[\"console.clear\",\"trueFunc\"]","[\"_ml_ads_ns\",\"null\"]","[\"_sp_.config\",\"undefined\"]","[\"isAdBlockActive\",\"false\"]","[\"AdController\",\"noopFunc\"]","[\"check_adblock\",\"true\"]","[\"initials.yld-pdpopunder\",\"\"]","[\"xRds\",\"false\"]","[\"tRds\",\"true\"]","[\"console.clear\",\"noopFunc\"]","[\"String.fromCharCode\",\"noopFunc\"]","[\"console.log\",\"noopFunc\"]","[\"String.prototype.charCodeAt\",\"trueFunc\"]","[\"console.clear\",\"undefined\"]","[\"attachEvent\",\"trueFunc\"]","[\"hasAdBlocker\",\"false\"]","[\"Object.prototype._getSalesHouseConfigurations\",\"noopFunc\"]","[\"sadbl\",\"false\"]","[\"adblockcheck\",\"false\"]","[\"blurred\",\"false\"]","[\"flashvars.adv_pre_src\",\"\"]","[\"showPopunder\",\"false\"]","[\"page_params.holiday_promo\",\"true\"]","[\"adsEnabled\",\"true\"]","[\"String.prototype.charAt\",\"trueFunc\"]","[\"ad_blocker\",\"false\"]","[\"blockAdBlock\",\"true\"]","[\"is_adblocked\",\"false\"]","[\"showPopunder\",\"noopFunc\"]","[\"VikiPlayer.prototype.pingAbFactor\",\"noopFunc\"]","[\"player.options.disableAds\",\"true\"]","[\"flashvars.adv_pre_vast\",\"\"]","[\"flashvars.adv_pre_vast_alt\",\"\"]","[\"x_width\",\"1\"]","[\"_site_ads_ns\",\"true\"]","[\"luxuretv.config\",\"\"]","[\"$.adblock\",\"0\"]","[\"Object.prototype.AdOverlay\",\"noopFunc\"]","[\"tkn_popunder\",\"null\"]","[\"can_run_ads\",\"true\"]","[\"adsBlockerDetector\",\"noopFunc\"]","[\"globalThis\",\"null\"]","[\"adblock\",\"false\"]","[\"__ads\",\"true\"]","[\"FlixPop.isPopGloballyEnabled\",\"falseFunc\"]","[\"fuckAdBlock\",\"false\"]","[\"$.magnificPopup.open\",\"noopFunc\"]","[\"adsenseadBlock\",\"noopFunc\"]","[\"flashvars.adv_pause_html\",\"\"]","[\"adblockSuspected\",\"false\"]","[\"disasterpingu\",\"false\"]","[\"CnnXt.Event.fire\",\"noopFunc\"]","[\"App.views.adsView.adblock\",\"false\"]","[\"$.fx.off\",\"true\"]","[\"adsClasses\",\"undefined\"]","[\"gsecs\",\"0\"]","[\"isAdb\",\"false\"]","[\"adBlockEnabled\",\"false\"]","[\"puShown\",\"true\"]","[\"ads_b_test\",\"true\"]","[\"showAds\",\"true\"]","[\"clicked\",\"true\"]","[\"eClicked\",\"true\"]","[\"number\",\"0\"]","[\"sync\",\"true\"]","[\"detectAdBlock\",\"noopFunc\"]","[\"attr\",\"{}\"]","[\"scriptSrc\",\"\"]","[\"Object.prototype.adReinsertion\",\"noopFunc\"]","[\"Object.prototype.disableAds\",\"true\"]","[\"cxStartDetectionProcess\",\"noopFunc\"]","[\"isAdBlocked\",\"false\"]","[\"adblock\",\"noopFunc\"]","[\"path\",\"\"]","[\"adBlock\",\"false\"]","[\"_ctrl_vt.blocked.ad_script\",\"false\"]","[\"blockAdBlock\",\"noopFunc\"]","[\"publd.noads\",\"true\"]","[\"caca\",\"noopFunc\"]","[\"Ok\",\"true\"]","[\"isBlocked\",\"false\"]","[\"safelink.adblock\",\"false\"]","[\"ClickUnder\",\"noopFunc\"]","[\"flashvars.adv_pre_url\",\"\"]","[\"flashvars.protect_block\",\"\"]","[\"flashvars.video_click_url\",\"\"]","[\"ifmax\",\"true\"]","[\"spoof\",\"noopFunc\"]","[\"btoa\",\"null\"]","[\"sp_ad\",\"true\"]","[\"adsBlocked\",\"false\"]","[\"_sp_.msg.displayMessage\",\"noopFunc\"]","[\"isAdblock\",\"false\"]","[\"atob\",\"noopFunc\"]","[\"CaptchmeState.adb\",\"undefined\"]","[\"indexedDB.open\",\"trueFunc\"]","[\"UhasAB\",\"false\"]","[\"flashvars.popunder_url\",\"\"]","[\"_pop\",\"noopFunc\"]","[\"_ti_update_user\",\"noopFunc\"]","[\"valid\",\"1\"]","[\"vastAds\",\"[]\"]","[\"isAdsDisplayed\",\"true\"]","[\"adblock\",\"1\"]","[\"frg\",\"1\"]","[\"time\",\"0\"]","[\"vpPrerollVideo\",\"undefined\"]","[\"ads\",\"true\"]","[\"GNCA_Ad_Support\",\"true\"]","[\"ad_permission\",\"true\"]","[\"Date.now\",\"noopFunc\"]","[\"jQuery.adblock\",\"1\"]","[\"ads_js_was_loaded\",\"true\"]","[\"VMG.Components.Adblock\",\"false\"]","[\"wlm.adsNotBlocked\",\"true\"]","[\"_n_app.popunder\",\"null\"]","[\"adblockDetector\",\"trueFunc\"]","[\"hasPoped\",\"true\"]","[\"flashvars.video_click_url\",\"undefined\"]","[\"flashvars.adv_start_html\",\"\"]","[\"jQuery.adblock\",\"false\"]","[\"google_jobrunner\",\"true\"]","[\"clientSide.adbDetect\",\"noopFunc\"]","[\"sec\",\"0\"]","[\"gadb\",\"false\"]","[\"checkadBlock\",\"noopFunc\"]","[\"di.VAST.XHRURLHandler\",\"noopFunc\"]","[\"cmnnrunads\",\"true\"]","[\"adBlocker\",\"false\"]","[\"adBlockDetected\",\"noopFunc\"]","[\"StileApp.somecontrols.adBlockDetected\",\"noopFunc\"]","[\"checkdom\",\"0\"]","[\"MDCore.adblock\",\"0\"]","[\"google_tag_data\",\"noopFunc\"]","[\"noAdBlock\",\"true\"]","[\"counter\",\"0\"]","[\"window_focus\",\"true\"]","[\"adsOk\",\"true\"]","[\"Object.prototype._parseVAST\",\"noopFunc\"]","[\"Object.prototype.createAdBlocker\",\"noopFunc\"]","[\"Object.prototype.isAdPeriod\",\"falseFunc\"]","[\"popup\",\"noopFunc\"]","[\"check\",\"true\"]","[\"daganKwarta\",\"true\"]","[\"dvsize\",\"51\"]","[\"isal\",\"true\"]","[\"count\",\"0\"]","[\"document.hidden\",\"true\"]","[\"lck\",\"true\"]","[\"awm\",\"true\"]","[\"adblockEnabled\",\"false\"]","[\"Global.adv\",\"undefined\"]","[\"ABLK\",\"false\"]","[\"pogo.intermission.staticAdIntermissionPeriod\",\"0\"]","[\"SubmitDownload1\",\"noopFunc\"]","[\"t\",\"0\"]","[\"ckaduMobilePop\",\"noopFunc\"]","[\"tieneAdblock\",\"0\"]","[\"adsAreBlocked\",\"false\"]","[\"cmgpbjs\",\"false\"]","[\"displayAdblockOverlay\",\"false\"]","[\"google\",\"false\"]","[\"Math.pow\",\"noopFunc\"]","[\"openInNewTab\",\"noopFunc\"]","[\"adblockDetector\",\"noopFunc\"]","[\"loadingAds\",\"true\"]","[\"ads_blocked\",\"0\"]","[\"runAdBlocker\",\"false\"]","[\"td_ad_background_click_link\",\"undefined\"]","[\"Adblock\",\"false\"]","[\"flashvars.logo_url\",\"\"]","[\"flashvars.logo_text\",\"\"]","[\"nlf.custom.userCapabilities\",\"false\"]","[\"nozNoAdBlock\",\"true\"]","[\"decodeURIComponent\",\"trueFunc\"]","[\"process\",\"noopFunc\"]","[\"LoadThisScript\",\"true\"]","[\"showPremLite\",\"true\"]","[\"closeBlockerModal\",\"false\"]","[\"adBlockDetector.isEnabled\",\"falseFunc\"]","[\"testerli\",\"false\"]","[\"areAdsDisplayed\",\"true\"]","[\"gkAdsWerbung\",\"true\"]","[\"document.bridCanRunAds\",\"true\"]","[\"pop_target\",\"null\"]","[\"is_banner\",\"true\"]","[\"$easyadvtblock\",\"false\"]","[\"iExist\",\"true\"]","[\"show_dfp_preroll\",\"false\"]","[\"show_youtube_preroll\",\"false\"]","[\"show_ads_gr8_lite\",\"true\"]","[\"doads\",\"true\"]","[\"jsUnda\",\"noopFunc\"]","[\"abp\",\"noopFunc\"]","[\"AlobaidiDetectAdBlock\",\"true\"]","[\"Advertisement\",\"1\"]","[\"adBlockDetected\",\"false\"]","[\"HTMLElement.prototype.attachShadow\",\"null\"]","[\"abp1\",\"1\"]","[\"pr_okvalida\",\"true\"]","[\"$.ajax\",\"trueFunc\"]","[\"getHomadConfig\",\"noopFunc\"]","[\"adsbygoogle.loaded\",\"true\"]","[\"cnbc.canShowAds\",\"true\"]","[\"Adv_ab\",\"false\"]","[\"chrome\",\"undefined\"]","[\"firefaucet\",\"true\"]","[\"app.addonIsInstalled\",\"trueFunc\"]","[\"flashvars.popunder_url\",\"undefined\"]","[\"adv\",\"true\"]","[\"pqdxwidthqt\",\"false\"]","[\"canRunAds\",\"true\"]","[\"Fingerprint2\",\"true\"]","[\"dclm_ajax_var.disclaimer_redirect_url\",\"\"]","[\"load_pop_power\",\"noopFunc\"]","[\"adBlockDetected\",\"true\"]","[\"Time_Start\",\"0\"]","[\"blockAdBlock\",\"trueFunc\"]","[\"ezstandalone.enabled\",\"true\"]","[\"CustomEvent\",\"noopFunc\"]","[\"ab\",\"false\"]","[\"go_popup\",\"{}\"]","[\"noBlocker\",\"true\"]","[\"adsbygoogle\",\"null\"]","[\"killads\",\"true\"]","[\"cRAds\",\"null\"]","[\"fabActive\",\"false\"]","[\"gWkbAdVert\",\"true\"]","[\"noblock\",\"true\"]","[\"ai_dummy\",\"true\"]","[\"ulp_noadb\",\"true\"]","[\"wgAffiliateEnabled\",\"false\"]","[\"ads\",\"null\"]","[\"checkAdsBlocked\",\"noopFunc\"]","[\"adsLoadable\",\"true\"]","[\"ASSetCookieAds\",\"null\"]","[\"AdBlockerDetected\",\"noopFunc\"]","[\"letShowAds\",\"true\"]","[\"tidakAdaPenghalangAds\",\"true\"]","[\"timeSec\",\"0\"]","[\"ads_unblocked\",\"true\"]","[\"xxSetting.adBlockerDetection\",\"false\"]","[\"better_ads_adblock\",\"null\"]","[\"open\",\"undefined\"]","[\"importFAB\",\"undefined\"]","[\"Drupal.behaviors.adBlockerPopup\",\"null\"]","[\"fake_ad\",\"true\"]","[\"flashvars.mlogo\",\"\"]","[\"koddostu_com_adblock_yok\",\"null\"]","[\"adsbygoogle\",\"trueFunc\"]","[\"player.ads.cuePoints\",\"undefined\"]","[\"adBlockDetected\",\"null\"]","[\"fouty\",\"true\"]","[\"detectAdblock\",\"noopFunc\"]","[\"better_ads_adblock\",\"1\"]","[\"hold_click\",\"false\"]","[\"sgpbCanRunAds\",\"true\"]","[\"config.pauseInspect\",\"false\"]","[\"D4zz\",\"noopFunc\"]","[\"appContext.adManager.context.current.adFriendly\",\"false\"]","[\"blockAdBlock._options.baitClass\",\"null\"]","[\"document.blocked_var\",\"1\"]","[\"____ads_js_blocked\",\"false\"]","[\"wIsAdBlocked\",\"false\"]","[\"WebSite.plsDisableAdBlock\",\"null\"]","[\"ads_blocked\",\"false\"]","[\"samDetected\",\"false\"]","[\"sems\",\"noopFunc\"]","[\"countClicks\",\"0\"]","[\"settings.adBlockerDetection\",\"false\"]","[\"mixpanel.get_distinct_id\",\"true\"]","[\"bannersLoaded\",\"4\"]","[\"notEmptyBanners\",\"4\"]","[\"fuckAdBlock._options.baitClass\",\"null\"]","[\"bscheck.adblocker\",\"noopFunc\"]","[\"qpcheck.ads\",\"noopFunc\"]","[\"CloudflareApps.installs.Ik7rmQ4t95Qk.options.measureDomain\",\"undefined\"]","[\"detectAB1\",\"noopFunc\"]","[\"paywallGateway.truncateContent\",\"noopFunc\"]","[\"adBlockDisabled\",\"true\"]","[\"blockedElement\",\"noopFunc\"]","[\"popit\",\"false\"]","[\"adBlockerDetected\",\"false\"]","[\"countdown\",\"0\"]","[\"decodeURI\",\"noopFunc\"]","[\"flashvars.adv_postpause_vast\",\"\"]","[\"univresalP\",\"noopFunc\"]","[\"runAdblock\",\"noopFunc\"]","[\"$tieE3\",\"true\"]","[\"xv_ad_block\",\"0\"]","[\"vidorev_jav_plugin_video_ads_object.vid_ads_m_video_ads\",\"\"]","[\"adsProvider.init\",\"noopFunc\"]","[\"SDKLoaded\",\"true\"]","[\"blockAdBlock._creatBait\",\"null\"]","[\"POPUNDER_ENABLED\",\"false\"]","[\"plugins.preroll\",\"noopFunc\"]","[\"errcode\",\"0\"]","[\"DHAntiAdBlocker\",\"true\"]","[\"adblock\",\"0\"]","[\"db.onerror\",\"noopFunc\"]","[\"p18\",\"undefined\"]","[\"asc\",\"1\"]","[\"ADBLOCKED\",\"false\"]","[\"adb\",\"0\"]","[\"String.fromCharCode\",\"trueFunc\"]","[\"adblock_use\",\"false\"]","[\"nitroAds.loaded\",\"true\"]","[\"createCanvas\",\"noopFunc\"]","[\"playerAdSettings.adLink\",\"\"]","[\"playerAdSettings.waitTime\",\"0\"]","[\"AdHandler.adblocked\",\"0\"]","[\"adsHeight\",\"11\"]","[\"checkCap\",\"0\"]","[\"waitTime\",\"0\"]","[\"isAdsLoaded\",\"true\"]","[\"adblockerAlert\",\"noopFunc\"]","[\"Object.prototype.parseXML\",\"noopFunc\"]","[\"Object.prototype.blackscreenDuration\",\"1\"]","[\"Object.prototype.adPlayerId\",\"\"]","[\"isadb\",\"false\"]","[\"adblockDetect\",\"noopFunc\"]","[\"style\",\"noopFunc\"]","[\"history.pushState\",\"noopFunc\"]","[\"google_unique_id\",\"6\"]","[\"new_config.timedown\",\"0\"]","[\"timedisplay\",\"0\"]","[\"Object.prototype.isAdDisabled\",\"true\"]","[\"hiddenProxyDetected\",\"false\"]","[\"SteadyWidgetSettings.adblockActive\",\"false\"]","[\"proclayer\",\"noopFunc\"]","[\"load_ads\",\"trueFunc\"]","[\"starPop\",\"1\"]","[\"Object.prototype.ads\",\"noopFunc\"]","[\"detectBlockAds\",\"noopFunc\"]","[\"ga\",\"trueFunc\"]","[\"enable_dl_after_countdown\",\"true\"]","[\"isGGSurvey\",\"true\"]","[\"ad_link\",\"\"]","[\"App.AdblockDetected\",\"false\"]","[\"SF.adblock\",\"true\"]","[\"startfrom\",\"0\"]","[\"Object.prototype.nopreroll_\",\"true\"]","[\"ublocked\",\"false\"]","[\"HP_Scout.adBlocked\",\"false\"]","[\"SD_IS_BLOCKING\",\"false\"]","[\"__BACKPLANE_API__.renderOptions.showAdBlock\",\"\"]","[\"Object.prototype.isNoAds\",\"{}\"]","[\"countDownDate\",\"0\"]","[\"setupSkin\",\"noopFunc\"]","[\"adSettings\",\"[]\"]","[\"count\",\"1\"]","[\"Object.prototype.enableInterstitial\",\"false\"]","[\"check\",\"noopFunc\"]","[\"ads\",\"undefined\"]","[\"ADBLOCK\",\"false\"]","[\"POSTPART_prototype.ADKEY\",\"noopFunc\"]","[\"adBlockDetected\",\"falseFunc\"]","[\"noAdBlock\",\"noopFunc\"]","[\"AdService.info.abd\",\"noopFunc\"]","[\"adBlockDetectionResult\",\"undefined\"]","[\"popped\",\"true\"]","[\"tiPopAction\",\"noopFunc\"]","[\"google.ima.OmidVerificationVendor\",\"{}\"]","[\"Object.prototype.omidAccessModeRules\",\"{}\"]","[\"puShown1\",\"true\"]","[\"document.hasFocus\",\"trueFunc\"]","[\"passthetest\",\"true\"]","[\"timeset\",\"0\"]","[\"pandaAdviewValidate\",\"true\"]","[\"verifica_adblock\",\"noopFunc\"]","[\"canGetAds\",\"true\"]","[\"ad_blocker_active\",\"false\"]","[\"init_welcome_ad\",\"noopFunc\"]","[\"moneyAbovePrivacyByvCDN\",\"true\"]","[\"dable\",\"{}\"]","[\"aLoad\",\"noopFunc\"]","[\"mtCanRunAdsSoItCanStillBeOnTheWeb\",\"true\"]","[\"document.body.contains\",\"trueFunc\"]","[\"popunder\",\"undefined\"]","[\"distance\",\"0\"]","[\"document.onclick\",\"\"]","[\"adEnable\",\"true\"]","[\"displayAds\",\"0\"]","[\"Overlayer\",\"{}\"]","[\"pop3getcookie\",\"undefined\"]","[\"pop3setcookie1\",\"undefined\"]","[\"pop3setCookie2\",\"undefined\"]","[\"_adshrink.skiptime\",\"0\"]","[\"AbleToRunAds\",\"true\"]","[\"TextEncoder\",\"undefined\"]","[\"abpblocked\",\"undefined\"]","[\"app.showModalAd\",\"noopFunc\"]","[\"adt\",\"0\"]","[\"test_adblock\",\"noopFunc\"]","[\"Object.prototype.adBlockerDetected\",\"falseFunc\"]","[\"vastEnabled\",\"false\"]","[\"detectadsbocker\",\"false\"]","[\"two_worker_data_js.js\",\"[]\"]","[\"FEATURE_DISABLE_ADOBE_POPUP_BY_COUNTRY\",\"true\"]","[\"questpassGuard\",\"noopFunc\"]","[\"admiral\",\"noopFunc\"]","[\"smartLoaded\",\"true\"]","[\"timeLeft\",\"0\"]","[\"Cookiebot\",\"noopFunc\"]","[\"navigator.brave\",\"undefined\"]","[\"feature_flags.interstitial_ads_flag\",\"false\"]","[\"feature_flags.interstitials_every_four_slides\",\"false\"]","[\"waldoSlotIds\",\"true\"]","[\"adblockstatus\",\"false\"]","[\"adblockEnabled\",\"noopFunc\"]","[\"banner_is_blocked\",\"false\"]","[\"Object.prototype.adBlocked\",\"false\"]","[\"makeMoney\",\"true\"]","[\"chp_adblock_browser\",\"noopFunc\"]","[\"Brid.A9.prototype.backfillAdUnits\",\"[]\"]","[\"slideShow.displayInterstitial\",\"true\"]","[\"S_Popup\",\"2\"]","[\"__INITIAL_STATE__.gameLists.gamesNoPrerollIds.indexOf\",\"trueFunc\"]","[\"navigator.standalone\",\"true\"]","[\"showAdss\",\"true\"]","[\"google.ima.settings.setDisableFlashAds\",\"noopFunc\"]","[\"window.showAdss\",\"true\"]","[\"window.showAds\",\"true\"]","[\"setTimer\",\"0\"]","[\"penci_adlbock.ad_blocker_detector\",\"0\"]","[\"Object.prototype.adblockDetector\",\"noopFunc\"]","[\"blext\",\"true\"]","[\"vidorev_jav_plugin_video_ads_object\",\"{}\"]","[\"vidorev_jav_plugin_video_ads_object_post\",\"{}\"]","[\"S_Popup\",\"10\"]","[\"$.tstracker\",\"noopFunc\"]","[\"bmak.js_post\",\"false\"]","[\"ccsrv\",\"\"]","[\"lcs_SerName\",\"\"]","[\"flashvars.event_reporting\",\"\"]","[\"firebase.analytics\",\"noopFunc\"]","[\"akamaiDisableServerIpLookup\",\"noopFunc\"]","[\"nads.createAd\",\"trueFunc\"]","[\"ga\",\"noopFunc\"]","[\"huecosPBS.nstdX\",\"null\"]","[\"DTM.trackAsyncPV\",\"noopFunc\"]","[\"newPageViewSpeedtest\",\"noopFunc\"]","[\"pubg.unload\",\"noopFunc\"]","[\"generateGalleryAd\",\"noopFunc\"]","[\"mediator\",\"noopFunc\"]","[\"Object.prototype.subscribe\",\"noopFunc\"]","[\"Object.prototype.vjsPlayer.ads\",\"noopFunc\"]","[\"network_user_id\",\"\"]","[\"googletag.cmd\",\"{}\"]","[\"Object.prototype.setDisableFlashAds\",\"noopFunc\"]","[\"DD_RUM.addTiming\",\"noopFunc\"]","[\"chameleonVideo.adDisabledRequested\",\"true\"]","[\"AdmostClient\",\"{}\"]","[\"analytics\",\"{}\"]","[\"datalayer\",\"[]\"]","[\"Object.prototype.isInitialLoadDisabled\",\"noopFunc\"]","[\"listingGoogleEETracking\",\"noopFunc\"]","[\"dcsMultiTrack\",\"noopFunc\"]","[\"urlStrArray\",\"noopFunc\"]","[\"pa\",\"{}\"]","[\"Object.prototype.setConfigurations\",\"noopFunc\"]","[\"Object.prototype.bk_addPageCtx\",\"noopFunc\"]","[\"Object.prototype.bk_doJSTag\",\"noopFunc\"]","[\"passFingerPrint\",\"noopFunc\"]","[\"DD_LOGS\",\"noopFunc\"]","[\"optimizely\",\"{}\"]","[\"optimizely.initialized\",\"true\"]","[\"google_optimize\",\"{}\"]","[\"google_optimize.get\",\"noopFunc\"]","[\"_gsq\",\"{}\"]","[\"_gsq.push\",\"noopFunc\"]","[\"iom\",\"{}\"]","[\"iom.c\",\"noopFunc\"]","[\"googletag._vars_\",\"{}\"]","[\"googletag._loadStarted_\",\"true\"]","[\"googletag._loaded_\",\"true\"]","[\"google_unique_id\",\"1\"]","[\"google.javascript\",\"{}\"]","[\"google.javascript.ads\",\"{}\"]","[\"google_global_correlator\",\"1\"]","[\"eyshi_start\",\"false\"]","[\"adNotificationDetected\",\"false\"]"];

const hostnamesMap = new Map([["youtube.com",[0,1]],["youtubekids.com",[0,1]],["youtube-nocookie.com",[0,1]],["t-online.de",2],["whatfinger.com",3],["timesofindia.indiatimes.com",4],["economictimes.indiatimes.com",5],["userscloud.com",6],["motherless.com",7],["sueddeutsche.de",8],["watson.de",8],["watchanimesub.net",9],["wco.tv",9],["wcoanimesub.tv",9],["wcoforever.net",9],["filehorse.com",9],["guidetnt.com",9],["sp-today.com",9],["linkvertise.com",9],["textbin.net",9],["eropaste.com",9],["pastebr.xyz",9],["getpaste.link",9],["sharetext.me",9],["note.sieuthuthuat.com",9],["elcriticodelatele.com",[9,303]],["gadgets.es",[9,303]],["wiwo.de",10],["masteranime.es",11],["9anime.vip",11],["fullxh.com",12],["megaxh.com",12],["unlockxh4.com",12],["xhadult2.com",12],["xhadult3.com",12],["xhadult4.com",12],["xhadult5.com",12],["xhamster46.com",12],["xhday.com",12],["xhday1.com",12],["xhmoon5.com",12],["xhplanet1.com",12],["xhplanet2.com",12],["xhreal2.com",12],["xhreal3.com",12],["xhtab2.com",12],["xhvictory.com",12],["xhwebsite.com",12],["xhwebsite2.com",12],["xhwide1.com",12],["xhwide8.com",12],["alphaporno.com",[15,401]],["porngem.com",15],["uploadbank.com",15],["shortit.pw",[15,106]],["familyporn.tv",15],["cloudemb.com",[15,325]],["sbplay1.com",15],["swatchseries.ru",15],["id45.cyou",15],["85tube.com",[15,90]],["pobre.tv",15],["k1nk.co",15],["watchasians.cc",15],["photopea.com",15],["imsdb.pw",[15,24]],["soltoshindo.com",15],["techtimes.com",16],["dronedj.com",18],["freeplayervideo.com",19],["nazarickol.com",19],["player-cdn.com",19],["voe.sx",19],["housecardsummerbutton.com",19],["bigclatterhomesguideservice.com",19],["uptodatefinishconference.com",19],["uptodatefinishconferenceroom.com",19],["tinycat-voe-fashion.com",19],["motphimtv.com",19],["rabbitstream.net",19],["streamlare.com",19],["projectfreetv.one",19],["nolive.me",20],["cbs.com",21],["paramountplus.com",21],["player.glomex.com",22],["merkur.de",22],["tz.de",22],["hotpornfile.org",24],["chillicams.net",24],["rpdrlatino.live",24],["adbull.org",25],["mitly.us",25],["linkrex.net",25],["linx.cc",25],["oke.io",25],["dz4link.com",25],["linclik.com",25],["shrt10.com",25],["loptelink.com",25],["cut-fly.com",25],["linkfinal.com",25],["payskip.org",25],["cutpaid.com",25],["forexmab.com",25],["linkjust.com",25],["linkszia.co",25],["leechpremium.link",25],["icutlink.com",[25,129]],["stfly.me",25],["oncehelp.com",25],["bit-url.com",25],["rgl.vn",25],["reqlinks.net",25],["wu8.in",25],["bitlk.com",25],["qlinks.eu",25],["link.3dmili.com",25],["short-fly.com",25],["foxseotools.com",25],["pngit.live",25],["link.turkdown.com",25],["slink.bid",[25,71]],["earnwithshortlink.com",25],["7r6.com",25],["enrt.eu",25],["oko.sh",25],["shortpaid.com",25],["ckk.ai",25],["fc.lc",25],["fstore.biz",25],["cuts-url.com",25],["eio.io",25],["exe.app",25],["exee.io",25],["exey.io",25],["srek.net",25],["skincarie.com",25],["exeo.app",25],["clk.ink",25],["birdurls.com",25],["coinlyhub.com",[25,218]],["adsafelink.com",25],["aii.sh",25],["shrinkurl.org",25],["adsh.cc",25],["cybertechng.com",[25,227]],["owllink.net",25],["fir3.net",25],["cutdl.xyz",25],["gplinks.co",25],["loan2host.com",25],["tei.ai",25],["tii.ai",25],["iir.ai",25],["shorteet.com",[25,249]],["sekilastekno.com",25],["promo-visits.site",25],["satoshi-win.xyz",[25,258]],["shorterall.com",25],["smoner.com",25],["bitlinks.pw",25],["linkad.in",25],["linkshrnk.com",25],["popimed.com",25],["linksly.co",25],["ur-ly.xyz",25],["shrinkme.in",25],["rodjulian.com",25],["pkr.pw",25],["shrinke.me",25],["imagenesderopaparaperros.com",25],["shortenbuddy.com",25],["gibit.xyz",25],["apksvip.com",25],["cashurl.in",25],["4cash.me",25],["namaidani.com",25],["bitfly.io",25],["teknomuda.com",25],["illink.net",25],["miuiku.com",25],["yourtechnology.online",25],["savelink.site",25],["fxlap.com",25],["earnfasts.com",25],["short-cash2.xyz",25],["absolutesmmpanel.com",25],["myhiddentech.com",25],["tawiia.com",25],["droplink.co",25],["recipestutorials.com",25],["ashort1a.xyz",25],["2shrt.com",25],["apkshrt.com",25],["genpassword.top",25],["srts.me",25],["cuturl.in",25],["lyricsbot.pw",25],["short88.com",25],["cashearn.cc",25],["kutmoney.com",25],["kutt.io",25],["sanoybonito.club",25],["samaa-pro.com",25],["miklpro.com",25],["modapk.link",25],["shrinkforearn.in",25],["1shorten.com",25],["ccurl.net",25],["st23q.com",25],["beautyram.info",25],["gonety.com",25],["viraloc.com",25],["clickscoin.com",25],["forex-trnd.com",25],["kiiw.icu",25],["vshort.link",25],["link.ltc24.com",25],["galaxy-link.space",25],["linkpoi.me",25],["usdshort.com",25],["bitcoinly.in",25],["menjelajahi.com",25],["pewgame.com",25],["yxoshort.com",25],["1link.vip",25],["linkcc.pro",25],["haonguyen.top",25],["jameeltips.us",25],["claimfreebits.com",25],["mfk-shorter.com",25],["crazyblog.in",25],["gtlink.co",25],["link.tokenoto.com",25],["cutearn.net",25],["rshrt.com",25],["jp88.xyz",25],["short.palmeratv.com",25],["filezipa.com",25],["arab-chat.club",25],["dz-linkk.com",25],["download.freestudyweb.com",25],["theblissempire.com",25],["shortlink.prz.pw",25],["zipurls.com",25],["finanzas-vida.com",25],["skiplink.org",25],["techmyhub.com",25],["adurly.cc",25],["pix4link.com",25],["paid4.link",25],["ez4short.com",25],["link.asiaon.top",25],["go.gets4link.com",25],["download.sharenulled.net",25],["go.mozlink.net",25],["enagato.com",25],["linkres.in",25],["webo.one",25],["automotur.club",25],["pandarticles.com",25],["beingtek.com",25],["katflys.com",25],["shorturl.unityassets4free.com",25],["disheye.com",25],["techymedies.com",25],["techysuccess.com",25],["toptap.website",[25,331]],["za.gl",[25,153]],["newsalret.com",25],["download.baominh.tech",25],["bblink.com",25],["abre.click",25],["linkbr.xyz",25],["myad.biz",25],["go.netfile.cc",25],["try2link.com",25],["swzz.xyz",25],["vevioz.com",25],["charexempire.com",25],["clk.asia",25],["rancah.com",25],["egfly.xyz",25],["linka.click",25],["sturls.com",25],["myshrinker.com",25],["upshrink.com",25],["go.adinsurance.xyz",25],["tecnologiapp.site",25],["adslink.programasfulltaf16.com",25],["aylink.info",25],["dash-free.com",[25,227]],["rainurl.com",[25,227]],["snowurl.com",[25,227]],["netfile.cc",25],["link.insurance-space.xyz",25],["link.insurglobal.xyz",25],["theconomy.me",25],["rajsayt.xyz",25],["rocklink.in",25],["linkshortify.site",25],["adinsurance.xyz",25],["insurglobal.xyz",25],["techgeek.digital",25],["download3s.net",25],["shortx.net",25],["musicc.xyz",25],["cutx.me",25],["btcwalk.com",25],["cryptoon.xyz",25],["easysky.in",25],["veganab.co",25],["shortawy.com",25],["tlin.me",25],["apprepack.com",25],["post.nites-tv.xyz",25],["sh2rt.com",25],["up-load.one",25],["zuba.link",25],["pandaznetwork.com",25],["du-link.in",25],["linksfy.co",25],["adrinolinks.in",25],["golink.xaydungplus.com",25],["bestcash2020.com",25],["cut-y.net",25],["hoxiin.com",25],["technemo.xyz",25],["baicho.xyz",25],["go.linkbnao.com",25],["link-yz.com",25],["paylinnk.com",25],["thizissam.in",25],["ier.ai",25],["bloggertheme.xyz",25],["adslink.pw",25],["enit.in",[25,245]],["oii.io",25],["novelssites.com",25],["links.medipost.org",25],["faucetcrypto.net",25],["short.freeltc.top",25],["trxking.xyz",25],["weadown.com",25],["cookdov.com",25],["xpshort.com",25],["bdnewsx.com",25],["m.bloggingguidance.com",25],["blog.onroid.com",25],["cutty.app",25],["link.codevn.net",25],["upfilesurls.com",25],["shareus.site",25],["link4rev.site",25],["bloginguru.xyz",25],["tii.la",25],["celinks.net",25],["c2g.at",25],["atglinks.com",25],["shortzu.icu",25],["bitcosite.com",25],["cryptosh.pro",25],["sigmalinks.in",25],["link68.net",25],["traffic123.net",25],["gainl.ink",25],["windowslite.net",[25,227]],["coinsl.click",25],["exalink.fun",25],["watchmygf.me",[26,52]],["fpo.xxx",[26,54]],["sexemix.com",26],["heavyfetish.com",[26,440]],["you-porn.com",28],["youporngay.com",28],["youpornru.com",28],["9908ww.com",28],["adelaidepawnbroker.com",28],["bztube.com",28],["hotovs.com",28],["insuredhome.org",28],["nudegista.com",28],["pornluck.com",28],["vidd.se",28],["pornhub.com",28],["pornerbros.com",29],["freep.com",29],["porn.com",30],["tune.pk",31],["noticias.gospelmais.com.br",32],["techperiod.com",32],["jacquieetmicheltv.net",[33,34]],["illicoporno.com",33],["lavoixdux.com",33],["tonpornodujour.com",33],["jacquieetmichel.net",33],["swame.com",33],["vosfemmes.com",33],["voyeurfrance.net",33],["viki.com",[35,36]],["sleazyneasy.com",[37,38,39]],["smutr.com",[37,214]],["yourporngod.com",[37,38]],["javbangers.com",[37,291]],["camfox.com",37],["camthots.tv",[37,123]],["shegotass.info",37],["amateur8.com",37],["bigtitslust.com",37],["ebony8.com",37],["freeporn8.com",37],["lesbian8.com",37],["maturetubehere.com",37],["sortporn.com",37],["webcamvau.com",37],["motherporno.com",[37,38,54,125]],["theporngod.com",[37,38]],["pornsocket.com",40],["luxuretv.com",41],["flashx.net",42],["porndig.com",[43,44]],["webcheats.com.br",45],["ceesty.com",[46,47]],["gestyy.com",[46,47]],["corneey.com",47],["destyy.com",47],["festyy.com",47],["sh.st",47],["angrybirdsnest.com",48],["zrozz.com",48],["clix4btc.com",48],["katfile.com",48],["4tests.com",48],["planet-explorers-isos.com",48],["business-standard.com",48],["goltelevision.com",48],["news-und-nachrichten.de",48],["laradiobbs.net",48],["urlaubspartner.net",48],["produktion.de",48],["cinemaxxl.de",48],["bladesalvador.com",48],["tempr.email",48],["cshort.org",48],["friendproject.net",48],["covrhub.com",48],["planetsuzy.org",49],["empflix.com",50],["filespace.com",51],["transparentcalifornia.com",52],["deepbrid.com",53],["submityourflicks.com",54],["3movs.com",54],["cambay.tv",[54,103,123,125]],["bravoerotica.net",[54,125]],["youx.xxx",54],["camclips.tv",[54,214]],["camflow.tv",[54,103,125,177,253]],["camhoes.tv",[54,103,123,125,177,253]],["xmegadrive.com",54],["xxxymovies.com",54],["xxxshake.com",54],["gayck.com",54],["xhand.com",[54,125]],["analdin.com",[54,125]],["webnovel.com",55],["schwaebische.de",56],["mercurynews.com",57],["chicoer.com",57],["dailybreeze.com",57],["dailybulletin.com",57],["dailynews.com",57],["delcotimes.com",57],["eastbaytimes.com",57],["macombdaily.com",57],["ocregister.com",57],["pasadenastarnews.com",57],["pe.com",57],["presstelegram.com",57],["redlandsdailyfacts.com",57],["reviewjournal.com",57],["santacruzsentinel.com",57],["saratogian.com",57],["sentinelandenterprise.com",57],["sgvtribune.com",57],["tampabay.com",57],["times-standard.com",57],["theoaklandpress.com",57],["trentonian.com",57],["twincities.com",57],["whittierdailynews.com",57],["bostonherald.com",57],["dailycamera.com",57],["sbsun.com",57],["dailydemocrat.com",57],["montereyherald.com",57],["orovillemr.com",57],["record-bee.com",57],["redbluffdailynews.com",57],["reporterherald.com",57],["thereporter.com",57],["timescall.com",57],["timesheraldonline.com",57],["ukiahdailyjournal.com",57],["dailylocal.com",57],["8tracks.com",58],["revealname.com",59],["fcportables.com",[60,61]],["golfchannel.com",63],["telemundodeportes.com",63],["stream.nbcsports.com",63],["gamcore.com",64],["porcore.com",64],["69games.xxx",64],["javmix.app",64],["tecknity.com",65],["haaretz.com",66],["hungama.com",66],["a-o.ninja",66],["anime-odcinki.pl",66],["kumpulmanga.org",66],["shortgoo.blogspot.com",66],["tonanmedia.my.id",[66,429]],["yurasu.xyz",66],["isekaipalace.com",66],["megadescarga.net",[67,68,69,70]],["megadescargas.net",[67,68,69,70]],["audioz.cc",71],["audioz.es",71],["luckydice.net",71],["adarima.org",71],["tieutietkiem.com",71],["weatherwx.com",71],["sattaguess.com",71],["winshell.de",71],["rosasidan.ws",71],["modmakers.xyz",71],["gamepure.in",71],["warrenrahul.in",71],["austiblox.net",71],["upiapi.in",71],["myownguess.in",71],["watchhentai.net",71],["thichcode.net",71],["vikistream.com",72],["eplayer.click",[72,73]],["mega4upload.com",[73,79]],["ennovelas.com",[73,79]],["n-tv.de",74],["brigitte.de",75],["stern.de",75],["foxsports.com.au",76],["canberratimes.com.au",76],["thesimsresource.com",77],["bdnewszh.com",79],["streamservicehd.click",79],["timeforbitco.in",80],["worldofbitco.in",[80,93]],["weatherx.co.in",[80,93]],["getyourbitco.in",80],["sunbtc.space",80],["ctrl.blog",81],["sportlife.es",82],["tubitv.com",82],["libertaddigital.com",83],["finofilipino.org",84],["acortarm.xyz",85],["acortame.xyz",85],["speedtest.net",86],["mysflink.blogspot.com",87],["assia.tv",88],["assia4.com",88],["assia24.com",88],["cwtvembeds.com",[90,124]],["camlovers.tv",90],["porntn.com",90],["pornissimo.org",90],["sexcams-24.com",[90,103]],["watchporn.to",90],["camwhorez.video",90],["ojogos.com.br",95],["powforums.com",96],["supforums.com",96],["studybullet.com",96],["usgamer.net",97],["recordonline.com",97],["123tvseries.co",99],["freebitcoin.win",100],["e-monsite.com",100],["coindice.win",100],["temp-mails.com",101],["freiepresse.de",102],["camhub.cc",103],["love4porn.com",103],["thotvids.com",103],["celebwhore.com",103],["cluset.com",103],["4kporn.xxx",103],["xhomealone.com",103],["lusttaboo.com",[103,366]],["mp3fiber.com",104],["suedkurier.de",105],["anysex.com",107],["gomiblog.com",108],["iptvtools.net",108],["vlist.se",109],["pornve.com",110],["coolrom.com.au",111],["bitcotasks.com",111],["pornohirsch.net",112],["marie-claire.es",113],["gamezhero.com",113],["flashgirlgames.com",113],["onlinesudoku.games",113],["mpg.football",113],["sssam.com",113],["globalnews.ca",114],["videotekaime.net",115],["drinksmixer.com",116],["leitesculinaria.com",116],["fupa.net",117],["ge-map-overlays.appspot.com",118],["browardpalmbeach.com",119],["dallasobserver.com",119],["houstonpress.com",119],["miaminewtimes.com",119],["phoenixnewtimes.com",119],["westword.com",119],["wilmaa.com",120],["nhentai.net",121],["fox.com.tr",122],["caminspector.net",123],["camwhoreshd.com",123],["camgoddess.tv",123],["gay4porn.com",125],["mypornhere.com",125],["mediapason.it",126],["linkspaid.com",126],["tuotromedico.com",126],["neoteo.com",126],["phoneswiki.com",126],["celebmix.com",126],["myneobuxportal.com",126],["oyungibi.com",126],["25yearslatersite.com",126],["jeshoots.com",127],["techhx.com",127],["karanapk.com",127],["videogreen.xyz",128],["sypl.xyz",128],["playembed.xyz",128],["javhdporn.net",128],["redanimedatabase.cloud",128],["javstream.top",128],["flashplayer.fullstacks.net",130],["cloudapps.herokuapp.com",130],["youfiles.herokuapp.com",130],["temp-mail.org",131],["di.fm",132],["comnuan.com",133],["veedi.com",134],["battleboats.io",134],["fruitlab.com",135],["haddoz.net",135],["garoetpos.com",135],["stiletv.it",136],["hpav.tv",137],["hpjav.tv",137],["hqtv.biz",139],["liveuamap.com",140],["filmiseriali.com",140],["muvibg.com",140],["linksht.com",[141,142]],["audycje.tokfm.pl",143],["hulu.com",[144,145,146]],["siriusfiles.com",147],["shush.se",148],["aniwatcher.com",149],["emurom.net",150],["allkpop.com",151],["azmath.info",152],["downfile.site",152],["downphanmem.com",152],["expertvn.com",152],["memangbau.com",152],["scratch247.info",152],["trangchu.news",152],["adfoc.us",152],["mynewsmedia.co",[152,242]],["sptfy.be",152],["streamcheck.link",152],["momomesh.tv",154],["kfrfansub.com",156],["thuglink.com",156],["voipreview.org",156],["audiotag.info",157],["hanime.tv",158],["pogo.com",159],["cloudvideo.tv",160],["legionjuegos.org",161],["legionpeliculas.org",161],["legionprogramas.org",161],["16honeys.com",162],["elespanol.com",163],["remodelista.com",164],["coolmathgames.com",[165,166,167,453]],["audiofanzine.com",168],["noweconomy.live",170],["howifx.com",170],["vavada5com.com",170],["hitokin.net",171],["elil.cc",172],["developerinsider.co",173],["ilprimatonazionale.it",174],["hotabis.com",174],["root-nation.com",174],["italpress.com",174],["airsoftmilsimnews.com",174],["artribune.com",174],["thehindu.com",175],["cambro.tv",[176,177]],["nibelungen-kurier.de",178],["noz.de",179],["earthgarage.com",181],["pianetamountainbike.it",182],["barchart.com",183],["modelisme.com",184],["parasportontario.ca",184],["prescottenews.com",184],["nrj-play.fr",185],["oeffentlicher-dienst.info",186],["hackingwithreact.com",187],["gutekueche.at",188],["eplfootballmatch.com",189],["peekvids.com",190],["playvids.com",190],["pornflip.com",190],["redensarten-index.de",191],["vw-page.com",192],["securenetsystems.net",193],["viz.com",[194,195]],["queenfaucet.website",196],["0rechner.de",197],["configspc.com",198],["xopenload.me",198],["uptobox.com",198],["uptostream.com",198],["onepiece-tube.com",199],["japgay.com",200],["mega-debrid.eu",201],["dreamdth.com",202],["pijanitvor.com",202],["diaridegirona.cat",205],["diariodeibiza.es",205],["diariodemallorca.es",205],["diarioinformacion.com",205],["eldia.es",205],["emporda.info",205],["farodevigo.es",205],["laopinioncoruna.es",205],["laopiniondemalaga.es",205],["laopiniondemurcia.es",205],["laopiniondezamora.es",205],["laprovincia.es",205],["levante-emv.com",205],["mallorcazeitung.es",205],["regio7.cat",205],["superdeporte.es",205],["playpaste.com",206],["player.rtl2.de",207],["freetutorialsus.com",208],["vidlii.com",[208,223]],["iammagnus.com",208],["dailyvideoreports.net",208],["unityassets4free.com",208],["cnbc.com",209],["puzzles.msn.com",210],["metro.us",210],["newsobserver.com",210],["arkadiumhosted.com",210],["spankbang.com",211],["firefaucet.win",212],["direct-link.net",213],["direkt-wissen.com",213],["link-to.net",213],["fullhdxxx.com",215],["getintopc.com",216],["unique-tutorials.info",216],["etonline.com",217],["creatur.io",217],["drphil.com",217],["urbanmilwaukee.com",217],["ontiva.com",217],["hideandseek.world",217],["myabandonware.com",217],["mangaalarab.com",217],["kendam.com",217],["wttw.com",217],["synonyms.com",217],["definitions.net",217],["hostmath.com",217],["camvideoshub.com",217],["minhaconexao.com.br",217],["bravedown.com",217],["home-made-videos.com",219],["pxrnxx.xyz",219],["amateur-couples.com",219],["slutdump.com",219],["produsat.com",221],["12thman.com",223],["acusports.com",223],["atlantic10.com",223],["auburntigers.com",223],["baylorbears.com",223],["bceagles.com",223],["bgsufalcons.com",223],["big12sports.com",223],["bigten.org",223],["bradleybraves.com",223],["butlersports.com",223],["cmumavericks.com",223],["conferenceusa.com",223],["cyclones.com",223],["dartmouthsports.com",223],["daytonflyers.com",223],["dbupatriots.com",223],["dbusports.com",223],["denverpioneers.com",223],["fduknights.com",223],["fgcuathletics.com",223],["fightinghawks.com",223],["fightingillini.com",223],["floridagators.com",223],["friars.com",223],["friscofighters.com",223],["gamecocksonline.com",223],["goarmywestpoint.com",223],["gobison.com",223],["goblueraiders.com",223],["gobobcats.com",223],["gocards.com",223],["gocreighton.com",223],["godeacs.com",223],["goexplorers.com",223],["goetbutigers.com",223],["gofrogs.com",223],["gogriffs.com",223],["gogriz.com",223],["golobos.com",223],["gomarquette.com",223],["gopack.com",223],["gophersports.com",223],["goprincetontigers.com",223],["gopsusports.com",223],["goracers.com",223],["goshockers.com",223],["goterriers.com",223],["gotigersgo.com",223],["gousfbulls.com",223],["govandals.com",223],["gowyo.com",223],["goxavier.com",223],["gozags.com",223],["gozips.com",223],["griffinathletics.com",223],["guhoyas.com",223],["gwusports.com",223],["hailstate.com",223],["hamptonpirates.com",223],["hawaiiathletics.com",223],["hokiesports.com",223],["huskers.com",223],["icgaels.com",223],["iuhoosiers.com",223],["jsugamecocksports.com",223],["longbeachstate.com",223],["loyolaramblers.com",223],["lrtrojans.com",223],["lsusports.net",223],["morrisvillemustangs.com",223],["msuspartans.com",223],["muleriderathletics.com",223],["mutigers.com",223],["navysports.com",223],["nevadawolfpack.com",223],["niuhuskies.com",223],["nkunorse.com",223],["nuhuskies.com",223],["nusports.com",223],["okstate.com",223],["olemisssports.com",223],["omavs.com",223],["ovcsports.com",223],["owlsports.com",223],["purduesports.com",223],["redstormsports.com",223],["richmondspiders.com",223],["sfajacks.com",223],["shupirates.com",223],["siusalukis.com",223],["smcgaels.com",223],["smumustangs.com",223],["soconsports.com",223],["soonersports.com",223],["themw.com",223],["tulsahurricane.com",223],["txst.com",223],["txstatebobcats.com",223],["ubbulls.com",223],["ucfknights.com",223],["ucirvinesports.com",223],["uconnhuskies.com",223],["uhcougars.com",223],["uicflames.com",223],["umterps.com",223],["uncwsports.com",223],["unipanthers.com",223],["unlvrebels.com",223],["uoflsports.com",223],["usdtoreros.com",223],["utahstateaggies.com",223],["utepathletics.com",223],["utrockets.com",223],["uvmathletics.com",223],["uwbadgers.com",223],["villanova.com",223],["wkusports.com",223],["wmubroncos.com",223],["woffordterriers.com",223],["1pack1goal.com",223],["bcuathletics.com",223],["bubraves.com",223],["goblackbears.com",223],["golightsgo.com",223],["gomcpanthers.com",223],["goutsa.com",223],["mercerbears.com",223],["pirateblue.com",223],["pirateblue.net",223],["pirateblue.org",223],["quinnipiacbobcats.com",223],["towsontigers.com",223],["tribeathletics.com",223],["tribeclub.com",223],["utepminermaniacs.com",223],["utepminers.com",223],["wkutickets.com",223],["aopathletics.org",223],["atlantichockeyonline.com",223],["bigsouthnetwork.com",223],["bigsouthsports.com",223],["chawomenshockey.com",223],["dbupatriots.org",223],["drakerelays.org",223],["ecac.org",223],["ecacsports.com",223],["emueagles.com",223],["emugameday.com",223],["gculopes.com",223],["godrakebulldog.com",223],["godrakebulldogs.com",223],["godrakebulldogs.net",223],["goeags.com",223],["goislander.com",223],["goislanders.com",223],["gojacks.com",223],["gomacsports.com",223],["gseagles.com",223],["hubison.com",223],["iowaconference.com",223],["ksuowls.com",223],["lonestarconference.org",223],["mascac.org",223],["midwestconference.org",223],["mountaineast.org",223],["niu-pack.com",223],["nulakers.ca",223],["oswegolakers.com",223],["ovcdigitalnetwork.com",223],["pacersports.com",223],["rmacsports.org",223],["rollrivers.com",223],["samfordsports.com",223],["uncpbraves.com",223],["usfdons.com",223],["wiacsports.com",223],["alaskananooks.com",223],["broncathleticfund.com",223],["cameronaggies.com",223],["columbiacougars.com",223],["etownbluejays.com",223],["gobadgers.ca",223],["golancers.ca",223],["gometrostate.com",223],["gothunderbirds.ca",223],["kentstatesports.com",223],["lehighsports.com",223],["lopers.com",223],["lycoathletics.com",223],["lycomingathletics.com",223],["maraudersports.com",223],["mauiinvitational.com",223],["msumavericks.com",223],["nauathletics.com",223],["nueagles.com",223],["nwusports.com",223],["oceanbreezenyc.org",223],["patriotathleticfund.com",223],["pittband.com",223],["principiaathletics.com",223],["roadrunnersathletics.com",223],["sidearmsocial.com",223],["snhupenmen.com",223],["stablerarena.com",223],["stoutbluedevils.com",223],["uwlathletics.com",223],["yumacs.com",223],["collegefootballplayoff.com",223],["csurams.com",223],["cubuffs.com",223],["gobearcats.com",223],["gohuskies.com",223],["mgoblue.com",223],["osubeavers.com",223],["pittsburghpanthers.com",223],["rolltide.com",223],["texassports.com",223],["thesundevils.com",223],["uclabruins.com",223],["wvuathletics.com",223],["wvusports.com",223],["arizonawildcats.com",223],["calbears.com",223],["cuse.com",223],["georgiadogs.com",223],["goducks.com",223],["goheels.com",223],["gostanford.com",223],["insidekstatesports.com",223],["insidekstatesports.info",223],["insidekstatesports.net",223],["insidekstatesports.org",223],["k-stateathletics.com",223],["k-statefootball.net",223],["k-statefootball.org",223],["k-statesports.com",223],["k-statesports.net",223],["k-statesports.org",223],["k-statewomenshoops.com",223],["k-statewomenshoops.net",223],["k-statewomenshoops.org",223],["kstateathletics.com",223],["kstatefootball.net",223],["kstatefootball.org",223],["kstatesports.com",223],["kstatewomenshoops.com",223],["kstatewomenshoops.net",223],["kstatewomenshoops.org",223],["ksuathletics.com",223],["ksusports.com",223],["scarletknights.com",223],["showdownforrelief.com",223],["syracusecrunch.com",223],["texastech.com",223],["theacc.com",223],["ukathletics.com",223],["usctrojans.com",223],["utahutes.com",223],["utsports.com",223],["wsucougars.com",223],["mangadods.com",223],["tricksplit.io",223],["litecoinads.com",223],["template.city",223],["fangraphs.com",224],["4players.de",[225,288]],["buffed.de",225],["gamesaktuell.de",225],["gamezone.de",225],["pcgames.de",225],["player.pcgameshardware.de",225],["videogameszone.de",225],["spieletipps.de",225],["planetaminecraft.com",226],["flyad.vip",227],["lapresse.ca",228],["kolyoom.com",229],["ilovephd.com",229],["kseriesubthai.com",230],["upstream.to",231],["negumo.com",232],["games.wkb.jp",[233,234]],["channelmyanmar.org",[235,236]],["u-s-news.com",236],["fandom.com",[237,471,472]],["kenshi.fandom.com",238],["hausbau-forum.de",239],["fake-it.ws",240],["laksa19.github.io",241],["revadvert.com",242],["1shortlink.com",243],["nesia.my.id",244],["makemoneywithurl.com",245],["resetoff.pl",246],["sexodi.com",246],["cdn77.org",247],["howtofixwindows.com",248],["3sexporn.com",249],["momxxxsex.com",249],["myfreevintageporn.com",249],["penisbuyutucum.net",249],["lightnovelworld.com",250],["ujszo.com",251],["newsmax.com",252],["bobs-tube.com",253],["nadidetarifler.com",254],["siz.tv",254],["suzylu.co.uk",[255,256]],["onworks.net",257],["yabiladi.com",257],["homeairquality.org",259],["faucettronn.click",259],["downloadsoft.net",260],["imgair.net",261],["imgblaze.net",261],["imgfrost.net",261],["pixsera.net",261],["vestimage.site",261],["imgwia.buzz",261],["testlanguages.com",262],["newsinlevels.com",262],["videosinlevels.com",262],["my-code4you.blogspot.com",263],["vlxxs.net",264],["rapelust.com",264],["vtube.to",264],["vtplay.net",264],["desitelugusex.com",264],["xvideos-downloader.net",264],["xxxvideotube.net",264],["sdefx.cloud",264],["nozomi.la",264],["moviesonlinefree.net",264],["flickr.com",265],["firefile.cc",266],["pestleanalysis.com",266],["kochamjp.pl",266],["tutorialforlinux.com",266],["724indir.com",266],["whatsaero.com",266],["animeblkom.net",[266,282]],["blkom.com",266],["globes.co.il",[267,268]],["jardiner-malin.fr",269],["tw-calc.net",270],["ohmybrush.com",271],["talkceltic.net",272],["zdam.xyz",273],["mentalfloss.com",274],["uprafa.com",275],["cube365.net",276],["nightfallnews.com",[277,278]],["wwwfotografgotlin.blogspot.com",279],["freelistenonline.com",279],["badassdownloader.com",280],["quickporn.net",281],["aosmark.com",283],["theappstore.org",283],["newyorker.com",284],["brighteon.com",285],["more.tv",286],["video1tube.com",287],["alohatube.xyz",287],["link.cgtips.org",289],["hentaicloud.com",290],["netfapx.com",292],["androidtvbox.eu",294],["madeinvilnius.lt",294],["paperzonevn.com",295],["hentaienglish.com",296],["hentaiporno.xxx",296],["venge.io",[297,298]],["btcbux.io",299],["its.porn",[300,301]],["atv.at",302],["2ndrun.tv",303],["rackusreads.com",303],["exerror.com",303],["toppixxx.com",304],["temp-phone-number.com",305],["jetpunk.com",307],["imgur.com",308],["hentai-party.com",309],["hentaicomics.pro",309],["xxx-comics.pro",309],["genshinimpactcalculator.com",312],["mysexgames.com",313],["embed.indavideo.hu",316],["coinurl.net",[317,318]],["mdn.rest",319],["gdr-online.com",320],["mmm.dk",321],["iqiyi.com",[322,323]],["m.iqiyi.com",324],["japopav.tv",325],["lvturbo.com",325],["nbcolympics.com",326],["apkhex.com",327],["indiansexstories2.net",328],["issstories.xyz",328],["1340kbbr.com",329],["gorgeradio.com",329],["kduk.com",329],["kedoam.com",329],["kejoam.com",329],["kelaam.com",329],["khsn1230.com",329],["kjmx.rocks",329],["kloo.com",329],["klooam.com",329],["klykradio.com",329],["kmed.com",329],["kmnt.com",329],["kool991.com",329],["kpnw.com",329],["kppk983.com",329],["krktcountry.com",329],["ktee.com",329],["kwro.com",329],["kxbxfm.com",329],["thevalley.fm",329],["dsocker1234.blogspot.com",330],["blick.ch",332],["mgnet.xyz",333],["designtagebuch.de",334],["pixroute.com",335],["calculator-online.net",336],["porngames.club",337],["sexgames.xxx",337],["111.90.159.132",338],["battleplan.news",338],["mobile-tracker-free.com",339],["pfps.gg",340],["ac-illust.com",[341,342]],["photo-ac.com",[341,342]],["social-unlock.com",343],["ninja.io",344],["sourceforge.net",345],["samfirms.com",346],["banned.video",347],["freeworldnews.tv",347],["madmaxworld.tv",347],["h-flash.com",348],["huffpost.com",349],["ingles.com",350],["surfline.com",351],["play.tv3.ee",352],["trendyoum.com",353],["bulbagarden.net",354],["doomovie-hd.com",355],["madoohd.com",355],["moviestars.to",356],["hollywoodlife.com",357],["searchresults.cc",358],["mat6tube.com",359],["textstudio.co",360],["newtumbl.com",361],["nevcoins.club",363],["mail.com",364],["erome.com",367],["oggi.it",[368,369]],["video.gazzetta.it",[368,369]],["mangakita.net",370],["allcryptoz.net",371],["crewbase.net",371],["phineypet.com",371],["shinbhu.net",371],["talkforfitness.com",371],["mdn.lol",371],["btcbitco.in",371],["btcsatoshi.net",371],["cempakajaya.com",371],["crypto4yu.com",371],["readbitcoin.org",371],["wiour.com",371],["exactpay.online",371],["avpgalaxy.net",372],["mhma12.tech",373],["panda-novel.com",374],["zebranovel.com",374],["lightsnovel.com",374],["eaglesnovel.com",374],["pandasnovel.com",374],["zadfaucet.com",375],["ewrc-results.com",376],["kizi.com",377],["cyberscoop.com",378],["fedscoop.com",378],["canale.live",379],["loawa.com",380],["ygosu.com",380],["sportalkorea.com",380],["algumon.com",380],["hancinema.net",380],["enetnews.co.kr",380],["edaily.co.kr",380],["economist.co.kr",380],["etoday.co.kr",380],["mafiatown.pl",[381,382]],["jeep-cj.com",383],["sponsorhunter.com",384],["cloudcomputingtopics.net",385],["likecs.com",386],["tiscali.it",387],["linkspy.cc",388],["tutelehd3.xyz",389],["dirty.pink",[390,391,392]],["adshnk.com",393],["chattanoogan.com",394],["socialmediagirls.com",395],["windowspro.de",396],["snapinsta.app",397],["mydaddy.cc",398],["roadtrippin.fr",399],["redketchup.io",400],["anyporn.com",[401,416]],["bravoporn.com",401],["bravoteens.com",401],["crocotube.com",401],["hellmoms.com",401],["hellporno.com",401],["sex3.com",401],["tubewolf.com",401],["xbabe.com",401],["xcum.com",401],["zedporn.com",401],["imagetotext.info",402],["infokik.com",403],["freepik.com",404],["ddwloclawek.pl",405],["videogamer.com",406],["wrestlinginc.com",406],["qtoptens.com",406],["deezer.com",407],["my-subs.co",408],["plaion.com",409],["rapid-cloud.co",410],["slideshare.net",[411,412]],["ustreasuryyieldcurve.com",413],["goo.st",414],["freevpshere.com",414],["softwaresolutionshere.com",414],["staige.tv",417],["bondagevalley.cc",418],["androidadult.com",419],["watchtv24.com",420],["medscape.com",421],["bestx.stream",422],["arkadium.com",423],["app.blubank.com",424],["lifesurance.info",425],["sportdeutschland.tv",426],["doroni.me",427],["egao.in",427],["kusonime.com",428],["dtbps3games.com",430],["vod.pl",431],["megadrive-emulator.com",432],["moviesapi.club",435],["teamskeet.com",436],["tacobell.com",437],["webtoons.com",[438,439]],["zefoy.com",441],["br.de",442],["pasteboard.co",443],["avclub.com",444],["clickhole.com",444],["deadspin.com",444],["gizmodo.com",444],["jalopnik.com",444],["jezebel.com",444],["kotaku.com",444],["lifehacker.com",444],["splinternews.com",444],["theinventory.com",444],["theonion.com",444],["theroot.com",444],["thetakeout.com",444],["pewresearch.org",444],["los40.com",[445,446]],["verizon.com",447],["humanbenchmark.com",448],["politico.com",449],["officedepot.co.cr",[450,451]],["usnews.com",452],["factable.com",454],["zee5.com",455],["gala.fr",456],["geo.fr",456],["voici.fr",456],["gloucestershirelive.co.uk",457],["arsiv.mackolik.com",458],["jacksonguitars.com",459],["scandichotels.com",460],["stylist.co.uk",461],["nettiauto.com",462],["thaiairways.com",[463,464]],["cerbahealthcare.it",[465,466]],["tiendaenlinea.claro.com.ni",[467,468]],["tieba.baidu.com",469],["linktr.ee",470],["grasshopper.com",[473,474]],["epson.com.cn",[475,476]],["oe24.at",[477,478]],["atozmath.com",[479,480,481,482,483,484,485]],["smallseotools.com",486],["investing.com",487]]);

const entitiesMap = new Map([["vidsrc",6],["watch-series",6],["watchseries",6],["vev",6],["vidop",6],["vidup",6],["starmusiq",9],["wcofun",9],["kissasian",11],["gogoanime",[11,19]],["1movies",[11,18]],["xmovies8",11],["animeheaven",11],["0123movies",11],["gostream",11],["gomovies",11],["hamsterix",12],["xhamster",12],["xhamster1",12],["xhamster10",12],["xhamster11",12],["xhamster12",12],["xhamster13",12],["xhamster14",12],["xhamster15",12],["xhamster16",12],["xhamster17",12],["xhamster18",12],["xhamster19",12],["xhamster20",12],["xhamster2",12],["xhamster3",12],["xhamster4",12],["xhamster5",12],["xhamster7",12],["xhamster8",12],["vidlox",[13,14]],["primewire",15],["streanplay",[15,17]],["sbplay",15],["milfnut",15],["fmovies",19],["9anime",19],["hqq",[23,24]],["waaw",24],["123link",25],["adshort",25],["linkshorts",25],["adsrt",25],["vinaurl",25],["adfloz",25],["dutchycorp",25],["shortearn",25],["pingit",25],["urlty",25],["seulink",25],["shrink",25],["tmearn",25],["megalink",25],["linkviet",25],["miniurl",25],["pcprogramasymas",25],["link1s",25],["shortzzy",25],["shorttey",[25,217]],["lite-link",25],["pureshort",25],["adcorto",25],["dulinks",25],["zshort",25],["upfiles",25],["linkfly",25],["wplink",25],["financerites",25],["camwhores",[26,37,89,90,91]],["tube8",[27,28]],["youporn",28],["redtube",28],["pornhub",[28,203,204]],["xtits",[54,125]],["pouvideo",62],["povvideo",62],["povw1deo",62],["povwideo",62],["powv1deo",62],["powvibeo",62],["powvideo",62],["powvldeo",62],["acortalo",[67,68,69,70]],["acortar",[67,68,69,70]],["plyjam",[72,73]],["fxporn69",78],["vipbox",79],["viprow",79],["desbloqueador",85],["xberuang",87],["teknorizen",87],["linkberuang",87],["kickassanime",92],["subtorrents",94],["subtorrents1",94],["newpelis",94],["pelix",94],["allcalidad",94],["infomaniakos",94],["filecrypt",98],["tornadomovies",99],["sexwebvideo",103],["mangovideo",103],["icdrama",109],["mangasail",109],["file4go",111],["asianclub",128],["anitube",135],["mixdrop",138],["azsoft",152],["pickcrackpasswords",155],["uploadev",169],["ver-pelis-online",180],["ancient-origins",189],["lookcam",217],["lootlinks",217],["dpstream",220],["bluemediafiles",222],["docer",246],["pixlev",261],["skymovieshd",264],["dvdplay",264],["crackstreams",293],["123movieshd",306],["uproxy",310],["animesa",311],["cinecalidad",[314,315]],["apkmaven",362],["gmx",365],["gamereactor",415],["tvhay",[433,434]]]);

const exceptionsMap = new Map([["pingit.com",[25]],["pingit.me",[25]]]);

/******************************************************************************/

function setConstant(
    ...args
) {
    setConstantCore(false, ...args);
}

function setConstantCore(
    trusted = false,
    arg1 = '',
    arg2 = '',
    arg3 = ''
) {
    const details = typeof arg1 !== 'object'
        ? { prop: arg1, value: arg2 }
        : arg1;
    if ( arg3 !== '' ) {
        if ( /^\d$/.test(arg3) ) {
            details.options = [ arg3 ];
        } else {
            details.options = Array.from(arguments).slice(3);
        }
    }
    const { prop: chain = '', value: cValue = '' } = details;
    if ( typeof chain !== 'string' ) { return; }
    if ( chain === '' ) { return; }
    const options = details.options || [];
    const safe = safeSelf();
    function setConstant(chain, cValue) {
        const trappedProp = (( ) => {
            const pos = chain.lastIndexOf('.');
            if ( pos === -1 ) { return chain; }
            return chain.slice(pos+1);
        })();
        if ( trappedProp === '' ) { return; }
        const thisScript = document.currentScript;
        const cloakFunc = fn => {
            safe.Object_defineProperty(fn, 'name', { value: trappedProp });
            const proxy = new Proxy(fn, {
                defineProperty(target, prop) {
                    if ( prop !== 'toString' ) {
                        return Reflect.defineProperty(...arguments);
                    }
                    return true;
                },
                deleteProperty(target, prop) {
                    if ( prop !== 'toString' ) {
                        return Reflect.deleteProperty(...arguments);
                    }
                    return true;
                },
                get(target, prop) {
                    if ( prop === 'toString' ) {
                        return function() {
                            return `function ${trappedProp}() { [native code] }`;
                        }.bind(null);
                    }
                    return Reflect.get(...arguments);
                },
            });
            return proxy;
        };
        if ( cValue === 'undefined' ) {
            cValue = undefined;
        } else if ( cValue === 'false' ) {
            cValue = false;
        } else if ( cValue === 'true' ) {
            cValue = true;
        } else if ( cValue === 'null' ) {
            cValue = null;
        } else if ( cValue === "''" || cValue === '' ) {
            cValue = '';
        } else if ( cValue === '[]' ) {
            cValue = [];
        } else if ( cValue === '{}' ) {
            cValue = {};
        } else if ( cValue === 'noopFunc' ) {
            cValue = cloakFunc(function(){});
        } else if ( cValue === 'trueFunc' ) {
            cValue = cloakFunc(function(){ return true; });
        } else if ( cValue === 'falseFunc' ) {
            cValue = cloakFunc(function(){ return false; });
        } else if ( /^-?\d+$/.test(cValue) ) {
            cValue = parseInt(cValue);
            if ( isNaN(cValue) ) { return; }
            if ( Math.abs(cValue) > 0x7FFF ) { return; }
        } else if ( trusted ) {
            if ( cValue.startsWith('{') && cValue.endsWith('}') ) {
                try { cValue = JSON.parse(cValue).value; } catch(ex) { return; }
            }
        } else {
            return;
        }
        if ( options.includes('asFunction') ) {
            cValue = ( ) => cValue;
        } else if ( options.includes('asCallback') ) {
            cValue = ( ) => (( ) => cValue);
        } else if ( options.includes('asResolved') ) {
            cValue = Promise.resolve(cValue);
        } else if ( options.includes('asRejected') ) {
            cValue = Promise.reject(cValue);
        }
        let aborted = false;
        const mustAbort = function(v) {
            if ( trusted ) { return false; }
            if ( aborted ) { return true; }
            aborted =
                (v !== undefined && v !== null) &&
                (cValue !== undefined && cValue !== null) &&
                (typeof v !== typeof cValue);
            return aborted;
        };
        // https://github.com/uBlockOrigin/uBlock-issues/issues/156
        //   Support multiple trappers for the same property.
        const trapProp = function(owner, prop, configurable, handler) {
            if ( handler.init(configurable ? owner[prop] : cValue) === false ) { return; }
            const odesc = Object.getOwnPropertyDescriptor(owner, prop);
            let prevGetter, prevSetter;
            if ( odesc instanceof Object ) {
                owner[prop] = cValue;
                if ( odesc.get instanceof Function ) {
                    prevGetter = odesc.get;
                }
                if ( odesc.set instanceof Function ) {
                    prevSetter = odesc.set;
                }
            }
            try {
                safe.Object_defineProperty(owner, prop, {
                    configurable,
                    get() {
                        if ( prevGetter !== undefined ) {
                            prevGetter();
                        }
                        return handler.getter(); // cValue
                    },
                    set(a) {
                        if ( prevSetter !== undefined ) {
                            prevSetter(a);
                        }
                        handler.setter(a);
                    }
                });
            } catch(ex) {
            }
        };
        const trapChain = function(owner, chain) {
            const pos = chain.indexOf('.');
            if ( pos === -1 ) {
                trapProp(owner, chain, false, {
                    v: undefined,
                    init: function(v) {
                        if ( mustAbort(v) ) { return false; }
                        this.v = v;
                        return true;
                    },
                    getter: function() {
                        return document.currentScript === thisScript
                            ? this.v
                            : cValue;
                    },
                    setter: function(a) {
                        if ( mustAbort(a) === false ) { return; }
                        cValue = a;
                    }
                });
                return;
            }
            const prop = chain.slice(0, pos);
            const v = owner[prop];
            chain = chain.slice(pos + 1);
            if ( v instanceof Object || typeof v === 'object' && v !== null ) {
                trapChain(v, chain);
                return;
            }
            trapProp(owner, prop, true, {
                v: undefined,
                init: function(v) {
                    this.v = v;
                    return true;
                },
                getter: function() {
                    return this.v;
                },
                setter: function(a) {
                    this.v = a;
                    if ( a instanceof Object ) {
                        trapChain(a, chain);
                    }
                }
            });
        };
        trapChain(window, chain);
    }
    runAt(( ) => {
        setConstant(chain, cValue);
    }, options);
}

function runAt(fn, when) {
    const intFromReadyState = state => {
        const targets = {
            'loading': 1,
            'interactive': 2, 'end': 2, '2': 2,
            'complete': 3, 'idle': 3, '3': 3,
        };
        const tokens = Array.isArray(state) ? state : [ state ];
        for ( const token of tokens ) {
            const prop = `${token}`;
            if ( targets.hasOwnProperty(prop) === false ) { continue; }
            return targets[prop];
        }
        return 0;
    };
    const runAt = intFromReadyState(when);
    if ( intFromReadyState(document.readyState) >= runAt ) {
        fn(); return;
    }
    const onStateChange = ( ) => {
        if ( intFromReadyState(document.readyState) < runAt ) { return; }
        fn();
        safe.removeEventListener.apply(document, args);
    };
    const safe = safeSelf();
    const args = [ 'readystatechange', onStateChange, { capture: true } ];
    safe.addEventListener.apply(document, args);
}

function safeSelf() {
    if ( scriptletGlobals.has('safeSelf') ) {
        return scriptletGlobals.get('safeSelf');
    }
    const safe = {
        'Object_defineProperty': Object.defineProperty.bind(Object),
        'RegExp': self.RegExp,
        'RegExp_test': self.RegExp.prototype.test,
        'RegExp_exec': self.RegExp.prototype.exec,
        'addEventListener': self.EventTarget.prototype.addEventListener,
        'removeEventListener': self.EventTarget.prototype.removeEventListener,
        'log': console.log.bind(console),
        'uboLog': function(...args) {
            if ( args.length === 0 ) { return; }
            if ( `${args[0]}` === '' ) { return; }
            this.log('[uBO]', ...args);
        },
    };
    scriptletGlobals.set('safeSelf', safe);
    return safe;
}

/******************************************************************************/

const hnParts = [];
try { hnParts.push(...document.location.hostname.split('.')); }
catch(ex) { }
const hnpartslen = hnParts.length;
if ( hnpartslen === 0 ) { return; }

const todoIndices = new Set();
const tonotdoIndices = [];

// Exceptions
if ( exceptionsMap.size !== 0 ) {
    for ( let i = 0; i < hnpartslen; i++ ) {
        const hn = hnParts.slice(i).join('.');
        const excepted = exceptionsMap.get(hn);
        if ( excepted ) { tonotdoIndices.push(...excepted); }
    }
    exceptionsMap.clear();
}

// Hostname-based
if ( hostnamesMap.size !== 0 ) {
    const collectArgIndices = hn => {
        let argsIndices = hostnamesMap.get(hn);
        if ( argsIndices === undefined ) { return; }
        if ( typeof argsIndices === 'number' ) { argsIndices = [ argsIndices ]; }
        for ( const argsIndex of argsIndices ) {
            if ( tonotdoIndices.includes(argsIndex) ) { continue; }
            todoIndices.add(argsIndex);
        }
    };
    for ( let i = 0; i < hnpartslen; i++ ) {
        const hn = hnParts.slice(i).join('.');
        collectArgIndices(hn);
    }
    collectArgIndices('*');
    hostnamesMap.clear();
}

// Entity-based
if ( entitiesMap.size !== 0 ) {
    const n = hnpartslen - 1;
    for ( let i = 0; i < n; i++ ) {
        for ( let j = n; j > i; j-- ) {
            const en = hnParts.slice(i,j).join('.');
            let argsIndices = entitiesMap.get(en);
            if ( argsIndices === undefined ) { continue; }
            if ( typeof argsIndices === 'number' ) { argsIndices = [ argsIndices ]; }
            for ( const argsIndex of argsIndices ) {
                if ( tonotdoIndices.includes(argsIndex) ) { continue; }
                todoIndices.add(argsIndex);
            }
        }
    }
    entitiesMap.clear();
}

// Apply scriplets
for ( const i of todoIndices ) {
    try { setConstant(...JSON.parse(argsList[i])); }
    catch(ex) {}
}
argsList.length = 0;

/******************************************************************************/

})();

/******************************************************************************/

void 0;
