export  const config = {
    "apiConfig": {
    "apis": {
        "dsp": "/content/lot-polish-airlines/pl/en/_jcr_content.dsp.api.json",
            "mmb": "/content/lot-polish-airlines/pl/en/_jcr_content.mmb.api.json",
            "sessionStart": "/content/lot-polish-airlines/pl/en/_jcr_content.session.start.api.json",
            "preLoaders": "/content/experience-fragments/preloaders/en.preloaders.api.us.json",
            "profile": "/content/lot-polish-airlines/pl/en/_jcr_content.profile.api.json",
            "flightStatusAirport": "/content/lot-polish-airlines/pl/en/_jcr_content.flightstatus.airport.api.json",
            "csrf": "/content/lot-polish-airlines/pl/en/_jcr_content.csrf.api.json",
            "dspDelete": "/content/lot-polish-airlines/pl/en/_jcr_content.dsp.remove.api.json",
            "airports": "/content/lot-polish-airlines/pl/en/_jcr_content.airports.api.json",
            "flightSearch": "/content/lot-polish-airlines/pl/en/_jcr_content.flightSearch.api.json",
            "lotForSmallBusinessConnect": "/content/lot-polish-airlines/pl/en/_jcr_content.lotforsmallbusinessconnect.api.json",
            "flightStatusFlightNumber": "/content/lot-polish-airlines/pl/en/_jcr_content.flightstatus.flightnnumber.api.json",
            "ePressPNR": "/content/lot-polish-airlines/pl/en/_jcr_content.digitalpress.pnr.api.json",
            "ePressVoucherCode": "/content/lot-polish-airlines/pl/en/_jcr_content.digitalpress.voucher.api.json",
            "markets": "/content/lot-polish-airlines/pl/en/_jcr_content.markets.api.json",
            "checkin": "/content/lot-polish-airlines/pl/en/_jcr_content.checkin.api.json",
            "dictionary": "/content/lot-dictionary/en.model.json",
            "dictionaryDynamic": "/content/lot-dictionary/{{language}}.model.json",
            "form": "/content/lot-polish-airlines/pl/en/_jcr_content.form.api.json",
            "formEknf": "/content/lot-polish-airlines/pl/en/_jcr_content.form.eknf.api.json",
            "formClaims": "/content/lot-polish-airlines/pl/en/_jcr_content.form.claims.api.json",
            "myTrips": "/content/lot-polish-airlines/pl/en/_jcr_content.myTrips.api.json",
            "kdr": "/content/lot-polish-airlines/pl/en/_jcr_content.kdr.api.json",
            "profileDelete": "/content/lot-polish-airlines/pl/en/_jcr_content.profile.delete.api.json",
            "sessionDelete": "/content/lot-polish-airlines/pl/en/_jcr_content.session.destroy.api.json",
            "newsletter": "/content/lot-polish-airlines/pl/en/_jcr_content.newsletter.api.json",
            "dropdownPrefixes": "/content/lot-polish-airlines/pl/en/_jcr_content.dropdownprefixes.api.json",
            "dropdownCountries": "/content/lot-polish-airlines/pl/en/_jcr_content.dropdowncountries.api.json",
            "destinationBanner": "/content/lot-polish-airlines/pl/en/_jcr_content.destinationbanner.api.json",
            "mConnectLoginLink": "https://api.test.miles-and-more.com/oauth2/authorize",
            "mConnectClientId": "7OUG4DfbldFySrQmRxvGyUsmtj2GlyYz",
            "ticketExchangeOrReturnFormLink": "https://apps.lot.com/form/zmiana-zwrot",
            "changeBookingForFreeLink": "https://uat.digital.airline.amadeus.com/lo/servicing/self-reaccommodation/retrieve",
            "samBaseUrl": "https://sam-admin.lotinternal.com",
            "adyenEnvironment": "test",
            "adyenClientKey": "test_WD232XRQMBEJ7P6APPFL7U27RY55UPVM",
            "samAdyenClientKey": "test_24YURLPRDNEMFFGYXG2T33UMHY4YN3EL",
            "specialAssistanceFormLink": "https://www.lot.com/pl/en/help-center/contact/forms/special-assistance",
            "lowFareCalendarAirports": "/content/lot-polish-airlines/pl/en/_jcr_content.lowfarecalendarairports.api.json",
            "watchlistFavourites": "/content/lot-polish-airlines/pl/pl/_jcr_content.watchlistFavourites.api.json",
            "watchlistPriceBoxesSearch": "/content/lot-polish-airlines/pl/pl/_jcr_content.watchlistPriceBoxesSearch.api.json/{{originIATA}}-{{destinationIATA}}.json"
    }
},
    "myLotConfig": {
    "urls": {
        "loginPagePath": "/content/lot-polish-airlines/pl/en/login-register.html",
            "profileRootPath": "/content/lot-polish-airlines/pl/en/profile",
            "aliasProfileRootPath": "/pl/en/profile",
            "ibeLoginExperienceFragment": "/content/experience-fragments/lot-polish-airlines/language-masters/en/forms/ibe-login",
            "samLoginExperienceFragment": "/content/experience-fragments/lot-polish-airlines/language-masters/pl/shop-and-more/sam-login"
    }
},
    "nIbeConfig": {
    "useIndraMmb": false,
        "indraInvoicePath": "/pl/pl/help-center/contact/forms/invoice",
        "indraOverviewPath": "/pl/pl/my-reservation"
},
    "shopAndMoreConfig": {
    "showPaymentLoaderEarlier": true,
        "freeDeliveryThreshold": 399,
        "enableOnBoard": true
},
    "dateTimeFormatConfig": {
    "histogramDateTimeFormat": "ccc dd.MM",
        "miniBookerShortDateTimeFormat": "dd MMM",
        "miniBookerLongDateTimeFormat": "dd MMMM",
        "headlineDateDesktopFormat": "longDate",
        "headlineDateMobileFormat": "d MMM YYYY",
        "flightDetailsTimeFormat": "shortTime",
        "flightDetailsModalDateFormat": "cccc d MMMM y",
        "flightDetailsModalFlightTimeFormat": "shortTime",
        "flightSummaryFlightDateFormat": "ccc d MMM,",
        "flightSummaryFlightTimeFormat": "shortTime",
        "flightChangeCountdownDateTimeFormat": "d MMM y' at 'hh:mm a",
        "flightStatusTimeFormat": "shortTime",
        "flightStatusDateFormat": "fullDate",
        "flightStatusSwitcherDateFormat": "dd MMM"
},
    "localeConfig": "en-US",
    "languageId": "en",
    "marketId": "pl",
    "domainConfig": { "css": "lot" }
}