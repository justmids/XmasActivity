h_jQuery( document ).ready(function() {

	//���o�p�ʪ���������
	h_jQuery.ajax({
       type: "GET",
       url: "http://www.books.com.tw/headers/ajaxGetCartNum/",
       dataType: "json",
       success:function(response){
       		h_jQuery("#small_cart").text(response.num);
       		var count = parseInt(response.num);
           	if(count > 99){
            	h_jQuery("#shopping_cart_more").show();
           	}
       }
    });

});