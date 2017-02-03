var app = new Vue({
    el: '#app',
    data: {
        status: { menu: false, toTop: false, listMore: false },
        my: {},
    },

    filters:{
        lowercase:function(string){
            return string.toLowerCase();
        }
    },

    mounted: function() {
        this.init();
        $(document).scroll(this.bindToTop);
    },

    methods: {
        init: function() {
            var that = this;
            $.getJSON('data/detail.json?123', function(data) {
                // console.log(data);
                that.my = data;
            });
        },

        animateTo: function(id, event) {
            var that = this;
            var target = $('#' + id);
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000, function() {
                    location.hash = id;
                    that.status.menu = false;
                });
                return false;
            }
        },

        setMenu: function(status) {
            this.status.menu = (status) ? status : !this.status.menu;
        },

        bindToTop: function() {
            var nowTop = $('body').scrollTop();
            this.status.toTop = (nowTop < 250) ? false : true;
        }
    }
})
