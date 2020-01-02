$('#list li a').click(function () {
    var url = $(this).attr('href'),
    image = new Image();
    image.src = url;
    image.onload = function () {
        $('#image-holder').empty().append(image);
    };
    image.onerror = function () {
        $('#image-holder').empty().html('That image is not available.');
    }

    $('#image-holder').empty().html('Loading...');

    return false;
});
