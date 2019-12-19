$('img').each(function(index) {
    $(this).wrap( "<div class='image-wrapper'></div>" );
    $(this).parent().append("<div class='image-index'>IMAGE " + (index+1) + "</div>");
})