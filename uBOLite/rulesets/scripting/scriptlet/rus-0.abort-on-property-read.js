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

// ruleset: rus-0

/******************************************************************************/

// Important!
// Isolate from global scope

(function uBOL_abortOnPropertyRead() {

/******************************************************************************/

const scriptletGlobals = new Map(); // jshint ignore: line

const argsList = ["[\"AdbBanner\"]","[\"CTRManager.host3\"]","[\"CheckingUser\"]","[\"ClickUndercookie\"]","[\"Date.prototype.toUTCString\"]","[\"Groups.showDisclaimer\"]","[\"Light.Popup\"]","[\"Object.prototype.AdfoxXhrRequestPrepared\"]","[\"Object.prototype.Metrika\"]","[\"Object.prototype.YA_TURBO_PAGES\"]","[\"Object.prototype._getBanner\"]","[\"Object.prototype._isAutostartQueueSet\"]","[\"Object.prototype.bannerOptions\"]","[\"Object.prototype.brandingBlock\"]","[\"Object.prototype.direct\"]","[\"Object.prototype.fakeDetect\"]","[\"Object.prototype.getAdUsageStorage\"]","[\"Object.prototype.initOnPlay\"]","[\"Object.prototype.isApplySticky\"]","[\"Object.prototype.loadBanner\"]","[\"Object.prototype.render\"]","[\"Object.prototype.scriptsViaXhr\"]","[\"Object.prototype.yaContextCb\"]","[\"PUM.getPopup\"]","[\"PageBottomBanners\"]","[\"SIN.AdsLoader\"]","[\"TotemToolsObject\"]","[\"Unauthorized2\"]","[\"WebSocket\"]","[\"XMLHttpRequest\"]","[\"Ya\"]","[\"__vasActiveTestIds\"]","[\"a_urls\"]","[\"aab\"]","[\"abl\"]","[\"adblock_availability_check\"]","[\"adcashMacros\"]","[\"admiral\"]","[\"ads\"]","[\"advFirstClickOpenNewTab\"]","[\"advanced_ads_ready\"]","[\"anOptions\"]","[\"app_vars.force_disable_adblock\"]","[\"atob\"]","[\"bannersBillboard\"]","[\"blocked_action\"]","[\"brblob\"]","[\"cardinals\"]","[\"clickNS4\"]","[\"createAds\"]","[\"creepyVideo\"]","[\"disable_copy\"]","[\"disable_hot_keys\"]","[\"document.addEventListener\"]","[\"document.body.oncopy\"]","[\"document.getElementById\",\"mdl_adb\"]","[\"document.oncontextmenu\"]","[\"document.oncopy\"]","[\"document.ondragend\"]","[\"document.ondragstart\"]","[\"document.ondrop\"]","[\"document.onkeydown\"]","[\"document.onpaste\"]","[\"document.onselectstart\"]","[\"eaglePlayerPlugins.autoplay_position\"]","[\"echelon\"]","[\"flat_pm_arr\"]","[\"forTheFreeVideo.css\"]","[\"getSelection\"]","[\"get_ya_browser\"]","[\"goTolink\"]","[\"helpUsImproveSite\"]","[\"initsnow\"]","[\"kav_cn\"]","[\"lftrght\"]","[\"m205\"]","[\"mdpDeBlocker\"]","[\"move_string\"]","[\"myatu_bgm\"]","[\"nocontext\"]","[\"onload\"]","[\"open\"]","[\"preventSelection\"]","[\"setsnow\"]","[\"sparkle\"]","[\"stopPrntScr\"]","[\"t364_initPopup\"]","[\"target_script\"]","[\"td_ad_background_click_target\"]","[\"tingle\"]","[\"tnAdditionalParams\"]","[\"unSelect\"]","[\"updateDownloadLinks\"]","[\"utarget_script\"]","[\"video.preroll\"]","[\"vpb\"]","[\"web_script\"]","[\"weekCallbacks\"]","[\"window.alert\"]","[\"window.block\"]","[\"yaContextCb\"]","[\"zfgformats\"]","[\"bc_blocks\"]","[\"OK.hooks\"]","[\"globalAuthLoginPopupCounter\"]","[\"u_global_data\"]"];

const hostnamesMap = new Map([["htmlweb.ru",0],["fapreactor.com",1],["joyreactor.cc",1],["pornreactor.cc",1],["reactor.cc",1],["tarkov-wiki.ru",2],["anifap.com",3],["anipoisk.org",3],["anitokyo.tv",3],["hcdn.online",3],["kinofilm.co",3],["24smi.org",[4,20]],["relax-fm.ru",[4,31]],["rg.ru",[4,100]],["sm.news",[4,30,33,82]],["ura.news",[4,100]],["www.e1.ru",[4,13]],["vk.com",[5,24,27]],["vk.ru",[5,24,27]],["rutor.org",6],["drive2.ru",[7,22]],["liveinternet.ru",[8,9]],["yap.ru",8],["yaplakal.com",8],["lena-miro.ru",10],["levik.blog",10],["livejournal.com",10],["olegmakarenko.ru",10],["periskop.su",10],["shakko.ru",10],["shiro-kino.ru",10],["vadimrazumov.ru",10],["rbc.ru",[11,18,68]],["www.kinopoisk.ru",12],["gorodrabot.by",14],["gorodrabot.ru",14],["fishki.net",15],["reshuct.by",16],["reshuent.kz",16],["reshuolymp.ru",16],["sdamgia.ru",16],["gdespaces.com",17],["gdespaces.net",17],["google-cloud.services",17],["spac.me",17],["spac.run",17],["spac.wtf",17],["spac1.com",17],["spac1.info",17],["spac1.me",17],["spac1.net",17],["spac1.org",17],["spac1.ru",17],["spaces-blogs.com",17],["spaces.im",17],["spcs-files.xyz",17],["spcs.bio",17],["spcs.global",17],["spcs.life",17],["spcs.me",17],["spcs.network",17],["spcs.news",17],["spcs.pro",17],["spcs.pub",17],["spcs.reviews",17],["spcs.social",17],["strip2.in",17],["strip2.xxx",17],["usersporn.com",17],["e1.ru",19],["nova.rambler.ru",19],["pikabu.ru",19],["gismeteo.by",21],["gismeteo.kz",21],["gismeteo.md",21],["gismeteo.ru",21],["razlozhi.ru",22],["f1comp.ru",23],["tagaev.com",23],["times.zt.ua",23],["sinoptik.ua",[25,95]],["porngames.su",26],["rintor.info",26],["rintor.net",26],["castle-tv.com",28],["100popugaev.ru",29],["coderlessons.com",29],["fixx.one",29],["its-kids.ru",29],["molitvy.guru",29],["nizhny.ru",29],["pro100hobbi.ru",29],["publy.ru",29],["samelectric.ru",29],["svadba.expert",29],["tehnobzor.ru",[29,76]],["vibir.ru",29],["3dnews.kz",30],["3dnews.ru",30],["avtovzglyad.ru",30],["baby.ru",30],["dni.ru",30],["mamba.ru",30],["sports.ru",30],["www.goha.ru",30],["forum.overclockers.ua",32],["bstudy.net",34],["ozlib.com",34],["studbooks.net",34],["studme.org",34],["studref.com",34],["studwood.net",34],["vuzlit.com",34],["xstud.org",34],["vgtimes.ru",35],["upload.ee",36],["footboom.com",[37,65]],["footboom.kz",[37,65]],["electric-house.ru",38],["stroi-help.ru",38],["freehat.cc",[39,81]],["agroreview.com",40],["amazinghis.ru",41],["moj-pes.ru",41],["shrlink.top",42],["friends.in.ua",[43,53]],["gidonline.eu",[43,87]],["vprognoze.ru",44],["medicina.ua",45],["anidub.vip",46],["anidubonline.com",46],["overclockers.ru",47],["zaruba.fun",48],["vesti.ua",49],["gazeta.ru",[50,64,70]],["kolizhanka.com.ua",[51,52,79]],["gra-prestoliv.in.ua",53],["simpsonsua.tv",53],["pravvest.ru",54],["dclans.ru",55],["animevost.org",56],["animevost.site",56],["animevost.top",56],["doefiratv.info",56],["payeer-gift.ru",56],["sinema.top",56],["smotret-anime-365.ru",56],["turkish-tv-series.ru",[56,61,68]],["vost.pw",56],["xn--b1aew.xn--p1ai",[56,57,58,59,60,62,63]],["my-expert.ru",59],["7ogorod.ru",66],["autonevod.ru",66],["shtrafsud.ru",66],["zazloo.ru",66],["kinozapas.co",67],["livesx.online",67],["xn--80aikhbrhr.xn--j1amh",67],["championat.com",68],["doramy.club",68],["sportrbc.ru",68],["musify.club",69],["dota2.ru",71],["elitesnooker.com",72],["artfile.me",73],["artfile.ru",73],["astrakhan.ru",73],["myjane.ru",73],["omskpress.ru",73],["tambovnet.org",73],["daz3d.ru",74],["studizba.com",75],["asteriatm.ru",76],["sudya-dredd.ru",[76,85]],["anime-chan.me",[77,84]],["city.ogo.ua",78],["it-actual.ru",80],["hlamer.ru",81],["lostpix.com",81],["oveg.ru",81],["potokcdn.com",81],["prostoporno.help",81],["saltday.ru",81],["uploadimagex.com",81],["wowskill.ru",81],["xittv.net",81],["tapochek.net",[83,96]],["bryansknovosti.ru",85],["novozybkov.su",85],["moremania.info",86],["kinogo.eu",87],["1informer.com",88],["fainaidea.com",88],["itech.co.ua",88],["mediasat.info",88],["root-nation.com",88],["fssp.gov.ru",89],["liveforums.ru",90],["onlineclass.space",91],["nsportal.ru",92],["animekun.ru",93],["doramakun.ru",93],["vestivrn.ru",94],["www.ukr.net",95],["4studio.com.ua",97],["cikavosti.com",97],["dialogs.org.ua",97],["fakty.ua",97],["gorodkiev.com.ua",97],["informator.ua",97],["kriminal.tv",97],["pingvin.pro",97],["technoportal.com.ua",97],["u-news.com.ua",97],["uanews.org.ua",97],["versii.if.ua",97],["volynpost.com",97],["bombardir.ru",98],["comp-service.kiev.ua",98],["softportal.com",99],["80-e.ru",100],["examenpdd.com",100],["animedia.tv",101],["animedub.ru",101],["vsetut.su",101],["ok.ru",[103,104]],["3dn.ru",105],["a-point.info",105],["addfiles.ru",105],["all-for-kompa.ru",105],["asia-tv.su",105],["at.ua",105],["autosimgames.ru",105],["chernobyl-soul.com",105],["clan.su",105],["cliphq.ru",105],["coop-lands.ru",105],["db-energo.ru",105],["devdrivers.ru",105],["do.am",105],["dtva-it-rus.gq",105],["elegos.ru",105],["elektronika56.ru",105],["elektrosat.ru",105],["fon-ki.com",105],["for-gsm.ru",105],["free-dream.ru",105],["ftechedu.ru",105],["fukushima-news.ru",105],["gals.md",105],["gamesdendy.ru",105],["giginfo.ru",105],["gloria-cedric.ru",105],["goldformat.ru",105],["greenflash.su",105],["hero-empire.com",105],["igrul-ka.ru",105],["jetvis.ru",105],["krasnickij.ru",105],["krolmen.ru",105],["megaclips.net",105],["mod-rus.ru",105],["mow-portal.ru",105],["moy.su",105],["mp3songs.ru",105],["mp4android.ru",105],["musiklip.ru",105],["my1.ru",105],["narod.ru",105],["newgames.com.ua",105],["novospasskoe-city.ru",105],["obschestvo-9999.gq",105],["omsimclub.ru",105],["online-supernatural.ru",105],["onlinestargate.ru",105],["only-paper.ru",105],["others.name",105],["pidru4nik.com",105],["pkrc.ru",105],["play-force.ru",105],["pohoronnoe-byuro.com",105],["pokatushki-pmr.ru",105],["pro-zakupki.ru",105],["project-ss.ru",105],["psxworld.ru",105],["radiodom.org",105],["rocketdockfree.ru",105],["sdr-deluxe.com",105],["skidrowcrack.ru",105],["soft-game.net",105],["stalker-gsc.ru",105],["stalker-zone.info",105],["stalkermods.ru",105],["svadbatomsk.ru",105],["techmusic.ru",105],["tes-game.ru",105],["torfiles.ru",105],["torm-egan.ru",105],["torrent-file.top",105],["ucoz.club",105],["ucoz.com",105],["ucoz.net",105],["ucoz.org",105],["ucoz.ru",105],["ucoz.ua",105],["usite.pro",105],["vodopads.ru",105],["vsthouse.ru",105],["warcraftda.ru",105],["xakevsoft.ru",105],["xn--80aeshkkbdj.xn--p1ai",105],["yaminecraft.ru",105],["zona-stalkera.ru",105]]);

const entitiesMap = new Map([["porno365",102]]);

const exceptionsMap = new Map([]);

/******************************************************************************/

function abortOnPropertyRead(
    chain = ''
) {
    if ( typeof chain !== 'string' ) { return; }
    if ( chain === '' ) { return; }
    const exceptionToken = getExceptionToken();
    const abort = function() {
        throw new ReferenceError(exceptionToken);
    };
    const makeProxy = function(owner, chain) {
        const pos = chain.indexOf('.');
        if ( pos === -1 ) {
            const desc = Object.getOwnPropertyDescriptor(owner, chain);
            if ( !desc || desc.get !== abort ) {
                Object.defineProperty(owner, chain, {
                    get: abort,
                    set: function(){}
                });
            }
            return;
        }
        const prop = chain.slice(0, pos);
        let v = owner[prop];
        chain = chain.slice(pos + 1);
        if ( v ) {
            makeProxy(v, chain);
            return;
        }
        const desc = Object.getOwnPropertyDescriptor(owner, prop);
        if ( desc && desc.set !== undefined ) { return; }
        Object.defineProperty(owner, prop, {
            get: function() { return v; },
            set: function(a) {
                v = a;
                if ( a instanceof Object ) {
                    makeProxy(a, chain);
                }
            }
        });
    };
    const owner = window;
    makeProxy(owner, chain);
}

function getExceptionToken() {
    const token =
        String.fromCharCode(Date.now() % 26 + 97) +
        Math.floor(Math.random() * 982451653 + 982451653).toString(36);
    const oe = self.onerror;
    self.onerror = function(msg, ...args) {
        if ( typeof msg === 'string' && msg.includes(token) ) { return true; }
        if ( oe instanceof Function ) {
            return oe.call(this, msg, ...args);
        }
    }.bind();
    return token;
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
    try { abortOnPropertyRead(...JSON.parse(argsList[i])); }
    catch(ex) {}
}
argsList.length = 0;

/******************************************************************************/

})();

/******************************************************************************/

void 0;
