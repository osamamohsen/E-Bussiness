// /**
//  * Created by osamamohsen on 14/12/16.
//  */
//

jQuery(document).ready(function () {

    jQuery('#edit-name').val("Drupal");
    jQuery('#edit-password').val("");
});
// jQuery(document).ready(function() {
//
//     jQuery("#edit-conf-mail").change(function () {
//         var mail = jQuery("#edit-mail").val();
//         var prev = jQuery("#ajax_basic_callback").html();
//         var c_mail= jQuery("#edit-conf-mail").val();
//         if(mail != c_mail)
//             jQuery("#ajax_basic_callback").html(prev+"<li>Both Emails should be Both</li>");
//     });
//
//     jQuery("#edit-mail").change(function () {
//         var mail = jQuery("#edit-mail").val();
//         var prev = jQuery("#ajax_basic_callback").html();
//         var c_mail= jQuery("#edit-conf-mail").val();
//         if(mail == "")
//             jQuery("#ajax_basic_callback").html(prev+"<li>Both Emails should be Both</li>");
//     });
//
//     jQuery("#edit-pass-pass1").change(function () {
//         var pass = jQuery("#edit-pass-pass1").val();
//         var prev = jQuery("#ajax_basic_callback").html();
//         if(pass == "" )
//             jQuery("#ajax_basic_callback").html(prev+"<li>Password doesnt be empty</li>");
//         // return;
//     });
//
//
//     jQuery("#edit-pass-pass2").change(function () {
//         var prev = jQuery("#ajax_basic_callback").html();
//         var pass = jQuery("#edit-pass-pass1").val();
//         var c_pass= jQuery("#edit-pass-pass2").val();
//         if(pass != c_pass)
//             jQuery("#ajax_basic_callback").html(prev+"<li>Both Password should be Both</li>");
//         else if(c_pass == "")
//             jQuery("#ajax_basic_callback").html(prev+"<li>Required Confirm Password</li>");
//         // return
//     });
//
//     jQuery("#fullname").change(function () {
//         var prev = jQuery("#ajax_basic_callback").html();
//         var name = jQuery("#fullname").val();
//         if(name == "")
//             jQuery("#ajax_basic_callback").html(prev + "<li>Required FullName </li>");
//     });
//     jQuery("#edit-name--2").change(function () {
//         var prev = jQuery("#ajax_basic_callback").html();
//         var name = jQuery("#edit-name--2").val()
//         alert(name);
//         if(name == "")
//             jQuery("#ajax_basic_callback").html(prev+"<li>user name isnt valid</li>");
// // return;
//     });
//
//     alert(jQuery("#ajax_basic_callback").html());
// });