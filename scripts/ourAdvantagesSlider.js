function OurAdvantagesSlider() {
    var that = this;
    this.$advantagesSlider = $(".our-advantages-list");
    if (this.$advantagesSlider[0]) {
        this.init(that);
    }
}

OurAdvantagesSlider.prototype.init = function(that) {
    this.elements = {
        $advantagesSliderList: this.$advantagesSlider.find(".our-advantages-list__main")
    };

    var params = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.our-advantages-list__actions .prev'),
        nextArrow: $('.our-advantages-list__actions .next')
    };

    $(window).on('resize', function() {
        if ($(window).width() >= 751) {
            if (that.elements.$advantagesSliderList.hasClass('slick-initialized')) {
                return that.elements.$advantagesSliderList.slick('unslick');
            }
        } else {
            if (!that.elements.$advantagesSliderList.hasClass('slick-initialized')) {
                return that.elements.$advantagesSliderList.slick(params);
            }
        }
    });

    if ($(window).width() >= 751) {
        if (that.elements.$advantagesSliderList.hasClass('slick-initialized')) {
            return that.elements.$advantagesSliderList.slick('unslick');
        }
    } else {
        if (!that.elements.$advantagesSliderList.hasClass('slick-initialized')) {
            return that.elements.$advantagesSliderList.slick(params);
        }
    }
};

module.exports = OurAdvantagesSlider;