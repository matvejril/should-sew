function OurClientsSlider() {
    var that = this;
    this.$clientsSlider = $(".our-clients-list");
    if (this.$clientsSlider[0]) {
        this.init(that);
    }
}

OurClientsSlider.prototype.init = function(that) {
    this.elements = {
        $clientsSliderList: this.$clientsSlider.find(".our-clients-list__main")
    };

    var params = {
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 2,
        rows: 2,
        prevArrow: $('.our-clients-list__actions .prev'),
        nextArrow: $('.our-clients-list__actions .next')
    };

    $(window).on('resize', function() {
        if ($(window).width() >= 751) {
            if (that.elements.$clientsSliderList.hasClass('slick-initialized')) {
                return that.elements.$clientsSliderList.slick('unslick');
            }
        } else {
            if (!that.elements.$clientsSliderList.hasClass('slick-initialized')) {
                return that.elements.$clientsSliderList.slick(params);
            }
        }
    });

    if ($(window).width() >= 751) {
        if (that.elements.$clientsSliderList.hasClass('slick-initialized')) {
            return that.elements.$advantagesSliderList.slick('unslick');
        }
    } else {
        if (!that.elements.$clientsSliderList.hasClass('slick-initialized')) {
            return that.elements.$clientsSliderList.slick(params);
        }
    }
};

module.exports = OurClientsSlider;