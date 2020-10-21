$(".dl_inner_tab_container").each(function () {
    $('.dl_tag').on("click", function () {
        $(".dl_inner_tab").removeClass('dl_tab_content_active');
        $(".dl_inner_tab[data-id='" + $(this).attr('data-id') + "']").addClass("dl_tab_content_active");
        $(".dl_tag").removeClass('dl_tab_active');
        $(this).addClass('dl_tab_active');
    });
})