$(function(){function n(n){return n=n.replace(new RegExp("^[\\s]+","g"),""),n.replace(new RegExp("[\\s]+$","g"),"")}$("td.slot").tooltip({track:!0,delay:0,showURL:!1,showBody:" - ",fade:250}),$("input").live("click",function(){var r=this.id,t=$(this),i=this.checked;$.post("/OnlineReg/ToggleSlot/"+$("#pid").val(),{oid:$("#oid").val(),slot:this.id,ck:i},function(r){if(!r){t.attr("checked",!i);return}var u=r.split("<!-- -->");t.parent().replaceWith(u[1]).ready(function(){$("td.slot[title]").tooltip({track:!0,delay:0,showURL:!1,showBody:" - ",fade:250})});switch(n(u[0])){case"Yours":$.growlUI1("Notification","Time slot is now yours");break;case"Open":$.growlUI1("Notification","Time slot is now open");break;case"Taken":$.growlUI2("Notification","Sorry, time slot has recently been taken by someone else");break;case"Limit":$.growlUI2("Notification","Your limit has been reached");break;case"NoChange":$.growlUI2("Notification","No change")}return!1})})}),$.blockUI.defaults.growlCSS={width:"350px",top:"40%",left:"35%",right:"10px",border:"none",padding:"5px",opacity:"0.7",cursor:null,color:"#fff",backgroundColor:"#000","-webkit-border-radius":"10px","-moz-border-radius":"10px"},$.growlUI2=function(n,t,i){var r=$('<div class="growlUI2"><\/div>');n&&r.append("<h1>"+n+"<\/h1>"),t&&r.append("<h2>"+t+"<\/h2>"),i==undefined&&(i=1e3),$.blockUI({message:r,fadeIn:400,fadeOut:700,centerY:!1,timeout:i,showOverlay:!1,css:$.blockUI.defaults.growlCSS})},$.growlUI1=function(n,t,i){var r=$('<div class="growlUI"><\/div>');n&&r.append("<h1>"+n+"<\/h1>"),t&&r.append("<h2>"+t+"<\/h2>"),i==undefined&&(i=1e3),$.blockUI({message:r,fadeIn:400,fadeOut:700,centerY:!1,timeout:i,showOverlay:!1,css:$.blockUI.defaults.growlCSS})}