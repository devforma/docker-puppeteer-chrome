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

(function uBOL_removeClass() {

/******************************************************************************/

const scriptletGlobals = new Map(); // jshint ignore: line

const argsList = ["[\"cookie-consent-active\",\"body\",\"stay\"]","[\"cookie-overlay-active\",\"body\",\"stay\"]","[\"modal-open\",\"body\",\"stay\"]","[\"hasPopup\",\"body\",\"stay\"]","[\"scommerce-gdpr-disabled\",\"\",\"stay\"]","[\"no-scroll\",\"html\",\"stay\"]","[\"cookie-consent__wrapper\",\"\",\"stay\"]","[\"cx-modal-open\",\"html\",\"stay\"]","[\"cx-no-scroll\",\"html\",\"stay\"]","[\"e-cookie-bar-open\",\"body\",\"stay\"]","[\"cookies-not-set\",\"body\",\"stay\"]","[\"bottom-0\",\"\",\"stay\"]","[\"no-consent\",\"html\",\"stay\"]","[\"is-blurred-cookiebox\",\"html\",\"stay\"]","[\"ccpaCookieBanner-acceptedAll\",\"body\",\"stay\"]","[\"cookies-show\",\".cookies-show\",\"stay\"]","[\"disable-background\",\"\",\"stay\"]","[\"cookie--not-set\",\"body\",\"stay\"]","[\"_cookiebanner\",\"\",\"stay\"]","[\"async-hide\",\"\",\"stay\"]","[\"cdk-overlay-container\",\"\",\"stay\"]","[\"ntd-gdpr-no-scroll\",\"body\",\"stay\"]","[\"modal-background\",\"\",\"stay\"]","[\"locked\",\"\",\"stay\"]","[\"pef-no-cookie\",\"\",\"stay\"]","[\"cookie-not-accepted\",\"\",\"stay\"]","[\"c-body--locked-always\",\"\",\"stay\"]","[\"darkOverlay\",\"\",\"stay\"]","[\"global-cookie\",\"div\",\"stay\"]","[\"disable-scroll\",\"\",\"stay\"]","[\"darkOverlay-highZ\",\"\",\"stay\"]","[\"cookie--not-set\",\"\",\"stay\"]","[\"bg-gray\",\"\",\"stay\"]","[\"cookie-active\",\"\",\"stay\"]","[\"is-modal-cookies-visible\",\"\",\"stay\"]","[\"lightbox-is-open\",\"\",\"stay\"]","[\"layerActive\",\"\",\"stay\"]","[\"cookiebar-open\",\"\",\"stay\"]","[\"blur\",\"\",\"stay\"]","[\"cookie\",\"\",\"stay\"]","[\"cookieconsent-active\",\"body\",\"stay\"]","[\"cookieMsg\",\"\",\"stay\"]","[\"cookie_consent__alert\",\"\",\"stay\"]","[\"gdpr-cookie-notice-center-loaded\",\"\",\"stay\"]","[\"has-open-cookie\",\"\",\"stay\"]","[\"om_cookie_active\",\"\",\"stay\"]","[\"cookie-overlay\",\"\",\"stay\"]","[\"disable\",\"\",\"stay\"]","[\"prevent-scroll\",\"\",\"stay\"]","[\"fog\",\"\",\"stay\"]","[\"cookie-hint\",\"\",\"stay\"]","[\"dp--cookie-consent\",\"body\",\"stay\"]","[\"body-overlay-scrollable\",\"\",\"stay\"]","[\"modal-open\",\"\",\"stay\"]","[\"no-scroll\",\"body\",\"stay\"]","[\"show-cookie-consent\",\"\",\"stay\"]","[\"is-active-cookiebar\",\"\",\"stay\"]","[\"-locked\",\"\",\"stay\"]","[\"has-banner\",\"body.has-banner\",\"stay\"]","[\"pointerevents\",\"\",\"stay\"]","[\"cookie-accept-required\",\"\",\"stay\"]","[\"cookie-open\",\"\",\"stay\"]","[\"cookiePopupVisible\",\"\",\"stay\"]","[\"unreadable-display\",\"\",\"stay\"]","[\"mandatory_cookie_modal\",\"\",\"stay\"]","[\"wwzoverlay--open\",\"\",\"stay\"]","[\"cookie_popup_exists\",\"div.page-wrapper\",\"stay\"]","[\"gdpr-infobar-visible\",\"\",\"stay\"]","[\"cookie-enabled\",\"\",\"stay\"]","[\"cookie-overlay--open\",\"\",\"stay\"]","[\"cookie-banner-open\",\"\",\"stay\"]","[\"overlay-content\",\"body\",\"stay\"]","[\"is-active-cookiebar\",\"body\",\"stay\"]","[\"didomi-popup-open\",\"body\"]","[\"idxrcookies-block-user-nav\",\"body\",\"stay\"]","[\"darkOverlay\",\"body\"]","[\"cookiebanner\",\"\",\"stay\"]","[\"show-cookie\",\"\",\"stay\"]","[\"ccpa-banner\",\"\",\"stay\"]","[\"modal-cacsp-open\",\"\",\"stay\"]","[\"modal-cacsp-box\",\"\",\"stay\"]","[\"js-modalUnclosable\",\"\",\"stay\"]","[\"is-open\",\"\",\"stay\"]","[\"remodal-bg\",\"\",\"stay\"]","[\"cookie-warning-open\",\"\",\"stay\"]","[\"with-featherlight\",\"\",\"stay\"]","[\"cookies-shown\",\"body\",\"stay\"]","[\"filter-blur\",\"\",\"stay\"]","[\"no-cookie\",\"\",\"stay\"]","[\"snoop-modal-open\",\"body\",\"stay\"]","[\"blurred\",\"\",\"stay\"]","[\"is-blurred-cookiebox\",\"\",\"stay\"]","[\"consent-manager--popup\",\"body\",\"stay\"]","[\"consent-manager-open\",\"body\",\"stay\"]","[\"zp-gtm-scripts--blur\",\"\",\"stay\"]","[\"dots\",\"\",\"stay\"]","[\"cookies-modal-open\",\"\",\"stay\"]","[\"modal-has-active\",\"body\",\"stay\"]","[\"messages-active\",\"\",\"stay\"]","[\"xh-thumb-disabled\",\"\",\"stay\"]","[\"body--cookies-panel-opened\",\"\",\"stay\"]","[\"chefcookie--blur\",\"html\",\"stay\"]","[\"chefcookie--fade\",\"html\",\"stay\"]","[\"chefcookie--noscroll\",\"html\",\"stay\"]","[\"b-dialog\",\"\",\"stay\"]","[\"disabled\",\"body\",\"stay\"]","[\"lock-scroll\",\"\",\"stay\"]","[\"disabled\",\"header\",\"stay\"]","[\"cookie-not-accepted-overlay\",\"\",\"stay\"]","[\"overlayopen\",\"\",\"stay\"]","[\"blurred-page\",\"\",\"stay\"]","[\"consent-dialog-open\",\"body\"]","[\"cookie-consent--present\",\"\",\"stay\"]","[\"header-gdrp-cookies-visible\",\"\",\"stay\"]","[\"fixed\",\"\",\"stay\"]","[\"noScroll\",\"\",\"stay\"]","[\"cookie_notification\",\"\",\"stay\"]","[\"blocked-body\",\"\",\"stay\"]","[\"transfer__cookie-wall-active\",\".transfer__cookie-wall-active\",\"stay\"]","[\"has-no-scroll\",\"\",\"stay\"]","[\"modal-backdrop-open\",\"\",\"stay\"]","[\"has-light-backdrop\",\"\",\"stay\"]","[\"overflow-hidden\",\"\",\"stay\"]","[\"blured\",\"\",\"stay\"]","[\"noscroll\",\"body\",\"stay\"]","[\"has-overlay\",\"\",\"stay\"]","[\"cookie-consent-is-active\",\"body\",\"stay\"]","[\"cookiesgdpr__scroll\",\"\",\"stay\"]","[\"modal-show\",\"\",\"stay\"]","[\"gdpr\",\"\",\"stay\"]","[\"cookieopened\",\"body\",\"stay\"]","[\"cookiewall-active\",\"body\",\"stay\"]","[\"is-cookie-notice\",\"body\",\"stay\"]","[\"cookie-consent-banner-open\",\"html\",\"stay\"]","[\"modal-overlay\",\"\",\"stay\"]","[\"cookielaw-blur-background\",\"\",\"stay\"]","[\"sp-message-open\",\"html\",\"stay\"]","[\"modalOpen___gZykv\",\"body\"]","[\"cookie-bar\",\"\",\"stay\"]","[\"hasCookieBanner\",\"body\",\"stay\"]"];

const hostnamesMap = new Map([["winparts.be",0],["winparts.eu",0],["winparts.fr",0],["winparts.ie",0],["winparts.nl",0],["winparts.se",0],["sportano.sk",1],["sportano.de",1],["sportano.bg",1],["sportano.hu",1],["sportano.ro",1],["sportano.cz",1],["buildex.cz",2],["gruenderservice.at",3],["pdc-big.nl",4],["pdc-big.it",4],["pdc-big.ie",4],["pdc-big.fr",4],["pdc-big.es",4],["pdc-big.be",4],["pdc-big.at",4],["pdc-big.co.uk",4],["pdc-big.de",4],["pdc-big.com",4],["elio-systems.io",[5,9]],["sanha.com",[5,9]],["opera.com",6],["crocs.co.uk",[7,8]],["crocs.eu",[7,8]],["crocs.nl",[7,8]],["crocs.fi",[7,8]],["crocs.fr",[7,8]],["crocs.de",[7,8]],["rappjmed.ch",10],["theverge.com",11],["stilord.fr",12],["stilord.it",12],["stilord.de",12],["stilord.es",12],["dasfutterhaus.at",13],["developer.paypal.com",14],["cpc2r.ch",15],["zen.com",16],["tecsafe.de",17],["stromnetz.berlin",18],["websummit.com",19],["wunderground.com",20],["evium.de",20],["epochtimes.fr",21],["ajbell.co.uk",22],["passbase.com",23],["economiapertutti.bancaditalia.it",24],["quantamagazine.org",25],["tradersunion.com",25],["phsgreenleaf.co.uk",26],["phswashrooms.ie",26],["drinkaware.co.uk",[27,30,75]],["mccolls.co.uk",[28,29]],["foxracingshox.de",31],["crt.hr",32],["yourstorebox.com",33],["housell.com",34],["stories.com",35],["lactostop.de",36],["dermapharm.de",36],["mibe.de",36],["spilger.de",37],["dbs.si",38],["visti.it",38],["abcya.com",39],["jongcdenv.be",40],["umicore.jp",40],["umicore.cn",40],["umicore.pl",40],["umicore.kr",40],["umicore.co.th",40],["umicore.fr",40],["umicore.de",40],["donneurdecellulessouches.be",40],["stammzellenspender.be",40],["stemcelldonor.be",40],["umicore.com",40],["umicore.com.br",40],["koenvandenheuvel.be",40],["stamceldonor.be",40],["nahima.be",40],["catused.com",41],["eujuicers.cz",42],["graziellawicki.com",43],["funnelcockpit.com",43],["dnk.nl",44],["eam.de",45],["eam-netz.de",45],["cellardoor.co",46],["verpackungsstadl.ch",47],["imkershoperzgebirge.de",47],["modellbahndealer.de",47],["tillit-bikes.shop",47],["bike-onlineshop.de",47],["futspo.de",47],["compravo.de",47],["perpedale.de",47],["modellbau-jung.de",47],["verpackungsstadl.at",47],["modellbau-vordermaier.de",47],["wroc.pl",48],["basenio.de",49],["fm-systeme.de",50],["swffm.de",51],["studentenwerkfrankfurt.de",51],["dmsg.de",51],["bgk.pl",51],["pflegezeit-berlin.de",51],["gpd-nordost-onlineberatung.de",51],["proabschluss-beratung.de",51],["hilfe-telefon-missbrauch.online",51],["dww-suchtberatung.de",51],["cyberforum.de",51],["gutscheine.eurothermen.at",51],["wolff-mueller.de",51],["ras.bz.it",51],["wifiwien.at",[52,53]],["wifikaernten.at",[52,53]],["wifi.at",[52,53]],["pdf-archive.com",53],["swrng.de",53],["5asec.pt",54],["tui.dk",54],["tui.fi",54],["tui.no",54],["tui.se",54],["leslipfrancais.fr",54],["bremischevb.de",[54,126]],["meinebank.de",[54,126]],["vb-rb.de",[54,126]],["gladbacher-bank.de",[54,126]],["nordthueringer-volksbank.de",[54,126]],["bodenseebank.de",[54,126]],["rb-oberaudorf.de",[54,126]],["volksbank-trossingen.de",[54,126]],["owl-immobilien.de",[54,126]],["volksbank-backnang.de",[54,126]],["volksbank-international.de",[54,126]],["raiba-westhausen.de",[54,126]],["vr-nopf.cz",[54,126]],["vrbankimmobilien.de",[54,126]],["cvw-privatbank-ag.de",[54,126]],["rb-denzlingen-sexau.de",[54,126]],["rv-banken.de",[54,126]],["volksbank-remseck.de",[54,126]],["raiba-gr.de",[54,126]],["vrb-spangenberg.de",[54,126]],["rb-berghuelen.de",[54,126]],["vb-lauterecken.de",[54,126]],["rb-sondelfingen.de",[54,126]],["voba-deisslingen.de",[54,126]],["saechsischer-gewinnsparverein.de",[54,126]],["rb-hardt-bruhrain.de",[54,126]],["volksbank-daaden.de",[54,126]],["dervolksbanker.de",[54,126]],["volksbank-kirnau.de",[54,126]],["skbwitten.de",[54,126]],["raiba-ndwa.de",[54,126]],["volksbank-mittleres-erzgebirge.de",[54,126]],["rb-eching.de",[54,126]],["volksbank-aktiv.de",[54,126]],["vbsuedemsland.de",[54,126]],["voba-moeckmuehl.de",[54,126]],["volksbank-freiburg.de",[54,126]],["vbleos.de",[54,126]],["meine-rvb.de",[54,126]],["aachener-bank.de",[54,126]],["muenchner-bank.de",[54,126]],["volksbank-dh.de",[54,126]],["volksbankeg.de",[54,126]],["sparda-bank-hamburg.de",[54,126]],["sparda-sw.de",[54,126]],["volksbank-thueringen-mitte.de",[54,126]],["vrbankeg.de",[54,126]],["bernhauser-bank.de",[54,126]],["vvrbank-krp.de",[54,126]],["vvr-bank.de",[54,126]],["vb-mittelhessen.de",[54,126]],["pollfish.com",55],["werkenbijtrekpleister.nl",56],["werkenbijkruidvat.be",56],["rassenlijst.info",56],["werkenbijiciparisxl.nl",56],["tesa-labtec.com",57],["tesatape.ru",57],["tesa.com",57],["flightradar24.com",58],["apk-vk.at",59],["vietnamairlines.com",60],["incotec.com",61],["croda.com",61],["exaktafoto.se",62],["campingdusoleil.com",63],["hotel-la-chaumiere.com",63],["les-anges-gardiens.fr",63],["croco-kid.com",63],["cambridge-centre.fr",63],["equisud.com",63],["allokebab-pau.fr",63],["etre-visible.local.fr",63],["mas-montebello66.com",63],["camping-residentiel-les-marronniers-jura.fr",63],["dj4events.fr",63],["saintjoursexpertmaritime.com",63],["az-renovation.fr",63],["presquilemultiservices.com",63],["hotel-aigoual.com",63],["hotel-restaurant-pau.com",63],["desrayaud-paysagistes.com",63],["hotelsaintcharles.fr",63],["agvillagecamarguais.com",63],["joyella.com",63],["gabriel-godard.com",63],["artech-sellerie.com",63],["motoclubernee.com",63],["ledauphinhotel.com",63],["cuisin-studio.com",63],["biomeo-environnement.com",63],["leman-instruments.com",63],["esthetique-meyerbeer.com",63],["institut-bio-naturel-nice.fr",63],["nature-et-bois.fr",63],["transmissions-bordeaux.com",63],["kinechartreuse.com",63],["corsegourmande.com",63],["cotedecor.com",63],["restaurant-la-badiane.fr",63],["systelia.fr",63],["lesjardinsinterieurs.com",63],["helenevue.com",63],["saubusse-thermes.com",63],["dehn.es",64],["dehn.fr",64],["dehn.it",64],["dehn.hu",64],["desitek.dk",64],["dehn.at",64],["dehn.de",64],["wwz.ch",65],["taloon.com",66],["inyova.at",67],["inyova.ch",67],["inyova.de",67],["ccalbacenter.com",67],["wamu.org",67],["momentive.com",68],["kennedyslaw.com",69],["elekta.com",70],["stratasysdirect.com",71],["stratasys.com",71],["werkenbijkruidvat.nl",72],["ghacks.net",73],["cutoff.es",74],["ybpn.de",76],["cwtworktools.com",77],["mbanc.com",78],["hellomtg.com",78],["primejumbo.com",78],["dentalgalindo.com",[79,80]],["brutalvisual.com",[79,80]],["archeologia.com.pl",[79,80]],["letrayframe.com",[79,80]],["osteofisintegral.es",[79,80]],["uco.cat",[79,80]],["buecheler-kollegen.de",[79,80]],["seminariodeosma-soria.org",[79,80]],["kamensenica.sk",[79,80]],["movimentoofficinedelsud.it",[79,80]],["trident.se",[79,80]],["semanasantademalagaayeryhoy.com",[79,80]],["diazfloristasestrella.com",[79,80]],["cosechavida.com",[79,80]],["centre-hypnose-moselle.com",[79,80]],["broncoillustration.com",[79,80]],["sumoingenio.com",[79,80]],["aligepro.es",[79,80]],["muevo.es",[79,80]],["azulejosacedo.com",[79,80]],["sana.cz",[79,80]],["aliapinto.com",[79,80]],["tsconline.es",[79,80]],["polifast.it",[79,80]],["napos.cz",[79,80]],["gutshaus-neuendorf-usedom.de",[79,80]],["kunterbunte-kinder.de",[79,80]],["desatando.org",[79,80]],["ledocom.cz",[79,80]],["aliciasuarez.net",[79,80]],["diabramar.com",[79,80]],["lamagnalonga.org",[79,80]],["benejamrefrigeracion.com",[79,80]],["micropigmentacioncapilarbcn.com",[79,80]],["revistaauge.com.ar",[79,80]],["arcusnet.se",[79,80]],["videogenic.es",[79,80]],["grundschule-remagen.de",[79,80]],["aceitessatunion.com",[79,80]],["servigraphic.com.ar",[79,80]],["textsteine.de",[79,80]],["campergarage.es",[79,80]],["administradorfincasblog.com",[79,80]],["balgal.es",[79,80]],["grafika-dtp-produkcia.sk",[79,80]],["unmardeconstelaciones.com",[79,80]],["salobella.com",[79,80]],["careon.se",[79,80]],["gymnosport.com",[79,80]],["easyhomes.com.es",[79,80]],["casavaledalama.pt",[79,80]],["dosc.es",[79,80]],["fcfoz.pt",[79,80]],["berevolk.com",[79,80]],["hvpropertyclearance.co.uk",[79,80]],["calamo.se",[79,80]],["elserratplanoles.com",[79,80]],["bubblessea.es",[79,80]],["disperator.se",[79,80]],["ecoparquets.com",[79,80]],["zlotaraczkalublin.pl",[79,80]],["congresoscostadelsol.com",[79,80]],["pneumaticiroma.it",[79,80]],["asprona.es",[79,80]],["virgendefatima.es",[79,80]],["patronatpremia.cat",[79,80]],["2points13.fr",[79,80]],["3d3.es",[79,80]],["abantos.es",[79,80]],["abastanimacio.org",[79,80]],["academiafrancesadebelleza.co",[79,80]],["acaluca.org",[79,80]],["acce.es",[79,80]],["ad-particles.com",[79,80]],["adea.sk",[79,80]],["afplr.fr",[79,80]],["agiletalon.fr",[79,80]],["agiratou.com",[79,80]],["aidaromero.com",[79,80]],["alkoholochnarkotika.se",[79,80]],["alligatorbioscience.se",[79,80]],["anea.es",[79,80]],["animala.es",[79,80]],["antequerabelleza.com",[79,80]],["apimadrid.net",[79,80]],["aquatrend.sk",[79,80]],["arabesque-formation.org",[79,80]],["arrivamallorca.es",[79,80]],["arteydeco.es",[79,80]],["asapservicios.net",[79,80]],["aspock.com",[79,80]],["atout-voyages.com",[79,80]],["autocareslazara.es",[79,80]],["autocaresmariano.com",[79,80]],["autoform.pl",[79,80]],["ayudatranspersonal.com",[79,80]],["bacabeton.cz",[79,80]],["begalvi.com",[79,80]],["bent-com.com",[79,80]],["berliner-haeuser.de",[79,80]],["bespokespain.com",[79,80]],["bevent-rasch.se",[79,80]],["bio-cord.es",[79,80]],["biotropica.fr",[79,80]],["bornes-eurorelais.fr",[79,80]],["braeu-stueble.de",[79,80]],["brendanoharamp.scot",[79,80]],["briau.com",[79,80]],["caleulalia.com",[79,80]],["cande-sur-beuvron.com",[79,80]],["carlhag.se",[79,80]],["carrier.se",[79,80]],["casadelaveiga.com",[79,80]],["caytas.com.tr",[79,80]],["cecjecuador.org.ec",[79,80]],["cegef.com",[79,80]],["centrediagonal.com",[79,80]],["centropolisportivomassari.it",[79,80]],["cerai.org",[79,80]],["cervosgrup.com",[79,80]],["chimeneasalicante.com",[79,80]],["circodelshow.com",[79,80]],["cliatec.com",[79,80]],["clinicabadal.es",[79,80]],["cometh-consulting.com",[79,80]],["copysud.fr",[79,80]],["cortilar.com",[79,80]],["crystal-finance.com",[79,80]],["ctangana.com",[79,80]],["cugatresidencial.com",[79,80]],["dake.es",[79,80]],["datatal.se",[79,80]],["degom.com",[79,80]],["delfis.es",[79,80]],["delogica.com",[79,80]],["dentalcompany.es",[79,80]],["descarpack.com.br",[79,80]],["desfiladeroediciones.com",[79,80]],["desomer.be",[79,80]],["diarioandalucia.es",[79,80]],["dibujos-animados.net",[79,80]],["direkt-immobilie.de",[79,80]],["dovozautznemecka.cz",[79,80]],["drpuigdollers.com",[79,80]],["dunamys.inf.br",[79,80]],["easyimplantology.com",[79,80]],["eb2b.com.pl",[79,80]],["echo-mieszkania.pl",[79,80]],["eclinic.com.sg",[79,80]],["edgeict.com",[79,80]],["eiglaw.com",[79,80]],["elandexpediciones.es",[79,80]],["emalec.com",[79,80]],["enlighten.net",[79,80]],["equifab.es",[79,80]],["escuelanauticamarenostrum.com",[79,80]],["esgrima.cat",[79,80]],["espaisperconviure.es",[79,80]],["etbygg.com",[79,80]],["eurepieces.fr",[79,80]],["euroenvio.com",[79,80]],["eurotex.es",[79,80]],["expertetfinance.fr",[79,80]],["farmarsketrhyfuturum.cz",[79,80]],["fastvisa.fr",[79,80]],["fauxdiplomes.org",[79,80]],["fisiolistic.com",[79,80]],["fondazionealbertosordi.it",[79,80]],["foyersekcjapolska.eu",[79,80]],["fundacjaeds.pl",[79,80]],["galeriaxanadu.pl",[79,80]],["garcia-ibanez.com",[79,80]],["gestenaval.com",[79,80]],["glaskogen.se",[79,80]],["globalteam.es",[79,80]],["goia.org.pl",[79,80]],["granibier.com",[79,80]],["grundia.se",[79,80]],["grupoisn.com",[79,80]],["gruporhzaragoza.com",[79,80]],["hagagruppen.se",[79,80]],["halima-magazin.com",[79,80]],["handelskammaren.com",[79,80]],["helitecnics.com",[79,80]],["helux.se",[79,80]],["hermanosalcaraz.com",[79,80]],["hjarnkoll.se",[79,80]],["hmfoundation.com",[79,80]],["hormimpres.com",[79,80]],["hoteldeprony.fr",[79,80]],["hotelroyalcatania.it",[79,80]],["houjethai.nl",[79,80]],["hummer.cz",[79,80]],["icld.se",[79,80]],["ict-project.it",[79,80]],["imagelova.id",[79,80]],["imprentalaspalmas.com",[79,80]],["informamiele.it",[79,80]],["inission.com",[79,80]],["inmobiliariavolga.com",[79,80]],["international-terra-institute.com",[79,80]],["inwaspain.com",[79,80]],["izkigolf.eus",[79,80]],["jdmusic.se",[79,80]],["juveycamps.com",[79,80]],["karel1.nl",[79,80]],["kaunokapiniuprieziura.lt",[79,80]],["kcmkompresor.com",[79,80]],["kewaccountants.co.uk",[79,80]],["konkretplus.pl",[79,80]],["krajci.cz",[79,80]],["krisvagenut.se",[79,80]],["kyoceracapetown.co.za",[79,80]],["labaguette.pl",[79,80]],["labintegrados.com",[79,80]],["ladderupinc.com",[79,80]],["landskronafoto.org",[79,80]],["langarri.es",[79,80]],["lawa.es",[79,80]],["laxo.se",[79,80]],["layher.se",[79,80]],["lifetraveler.net",[79,80]],["lindrooshalsa.se",[79,80]],["lobolab.es",[79,80]],["maisqueromanicorutas.com",[79,80]],["mallandonoandroid.com",[79,80]],["masconcas.com",[79,80]],["mediabest.cz",[79,80]],["megustaelvino.es",[79,80]],["mensa.se",[79,80]],["mestiteslilis.com",[79,80]],["minutoprint.com",[79,80]],["mirano.cz",[79,80]],["mogador.cz",[79,80]],["morphestudio.es",[79,80]],["motoaxial.com",[79,80]],["multiversidad.es",[79,80]],["mundollaves.com",[79,80]],["musicotherapie-federationfrancaise.com",[79,80]],["nauticaravaning.com",[79,80]],["nestville.sk",[79,80]],["nestvillepark.sk",[79,80]],["netromsoftware.ro",[79,80]],["nojesfabriken.se",[79,80]],["oddoneout.se",[79,80]],["opako.pl",[79,80]],["oserlafrique.com",[79,80]],["paintballalcorcon.com",[79,80]],["pallejabcn.com",[79,80]],["penicilinafruits.com",[79,80]],["peregrinoslh.com",[79,80]],["permis-lausanne.ch",[79,80]],["pernillaandersson.se",[79,80]],["piazzadelgusto.it",[79,80]],["pipi-antik.dk",[79,80]],["plasticosgeca.com",[79,80]],["plastimyr.com",[79,80]],["portal.unimes.br",[79,80]],["pro-beruf.de",[79,80]],["prophecyinternational.com",[79,80]],["psicoterapeuta.org",[79,80]],["puertasprieto.com",[79,80]],["puntosdefantasia.es",[79,80]],["pzmk.org.pl",[79,80]],["rastromaquinas.com",[79,80]],["rectoraldecastillon.com",[79,80]],["reinomineral.com",[79,80]],["reklamefreunde.de",[79,80]],["restauraciontalavera.es",[79,80]],["restauranthispania.com",[79,80]],["ristoranteeziogritti.it",[79,80]],["rubinmedical.dk",[79,80]],["rubinmedical.no",[79,80]],["rubinmedical.se",[79,80]],["sak.se",[79,80]],["sammetais.com.br",[79,80]],["sebastiancurylo.pl",[79,80]],["serigrafiaiorgi.com",[79,80]],["seyart.com",[79,80]],["sgaim.com",[79,80]],["sicamemt.org",[79,80]],["siguealconejoblanco.es",[79,80]],["sinfimasa.com",[79,80]],["skp.se",[79,80]],["skrobczynski.pl",[79,80]],["slush.de",[79,80]],["solebike.it",[79,80]],["solu-watt.fr",[79,80]],["soluzionainmobiliaria.es",[79,80]],["somoparque.com",[79,80]],["sorgingaztemoda.com",[79,80]],["sroportal.sk",[79,80]],["ssmf.se",[79,80]],["stobrasil.com.br",[79,80]],["stoparmut2015.ch",[79,80]],["studiodimuro.com",[79,80]],["subkultur-hannover.de",[79,80]],["sustanciagris.com",[79,80]],["szkt.sk",[79,80]],["tagibergslagen.se",[79,80]],["tallergastronomico.es",[79,80]],["tarna.fhsk.se",[79,80]],["tassenyalitzacio.com",[79,80]],["tctech.se",[79,80]],["teknoduegroup.it",[79,80]],["teloliquido.com",[79,80]],["temasa.es",[79,80]],["textilprint.sk",[79,80]],["thehouseofautomata.com",[79,80]],["tmgernika.com",[79,80]],["toastetmoi.fr",[79,80]],["tollare.org",[79,80]],["trattoriabolognesi.it",[79,80]],["triperavigatana.com",[79,80]],["tuckerfranklininsgrp.com",[79,80]],["tuftuf.net",[79,80]],["turuletras.com",[79,80]],["umfmb.fr",[79,80]],["upapsa.com",[79,80]],["valenciatoday.es",[79,80]],["vanghel-und-morawski.de",[79,80]],["vickycan.com",[79,80]],["ville-de-salles.com",[79,80]],["webbigt.se",[79,80]],["westlede.be",[79,80]],["wiemker.org",[79,80]],["woolink.co",[79,80]],["wp.fratgsa.org",[79,80]],["xatobaxestion.com",[79,80]],["xfactor-gmbh.de",[79,80]],["yougoenglish.com",[79,80]],["zigmoon.com",[79,80]],["canyon.com",[81,82]],["drimsim.com",83],["eteam-winkler.de",84],["kdn-elektro.de",84],["elektro-kotz.de",84],["elektro-service-rauh.de",84],["elektroanlagenbuettner.de",84],["be-connect.online",84],["bayergruppe.com",84],["bayer-wkt.de",84],["bayer-wind.de",84],["bayer-wd.de",84],["elektro-joa.de",84],["htechnik.de",84],["ehk-service.de",84],["bittner-tv.de",84],["elektro-suelzner.de",84],["elektro-leps.de",84],["elektromax-hausgeraete.de",84],["elektrotechnik-schedel.de",84],["elkugmbh.de",84],["ln-elektro-gmbh.de",84],["weiss-blau-gmbh.de",84],["sunbeam-energy.de",84],["prokauf.com",84],["lichtstudio-kerl.de",84],["liebing-beese.de",84],["hoeschel-baumann.de",84],["hausgeraete-kraemer.de",84],["gehlhaar-elektrotechnik.de",84],["ehs-elektrotechnik.de",84],["elektrojarschke.de",84],["elektrotechnik-fleischmann.de",84],["elektroseemueller.de",84],["schoerling-blitz.de",84],["ast-apolda.com",84],["elektro-klippel.de",84],["arntz-haustechnik.de",84],["elektro-bindel.de",84],["elektrotechnik-weiss.com",84],["brandschutz-hamburg.de",84],["wagnerelektrotechnik.de",84],["el-kramer.de",84],["mks-hof.de",84],["wernz-elektro.de",84],["e3-energy.de",84],["sg-solar.de",84],["elektrokrebs.de",84],["elektro-roehrl.de",84],["elektro-kreher.de",84],["giegling-vonsaal.de",84],["elektro-lehmann.com",84],["ems-wurzen.de",84],["scholpp.es",85],["scholpp.pl",85],["scholpp.it",85],["ptc.eu",85],["scholpp.com",85],["abo24.de",85],["overdrive.com",85],["wetu.com",85],["superwatchman.com",86],["wedding.pl",87],["bitburger-braugruppe.de",88],["snoopmedia.com",89],["myguide.de",89],["study-in-germany.de",89],["daad.de",89],["biegnaszczyt.pl",90],["call-a-pizza.de",90],["futterhaus.de",91],["scottsofstow.co.uk",[92,93]],["zawszepomorze.pl",94],["wasserkunst-hamburg.de",95],["lta.org.uk",96],["conversion-rate-experts.com",97],["theateramrand.de",98],["jugend-praesentiert.de",98],["xhamster.com",99],["xhamster2.com",99],["xhamster3.com",99],["xhamster18.desi",99],["athletic-club.eus",100],["close2.de",[101,102,103]],["medicalti.it",[101,102,103]],["grottisrl.it",[101,102,103]],["vilmie-pet.com",[101,102,103]],["private-krankenversicherungen-vergleich.de",[101,102,103]],["ipanema-shop.com",[101,102,103]],["buero-rothenfusser.com",[101,102,103]],["versi24.de",[101,102,103]],["rs-vertriebsservice.com",[101,102,103]],["matina-gmbh.de",[101,102,103]],["erding-solar.de",[101,102,103]],["greenwoods-small-pet.com",[101,102,103]],["kfz-schwabing.de",[101,102,103]],["comune.randazzo.ct.it",[101,102,103]],["comune.catania.it",[101,102,103]],["ordineavvocaticatania.it",[101,102,103]],["agentur-alberts.de",[101,102,103]],["waveaudio.de",[101,102,103]],["alexide.com",[101,102,103]],["piske-innovationen.de",[101,102,103]],["sbit.ag",[101,102,103]],["smilla-katzenfutter.de",[101,102,103]],["epayments.com",104],["riceundspice.de",105],["happysocks.com",[106,107]],["win2day.at",108],["petcity.lt",109],["porp.pl",110],["computerbase.de",111],["gesundheitsamt-2025.de",112],["coastfashion.com",113],["oasisfashion.com",113],["warehousefashion.com",113],["misspap.com",113],["karenmillen.com",113],["boohooman.com",113],["nebo.app",114],["groupeonepoint.com",115],["edpsciences.org",116],["bemmaisseguro.com",117],["wetransfer.com",118],["scheidegger.nl",119],["armedangels.com",[120,121]],["flixclassic.pl",122],["phoenix.de",123],["strato.se",124],["strato.de",124],["mishcon.com",125],["bbva.es",127],["bbvauk.com",127],["bbva.be",127],["bbva.fr",127],["bbva.it",127],["bbva.pt",127],["suntech.cz",128],["digikey.co.za",129],["digikey.cn",129],["digikey.ee",129],["digikey.at",129],["digikey.be",129],["digikey.bg",129],["digikey.cz",129],["digikey.dk",129],["digikey.fi",129],["digikey.fr",129],["digikey.de",129],["digikey.gr",129],["digikey.hu",129],["digikey.ie",129],["digikey.it",129],["digikey.lv",129],["digikey.lt",129],["digikey.lu",129],["digikey.nl",129],["digikey.no",129],["digikey.pl",129],["digikey.pt",129],["digikey.ro",129],["digikey.sk",129],["digikey.si",129],["digikey.es",129],["digikey.se",129],["digikey.ch",129],["digikey.co.uk",129],["digikey.co.il",129],["digikey.com.mx",129],["digikey.ca",129],["digikey.com.br",129],["digikey.co.nz",129],["digikey.com.au",129],["digikey.co.th",129],["digikey.tw",129],["digikey.kr",129],["digikey.sg",129],["digikey.ph",129],["digikey.my",129],["digikey.jp",129],["digikey.in",129],["digikey.hk",129],["digikey.com",129],["eurosupps.nl",130],["pathe.nl",131],["makelaarsland.nl",132],["nordania.dk",133],["365direkte.no",133],["danskebank.lv",133],["danskebank.lt",133],["danskebank.no",133],["danskebank.fi",133],["danskebank.dk",133],["danskebank.com",133],["danskebank.se",133],["danskebank.co.uk",133],["danskeci.com",133],["gewerbegebiete.de",134],["balay.es",135],["constructa.com",135],["gaggenau.com",135],["pcgamer.com",136],["infoworld.com",136],["kiplinger.com",136],["omni.se",136],["it-times.de",136],["bitcoinmagazine.com",136],["deliciousmagazine.co.uk",136],["upday.com",136],["theguardian.com",136],["deutschlandcard.de",136],["szbz.de",136],["free-fonts.com",136],["lieferzeiten.info",136],["vice.com",136],["newsnow.co.uk",136],["out.com",136],["streampicker.de",136],["radiotimes.com",136],["nowtv.com",136],["kochbar.de",136],["toggo.de",136],["am-online.com",136],["n-tv.de",136],["newsandstar.co.uk",136],["tag24.de",136],["weltkunst.de",136],["noveauta.sk",136],["pnn.de",136],["economist.com",136],["crash.net",136],["norwaytoday.info",136],["insider.com",136],["preis.de",136],["ibroxnoise.co.uk",136],["celtsarehere.com",136],["nufcblog.co.uk",136],["sport1.de",136],["techconnect.com",136],["followfollow.com",136],["thespun.com",136],["mazdas247.com",136],["fastcar.co.uk",136],["vitalfootball.co.uk",136],["audi-sport.net",136],["bumble.com",136],["arcamax.com",136],["dilbert.com",136],["sportbible.com",136],["givemesport.com",136],["dartsnews.com",136],["gpfans.com",136],["justjared.com",136],["justjaredjr.com",136],["finanzen.at",136],["idealo.at",136],["ladenzeile.at",136],["berliner-zeitung.de",136],["urbia.de",136],["essen-und-trinken.de",136],["wetter.de",136],["rtl-living.de",136],["vox.de",136],["ladenzeile.de",136],["advocate.com",136],["idealo.de",136],["wigantoday.net",136],["economistgroup.com",136],["transfermarkt.nl",136],["transfermarkt.es",136],["transfermarkt.pl",136],["transfermarkt.pt",136],["transfermarkt.at",136],["transfermarkt.it",136],["transfermarkt.fr",136],["transfermarkt.de",136],["transfermarkt.be",136],["transfermarkt.co.uk",136],["transfermarkt.us",136],["footballfancast.com",136],["cio.com",136],["jezebel.com",136],["splinternews.com",136],["denofgeek.com",136],["kinja.com",136],["theinventory.com",136],["rollingstone.de",136],["sueddeutsche.de",136],["csoonline.com",136],["tvmovie.de",136],["testberichte.de",136],["pcgameshardware.de",136],["4players.de",136],["guj.de",136],["bild.de",136],["wieistmeineip.de",136],["testbild.de",136],["stylebook.de",136],["skygroup.sky",136],["speisekarte.de",136],["haeuser.de",136],["cmo.com.au",136],["pcworld.co.nz",136],["idealo.it",136],["transfermarkt.jp",136],["transfermarkt.co.id",136],["autoexpress.co.uk",136],["transfermarkt.com",136],["esportsclub.nl",136],["webwinkel.tubantia.nl",136],["shopalike.nl",136],["autoweek.nl",136],["pcworld.es",136],["macworld.es",136],["idealo.es",136],["businessinsider.es",136],["motor.es",136],["autobild.es",136],["driving.co.uk",136],["stern.de",136],["pcgames.de",136],["sport.de",136],["idealo.fr",136],["barrons.com",136],["tori.fi",136],["snow-forecast.com",136],["tidende.dk",136],["kraloyun.com",136],["arnnet.com.au",136],["bunte.de",136],["handelsblatt.com",136],["techbook.de",136],["metal-hammer.de",136],["macworld.co.uk",136],["maxisciences.com",136],["ohmymag.com",136],["voici.fr",136],["geo.de",136],["businessinsider.de",136],["heise.de",136],["meinestadt.de",136],["politico.eu",136],["spieletipps.de",136],["finanznachrichten.de",136],["vtwonen.nl",136],["stol.it",136],["waitrose.com",137],["storyhouseegmont.dk",138],["storyhouseegmont.no",138],["storyhouseegmont.se",138],["egmont.com",138],["nordiskfilm.com",138],["faq.whatsapp.com",139],["blog.whatsapp.com",139],["www.whatsapp.com",139]]);

const entitiesMap = new Map([]);

const exceptionsMap = new Map([]);

/******************************************************************************/

function removeClass(
    token = '',
    selector = '',
    behavior = ''
) {
    if ( typeof token !== 'string' ) { return; }
    if ( token === '' ) { return; }
    const tokens = token.split(/\s*\|\s*/);
    if ( selector === '' ) {
        selector = '.' + tokens.map(a => CSS.escape(a)).join(',.');
    }
    let timer;
    const rmclass = function() {
        timer = undefined;
        try {
            const nodes = document.querySelectorAll(selector);
            for ( const node of nodes ) {
                node.classList.remove(...tokens);
            }
        } catch(ex) {
        }
    };
    const mutationHandler = mutations => {
        if ( timer !== undefined ) { return; }
        let skip = true;
        for ( let i = 0; i < mutations.length && skip; i++ ) {
            const { type, addedNodes, removedNodes } = mutations[i];
            if ( type === 'attributes' ) { skip = false; }
            for ( let j = 0; j < addedNodes.length && skip; j++ ) {
                if ( addedNodes[j].nodeType === 1 ) { skip = false; break; }
            }
            for ( let j = 0; j < removedNodes.length && skip; j++ ) {
                if ( removedNodes[j].nodeType === 1 ) { skip = false; break; }
            }
        }
        if ( skip ) { return; }
        timer = self.requestIdleCallback(rmclass, { timeout: 67 });
    };
    const start = ( ) => {
        rmclass();
        if ( /\bstay\b/.test(behavior) === false ) { return; }
        const observer = new MutationObserver(mutationHandler);
        observer.observe(document, {
            attributes: true,
            attributeFilter: [ 'class' ],
            childList: true,
            subtree: true,
        });
    };
    runAt(( ) => {
        start();
    }, /\bcomplete\b/.test(behavior) ? 'idle' : 'interactive');
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
    try { removeClass(...JSON.parse(argsList[i])); }
    catch(ex) {}
}
argsList.length = 0;

/******************************************************************************/

})();

/******************************************************************************/

void 0;
