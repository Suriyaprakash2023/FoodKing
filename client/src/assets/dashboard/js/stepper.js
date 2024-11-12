// (function($) {
//     'use strict';

//     $(function() {

//         $(document).ready(function() {
//             function triggerClick(elem) {
//                 $(elem).click();
//             }
//             var $progressWizard = $('.stepper'),
//                 $tab_active,
//                 $tab_prev,
//                 $tab_next,
//                 $btn_prev = $progressWizard.find('.prev-step'),
//                 $btn_next = $progressWizard.find('.next-step'),
//                 $tab_toggle = $progressWizard.find('[data-toggle="tab"]'),
//                 $tooltips = $progressWizard.find('[data-toggle="tab"][title]');

//             // To do:
//             // Disable User select drop-down after first step.
//             // Add support for payment type switching.

//             //Initialize tooltips
//             $tooltips.tooltip();

//             //Wizard
//             $tab_toggle.on('show.bs.tab', function(e) {
//                 var $target = $(e.target);

//                 if (!$target.parent().hasClass('active, disabled')) {
//                     $target.parent().prev().addClass('completed');
//                 }
//                 if ($target.parent().hasClass('disabled')) {
//                     return false;
//                 }
//             });

//             // $tab_toggle.on('click', function(event) {
//             //     event.preventDefault();
//             //     event.stopPropagation();
//             //     return false;
//             // });

//             $btn_next.on('click', function() {
//                 $tab_active = $progressWizard.find('.active');

//                 $tab_active.next().removeClass('disabled');

//                 $tab_next = $tab_active.next().find('a[data-toggle="tab"]');
//                 triggerClick($tab_next);

//             });
//             $btn_prev.click(function() {
//                 $tab_active = $progressWizard.find('.active');
//                 $tab_prev = $tab_active.prev().find('a[data-toggle="tab"]');
//                 triggerClick($tab_prev);
//             });
//         });
//     });

// }(jQuery, this));


// $(document).ready(function() {
 
//     $('.method').on('click', function() {
//       $('.method').removeClass('blue-border');
//       $(this).addClass('blue-border');
//     });
   
//   })
//   var $cardInput = $('.input-fields input');
   
//   $('.next-btn').on('click', function(e) {
   
//     $cardInput.removeClass('warning');
   
//     $cardInput.each(function() {    
//        var $this = $(this);
//        if (!$this.val()) {
//          $this.addClass('warning');
//        }
//     })
//   });