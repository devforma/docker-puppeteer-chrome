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

(function uBOL_replaceNodeText() {

/******************************************************************************/

const scriptletGlobals = new Map(); // jshint ignore: line

const argsList = ["[\"script\",\"popunder\",\"\",\"condition\",\"popunder\",\"stay\",\"1\"]","[\"script\",\"max-height\",\"width\"]","[\"script\",\"\\\"isAdBlockerEnabled\\\":true\",\"\\\"isAdBlockerEnabled\\\":false\"]","[\"script\",\"/protect_block.*?,/\"]","[\"script\",\"(isAdblock)\",\"(false)\"]","[\"script\",\"/web_hide_epik_param_in_promoted_urls.*?enabled\\\"/\",\"web_hide_epik_param_in_promoted_urls\\\":\\\"disabled\\\"\"]","[\"script\",\"/.*adConfig.*frequency_period.*/\",\"(async () => {const a=location.href;if(!a.includes(\\\"/download?link=\\\"))return;const b=new URL(a),c=b.searchParams.get(\\\"link\\\");try{location.assign(`${location.protocol}//${c}`)}catch(a){}} )();\"]","[\"script\",\"/^.*?(function gtag).*$/\",\"document.documentElement.setAttribute('onreset',(function addCustomEvent(){document.addEventListener('resizecanvas',()=>{window.innerWidth=document.documentElement.clientWidth+(window.screen.width<1600?180:320)})})());document.documentElement.dispatchEvent(new CustomEvent('reset'));document.documentElement.removeAttribute('onreset');function resize(event={}){if(!event.skip){document.dispatchEvent(new CustomEvent('resizecanvas'));const resizeEvent=new Event('resize');resizeEvent.skip=true;window.dispatchEvent(resizeEvent)}}let debounce;window.addEventListener('resize',event=>{clearTimeout(debounce);debounce=setTimeout(()=>resize(event),100)});resize();\"]","[\"script\",\"/^window\\\\.location\\\\.href.*\\\\'$/\"]","[\"script\",\"/devtoolsDetector\\\\.launch\\\\(\\\\)\\\\;/\"]","[\"script\",\"/data: \\\\[.*\\\\],/\",\"data: [],\",\"condition\",\"ads_num\"]","[\"script\",\"/try.*finally.*?}/\"]","[\"script\",\"outboundUrl\",\"outbound\"]","[\"script\",\"}else/* -rpnt */{\",\"}if(true){\"]","[\"script\",\"};\",\"}; document.getElementById(\\\"mokuai-search-id\\\").innerHTML = \\\"<form role=\\\\\\\"search\\\\\\\" method=\\\\\\\"get\\\\\\\" class=\\\\\\\"search-form\\\\\\\" action=\\\\\\\"https://www.rjno1.com/\\\\\\\" itemprop=\\\\\\\"potentialAction\\\\\\\" itemscope itemtype=\\\\\\\"http://schema.org/SearchAction\\\\\\\">  <meta itemprop=\\\\\\\"target\\\\\\\" content=\\\\\\\"https://www.rjno1.com/?s=search%20\\\\\\\"/>  <span class=\\\\\\\"screen-reader-text\\\\\\\">搜索：</span> <i class=\\\\\\\"fa fa-search\\\\\\\"></i>  <input type=\\\\\\\"search\\\\\\\" class=\\\\\\\"search-field\\\\\\\" placeholder=\\\\\\\"搜索 &hellip;\\\\\\\" value=\\\\\\\"\\\\\\\" name=\\\\\\\"s\\\\\\\" title=\\\\\\\"Search\\\\\\\" required itemprop=\\\\\\\"query-input\\\\\\\">  <button type=\\\\\\\"submit\\\\\\\" class=\\\\\\\"search-submit\\\\\\\"> <span >搜索</span> </button></form>\\\";\"]","[\"script\",\"\\\"};\",\"\\\"};var dl_buttom_id = document.getElementById(\\\"dl-buttom-id-for-js\\\").innerHTML = \\\"<a href=\\\\\\\"https://www.rjno1.com/\\\" + document.location.href.replace(\\\"https://www.rjno1.com/\\\", \\\"\\\") + \\\"download-\\\" + document.location.href.replace(\\\"https://www.rjno1.com/\\\", \\\"\\\") + \\\"\\\\\\\" class=\\\\\\\"post-download-address-button\\\\\\\"><i class=\\\\\\\"fa fa-download-button\\\\\\\"></i><span class=\\\\\\\"screen-reader-text\\\\\\\">下载地址</span>Download</a><div class=\\\\\\\"clear\\\\\\\"></div>\\\";\"]","[\"script\",\"/\\\\\\\"homad\\\\\\\",/\"]","[\"script\",\"/\\\\\\\"homad\\\\\\\":\\\\{\\\\\\\"state\\\\\\\":\\\\\\\"enabled\\\\\\\"\\\\}/\",\"\\\"homad\\\":{\\\"state\\\":\\\"disabled\\\"}\"]","[\"script\",\"/;\\\\$.*:\\\\(/\",\";(\"]","[\"script\",\"/^/\",\"if(typeof alreadyRun!=='undefined'&&alreadyRun===true){}else{alreadyRun=true;(function(){'use strict';const safe={'log':window.console.log.bind(console),'addEventListener':self.EventTarget.prototype.addEventListener,'setInterval':window.setInterval,'clearInterval':window.clearInterval,'querySelectorAll':document.querySelectorAll,'adoptedStyleSheets':document.adoptedStyleSheets,'createElement':document.createElement,'setAttribute':Element.prototype.setAttribute,'removeAttribute':Element.prototype.removeAttribute,'getAttribute':Element.prototype.getAttribute,'scrollIntoView':Element.prototype.scrollIntoView,'String_replace':String.prototype.replace,'String_includes':String.prototype.includes,'Array_includes':Array.prototype.includes,'Array_push':Array.prototype.push,'Array_splice':Array.prototype.splice,'Array_indexOf':Array.prototype.indexOf,'Math_random':Math.random};document.createElement=function(){};let intervalID='';let mainCode='';const generateID=function(len){const dec2hex=function(dec){return dec.toString(16).padStart(2,'0')};const arr=new Uint8Array((len||40)/2);window.crypto.getRandomValues(arr);const result=Array.from(arr,dec2hex).join('').replace(/^\\\\d+/g,'');if(result.length<1){return generateID(len)};return result};const randomAttribute=generateID(15);const randomClass=generateID(15);const randomStyle=generateID(15);const styleSheet=new CSSStyleSheet();styleSheet.replaceSync(`[${randomAttribute}]{display:none!important}`);safe.adoptedStyleSheets.push(styleSheet);Object.defineProperty(document,'adoptedStyleSheets',{get:function(){let sheets=[...safe.adoptedStyleSheets];sheets.forEach(sheet=>{const rules=sheet.cssRules;for(let i=0;i<rules.length;i++){if(safe.String_includes.call(rules[i].cssText,randomAttribute)){safe.Array_splice.call(sheets,safe.Array_indexOf.call(sheets,sheet),1);break}}});return sheets}});const processNode=function(mode,node){if(mode==='hide'){safe.setAttribute.apply(node,[randomAttribute,'']);const realClass=safe.getAttribute.apply(node,['class']);const realStyle=safe.getAttribute.apply(node,['style']);if(realClass){safe.setAttribute.apply(node,[randomClass,realClass]);safe.removeAttribute.apply(node,['class'])};if(realStyle){safe.setAttribute.apply(node,[randomStyle,realStyle]);safe.removeAttribute.apply(node,['style'])}}else{safe.removeAttribute.apply(node,[randomAttribute]);const realClass=safe.getAttribute.apply(node,[randomClass]);const realStyle=safe.getAttribute.apply(node,[randomStyle]);if(realClass){safe.setAttribute.apply(node,['class',realClass]);safe.removeAttribute.apply(node,[randomClass])};if(realStyle){safe.setAttribute.apply(node,['style',realStyle]);safe.removeAttribute.apply(node,[randomStyle])}}};const modifyAds=function(mode){const nodes_1_2=[...safe.querySelectorAll.apply(document,['a > img']),...safe.querySelectorAll.apply(document,['footer a[href*=\\\"smostafa\\\" i]'])];const nodes_3=safe.querySelectorAll.apply(document,['main article a']);const nodes_4=safe.querySelectorAll.apply(document,['header + div a[href*=\\\"linkdoni.soft98.ir\\\"]']);for(let i=0,len=nodes_1_2.length;i<len;++i){processNode(mode,nodes_1_2[i].parentElement)};for(let i=0,len=nodes_3.length;i<len;++i){const node=nodes_3[i];if(node.innerText&&safe.String_replace.call(node.innerText,/[^آ-ی]|ـ|[\\\\u064B-\\\\u065F\\\\u0670]/g,'')==='سیسبان'){processNode(mode,node.parentElement)}};for(let i=0,len=nodes_4.length;i<len;++i){processNode(mode,nodes_4[i].closest('div'))}};const genericGet=function(target,thisArg,args){if(thisArg==='toString'){return target.toString.bind(target)};return Reflect.get(target,thisArg,args)};window.eval=new Proxy(window.eval,{apply(target,thisArg,args){mainCode=args[0];args[0]=function(){};window.eval=target;return Reflect.apply(target,thisArg,args)},get:genericGet});const controller=new AbortController();const{signal}=controller;const goodEvents=['click','transitionend','scroll','focus'];self.EventTarget.prototype.addEventListener=new Proxy(self.EventTarget.prototype.addEventListener,{apply(target,thisArg,args){if(!safe.Array_includes.call(goodEvents,args[0])){safe.Array_push.call(args,{signal})};const originalHandler=args[1];const wrappedHandler=function(event){modifyAds('show');originalHandler(event);modifyAds('hide')};args[1]=wrappedHandler;return Reflect.apply(target,thisArg,args)},get:genericGet});window.setInterval=new Proxy(window.setInterval,{apply(target,thisArg,args){const originalFunction=args[0];const wrappedFunction=function(){modifyAds('show');originalFunction();modifyAds('hide')};args[0]=wrappedFunction;return Reflect.apply(target,thisArg,args)},get:genericGet});let booster=1;if(location.href.endsWith('.html')===true){booster=safe.Math_random()*(0.3-0.1)+0.1};window.setTimeout=new Proxy(window.setTimeout,{apply(target,thisArg,args){const originalFunction=args[0];const wrappedFunction=function(){modifyAds('show');originalFunction();modifyAds('hide')};args[0]=wrappedFunction;args[1]=args[1]*booster;return Reflect.apply(target,thisArg,args)},get:genericGet});Element.prototype.setAttribute=new Proxy(Element.prototype.setAttribute,{apply(target,thisArg,args){if(booster!==1){if(args[0]==='href'&&safe.String_includes.call(args[1],'://dl')){booster=1;Element.prototype.setAttribute=target}};return Reflect.apply(target,thisArg,args)},get:genericGet});const main=function(){modifyAds('hide');window.scrollTo(0,document.body.scrollHeight);let originalScripts=[];const xhr=new XMLHttpRequest();xhr.open('GET',location.href,false);xhr.onreadystatechange=function(){if(xhr.readyState===4&&xhr.status===200){const parser=new DOMParser();const doc=parser.parseFromString(xhr.responseText,'text/html');const originalNodes=doc.querySelectorAll('script');const modifiedNodes=safe.querySelectorAll.apply(document,['script']);for(let i=0;i<modifiedNodes.length;i++){const originalNode=originalNodes[i];const modifiedNode=modifiedNodes[i];modifiedNode.innerText=originalNode.innerText;originalScripts.push(originalNode.innerText)}}};xhr.send();intervalID=safe.setInterval.apply(window,[function(){if(mainCode!==''){safe.clearInterval.apply(window,[intervalID]);delete window.alreadyRun;modifyAds('show');document.createElement=safe.createElement;originalScripts.forEach(originalScript=>{try{window.eval(originalScript)}catch(e){}});window.eval(mainCode);controller.abort();const nodes=safe.querySelectorAll.apply(document,['main article a[target]']);for(let i=0,len=nodes.length;i<len;++i){safe.scrollIntoView.call(nodes[i])}}},1])};if(document.readyState!=='loading'){main()}else{safe.addEventListener.apply(document,['DOMContentLoaded',function(){main()}])}})()};\"]"];

const hostnamesMap = new Map([["fullxh.com",0],["megaxh.com",0],["unlockxh4.com",0],["xhadult2.com",0],["xhadult3.com",0],["xhadult4.com",0],["xhadult5.com",0],["xhamster46.com",0],["xhday.com",0],["xhday1.com",0],["xhmoon5.com",0],["xhplanet1.com",0],["xhplanet2.com",0],["xhreal2.com",0],["xhreal3.com",0],["xhtab2.com",0],["xhvictory.com",0],["xhwebsite.com",0],["xhwebsite2.com",0],["xhwide1.com",0],["xhwide8.com",0],["searchenginereports.net",1],["games.dailymail.co.uk",2],["games.metro.us",2],["bussyhunter.com",3],["codingnepalweb.com",4],["jpvhub.com",6],["photopea.com",7],["gyanitheme.com",8],["hipsonyc.com",8],["idoitmyself.xyz",9],["foodxor.com",11],["reddit.com",12],["rjno1.com",[13,14,15]],["giga.de",16],["kino.de",16],["t-online.de",17],["megaup.net",18],["soft98.ir",19]]);

const entitiesMap = new Map([["hamsterix",0],["xhamster",0],["xhamster1",0],["xhamster10",0],["xhamster11",0],["xhamster12",0],["xhamster13",0],["xhamster14",0],["xhamster15",0],["xhamster16",0],["xhamster17",0],["xhamster18",0],["xhamster19",0],["xhamster20",0],["xhamster2",0],["xhamster3",0],["xhamster4",0],["xhamster5",0],["xhamster7",0],["xhamster8",0],["pinterest",5],["empire-stream",10],["empire-streaming",10]]);

const exceptionsMap = new Map([["old.reddit.com",[12]],["forum.soft98.ir",[19]]]);

/******************************************************************************/

function replaceNodeText(
    nodeName,
    pattern,
    replacement,
    ...extraArgs
) {
    replaceNodeTextCore(nodeName, pattern, replacement, ...extraArgs);
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
    try { replaceNodeText(...JSON.parse(argsList[i])); }
    catch(ex) {}
}
argsList.length = 0;

/******************************************************************************/

})();

/******************************************************************************/

void 0;
