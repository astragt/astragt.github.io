jQuery(".crossrow").on("click", function(){
    jQuery(".question-box").show();
    jQuery(".question-box").attr("data-current-question", jQuery(this).attr("id"));
    jQuery(".question").html(jQuery(this).attr("data-question")+" ("+jQuery(this).attr("data-solution").length+" Buchstaben)");
    jQuery(".answer").attr("data-current-solution", jQuery(this).attr("data-solution"));
    jQuery("html, body").animate({ scrollTop: jQuery(document).height() }, "slow");
    jQuery(".answer").focus();
});
jQuery(".answer").on("keydown", function () {
    if(jQuery(this).val().toLowerCase() === jQuery(this).attr("data-current-solution")) {
        jQuery('html, body').animate({
            scrollTop: jQuery(".crossboard").offset().top
        }, "slow", function(){
            jQuery(".question-box").hide();
        });
        jQuery(this).val("");
        jQuery("#"+jQuery(".question-box").attr("data-current-question")+" .crossletter").style("color", "black");
        jQuery("#"+jQuery(".question-box").attr("data-current-question")+" span").style("opacity", "1");
    }
    jQuery(this).val(jQuery(this).val().substr(0, jQuery(this).attr("data-current-solution").length));
});