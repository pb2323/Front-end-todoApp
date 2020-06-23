"use strict";
let arr=[];
$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(1000,function(){
        $(this).remove();
    });
    event.stopPropagation();
});
$("ul").on("click","li",function(){
    $(this).toggleClass("completed");
});
$("input[type='text']").on("keypress",function(event){
    if(event.which===13&&($("input[type='number']").val()==="")){
        alert("Enter appropriate work");
    }
});
$("input[type='number']").on("keypress",function(event){
    if($("input[type='text']").val()===""&&event.which===13){
         alert("Enter appropriate emergency");}
     else if(event.which===13)
     {
         arr.push({date:Number($("input[type='number']").val()),value:$("input[type='text']").val()});
        $("input[type='number']").val("");
        $("input[type='text']").val("");
        arr.sort(function(a,b){
            return b.date-a.date
        });
        $("ul").html("");
        for(let a=0;a<arr.length;a++)
        {
             $("ul").append("<li><span><i class='fas fa-trash'></i></span>"+arr[a].value+"</li>");
        }
     }
});

$("ul").on("click","i",function(event){
    let sb=$(this).parent().parent().text();
    console.log(sb);
    for(let a=0;a<arr.length;a++)
    {
        if(arr[a].value==sb)
        console.log(arr[a].value+" "+sb);
        if(arr[a].value==sb){
            arr.splice(a,1);
            break;
        }
    }console.log(arr);
    $(this).parent().parent().fadeToggle(1000);
    event.stopPropagation();
});
$(".fa-plus").on("click",function(){
    $("input").fadeToggle(1000);
});