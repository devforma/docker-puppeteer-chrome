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

// ruleset: annoyances-others

/******************************************************************************/

// Important!
// Isolate from global scope

(function uBOL_nanoSetTimeoutBooster() {

/******************************************************************************/

const scriptletGlobals = new Map(); // jshint ignore: line

const argsList = ["[\"counter\",\"\",\"0.02\"]","[\"Download\",\"*\",\"0.001\"]","[\"div_form\"]","[\"e(t-1)\",\"*\",\"0.001\"]","[\"window.location.href\",\"*\",\"0.02\"]","[\"counter\",\"*\",\"0.02\"]","[\"download_loading\",\"*\",\"0.02\"]","[\"autoload-wait\",\"*\",\"0.02\"]","[\"content\",\"*\",\"0.02\"]","[\"/HideTimerID|clsname/\",\"*\",\"0.02\"]","[\"countdowntimer\",\"*\",\"0.02\"]","[\"updateClock\",\"\",\"0.02\"]","[\"seconds\",\"*\",\"0.02\"]","[\"myTimer\",\"*\",\"0.02\"]","[\"goLink(\",\"3000\"]","[\"get-link\",\"*\",\"0.02\"]","[\"getlink\",\"*\",\"0.02\"]","[\"download\",\"*\",\"0.02\"]","[\"/Please wait|myTime--/\",\"*\",\"0.02\"]","[\"updateClock\",\"*\",\"0.02\"]","[\"/_0x|gotoo/\",\"*\",\"0.02\"]","[\"status.innerHTML\",\"*\",\"0.02\"]","[\"document[_0x\",\"*\",\"0.02\"]","[\"countDown\",\"\",\"0.02\"]","[\"#counter\",\"\",\"0.02\"]","[\"count\",\"\",\"0.02\"]","[\"#download-loading\",\"*\",\"0.02\"]","[\"Tick\",\"\",\"0.02\"]","[\"submit\",\"5000\",\"0.02\"]","[\"wpsafe\",\"*\",\"0.02\"]","[\"_0x\",\"*\",\"0.02\"]","[\"redirect\",\"4000\",\"0.02\"]","[\"tick\",\"1000\"]","[\"grecaptcha\",\"*\",\"0.02\"]","[\"run()\",\"\",\"0.02\"]","[\"#proceed\",\"*\",\"0.02\"]","[\"timer\",\"1000\",\"0.02\"]","[\"/waiting|\\\\.classList\\\\.remove|gotoo/\",\"*\",\"0.02\"]","[\"seconds\",\"\",\"0.02\"]","[\"countdown()\",\"\",\"0.02\"]","[\"TheLink\",\"\",\"0.02\"]","[\"st2\",\"\",\"0.02\"]","[\"startTimer\",\"*\",\"0.02\"]","[\"goVideoJS\",\"*\",\"0.02\"]","[\"Please wait\",\"*\",\"0.02\"]","[\"showText\",\"*\",\"0.02\"]","[\"checkclick\",\"*\",\"0.02\"]","[\"/gotoo|pop-button|stickyadin/\",\"*\",\"0.02\"]","[\"#download_ad_addon\",\"10000\",\"0.02\"]","[\"$('.skip-btn').\",\"*\",\"0.02\"]","[\"download_file\",\"\",\"0.02\"]","[\"waitting_download\",\"\",\"0.02\"]","[\"CountBack\",\"990\",\"0.02\"]","[\"timeUpdater\",\"\",\"0.02\"]","[\"btn\",\"3000\",\"0.02\"]","[\"clsname\",\"5000\",\"0.02\"]","[\"#download\",\"10000\",\"0.02\"]","[\"#download\",\"11000\",\"0.02\"]","[\"/get-link\",\"5000\",\"0.02\"]","[\"fade\",\"5000\",\"0.02\"]","[\"timer_end\",\"20000\",\"0.02\"]","[\"disabled\",\"\",\"0.02\"]","[\"Please Wait\",\"\",\"0.02\"]","[\"gotoo\",\"22000\",\"0.02\"]","[\"gotoo\",\"17000\",\"0.02\"]","[\"download link\",\"\",\"0.02\"]","[\"link\",\"1100\",\"0.02\"]","[\"tick\",\"1000\",\"0.02\"]","[\"countdown\",\"1400\",\"0.02\"]","[\"updateinfo\",\"1000\",\"0.02\"]","[\"count--\",\"1000\",\"0.02\"]","[\"window.location.href\",\"10000\",\"0.02\"]","[\"params.redirect\",\"5000\",\"0.02\"]","[\"timers\",\"\",\"0.02\"]","[\"timers\",\"4000\",\"0.02\"]","[\"doRedirect\",\"3000\",\"0.02\"]","[\"timer--\",\"\",\"0.02\"]","[\"timers\",\"1500\",\"0.02\"]","[\"var _0x\",\"\",\"0.02\"]","[\".eg-manually-get\",\"7000\",\"0.02\"]","[\"downloadbtn\",\"\",\"0.02\"]","[\"link_button\",\"\",\"0.02\"]","[\"#get_btn\",\"\",\"0.02\"]","[\"counter\",\"2000\",\"0.02\"]","[\"adFreePopup\",\"15000\",\"0.02\"]","[\"go_url\",\"15000\",\"0.3\"]","[\"window.location.href=t\",\"clearTimeout\",\"10000\"]","[\"adpop-content-left\",\"\",\"0.02\"]","[\"#ad .timer\",\"\",\"0.02\"]","[\"setSeconds\",\"\",\"0.02\"]","[\"updateReloj\",\"\",\"0.02\"]","[\"countdown\",\"\",\"0.02\"]","[\"dlcntdwn\",\"\",\"0.02\"]","[\"tick()\",\"\",\"0.02\"]","[\"startCountdown\",\"\",\"0.02\"]","[\"contador\",\"\",\"0.02\"]","[\"/action-downloadFile?\"]","[\"#freebtn\",\"\",\"0.02\"]","[\"download()\"]"];

const hostnamesMap = new Map([["tapewithadblock.org",0],["adblockstrtape.link",0],["adblockstrtech.link",0],["stape.fun",0],["strcloud.link",0],["moviessoul.com",0],["pling.com",1],["maqal360.com",2],["diudemy.com",2],["easymc.io",3],["iggtech.com",4],["ipamod.com",4],["apkmody.fun",6],["apkmody.io",6],["vsthemes.org",7],["comohoy.com",8],["indilinks.xyz",9],["blogtechh.com",10],["coins-town.com",11],["upapk.io",12],["bakenor.com",13],["prod.danawa.com",14],["blogmado.com",15],["vavada5com.com",16],["financerites.in",16],["financerites.com",16],["vocalley.com",16],["howifx.com",16],["enit.in",16],["skincarie.com",16],["imperialstudy.com",16],["apkmaza.co",17],["bakeput.com",18],["bakemain.com",18],["bakeleft.com",18],["link-descarga.site",19],["kinemaster.cc",20],["zertalious.xyz",21],["hashhackers.com",22],["katdrive.net",22],["newsongs.co.in",22],["course-downloader.com",23],["123lnk.xyz",23],["universalfreecourse.com",23],["freenulledworld.com",23],["downloadfreecourse.com",23],["aapks.com",23],["pvpcorme.com",23],["dosya.co",23],["ishort.xyz",23],["fmoviesdl.com",24],["solotakus-tv.ml",24],["uncensored-hentai.com",24],["curimovie.com",24],["malzero.xyz",25],["modyolo.com",26],["uploadmaza.com",27],["uptomega.me",27],["dlfiles.online",27],["hubfiles.ws",27],["romsget.io",28],["romsgames.net",28],["mcrypto.club",29],["spantechie.com",30],["imgadult.com",31],["imgdrive.net",31],["imgtaxi.com",31],["imgwallet.com",31],["uploadrar.com",32],["steampiay.cc",33],["pouvideo.cc",33],["pomvideo.cc",33],["top1iq.com",34],["downfile.site",35],["memangbau.com",35],["trangchu.news",35],["techacode.com",35],["azmath.info",35],["freetp.org",36],["online-fix.me",36],["technoashwath.com",37],["uploadflix.org",38],["uploadbaz.me",38],["downloadr.in",39],["freetraderdownload.com.br",39],["appofmirror.com",39],["egyshare.cc",40],["samfirms.com",42],["4shared.com",43],["themehits.com",45],["atlai.club",46],["techymedies.com",47],["noltrt.com",48],["getthot.com",49],["videezy.com",50],["fdocuments.in",51],["tgsup.group",52],["kutub3lpdf.com",52],["movie4k.dev",53],["itscybertech.com",54],["newzflix.xyz",55],["moviesfi.net",[56,57]],["shareappscrack.com",58],["policiesforyou.com",59],["gamemodding.com",60],["mixdrop.sx",61],["streamon.to",62],["moddedguru.com",[63,64]],["upvideo.to",65],["techoow.com",66],["sama-share.com",67],["zeefiles.download",67],["apkdone.com",68],["jptorrent.org",69],["pinsystem.co.uk",70],["gamefront.com",71],["render-state.to",72],["respuestadetarea.com",73],["asistente-de-estudio.com",73],["edurespuestas.com",74],["c.newsnow.co.uk",75],["pentafaucet.com",76],["getitall.top",76],["ihomeworkhelper.com",77],["hdfull.lv",78],["emulatorgames.net",79],["desiupload.co",80],["bdupload.asia",80],["indishare.org",80],["onlinefreecourse.net",80],["uploadking.net",80],["w4files.ws",81],["easylinks.in",82],["novafusion.pl",83],["surfline.com",84],["catcut.net",85],["apkshki.com",86],["pngitem.com",87],["world-sms.org",88],["pulsemens.com",89],["verteleseriesonline.com",90],["hentaisd.tv",90],["memoriadatv.com",91],["filehorse.com",92],["filerio.in",93],["worldofmods.com",93],["subdowns.com",94],["tudogamesbr.com",95],["videouroki.net",96],["katfile.com",97],["coolrom.com.au",98],["freeroms.com",98]]);

const entitiesMap = new Map([["shavetape",0],["adblockstreamtape",0],["streamtape",0],["flixhub",5],["premiumebooks",41],["mixdrop",44]]);

const exceptionsMap = new Map([]);

/******************************************************************************/

function nanoSetTimeoutBooster(
    needleArg = '',
    delayArg = '',
    boostArg = ''
) {
    if ( typeof needleArg !== 'string' ) { return; }
    const reNeedle = patternToRegex(needleArg);
    let delay = delayArg !== '*' ? parseInt(delayArg, 10) : -1;
    if ( isNaN(delay) || isFinite(delay) === false ) { delay = 1000; }
    let boost = parseFloat(boostArg);
    boost = isNaN(boost) === false && isFinite(boost)
        ? Math.min(Math.max(boost, 0.02), 50)
        : 0.05;
    self.setTimeout = new Proxy(self.setTimeout, {
        apply: function(target, thisArg, args) {
            const [ a, b ] = args;
            if (
                (delay === -1 || b === delay) &&
                reNeedle.test(a.toString())
            ) {
                args[1] = b * boost;
            }
            return target.apply(thisArg, args);
        }
    });
}

function patternToRegex(pattern, flags = undefined) {
    if ( pattern === '' ) { return /^/; }
    const match = /^\/(.+)\/([gimsu]*)$/.exec(pattern);
    if ( match !== null ) {
        return new RegExp(match[1], match[2] || flags);
    }
    return new RegExp(pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), flags);
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
    try { nanoSetTimeoutBooster(...JSON.parse(argsList[i])); }
    catch(ex) {}
}
argsList.length = 0;

/******************************************************************************/

})();

/******************************************************************************/

void 0;
