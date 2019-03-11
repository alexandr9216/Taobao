alert('qwe');

// вкладка - [Детали продукта]
function get_product_detail_2() {
    var arr_product_detail = [];
    $("#attributes #J_AttrList #J_AttrUL").find('li').each(function(indx, element){
        var name = $(element).text();
        var i_str = name.indexOf(':');
        name = (i_str === -1) ? name : name.substring(0, i_str);

        var val = $(element).attr('title');
        arr_product_detail.push( {'name':name, 'val':val} );
    });

    console.log(arr_product_detail);
}