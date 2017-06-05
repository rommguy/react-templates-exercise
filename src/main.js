requirejs.config({
//    baseUrl: '/',
    paths: {
        jquery: 'https://code.jquery.com/jquery-2.1.3.min',
        lodash: 'http://cdnjs.cloudflare.com/ajax/libs/lodash.js/2.4.1/lodash.min',
        react: 'http://fb.me/react-with-addons-0.12.2'
    },
    shim: {
        lodash: {exports: '_'},
        react: {exports: 'React'}
    },
    map: {
        '*': {
            'react/addons': 'react'
        }
    }
});

requirejs(['react', './autocompleteTag'], function (React, autocompleteTag) {
    'use strict';
    React.render(React.createElement(autocompleteTag), document.getElementById('container'));
});
