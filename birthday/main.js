jQuery(".crossrow").on("click", function(){
    jQuery(".question-box").show();
    jQuery(".question-box").attr("data-current-question", jQuery(this).attr("class"));
    jQuery(".question").html(jQuery(this).attr("data-question")+" ("+jQuery(this).attr("data-solution").length+" Buchstaben)");
    jQuery(".answer").attr("data-current-solution", jQuery(this).attr("data-solution"));
    jQuery("html, body").animate({ scrollTop: jQuery(document).height() }, "slow");
    jQuery(".answer").focus();
});
jQuery(".answer").on("keydown", function () {
    jQuery(this).val(jQuery(this).val().substr(0, jQuery(this).attr("data-current-solution").length));
    if(jQuery(this).val().toLowerCase() === jQuery(this).attr("data-current-solution")) {
        jQuery(".question-box").hide();
        jQuery('html, body').animate({
            scrollTop: jQuery(".crossboard").offset().top
        }, "slow");
    }
});