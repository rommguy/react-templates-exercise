define(['react', 'lodash', './hello.rt', 'deepLinkingMixin'], function (React, _, template, deepLinkingMixin) {
    'use strict';



    return React.createClass({
        displayName: 'Hello',
        mixins: [deepLinkingMixin],
        getInitialState: function(){
            this.geoData = {
                israel: ['Tel-Aviv', 'Haifa' ,'Jerusalem'],
                usa: ['New York', 'Los Angeles', 'New Haven', 'Boston'],
                spain: ['Barcelona', 'Girona', 'Madrid'],
                countries: ['israel', 'usa', 'spain']
            }
            return {
                location : {
                    lat: 0,
                    lon: 0
                },
                country: '',
                city: '',
                ready: false
            }
        },
        componentDidUpdate: function(){
            if (this.state.country && this.state.city && !this.state.ready){
                this.setState({
                    ready: true
                })
                return;
            }
            if (!(this.state.country && this.state.city) && this.state.ready){
                this.setState({
                    ready:false
                })
            }
        },
        render: template
    });
});
