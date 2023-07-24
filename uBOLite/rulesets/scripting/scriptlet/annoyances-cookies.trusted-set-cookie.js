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

(function uBOL_trustedSetCookie() {

/******************************************************************************/

const scriptletGlobals = new Map(); // jshint ignore: line

const argsList = ["[\"SOCS\",\"CAESEwgDEgk1MjE4NjcxMTIaAmVuIAEaBgiAl7ihBg\",\"1year\",\"\",\"reload\",\"1\"]","[\"SOCS\",\"CAESHAgBEhJnd3NfMjAyMzA2MTItMF9SQzIaAmZpIAEaBgiAzK6kBg\",\"1year\"]","[\"datr\",\"__GMZCgwVF5BbyvAtfJojQwg\",\"1year\",\"\",\"reload\",\"1\"]","[\"ig_did\",\"0C826C21-17C3-444A-ABB7-EBABD37214D7\",\"1year\",\"\",\"reload\",\"1\"]","[\"euconsent-v2\",\"CPtgasAPtgasAAGABCENDECgAAAAAAAAAApAAAAAAAAA.YAAAAAAAAAAA\",\"1year\"]","[\"consentUUID\",\"dde2fbcb-0722-417a-92be-67407ba369de_20\",\"1year\"]","[\"euconsent-v2\",\"CPt3fQAPt3fQACNAFAENDLCgAAAAAAAAACiQAAAOCgDAB-AIsAZ8A6QDBAHBAAAA.YAAAAAAAAAAA\",\"1year\"]","[\"tracking-opt-in-status\",\"rejected\",\"1year\"]","[\"addtl_consent\",\"1~\",\"1year\"]","[\"dm-euconsent-v2\",\"CPt6yMAPt6yMABpAGAENDECgAAAAAH_AAAqIAAAS3AJMNW4gC7MocGbQMIoEQIwrCQigUAEFAMLRAQAODgp2VgE-sIkAKAUARgRAhwBRkQCAAASAJCIAJAiwQAAAiAQAAgAQCIQAMDAIKACwEAgABAdAxRCgAECQgSIiIhTAgKgSCAlsqEEoLpDTCAKssAKARGwUACIJARWAAICwcAwRICViwQJMQbRAAMAKAUSoVqKT00BCxmQAAAAA\",\"1year\"]","[\"consentUUID\",\"9f883906-c5ae-4d90-80a1-6623a4211ad4_21\",\"1year\"]","[\"consentUUID\",\"629d4124-fa7b-43b4-8158-d596cef1004d_21\",\"1year\"]","[\"consentUUID\",\"f0aaedd0-2a07-443a-b90f-055c553b5160_21\",\"1year\"]","[\"consentUUID\",\"14ec7082-be8b-4b4c-a5b4-668972e0e04b_21\",\"1year\"]","[\"fig_save_consent\",\"iTTPgpSWqAGGcd3vV88zNDbHsABxE1hB\",\"1year\"]","[\"euconsent-v2\",\"CPubvkAPubvkAAHABBENDMCgAAAAAAAAAB5YAAAAAAAA.YAAAAAAAAAAA\",\"1year\"]","[\"c24-consent\",\"AAAAH0Eq\",\"1year\",\"\",\"reload\",\"1\"]","[\"wt_tandc\",\"20190527%3A1\"]","[\"OptanonAlertBoxClosed\",\"$currentDate$\",\"1year\"]","[\"_EVAcookieaccept\",\"Y\",\"1year\"]","[\"_EVAGDPRfunctional\",\"Y\",\"1year\"]","[\"OptanonConsent\",\"groups=C0004%3A0%2CC0003%3A1%2CC0002%3A0%2CC0001%3A1%2CSTACK42%3A0\",\"1year\"]","[\"eupubconsent-v2\",\"CPt6LrpPt6LrpAcABBENDKCgAAAAAAAAAAYgGBtX_T5eb2vj-3ZcN_tkaYwP55y3o2wzhhaIke8NwIeH7BoGJ2MwvBV4JiACGBAkkiKBAQVlHGBcCQAAgIgRiSKMYk2MjzNKJLJAilMbO0NYCD9mnkHT2ZCY70-uO__zvneAAAAYJABAXmKgAgLzGQAQF5joAIC8yUAEBeZSACAvMAAA.YAAAAAAAAAAA\",\"1year\",\"\",\"reload\",\"1\"]","[\"OptanonConsent\",\"groups=1%3A1%2C2%3A0%2C3%3A1%2C4%3A0%2C5%3A1%2CBG57%3A0%2CBG58%3A0%2CBG59%3A0\",\"1year\"]","[\"TcString\",\"CPtgasAPtgasABUAMAFIDICgAP_AAAAAAApAAAAMEgLgALAAqABkADwAIAAZAA0AB8AEQAJgATwA5gB-AEIANEAbIBFgC0gGKAM-AmQBeYDBACQkBAABYAFQAMgAeABAADIAGgARAAmABPADmAH4AQgA2QDFALzDQAgBsgFpEQAQBsioAYATAC0gLzGQAgAmALzHQFAAFgAVAAyACAAGQANAAfABEACYAE8AOYAfgBogDZAIsAWkAxQB1AEyALzIQBgAFgAZACYAWkAxQB1CUAkABYAGQAiABMAGyAWkAxQB1AF5lICAACwAKgAZABAADIAGgARAAmABPADmAH4AaIA2QCLAGKAXmAAA.YAAAAAAAAIAA\",\"1year\"]","[\"gravitoData\",\"{\\\"NonTCFVendors\\\":[{\\\"id\\\":1,\\\"name\\\":\\\"Facebook\\\",\\\"consent\\\":true},{\\\"id\\\":3,\\\"name\\\":\\\"Google\\\",\\\"consent\\\":true},{\\\"id\\\":9,\\\"name\\\":\\\"Twitter\\\",\\\"consent\\\":true}]}\",\"1year\"]","[\"OptanonConsent\",\"groups=C0001%3A1%2CC0002%3A1%2CC0003%3A1%2CC0004%3A0%2CC0005%3A0\",\"1year\"]","[\"ladies-cookies-overlay\",\"%7B%22cookie-category-essential%22%3Atrue%2C%22cookie-category-stats%22%3Afalse%2C%22cookie-category-map_services%22%3Atrue%7D\",\"\",\"\",\"reload\",\"1\"]","[\"opt_out\",\"analyse,werbe\"]","[\"OptanonConsent\",\"groups=C0001%3A1%2CC0003%3A1%2CSPD_BG%3A1%2CC0002%3A1%2CC0004%3A1%2CC0005%3A1\",\"\",\"\",\"reload\",\"1\"]","[\"STYXKEY_your_privacy_settings\",\"%7B%22strict%22%3A%221%22%2C%22thirdparty%22%3A%221%22%2C%22advanced%22%3A%220%22%7D\",\"1year\",\"\",\"reload\",\"1\"]","[\"consentUUID\",\"5937071e-5211-4df8-b4f9-89a0d5919eae_20\",\"1year\"]","[\"consentUUID\",\"8fde91ba-0aba-476f-af30-e7427e3c246d_21\"]","[\"OptanonConsent\",\"groups=C0001%3A1%2CC0009%3A0%2CC0002%3A0%2CC0003%3A1%2CC0004%3A1\",\"1year\"]","[\"allowCookies\",\"{\\\"uvc\\\":true,\\\"__cfduid\\\":true}\"]","[\"cookieConsent\",\"%5B%7B%22name%22%3A%22essenziell%22%2C%22value%22%3A%22on%22%7D%2C%7B%22name%22%3A%22komfort%22%2C%22value%22%3A%22on%22%7D%2C%7B%22name%22%3A%22marketing%22%2C%22value%22%3A%22off%22%7D%2C%7B%22name%22%3A%22statistik%22%2C%22value%22%3A%22off%22%7D%2C%7B%22name%22%3A%22speichern%22%2C%22value%22%3A%22on%22%7D%5D\",\"1year\"]","[\"OptanonConsent\",\"groups=C0001%3A1%2CC0002%3A0%2CC0003%3A1%2CC0004%3A0%2CC0005%3A1\",\"1year\"]","[\"consents\",\":4:6:7:8:9:10:11:12:13:19:\"]","[\"__cmpcpc\",\"__1_2__\"]","[\"__cmpcvc\",\"__c24599_s94_c24102_s40_s1052_s65_c24103_s23_c9953_c24290_c24098_s26_s2612_s135_s1104_s1409_s905_s24_c24202_c22143_c21373_s77_s30_U__\"]","[\"__cmpconsentx40263\",\"BPuKNGaPuKNGaAfEHBFIABAAAAA_mABAfyA\"]","[\"consent-levels\",\"1-1_2-1_3-0_4-0\",\"1year\"]","[\"OptanonConsent\",\"groups=C0001%3A1%2CC0002%3A0%2CC0003%3A1%2CC0004%3A1\",\"1year\"]","[\"OptanonConsent\",\"groups=C0001%3A1%2CC0002%3A0%2CC0003%3A0%2CC0004%3A1\"]","[\"euconsent-v2\",\"CPubvkAPubvkAAHABBENDMCgAM_AAE7AAAqII7FF_X7eTSPheWp_Y_tUOY0ewVQ_4-AhBgCJA4gBCRpAsJQEkGAIIEDAIAAKAAYEIGJBAAElAAFABEAAYIEBACHMAAAAIRAAIDKAAAAAAgBACABYEwAAAAIAgEBUABUAiAIAABogwMBAEAAgBEAAAAogAIBBAAAAACAAwAAQAAAIAggAAAAAAAAEAAAEAAAAEAAABJKADAAEExQ0AGAAIJiioAMAAQTFKQAYAAgmKOgAwABBMUhABgACCYoSADAAEExREAGAAIJijIAMAAQTFAAA.efgACdgAAAAA\",\"1year\",\"\",\"reload\",\"1\"]","[\"OptanonConsent\",\"groups=1%3A1%2C2%3A0%2C3%3A1%2C4%3A0%2C5%3A0%2CBG40%3A0%2CBG41%3A0%2CBG42%3A0\",\"1year\"]","[\"euconsent-v2\",\"CPuy0IAPuy0IAAHABBENDNCgAAAAAAAAAAAAJNFB_G5cSWNhOHJvY9tUaQ0HwFR4o6AgDgCZA4wBCRIAMIwF0GAAIEBAIAgAAAAEAAJAAAAEAAHAAAAAAIEBASCIAEAAIBAAICAAAAABQgAACABJGwAAEAAAAEQEABQAgAIAQBuAQEAAAAAAAAAAAAgBAABBAAAAAAAgAAAIAAAAAAgAEAAAAAAAAAAAABAAEAAAAAEAAABIaADAAEExRUAGAAIJihIAMAAQTFEQAYAAgmKMgAwABBMUdABgACCYpCADAAEExSUAGAAIJilIAMAAQTFA.YAAAAAAAAAAA\"]"];

const hostnamesMap = new Map([["youtube.com",0],["facebook.com",2],["instagram.com",3],["bloomberg.com",[4,5]],["fandom.com",[6,7,8]],["dailymotion.com",9],["standard.co.uk",10],["independent.co.uk",11],["theguardian.com",12],["bbc.com",13],["lefigaro.fr",14],["filmweb.pl",15],["chrono24.com",16],["wetransfer.com",17],["gamespot.com",[18,26]],["mtvuutiset.fi",[18,23]],["thejournal.ie",[18,43]],["vkmag.com",[18,21,22]],["zdnet.com",[18,36]],["evaair.com",[19,20]],["arvopaperi.fi",[24,25]],["iltalehti.fi",[24,25]],["kauppalehti.fi",[24,25]],["mediuutiset.fi",[24,25]],["mikrobitti.fi",[24,25]],["talouselama.fi",[24,25]],["tekniikkatalous.fi",[24,25]],["tivi.fi",[24,25]],["uusisuomi.fi",[24,25]],["asialadies.de",27],["avladies.de",27],["badeladies.de",27],["behaarteladies.de",27],["bizarrladies.de",27],["busenladies.de",27],["deutscheladies.de",27],["devoteladies.de",27],["dominanteladies.de",27],["erfahreneladies.de",27],["escorts24.de",27],["exklusivladies.de",27],["fkk24.de",27],["grosseladies.de",27],["hobbyladies.de",27],["jungeladies.de",27],["kollegin.de",27],["kussladies.de",27],["ladies.de",27],["latinaladies.de",27],["massierendeladies.de",27],["mollyladies.de",27],["nsladies.de",27],["nymphomaneladies.de",27],["orientladies.de",27],["osteuropaladies.de",27],["piercingladies.de",27],["rasierteladies.de",27],["schokoladies.de",27],["tattooladies.de",27],["tsladies.de",27],["zaertlicheladies.de",27],["zierlicheladies.de",27],["1a-finanzmarkt.de",28],["1a-immobilienmarkt.de",28],["1a-reisemarkt.de",28],["1a-singleboerse.de",28],["1a-stellenmarkt.de",28],["gameinformer.com",29],["christianconcern.com",30],["aamulehti.fi",31],["etlehti.fi",31],["gloria.fi",31],["hs.fi",31],["hyvaterveys.fi",31],["is.fi",31],["jamsanseutu.fi",31],["janakkalansanomat.fi",31],["kankaanpaanseutu.fi",31],["kmvlehti.fi",31],["kodinkuvalehti.fi",31],["merikarvialehti.fi",31],["nokianuutiset.fi",31],["rannikkoseutu.fi",31],["satakunnankansa.fi",31],["soppa365.fi",31],["suurkeuruu.fi",31],["sydansatakunta.fi",31],["tyrvaansanomat.fi",31],["valkeakoskensanomat.fi",31],["vauva.fi",31],["eurogamer.de",32],["vogue.co.uk",33],["wired.com",33],["jekabpils.lv",34],["aachener-bank.de",35],["bernhauser-bank.de",35],["bodenseebank.de",35],["bremischevb.de",35],["cvw-privatbank-ag.de",35],["dervolksbanker.de",35],["gladbacher-bank.de",35],["meine-rvb.de",35],["meinebank.de",35],["muenchner-bank.de",35],["nordthueringer-volksbank.de",35],["owl-immobilien.de",35],["raiba-gr.de",35],["raiba-ndwa.de",35],["raiba-westhausen.de",35],["rb-berghuelen.de",35],["rb-denzlingen-sexau.de",35],["rb-eching.de",35],["rb-hardt-bruhrain.de",35],["rb-oberaudorf.de",35],["rb-sondelfingen.de",35],["rv-banken.de",35],["saechsischer-gewinnsparverein.de",35],["skbwitten.de",35],["sparda-bank-hamburg.de",35],["sparda-sw.de",35],["vb-lauterecken.de",35],["vb-mittelhessen.de",35],["vb-rb.de",35],["vbleos.de",35],["vbsuedemsland.de",35],["voba-deisslingen.de",35],["voba-moeckmuehl.de",35],["volksbank-aktiv.de",35],["volksbank-backnang.de",35],["volksbank-daaden.de",35],["volksbank-dh.de",35],["volksbank-freiburg.de",35],["volksbank-international.de",35],["volksbank-kirnau.de",35],["volksbank-mittleres-erzgebirge.de",35],["volksbank-remseck.de",35],["volksbank-thueringen-mitte.de",35],["volksbank-trossingen.de",35],["volksbankeg.de",35],["vr-nopf.cz",35],["vrb-spangenberg.de",35],["vrbankeg.de",35],["vrbankimmobilien.de",35],["vvr-bank.de",35],["vvrbank-krp.de",35],["news.sky.com",37],["lippu.fi",[38,39,40]],["starcart.com",41],["sydan.fi",42],["rfi.fr",44],["cmore.fi",45],["europe1.fr",46]]);

const entitiesMap = new Map([["www.google",1]]);

const exceptionsMap = new Map([]);

/******************************************************************************/

function trustedSetCookie(
    name = '',
    value = '',
    offsetExpiresSec = '',
    path = ''
) {
    if ( name === '' ) { return; }

    const time = new Date();

    if ( value === '$now$' ) {
        value = Date.now();
    } else if ( value === '$currentDate$' ) {
        value = time.toUTCString();
    }

    let expires = '';
    if ( offsetExpiresSec !== '' ) {
        if ( offsetExpiresSec === '1day' ) {
            time.setDate(time.getDate() + 1);
        } else if ( offsetExpiresSec === '1year' ) {
            time.setFullYear(time.getFullYear() + 1);
        } else {
            if ( /^\d+$/.test(offsetExpiresSec) === false ) { return; }
            time.setSeconds(time.getSeconds() + parseInt(offsetExpiresSec, 10));
        }
        expires = time.toUTCString();
    }

    setCookieHelper(
        name,
        value,
        expires,
        path,
        getExtraArgs(Array.from(arguments), 4)
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
    try { trustedSetCookie(...JSON.parse(argsList[i])); }
    catch(ex) {}
}
argsList.length = 0;

/******************************************************************************/

})();

/******************************************************************************/

void 0;
