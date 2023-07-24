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

(function uBOL_removeNodeText() {

/******************************************************************************/

const scriptletGlobals = new Map(); // jshint ignore: line

const argsList = ["[\"script\",\"Number.isSafeInteger\"]","[\"script\",\".adslot:empty\"]","[\"script\",\"Reflect\"]","[\"script\",\"self == top\"]","[\"script\",\"exdynsrv\"]","[\"script\",\"/onerror|adsbygoogle/\"]","[\"script\",\"FingerprintJS\"]","[\"script\",\"/check_if_blocking|XMLHttpRequest|adkiller/\"]","[\"script\",\"document.createElement\"]","[\"script\",\"block-adb\"]","[\"script\",\"/myreadCookie|my_inter/\"]","[\"script\",\"ExoLoader\"]","[\"script\",\"fakeAd\"]","[\"script\",\"break;case $\"]","[\"script\",\"Adblock\"]","[\"script\",\"break;case $.\"]","[\"style\",\"text-decoration\"]","[\"script\",\"htmls\"]","[\"script\",\"adBlockDetected\"]","[\"script\",\"/window.location|Adblock/\"]","[\"script\",\"window.top\"]","[\"script\",\"popUnder\"]","[\"#text\",\"/スポンサーリンク|Sponsored Link|广告/\"]","[\"#text\",\"スポンサーリンク\"]","[\"#text\",\"スポンサードリンク\"]","[\"#text\",\"/^Advertisement$/\"]","[\"script\",\"navigator.brave\"]","[\"script\",\"zfgloaded\"]","[\"script\",\"ai_adb\"]","[\"script\",\"HTMLAllCollection\"]","[\"script\",\"liedetector\"]","[\"script\",\"/window\\\\.open|window\\\\.location\\\\.href|\\\\$\\\\(document\\\\)\\\\.ready.*show/\"]","[\"script\",\"_name+\\\"-engaged\\\"\"]","[\"script\",\"end_click\"]","[\"script\",\"ad blocker\"]","[\"script\",\"closeAd\"]","[\"script\",\"/modal|popupads/\"]","[\"script\",\"/adconfig/i\"]","[\"script\",\"AdblockDetector\"]","[\"script\",\"WebAssembly\"]","[\"script\",\"is_antiblock_refresh\"]","[\"script\",\"/userAgent|adb|htmls/\"]","[\"script\",\"myModal\"]","[\"script\",\"/RegExp\\\\(\\\\'/\",\"condition\",\"RegExp\"]","[\"script\",\"/_date|Date()|parseInt|banana|adblock|window.location|getElementsByClassName|google_global_correlator|window.onload|nextElementSibling|getElementsByTagName|parentNode.innerHTML/\"]","[\"script\",\"homad\"]"];

const hostnamesMap = new Map([["apkmirror.com",1],["next-episode.net",5],["searchenginereports.net",7],["oko.sh",8],["bigbtc.win",9],["gosexpod.com",10],["sexo5k.com",11],["mynewsmedia.co",12],["revadvert.com",12],["123enjoy.net",13],["kiemlua.com",14],["ak.sv",15],["kienthucrangmieng.com",17],["coin-free.com",17],["btc25.org",17],["btcbitco.in",17],["btcsatoshi.net",17],["cempakajaya.com",17],["crypto4yu.com",17],["gainl.ink",17],["manofadan.com",17],["readbitcoin.org",17],["wiour.com",17],["bitsmagic.fun",17],["ourcoincash.xyz",17],["cryptowidgets.net",18],["freeoseocheck.com",19],["cookinguide.net",19],["makeupguide.net",19],["ntuplay.xyz",20],["vidello.net",21],["resizer.myct.jp",22],["gametohkenranbu.sakuraweb.com",23],["jisakuhibi.jp",24],["rank1-media.com",24],["ghacks.net",25],["leak.sx",26],["pornleaks.in",26],["songspk2.info",27],["truyentranhfull.net",28],["actvid.com",29],["iwatchfriendsonline.net",30],["suaurl.com",31],["qtoptens.com",32],["liveandletsfly.com",32],["nordot.app",32],["khoaiphim.com",33],["haafedk2.com",34],["jovemnerd.com.br",35],["nicomanga.com",36],["totalcsgo.com",37],["moviehab.asia",38],["komikmanhwa.me",39],["manysex.com",40],["gaminginfos.com",41],["tinxahoivn.com",42],["tapewithadblock.org",43],["rjno1.com",44],["spiegel.de",45]]);

const entitiesMap = new Map([["kimcartoon",0],["pahe",2],["soap2day",2],["hqq",3],["waaw",3],["pixhost",4],["viprow",6],["eplayvid",13],["cricstream",15],["kickass",16]]);

const exceptionsMap = new Map([]);

/******************************************************************************/

function removeNodeText(
    nodeName,
    condition,
    ...extraArgs
) {
    replaceNodeTextCore(nodeName, '', '', 'condition', condition || '', ...extraArgs);
}

function replaceNodeTextCore(
    nodeName = '',
    pattern = '',
    replacement = ''
) {
    const reNodeName = patternToRegex(nodeName, 'i');
    const rePattern = patternToRegex(pattern, 'gms');
    const extraArgs = getExtraArgs(Array.from(arguments), 3);
    const shouldLog = scriptletGlobals.has('canDebug') && extraArgs.log || 0;
    const reCondition = patternToRegex(extraArgs.condition || '', 'gms');
    const safe = safeSelf();
    const stop = (takeRecord = true) => {
        if ( takeRecord ) {
            handleMutations(observer.takeRecords());
        }
        observer.disconnect();
        if ( shouldLog !== 0 ) {
            safe.uboLog(`replace-node-text-core.fn: quitting "${pattern}" => "${replacement}"`);
        }
    };
    let sedCount = extraArgs.sedCount || 0;
    const handleNode = node => {
        const before = node.textContent;
        if ( safe.RegExp_test.call(rePattern, before) === false ) { return true; }
        if ( safe.RegExp_test.call(reCondition, before) === false ) { return true; }
        const after = pattern !== ''
            ? before.replace(rePattern, replacement)
            : replacement;
        node.textContent = after;
        if ( shouldLog !== 0 ) {
            safe.uboLog('replace-node-text-core.fn before:\n', before);
            safe.uboLog('replace-node-text-core.fn after:\n', after);
        }
        return sedCount === 0 || (sedCount -= 1) !== 0;
    };
    const handleMutations = mutations => {
        for ( const mutation of mutations ) {
            for ( const node of mutation.addedNodes ) {
                if ( reNodeName.test(node.nodeName) === false ) { continue; }
                if ( handleNode(node) ) { continue; }
                stop(false); return;
            }
        }
    };
    const observer = new MutationObserver(handleMutations);
    observer.observe(document, { childList: true, subtree: true });
    if ( document.documentElement ) {
        const treeWalker = document.createTreeWalker(
            document.documentElement,
            NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT
        );
        let count = 0;
        for (;;) {
            const node = treeWalker.nextNode();
            count += 1;
            if ( node === null ) { break; }
            if ( reNodeName.test(node.nodeName) === false ) { continue; }
            if ( handleNode(node) ) { continue; }
            stop(); break;
        }
        if ( shouldLog !== 0 ) {
            safe.uboLog(`replace-node-text-core.fn ${count} nodes present before installing mutation observer`);
        }
    }
    if ( extraArgs.stay ) { return; }
    runAt(( ) => {
        const quitAfter = extraArgs.quitAfter || 0;
        if ( quitAfter !== 0 ) {
            setTimeout(( ) => { stop(); }, quitAfter);
        } else {
            stop();
        }
    }, 'interactive');
}

function getExtraArgs(args, offset = 0) {
    return Object.fromEntries(getExtraArgsEntries(args, offset));
}

function patternToRegex(pattern, flags = undefined) {
    if ( pattern === '' ) { return /^/; }
    const match = /^\/(.+)\/([gimsu]*)$/.exec(pattern);
    if ( match !== null ) {
        return new RegExp(match[1], match[2] || flags);
    }
    return new RegExp(pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), flags);
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

function getExtraArgsEntries(args, offset) {
    return args.slice(offset).reduce((out, v, i, a) => {
        if ( (i & 1) === 0 ) {
            const rawValue = a[i+1];
            const value = /^\d+$/.test(rawValue)
                ? parseInt(rawValue, 10)
                : rawValue;
            out.push([ a[i], value ]);
        }
        return out;
    }, []);
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
    try { removeNodeText(...JSON.parse(argsList[i])); }
    catch(ex) {}
}
argsList.length = 0;

/******************************************************************************/

})();

/******************************************************************************/

void 0;
