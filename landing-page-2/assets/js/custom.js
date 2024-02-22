jQuery(document).ready(function($) {
    $('#orderTable').DataTable({
       "bLengthChange": false
    });
    $('.referral_tbl').DataTable({
       "bLengthChange": false
    });
    $(".scrollToDiv").click(function() {
        let ele = $(this).attr('data-scroll');
        console.log(ele);
        $('html, body').animate({
            scrollTop: $(ele).offset().top - 200
        }, 1000);
    });
    $(document).on("change",'.custom-file-input', function() {
        var fileName = $(this).val().split("\\").pop();
        $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
    });
} );