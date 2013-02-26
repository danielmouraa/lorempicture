
$(function()
{
	js.init();
});

var js =
{
	init: function()
	{
		js.activePluginWindy();
	},

	activePluginWindy: function(){
		var $el = $( '#windy-container' ),
			windy = $el.windy( {
				// rotation and translation boundaries for the items transitions
				boundaries : {
					rotateX : { min : 40 , max : 90 },
					rotateY : { min : -15 , max : 15 },
					rotateZ : { min : -5 , max : 5 },
					translateX : { min : -200 , max : 200 },
					translateY : { min : -300 , max : -200 },
					translateZ : { min : 50 , max : 100 }
				}
			} );

		$( '#slider' ).slider( {
			animate : true,
			min: 0,
			max: windy.getItemsCount() - 1,
			slide: function( event, ui ) {

				windy.navigate( ui.value );

			}
		} );
	}

}