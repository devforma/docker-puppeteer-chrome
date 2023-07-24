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

// ruleset: annoyances-cookies

/******************************************************************************/

// Important!
// Isolate from global scope

(function uBOL_setCookie() {

/******************************************************************************/

const scriptletGlobals = new Map(); // jshint ignore: line

const argsList = ["[\"kali-cc-agreed\",\"true\"]","[\"cookieConsent\",\"true\",\"reload\",\"\",\"1\"]","[\"legalOk\",\"true\"]","[\"comfortConsent\",\"true\"]","[\"trackingConsent\",\"true\"]","[\"baypol_banner\",\"true\"]","[\"baypol_functional\",\"true\"]","[\"CookieConsent\",\"OK\"]","[\"BM_Advertising\",\"false\",\"\",\"reload\",\"1\"]","[\"BM_User_Experience\",\"true\"]","[\"BM_Analytics\",\"false\"]","[\"cookietypes\",\"OK\"]","[\"consent_setting\",\"OK\",\"\",\"reload\",\"1\"]","[\"user_accepts_cookies\",\"true\"]","[\"gdpr_agreed\",\"4\"]","[\"ra-cookie-disclaimer-11-05-2022\",\"true\"]","[\"acceptMatomo\",\"true\"]","[\"UBI_PRIVACY_POLICY_ACCEPTED\",\"true\"]","[\"UBI_PRIVACY_POLICY_VIEWED\",\"true\"]","[\"UBI_PRIVACY_VID_OPTOUT\",\"false\"]","[\"UBI_PRIVACY_VIDEO_OPTOUT\",\"false\"]","[\"BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_BANNER_LOADED\",\"1\"]","[\"BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_BANNER_VIEWED\",\"1\"]","[\"BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_Functional\",\"1\"]","[\"ARE_FUNCTIONAL_COOKIES_ACCEPTED\",\"true\"]","[\"ARE_MARKETING_COOKIES_ACCEPTED\",\"true\"]","[\"ARE_REQUIRED_COOKIES_ACCEPTED\",\"true\"]","[\"HAS_COOKIES_FORM_SHOWED\",\"true\"]","[\"accepted_functional\",\"yes\"]","[\"accepted_marketing\",\"no\"]","[\"allow_the_cookie\",\"yes\"]","[\"cookie_visited\",\"true\"]","[\"drcookie\",\"true\"]","[\"wed_cookie_info\",\"1\"]","[\"acceptedCookies\",\"true\"]","[\"cookieMessageHide\",\"true\"]","[\"sq\",\"3\"]","[\"notice_preferences\",\"2\"]","[\"cookie_consent_all\",\"1\"]","[\"eb_cookie_agree\",\"1\"]","[\"sc-cookies-accepted\",\"true\"]","[\"ccpa-notice-viewed-02\",\"true\"]","[\"cookieConsent\",\"yes\"]","[\"dsgvo_consent\",\"1\"]","[\"plenty-shop-cookie\",\"0\"]","[\"acceptedPolicy\",\"true\"]","[\"cookie-consent\",\"false\"]","[\"consent-analytics\",\"false\"]","[\"cookieConsentClosed\",\"true\"]","[\"_tvsPrivacy\",\"true\"]","[\"epCookieConsent\",\"1\"]","[\"intro\",\"true\"]","[\"SeenCookieBar\",\"true\"]","[\"AllowCookies\",\"true\"]","[\"cookiesAccepted\",\"3\"]","[\"gdpr_dismissal\",\"true\"]","[\"uev2.gg\",\"true\"]","[\"cookie-preference\",\"1\"]","[\"closeNotificationAboutCookie\",\"true\"]","[\"cookie-policy\",\"true\"]","[\"bitso_cc\",\"1\"]","[\"AcceptKeksit\",\"0\",\"\",\"reload\",\"1\"]","[\"cookiepref\",\"true\"]","[\"cookieconsent_status\",\"1\"]","[\"PVH_COOKIES_GDPR\",\"Accept\"]","[\"PVH_COOKIES_GDPR_SOCIALMEDIA\",\"Reject\"]","[\"PVH_COOKIES_GDPR_ANALYTICS\",\"Reject\"]","[\"notice_preferences\",\"1\"]","[\"gdpr_opt_in\",\"1\"]"];

const hostnamesMap = new Map([["clearblue.com",0],["bayernportal.de",[1,3,4]],["qwice.com",2],["polizei.bayern.de",[5,6]],["jku.at",7],["backmarket.de",[8,9,10]],["backmarket.co.uk",[8,9,10]],["backmarket.es",[8,9,10]],["backmarket.be",[8,9,10]],["backmarket.at",[8,9,10]],["backmarket.fr",[8,9,10]],["backmarket.gr",[8,9,10]],["backmarket.fi",[8,9,10]],["backmarket.ie",[8,9,10]],["backmarket.it",[8,9,10]],["backmarket.nl",[8,9,10]],["backmarket.pt",[8,9,10]],["backmarket.se",[8,9,10]],["backmarket.sk",[8,9,10]],["backmarket.com",[8,9,10]],["book-n-drive.de",11],["cotswoldoutdoor.com",12],["cam.start.canon",13],["usnews.com",14],["researchaffiliates.com",15],["singkinderlieder.de",16],["store.ubisoft.com",[17,18,19,20]],["britishairways.com",[21,22,23]],["cineman.pl",[24,25,26]],["tv-trwam.pl",[24,25,26,27]],["qatarairways.com",[28,29,30,31,32]],["wedding.pl",33],["vivaldi.com",34],["emuia1.gugik.gov.pl",35],["nike.com",36],["adidas.at",37],["adidas.be",37],["adidas.ca",37],["adidas.ch",37],["adidas.cl",37],["adidas.co",37],["adidas.co.in",37],["adidas.co.kr",37],["adidas.co.nz",37],["adidas.co.th",37],["adidas.co.uk",37],["adidas.com",37],["adidas.com.ar",37],["adidas.com.au",37],["adidas.com.br",37],["adidas.com.my",37],["adidas.com.ph",37],["adidas.com.vn",37],["adidas.cz",37],["adidas.de",37],["adidas.dk",37],["adidas.es",37],["adidas.fi",37],["adidas.fr",37],["adidas.gr",37],["adidas.ie",37],["adidas.it",37],["adidas.mx",37],["adidas.nl",37],["adidas.no",37],["adidas.pe",37],["adidas.pl",37],["adidas.pt",37],["adidas.ru",37],["adidas.se",37],["adidas.sk",37],["colourbox.com",38],["ebilet.pl",39],["snap.com",40],["ratemyprofessors.com",41],["filen.io",42],["dasfutterhaus.at",43],["stilord.com",44],["stilord.pl",44],["stilord.de",44],["stilord.fr",44],["quantamagazine.org",45],["followalice.com",46],["scaleway.com",47],["hellotv.nl",48],["lasestrellas.tv",49],["bikepro.de",50],["kaffeediscount.com",50],["vamos-skateshop.com",50],["holland-shop.com",50],["officesuite.com",51],["fups.com",[52,53]],["scienceopen.com",54],["calendly.com",55],["ubereats.com",56],["leki.com",57],["101internet.ru",58],["tunnelmb.net",59],["bitso.com",60],["eco-toimistotarvikkeet.fi",61],["proficient.fi",61],["developer.ing.com",62],["ehealth.gov.gr",63],["calvinklein.se",[64,65,66]],["calvinklein.fi",[64,65,66]],["calvinklein.sk",[64,65,66]],["calvinklein.si",[64,65,66]],["calvinklein.ch",[64,65,66]],["calvinklein.ru",[64,65,66]],["calvinklein.com",[64,65,66]],["calvinklein.pt",[64,65,66]],["calvinklein.pl",[64,65,66]],["calvinklein.at",[64,65,66]],["calvinklein.nl",[64,65,66]],["calvinklein.hu",[64,65,66]],["calvinklein.lu",[64,65,66]],["calvinklein.lt",[64,65,66]],["calvinklein.lv",[64,65,66]],["calvinklein.it",[64,65,66]],["calvinklein.ie",[64,65,66]],["calvinklein.hr",[64,65,66]],["calvinklein.fr",[64,65,66]],["calvinklein.es",[64,65,66]],["calvinklein.ee",[64,65,66]],["calvinklein.de",[64,65,66]],["calvinklein.dk",[64,65,66]],["calvinklein.cz",[64,65,66]],["calvinklein.bg",[64,65,66]],["calvinklein.be",[64,65,66]],["calvinklein.co.uk",[64,65,66]],["formula1.com",67],["howstuffworks.com",68]]);

const entitiesMap = new Map([]);

const exceptionsMap = new Map([]);

/******************************************************************************/

function setCookie(
    name = '',
    value = '',
    path = ''
) {
    if ( name === '' ) { return; }
    name = encodeURIComponent(name);

    const validValues = new Set([
        'true', 'True',
        'false', 'False',
        'yes', 'Yes', 'y', 'Y',
        'no', 'No', 'n', 'N',
        'ok', 'OK',
        'Accept', 'Reject',
    ]);
    if ( validValues.has(value) === false ) {
        if ( /^\d+$/.test(value) === false ) { return; }
        const n = parseInt(value, 10);
        if ( n > 15 ) { return; }
    }
    value = encodeURIComponent(value);

    setCookieHelper(
        name,
        value,
        '',
        path,
        getExtraArgs(Array.from(arguments), 3)
    );
}

function getExtraArgs(args, offset = 0) {
    return Object.fromEntries(getExtraArgsEntries(args, offset));
}

function setCookieHelper(
    name = '',
    value = '',
    expires = '',
    path = '',
    options = {},
) {
    const cookieExists = (name, value) => {
        return document.cookie.split(/\s*;\s*/).some(s => {
            const pos = s.indexOf('=');
            if ( pos === -1 ) { return false; }
            if ( s.slice(0, pos) !== name ) { return false; }
            if ( s.slice(pos+1) !== value ) { return false; }
            return true;
        });
    };

    if ( options.reload && cookieExists(name, value) ) { return; }

    const cookieParts = [ name, '=', value ];
    if ( expires !== '' ) {
        cookieParts.push('; expires=', expires);
    }

    if ( path === '' ) { path = '/'; }
    else if ( path === 'none' ) { path = ''; }
    if ( path !== '' && path !== '/' ) { return; }
    if ( path === '/' ) {
        cookieParts.push('; path=/');
    }
    document.cookie = cookieParts.join('');

    if ( options.reload && cookieExists(name, value) ) {
        window.location.reload();
    }
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
    try { setCookie(...JSON.parse(argsList[i])); }
    catch(ex) {}
}
argsList.length = 0;

/******************************************************************************/

})();

/******************************************************************************/

void 0;
