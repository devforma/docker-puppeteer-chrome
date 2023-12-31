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

(function uBOL_nanoSetTimeoutBooster() {

/******************************************************************************/

const scriptletGlobals = new Map(); // jshint ignore: line

const argsList = ["[\"\",\"10000\"]","[\"_0x\",\"*\"]","[\"grecaptcha.ready\",\"*\"]","[\"redirect\",\"4000\"]","[]","[\"dlw\",\"40000\"]","[\"timeUpdater\",\"\",\"0\"]","[\"ez\",\"*\",\"0.02\"]","[\"/.?/\",\"4000\"]","[\"run\"]","[\"disabled\"]","[\"\",\"\",\"0\"]","[\"tick\"]","[\"\",\"\",\"0.02\"]","[\"CountBack\",\"990\"]","[\"seconds\"]","[\"notification_state\",\"12000\"]","[\"/SplashScreen|BannerAd/\"]","[\"startDownload\",\"8000\"]","[\"/.?/\",\"\",\"0.02\"]","[\"\",\"10000\",\"0\"]","[\"downloadbtn\"]","[\"counter\"]","[\"readyToVote\",\"12000\"]","[\"\",\"7000\",\"0\"]","[\"timer--\"]","[\"download\",\"1100\"]","[\"timer\"]","[\"countDown\"]","[\"countdown\",\"10000\"]","[\"animation\"]","[\".fadeIn()\",\"3000\"]","[\"load_ads\"]","[\"_0x\",\"15000\"]","[\"location.href\",\"8000\"]","[\"aTagChange\",\"12000\"]","[\"isScrexed\",\"5000\"]","[\"st2\"]","[\"subentry\",\"4000\"]","[\"/__ez|window.location.href/\",\"*\"]","[\"countdown\"]","[\"location.href\",\"18000\"]","[\"show\",\"4000\"]","[\"download_loading\",\"*\"]","[\"submit\",\"5000\"]","[\"fa-unlock\",\"3000\"]","[\"setinteracted\",\"2000\"]","[\"waiting\",\"5000\"]","[\"finalButton\",\"*\"]","[\"modalTimer\",\"1500\"]","[\"[native code]\"]","[\"recurseMyFunction\"]","[\"myCount\"]","[\"downloadBtn\",\"*\"]","[\"getlink\",\"*\"]","[\"document[_0x\",\"*\"]","[\"\",\"3000\"]","[\"shortenbl\"]","[\"enbll\"]","[\"shortConfig\",\"15000\"]","[\"gotoo\",\"*\"]","[\"\",\"30000\",\"0.02\"]","[\"redirectpage\",\"13500\"]","[\"countdown\",\"\",\"0.02\"]","[\"decodeURL\",\"*\"]","[\"(!1)\",\"*\"]","[\"\",\"*\"]","[\"\",\"*\",\"0.1\"]","[\"/outboundLink/\"]","[\"isPeriodic\",\"*\"]"];

const hostnamesMap = new Map([["spiele.bild.de",0],["gamefront.com",0],["moviepilot.de",1],["imgadult.com",3],["imgdrive.net",3],["imgtaxi.com",3],["imgwallet.com",3],["zupload.me",4],["techmyntra.net",4],["globalbesthosting.com",4],["srt.am",4],["themeslide.com",4],["katfile.com",4],["hubfiles.ws",4],["ausfile.com",4],["siriusfiles.com",4],["juegoviejo.com",4],["uploadever.com",4],["4share.vn",4],["lnk2.cc",4],["modagamers.com",4],["sofwaremania.blogspot.com",4],["memoriadatv.com",4],["uploadraja.com",4],["dosya.co",4],["clipartmax.com",4],["jptorrent.org",4],["quizlet.com",4],["sourceforge.net",4],["redload.co",4],["juegos.eleconomista.es",4],["1fichier.com",5],["movie4k.dev",6],["playretrogames.com",7],["gsm1x.xyz",9],["top1iq.com",9],["youku.com",11],["acessarlink.online",11],["subdowns.com",11],["files.im",12],["dokumen.tips",13],["file.magiclen.org",13],["so1.asia",13],["streamvid.net",13],["lewdzone.com",14],["onlyhgames.com",14],["megaupto.com",15],["uploadmaza.com",15],["uploadflix.org",15],["onuploads.com",15],["direct-link.net",16],["link-to.net",16],["gamearter.com",17],["updown.link",18],["tudogamesbr.com",19],["subsvip.com",20],["uploadking.net",21],["adblockplustape.com",22],["tapewithadblock.org",22],["top.gg",23],["emulatorgames.net",24],["getitall.top",25],["noodlemagazine.com",26],["nexusmods.com",27],["aapks.com",28],["123lnk.xyz",28],["mcrypto.club",29],["codingnepalweb.com",30],["maxstream.video",31],["embed.nana2play.com",32],["mgnet.xyz",33],["1bitspace.com",34],["ytsubme.com",35],["quizack.com",36],["premiumebooks.xyz",[37,38]],["yhocdata.com",39],["downloadr.in",40],["downloadudemy.com",40],["icongnghe.com",41],["uploadcloud.pro",42],["romsgames.net",44],["romsget.io",44],["sub1s.com",45],["mboost.me",46],["bloggertheme.xyz",47],["referus.in",[48,49]],["baketax.com",[50,51,52]],["enit.in",53],["skincarie.com",53],["vocalley.com",54],["hashhackers.com",55],["katdrive.net",55],["newsongs.co.in",55],["edunc.xyz",56],["newstvhindi.in",56],["takez.co",[57,58]],["gyanitheme.com",[60,61]],["dktechnicalmate.com",62],["20sfvn.com",63],["hi888.today",63],["oto5s.com",63],["w88.limo",63],["tralhasvarias.blogspot.com",64],["adikhealth.xyz",66],["bisnis.adigenius.com",66],["mangindo.xyz",66],["intercelestial.com",67],["cyclingnews.com",68],["watcho.com",69]]);

const entitiesMap = new Map([["slreamplay",2],["pouvideo",2],["povvideo",2],["povw1deo",2],["povwideo",2],["powv1deo",2],["powvibeo",2],["powvideo",2],["powvldeo",2],["bdupload",4],["desiupload",4],["9xupload",4],["grantorrent",4],["grantorrents",4],["uploadrar",4],["hdfull",4],["pelispedia",4],["imgrock",8],["mixdrop",10],["mixdrp",10],["zeefiles",12],["uptomega",15],["adblockeronstape",22],["shavetape",22],["stapadblockuser",22],["strcloud",22],["streamadblockplus",22],["streamtapeadblockuser",22],["streamta",22],["streamtape",22],["strtape",22],["strtapeadblock",22],["adblockeronstreamtape",22],["apkmody",43],["financerites",53],["writedroid",59],["empire-stream",65],["empire-streaming",65]]);

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
