define(['lodash', 'utils'], function (_, /** utils */ utils) {
    'use strict';


    var langsData = {
        en: {
            PANEL_TITLE: 'Translated panel title',
            PANEL_DESCRIPTION: 'Translated panel description'
        },
        fr: {
            PANEL_TITLE: 'Titre du panneau Traduit',
            PANEL_DESCRIPTION: 'Description du panneau Traduit'
        },
        gr: {
            PANEL_TITLE: 'Übersetzt Panel Titel',
            PANEL_DESCRIPTION: 'Übersetzt Panel Beschreibung'
        }
    }

    var lang = utils.getUrlParam('lang');

    var translationMixin = {
        translate: function(key){
            return langsData[lang][key];
        }
    };

    return {
        translationMixin: translationMixin
    };
});
