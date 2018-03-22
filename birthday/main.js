jQuery(".crossrow").on("click", function(){
    jQuery(".question-box").show();
    jQuery(".question").html(jQuery(this).attr("data-question"));
    jQuery(".answer").attr("data-current-solution", jQuery(this).attr("data-solution"));
    jQuery("html, body").animate({ scrollTop: jQuery(document).height() }, "slow");
    jQuery(".answer").focus();
});