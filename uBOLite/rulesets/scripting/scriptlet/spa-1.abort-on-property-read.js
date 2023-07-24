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

(function uBOL_abortOnPropertyRead() {

/******************************************************************************/

const scriptletGlobals = new Map(); // jshint ignore: line

const argsList = ["[\"Object.prototype.autoRecov\"]","[\"ad_nodes\"]","[\"hb_now\"]","[\"adblock\"]","[\"adsBlocked\"]","[\"adblockDetected\"]","[\"gothamBatAdblock\"]","[\"Bl0ckAdBl0ckCo\"]","[\"ppAdblocks\"]","[\"mMCheckAgainBlock\"]","[\"cJsEdge\"]","[\"_pop\"]","[\"lolaop\"]","[\"adk_pdisp\"]","[\"__clientAHV\"]","[\"redirectpage\"]","[\"initPopunder\"]","[\"_cpp\"]","[\"popurl\"]","[\"the_crakien\"]","[\"allclick_Public\"]","[\"zoneSett\"]","[\"checkCookieClick\"]","[\"_0x4e52\"]","[\"Redirecionar\"]","[\"scriptwz_url\"]","[\"smrtSB\"]","[\"asgPopScript\"]","[\"Object.prototype.Focm\"]","[\"smrtSP\"]","[\"adbClick\"]","[\"pub\"]","[\"Pub2\"]"];

const hostnamesMap = new Map([["pcworld.es",0],["tunovelaligera.com",1],["20minutos.es",2],["comando.to",3],["porno-japones.top",4],["tvplusgratis.com",5],["hobbugs.com",5],["seriesretro.com",6],["cozinha.minhasdelicias.com",7],["diariodegoias.com.br",8],["outerspace.com.br",8],["1f1.in",9],["1i1.in",9],["cuevana.biz",10],["cuevana.run",10],["repelispluss.tv",11],["fiuxy2.com",12],["pelispop.me",13],["pelisplus.icu",14],["baixartorrents.org",[15,16]],["pctmix1.com",17],["aquariumgays.com",17],["allfeeds.live",18],["grantorrent.nl",21],["hentaistube.com",22],["libertinga.net",23],["mrpiracy.top",24],["seireshd.com",25],["cinetux.to",[26,27]],["holanime.com",28],["pirlotv.es",29],["repelisplus.vip",30],["descargaranimehentai.com",31],["tuhentaionline.com",32]]);

const entitiesMap = new Map([["cinecalidad2",19],["cine-calidad",20]]);

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
