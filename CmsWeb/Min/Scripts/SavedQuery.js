$(function(){$.editable.addInputType("checkbox",{element:function(){var n=$('<input type="checkbox">');return $(this).append(n),$(n).click(function(){var t=$(n).attr("checked")?"yes":"no";$(n).val(t)}),n},content:function(n){var r=n=="yes"?1:0,t=$(":input:first",this),i;$(t).attr("checked",r),i=$(t).attr("checked")?"yes":"no",$(t).val(i)}}),$.onready=function(){$(".clickEdit").editable("/SavedQuery/Edit/",{indicator:"<img src='/images/loading.gif'>",tooltip:"Click to edit...",style:"display: inline",width:"200px",height:25,submit:"OK"}),$("span.yesno").editable("/SavedQuery/Edit/",{type:"checkbox",onblur:"ignore",submit:"OK"})},$("table.grid > tbody > tr:even").addClass("alt"),$.getTable=function(n,t){return t=t||n.serialize(),$.post(n.attr("action"),t,function(t){$(n).html(t).ready(function(){$("table.grid > tbody > tr:even",n).addClass("alt"),$(".dropdown",n).hoverIntent(dropdownshow,dropdownhide),$(".bt").button(),$(".datepicker").datepicker(),$.onready()})}),!1},$("#filter").live("click",function(n){n.preventDefault(),$.getTable($(this).closest("form")),$.onready()}),$(".bt").button(),$("a.delete").live("click",function(){var n=$(this);$.post("/SavedQuery/Edit",{id:n.attr("id")},function(){n.closest("tr").fadeOut().remove()})}),$.onready()})