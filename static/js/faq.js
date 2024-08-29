var Accordion = {
    selectors: {
        item: '.faq-item',
        header: '.faq-item-title',
        content: '.faq-item-content',
        icon:'.faq-icon-block'
    },
    openFirstAfterLoading: true,
    openClass: 'faq-open',
    init: function() {
        var _ = this;

        if (_.openFirstAfterLoading) {
            if (window.location.hash) {
                $(window.location.hash).addClass(_.openClass);
            } else {
                $(_.selectors.item).filter(':first').addClass(_.openClass);
            }
        }

        $(_.selectors.header).click(function(ev) {
            ev.preventDefault();
            $current = $(this).closest(_.selectors.item);
            $(_.selectors.item).not($current).removeClass(_.openClass);
            $current.toggleClass(_.openClass);
        });

        $(_.selectors.icon).click(function(ev) {
            ev.preventDefault();
            $current = $(this).closest(_.selectors.item);
            $(_.selectors.item).not($current).removeClass(_.openClass);
            $current.toggleClass(_.openClass);
        });
    }
};

$(document).ready(function() {
    Accordion.init();
});