function HeaderNavBar() {
    var that = this;
    this.$navBar = $(".header-nav-bar");
    if (this.$navBar[0]) {
        this.init(that);
    }
}

HeaderNavBar.prototype.init = function(that) {
    this.elements = {
        $toggleBtn: this.$navBar.find('.header-nav-bar__toggle'),
        $navBarMain: this.$navBar.find('.header-nav-bar__main')
    };
    this.elements.$toggleBtn.on("click", function() {
        that.toggle();
    });

    $(window).on('resize', function() {
        if ($(window).width() >= 1164) {
            that.elements.$navBarMain.css("display", "flex");
        } else {
            that.elements.$navBarMain.css("display", "none")
        }
    });
};

HeaderNavBar.prototype.toggle = function() {
    this.elements.$navBarMain.slideToggle(200);
};

module.exports = HeaderNavBar;