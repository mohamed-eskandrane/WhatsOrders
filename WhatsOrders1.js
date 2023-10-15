const sheetId = '1uQe2tyiTnxoo2yGBi6wRJ48LbkN9YZPvOsbq3EO2SRU';
const base = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?`;
let query = encodeURIComponent('Select *');
const Category = 'Category';
let urlCategory = `${base}&sheet=${Category}&tq=${query}`;
let dataCategory= [];
const Products = 'Products';
let urlProducts = `${base}&sheet=${Products}&tq=${query}`;
let dataProducts = [];
const Types="Types";
let urlTypes = `${base}&sheet=${Types}&tq=${query}`;
let dataTypes = [];
const Setting = 'Setting';
let urlSetting = `${base}&sheet=${Setting}&tq=${query}`;
let DataSetting = [];
const Brands = 'Brands';
let urlBrand = `${base}&sheet=${Brands}&tq=${query}`;
let DataBrand = [];
let cartArray = [];

document.addEventListener('DOMContentLoaded', init)
function init(){
    setTimeout(() => {loadSetting();}, 1000);
    setTimeout(() => {loadProducts();}, 800);
    setTimeout(() => {loadTypes();}, 200);
    setTimeout(() => {loadCategory();}, 1000);  
    setTimeout(() => {loadBrands();}, 1200); 
  }

function toTitle(str) {
return str.replace(/(?:^|\s)\w/g, function(match) {
    return match.toUpperCase();
});
}
function showStext(){
    $("input#wosearch").val('');
    $("li.gitem").show();
    $("#catList").toggle();
    $(".divCategory").toggle();
    $("#wosearchdiv").toggle();
    $("#items .title").toggle();
    $("input#wosearch").focus();
}
function showStext1(){
    $("input#brsearch").val('');
    $("li.gitem").show();
    $("#BarnList").toggle();
    $(".divCategory").toggle();
    $("#brsearchdiv").toggle();
    $("#items .title").toggle();
    $("input#brsearch").focus();
}

function SearchPro(val){
let items=document.getElementById("items");
let Sear="";
  $("li.gitem").show();
  if((val).trim() !== ""){
for (let index = 0; index < items.childElementCount; index++) {
    if(items.children.item(index).tagName=="LI"){
        Sear=items.children.item(index).children.item(0).innerText;
        if(Sear.search(val)==-1){
            items.children.item(index).style.display="none";
        }else{
            items.children.item(index).style.visibility="flex";
 }}}
  if($('#items li:visible').length == 0){
    notifyC("0 items", "warning");
  }}
}; 

function SearchPro1(val){
    let items=document.getElementById("items");
    let Sear="";
      $("li.gitem").show();
      if((val).trim() !== ""){
    for (let index = 0; index < items.childElementCount; index++) {
        if(items.children.item(index).tagName=="LI"){
            Sear=items.children.item(index).children.item(6).innerText;
            console.log(Sear)
            if(Sear.search(val)==-1){
                items.children.item(index).style.display="none";
            }else{
                items.children.item(index).style.visibility="flex";
     }}}
      if($('#items li:visible').length == 0){
        notifyC("0 items", "warning");
      }}
    }; 

  function loadCategory(){
    dataCategory = [];
    fetch(urlCategory)
    .then(res => res.text())
    .then(rep => {
        const jsonData = JSON.parse(rep.substring(47).slice(0, -2));
        const colzCategory = [];
        jsonData.table.cols.forEach((heading) => {
            if (heading.label) {
                let columnCategory = heading.label;
                colzCategory.push(columnCategory);
            }
        })
        jsonData.table.rows.forEach((rowData) => {
            const rowCategory = {};
            colzCategory.forEach((ele, ind) => {
                rowCategory[ele] = (rowData.c[ind] != null) ? rowData.c[ind].v : '';
            })
            dataCategory.push(rowCategory);
        })
        loadCatalog();
    })
  }

  function loadProducts(){
    dataProducts = [];
    fetch(urlProducts)
    .then(res => res.text())
    .then(rep => {
        const jsonData = JSON.parse(rep.substring(47).slice(0, -2));
        const colzProducts = [];
        jsonData.table.cols.forEach((heading) => {
            if (heading.label) {
                let columnProducts = heading.label;
                colzProducts.push(columnProducts);
            }
        })
        jsonData.table.rows.forEach((rowData) => {
            const rowProducts = {};
            colzProducts.forEach((ele, ind) => {
                rowProducts[ele] = (rowData.c[ind] != null) ? rowData.c[ind].v : '';
            })
            dataProducts.push(rowProducts);
        })
    })
  }

  function loadTypes(){
    dataTypes=[];
    fetch(urlTypes)
    .then(res => res.text())
    .then(rep => {
        const jsonData = JSON.parse(rep.substring(47).slice(0, -2));
        const colzTypes = [];
        jsonData.table.cols.forEach((heading) => {
            if (heading.label) {
                let columnTypes = heading.label;
                colzTypes.push(columnTypes);
            }
        })
        jsonData.table.rows.forEach((rowData) => {
            const rowTypes = {};
            colzTypes.forEach((ele, ind) => {
                rowTypes[ele] = (rowData.c[ind] != null) ? rowData.c[ind].v : '';
            })
            dataTypes.push(rowTypes);
        })
    })
  }

  function loadSetting(){
    DataSetting=[];
    fetch(urlSetting)
    .then(res => res.text())
    .then(rep => {
        const jsonData = JSON.parse(rep.substring(47).slice(0, -2));
        const colzSetting = [];
        jsonData.table.cols.forEach((heading) => {
            if (heading.label) {
                let columnSetting = heading.label;
                colzSetting.push(columnSetting);
            }
        })
        jsonData.table.rows.forEach((rowData) => {
            const rowSetting = {};
            colzSetting.forEach((ele, ind) => {
                rowSetting[ele] = (rowData.c[ind] != null) ? rowData.c[ind].v : '';
            })
            DataSetting.push(rowSetting);
        })
        LoadSetinginPage();
    })
  }

function loadBrands(){
DataBrand = [];
fetch(urlBrand)
.then(res => res.text())
.then(rep => {
    const jsonData = JSON.parse(rep.substring(47).slice(0, -2));
    const colzBrand = [];
    jsonData.table.cols.forEach((heading) => {
        if (heading.label) {
            let columnBrand = heading.label;
            colzBrand.push(columnBrand);
        }
    })
    jsonData.table.rows.forEach((rowData) => {
        const rowBrand = {};
        colzBrand.forEach((ele, ind) => {
            rowBrand[ele] = (rowData.c[ind] != null) ? rowData.c[ind].v : '';
        })
        DataBrand.push(rowBrand);
    })
    loadBrandstopage();
})
}
  function LoadSetinginPage(){
    let ImageM=document.getElementById("Imge");
    ImageM.className="image is-64x64";
    ImageM.src=DataSetting[0].val;
    document.getElementById("First").innerText=DataSetting[1].val;
    document.getElementById("h1Main").innerText=DataSetting[2].val;
    document.getElementById("h2part1").innerText=DataSetting[3].val;
    document.getElementById("h2part2").innerText=DataSetting[4].val;
    let State = document.getElementById("State");
    State.innerText=DataSetting[7].val;
    if(DataSetting[7].val==DataSetting[8].val){
        State.className="SOpen";
    }else{
        State.className="SClose";
    }
    if (typeof(Storage) !== "undefined") {
        localStorage.setItem("UpdateEvery",DataSetting[5].val);
        localStorage.setItem("Currency",DataSetting[6].val);
        localStorage.setItem("MyPhone",DataSetting[9].val);
        localStorage.setItem("TaxP",DataSetting[10].val);
        localStorage.setItem("Delivery",DataSetting[11].val);
        localStorage.setItem("highest ",DataSetting[12].val);
        localStorage.setItem("massge",DataSetting[13].val);
    }
  }

  function OpenImge(img){
    document.getElementById("modal").style.display="flex";
    $("html").addClass("is-clipped");
    $("#modal").addClass("is-active");
    document.getElementById("myimgshow").src=img;
}
function CloseImg(){
    document.getElementById("modal").style.display="none";
    document.getElementsByTagName("html")[0].className=""
}
  
function loadBrandstopage(){
    var $BarnList = $("#BarnList");
    for (let indeN = 0; indeN < DataBrand.length; indeN++) {
        if(DataBrand[indeN].BrandIcon!=null){
            $BarnList.append('<li class="liCategoryIcon">' + `<img src=${DataBrand[indeN].BrandIcon} class="CategoryIcon">` + `<a  onclick="onclikbrsearch('${DataBrand[indeN].BrandName}')">` + DataBrand[indeN].BrandName + ' </a></li>');
        }else{
            $BarnList.append('<li class="liCategoryIcon">' + `<img src=${DataBrand[indeN].BrandIcon} class="CategoryIcon" style="visibility:hidden">` + `<a  onclick="onclikbrsearch('${DataBrand[indeN].BrandName}')">` + DataBrand[indeN].BrandName + ' </a></li>');
        }
    }
}
function onclikbrsearch(nambra){
    showStext1();
    document.getElementById("brsearch").value=nambra;
    SearchPro1(nambra);
    
}

  function loadCatalog(){ 
    var $catTab = $("#catList");
    var items= document.getElementById("items");
    for (let index = 0; index < dataCategory.length; index++) {
        if(dataCategory[index].CategoryIcon!=null){
            $catTab.append('<li class="liCategoryIcon">' + `<img src=${dataCategory[index].CategoryIcon} class="CategoryIcon">` + '<a href="#' + (dataCategory[index].CategoryName).replace(/\s+/g,"-") + '">' + dataCategory[index].CategoryName + ' </a></li>');
        }else{
            $catTab.append('<li class="liCategoryIcon">' + `<img src=${dataCategory[index].CategoryIcon} class="CategoryIcon" style="visibility:hidden">` + '<a href="#' + (dataCategory[index].CategoryName).replace(/\s+/g,"-") + '">' + dataCategory[index].CategoryName + ' </a></li>');
        }
    }
    let CC;
    items.innerHTML="";
    let ProductBr,ProductU,ProductN,ProductI,	ProductD,ProductP,	ProductDis,ProductIn,ProductOut ,	ProductPr,PIsTypes;
    for (let index = 0; index < dataCategory.length; index++) {
        if(dataCategory[index].CategoryIcon!=null){
            items.innerHTML+=`<div class="divCategory"><img src=${dataCategory[index].CategoryIcon} class="CategoryIcon1" >` + '<h3 style="margin-left: 10px;" class="title is-5" id='+ (dataCategory[index].CategoryName).replace(/\s+/g,"-") +'>' + dataCategory[index].CategoryName + '</h3></div>';
        }else{
            items.innerHTML+=`<div class="divCategory"><img src=${dataCategory[index].CategoryIcon} class="CategoryIcon1" style="visibility:hidden" >` + '<h3 style="margin-left: 10px;" class="title is-5" id='+ (dataCategory[index].CategoryName).replace(/\s+/g,"-") +'>' + dataCategory[index].CategoryName + '</h3></div>';
       }
    for (let indeY = 0; indeY < dataProducts.length; indeY++) {
    if(dataCategory[index].CategoryName==dataProducts[indeY].CategoryName){
        ProductN=dataProducts[indeY].ProductName;
        ProductI=dataProducts[indeY].ProductIcon;
        ProductD=dataProducts[indeY].ProductDiscription;
        ProductP=dataProducts[indeY].ProductPrice;
        ProductDis= dataProducts[indeY].ProductDiscount;
        ProductIn =dataProducts[indeY].ProductInStock;
        ProductOut=  dataProducts[indeY].ProductOutofStock;
        ProductPr= dataProducts[indeY].ProductProperty;
        PIsTypes=dataProducts[indeY].IsTypes; 
        ProductU=dataProducts[indeY].ProductUnite;
        ProductBr=dataProducts[indeY].Brands;  
        items.innerHTML+=`<li class="gitem box is-marginless ${(ProductI!==""? " woitemimage":"" )}  loading="lazy" style="background-image: url(${ProductI}); padding-right:10px !important; margin-top:5px !important;`
        +` ${(ProductOut==true|| ProductIn==0 ?"pointer-events: none; filter: grayscale(1); background-color:#f6f6f6;":"")}`
        +` data-item=${toTitle(ProductN)} data-price='${ProductP}>
        <div class="mydiv"><b>${toTitle(ProductN)}</b> 
        <div class="hidediv" onclick="OpenImge('${ProductI}')" ></div>
        ${PIsTypes?`<select id="Se${indeY}" class="SelClass"><option value="0">Select Item</option> </select>`:""} 
        </div>
        <a onClick="updateC('${PIsTypes,toTitle(ProductN)}', 1,${ProductP},'Se${indeY}');" style="padding-top:0px;" class="mitem is-success is-pulled-right">
        <i style="color:var(--wotheme);" class="far fa-2x fa-plus-square"></i></a>
        <span class="is-pulled-right" style="padding-right:15px;padding-top:4px;"> <span class="is-size-7 has-text-grey-light"> ${localStorage.getItem("Currency")} </span> ${(ProductDis!="" ?'<s class="has-text-grey-light">':"")} ${ProductDis}</s> ${ProductP} </span></span>  
        <br/>
        ${ProductBr!=null?`<p>${ProductBr}</p>`:""}
        ${ProductOut==true|| ProductIn==0 ?"":"<small>" + `${ProductIn} ${ProductU}` + " </small>"}
        <br/>
        <small> ${toTitle(ProductD)}</small>
        </li>`;
        if(PIsTypes){
            for (let indeZ = 0; indeZ < dataTypes.length; indeZ++) {
                if(dataTypes[indeZ].ProductName==dataProducts[indeY].ProductName){
                    CC=document.createElement("option");
                    CC.value=dataTypes[indeZ].ProductType;
                    CC.innerText=dataTypes[indeZ].ProductType;
                    document.getElementById(`Se${indeY}`).appendChild(CC);
                }
            }
        }
        }
       }
    }
  }

  function GeTName(TYP,Nam,Ind){
    if(TYP==true){
        if(document.getElementById(Ind)!=undefined){
            return Nam + "-" + document.getElementById(Ind).value;
        }
    }
    return Nam
  }
var waddr = "";
var cartM = "";
var cartV = 0;
var minV = 0 || 0;
var catArray = [];
var payMode = 'Show Note';
var payNote = localStorage.getItem("massge")
var lang = 'en';
var curnames = ["PESOS","RP","GS"];
var deci = 2;
var perC = localStorage.getItem("TaxP")+"%";
perC = cleanP(perC);




function cleanP(perC2){
if (perC2.indexOf("%") > -1) {
    perC2.replace("%","").replace(" ", "");
    return 1+(parseFloat(perC2)/100);
} else {return 1;}
}


function urlencode(str) {
  str = (str + '')
  return encodeURIComponent(str)
    .replace(/!/g, '%21')
    .replace(/'/g, '%27')
    .replace(/\(/g, '%28')
    .replace(/\)/g, '%29')
    .replace(/\*/g, '%2A')
    .replace(/~/g, '%7E')
    .replace(/%20/g, '+')
} // end 





function checkIt(){
    //alert(cartV);
    if('yes' == 'no'){
        //shop closed
        notifyC("Please note the shop is closed", "info");
    }
    if(cartV < minV && (!document.getElementById('wopic').checked)){
        // minimum order value
        notifyC("Minimum order value is "+minV, "warning");
        return false;   
    }
    if((waddr.trim() !== "")&&(cartArray.length>0)){
        $("#wohref").addClass("is-loading");
        $("#worefresh").show();
        return true;
    } else {
        if(cartArray.length<1){
            //check cart
        notifyC("Please check cart", "warning");
        return false;
        } else if (waddr.trim() === ""){
            //check address
        notifyC("Please complete your details", "warning");
        return false;            
        }
    }
}



function ispickup(){
  let x = document.getElementById('wopic').checked;
  document.getElementById('woaddress').disabled = x;
  document.getElementById('wolandmark').disabled = x;
  updateC();
}
function buildAddr(waddr){
   return waddr.name+'%0A'+waddr.contact+(document.getElementById('wopic').checked ? "" :'%0A'+waddr.addr1+'%0A'+waddr.addr2);
}

function updateWOaddress(){
waddr = '';
var errC = 0;
var inputs = document.getElementsByClassName('woaddr');
for (var i = 0; i < inputs.length-1; i += 1) {
    if(!inputs[i].disabled){
        if(!inputs[i].value.trim()){
         errC += 1;
        }
    }
}
if (errC > 0) {
  return;
}
waddr = {
"name" : inputs[0].value,
"contact" : inputs[1].value,
"addr1" : inputs[2].value,
"addr2" : inputs[3].value
};
try {
localStorage.woaddress1 = JSON.stringify(waddr);
} catch (error) {
    console.log(error);    
}
waddr = buildAddr(waddr);
updateC();

} 

function notifyC(themsg,ntype){
    $("#notification").finish();
    $("#notification").html(themsg);
    $("#notification").removeClass();
    $("#notification").addClass("notification");
    $("#notification").addClass("is-"+ntype);
    $("#notification").fadeIn().delay(800).fadeOut("slow");
}



function deleteRow(arr, row) {
   arr = arr.slice(0); // make copy
   arr.splice(row, 1);
   return arr;
}

// ~~~ start of custom box ~~~
var customitem = '';
var crate;

function customBox(itemtext, qty, rate){
      var custHTML = '<form>';
      var arrSelect = itemtext.split('::');
      var baseitem = arrSelect[0];
      custHTML = '<h3>'+arrSelect[0] + '</h3><hr>';
      //console.log(arrSelect.length);
      arrSelect.forEach((value, index) => {
        if (index < 1) return;
            if(value.search("//") > -1) {
              var arrPara = value.split('//');
              custHTML += '<h5>'+arrPara[0]+'</h5>';
              arrPara.forEach((value1, index1) => {
                if (index1 < 1) return;
                var sitem = xsitem(arrPara[index1]);
                var scost = xsnum(arrPara[index1]);
                custHTML += '<input style="min-width:30px;" class="wocradio" type="radio" data-sitem="'+sitem+'" data-scost='+scost+' id="or'+index+'" name="or'+index+'" value="'+sitem+'" onclick="custItem(\''+baseitem+'\','+rate+',\'or'+index+'\',this);" '+(index1==1?"checked":"")+' /><span style="min-width:60px;"> '+sitem+' <small class="is-size-7 has-text-grey-light">+ '+ localStorage.getItem("Currency")+scost+'</small></span><br>';
              });
              custHTML += '<hr>';
            } // end of OR selects
            if(value.search("##") > -1) {
              var arrPara = value.split('##');
              var maxI = xsnum(arrPara[0]);
              console.log('maxI'+maxI);
              custHTML += '<h5>'+ xsitem(arrPara[0]) +((maxI>0)?' (Max '+ maxI +')':'')+'</h5>';
              arrPara.forEach((value1, index1) => {
                if (index1 < 1) return;
                var sitem = xsitem(arrPara[index1]);
                var scost = xsnum(arrPara[index1]);
                custHTML += '<input style="min-width:30px;" class="woccheck" type="checkbox" data-sitem="'+sitem+'" data-scost='+scost+' data-smax='+maxI+' id="and'+index+'" name="and'+index+'" value="-" onclick="custItem(\''+baseitem+'\','+rate+',\'and'+index+'\', this);" /><span style="min-width:300px;"> '+sitem+' <small class="is-size-7 has-text-grey-light">' + localStorage.getItem("Currency") + scost+'</small></span><br>';
              });
              custHTML += '<hr>';
            } // end of AND selects
       
        });

function xsitem(str){
 if (str.indexOf("((") > -1) {
  return str.substring(0, str.indexOf("((")).trim();
 } else {
  return str.trim();
 }
} // end of xsitem

function xsnum(str){
return str.lastIndexOf("((") > -1 ? str.substring(
                    str.lastIndexOf("((") + 2,
                    str.lastIndexOf("))")
                ).trim() : 0;
} // end of xsnum


custItem(baseitem,rate,'','');

document.getElementById("addCitemCart").addEventListener("click", function(){
   $(".modal-close").click();
   updateC(customitem, 1, crate);
});

} // ~~~ end of customBox ~~~

function custItem(baseitem,rate,modid,e){

if(modid!== ''){
    var chkcnt = $('#'+modid+':checked').length;
    var mxcnt = parseInt($('#'+modid).attr('data-smax'));
    if ((chkcnt > mxcnt)&&(mxcnt > 0)){
console.log('Notify limit of '+mxcnt);
        notifyC("Max "+mxcnt, "warning");
        e.checked=false;
        //$('#'+modid+':last:checked').prop( "checked", false );
        $(this).prop( "checked", false );
        //return;
    }
}
customitem = baseitem;
$('input[type=radio].wocradio:checked').each(function() {
    customitem += ' ['+$(this).attr("data-sitem")+']';
    rate += parseFloat($(this).attr("data-scost"));
});

$('input[type=checkbox].woccheck:checked').each(function() {
    customitem += ' ['+$(this).attr("data-sitem")+']';
    rate += parseFloat($(this).attr("data-scost"));
});
crate = rate;
document.getElementById("citrate").innerHTML= crate.toFixed(deci);
console.log('<pre>'+customitem+'</pre><p>'+rate+'</p>');
} // end of custItem

function updateC(itm,qty,rte,sel){
let ZXC="";
if(itm!=""){
if(document.getElementById(sel)!=undefined){
if(document.getElementById(sel).value=="0"){
    notifyC("Select Item","warning");
    return;
}else{
    ZXC= "-" +document.getElementById(sel).value;
    itm=itm + ZXC
}}

}
var newA =[itm,qty,rte];
const arrayColumn = (arr, n) => arr.map(x => x[n]);
cartV = 0;
cartM = "";
var exists = false;
if (itm !== undefined) {
$.each(cartArray, function (i) {    
 if(cartArray[i][0].toLowerCase() == newA[0].toLowerCase()){
  cartArray[i][1] += newA[1];
  exists = true;
    if(cartArray[i][1]<1){
      cartArray = deleteRow(cartArray, i);
      return false;
    }
 }
});
if (!exists) {
     cartArray.push(newA);
}
// end of cartArray modify
}
document.getElementById('wocart').innerHTML = "";
$.each(cartArray, function (i) {
if(cartArray[i][1]>0){
document.getElementById('wocart').innerHTML += '<div class="panel-tabs is-fullhd is-size-6" style="align-items: flex-start;"> <a class="is-pulled-left has-text-black" style="border:0;" onClick="updateC(\''+ cartArray[i][0] + '\',-1,'+ cartArray[i][1] + ');"><i class="far fa-2x fa-minus-square"></i></a><span style="width:220px;padding:8px 2px;">' + '<b class="tag is-medium is-light is-rounded">'+ cartArray[i][1] + '</b> x '+ cartArray[i][0] + '</span> <a class="is-pulled-right has-text-black" style="border:0;" onClick="updateC(\''+ cartArray[i][0] + '\',1,'+ cartArray[i][1] + ');"><i class="far fa-2x fa-plus-square"></i></a> </div><!--hr style="margin: 1rem 0;"/-->';
    cartV += (cartArray[i][1] * cartArray[i][2]);
    cartM += "▪"+cartArray[i][1] + " x " + cartArray[i][0] + "\r\n";
}
});
var cntItems = arrayColumn(cartArray, 1).reduce((a, b) => a + b, 0);
if(cntItems > 0){
var delC = cartV<localStorage.getItem("highest ")?localStorage.getItem("Delivery"):0;
Number.prototype.toLocaleFixed = function(n) {
    return this.toLocaleString(undefined, {
      minimumFractionDigits: n,
      maximumFractionDigits: n
    });
};
deci = curnames.includes('"'+ localStorage.getItem("Currency")+'"')?0:2;
delC = parseFloat(delC);
delC = (document.getElementById('wopic').checked ? 0 : delC);
amtPayable = ((cartV+delC)*perC).toFixed(deci);
$('#footsum').show();
document.getElementById('wofootsum').innerHTML = '<span class="tag is-rounded is-light is-size-6 has-text-weight-bold">'+cntItems+'</span> · <small class="is-size-7 has-text-grey"> ' + localStorage.getItem("Currency") + amtPayable+'</small>';
document.getElementById('wocart').innerHTML += "<div class='is-fullhd'><hr style='margin:1rem 0;color:#fff;'/><span class='has-text-weight-semibold is-pulled-left'>Subtotal</span><span class='has-text-weight-semibold is-pulled-right'> "+ localStorage.getItem("Currency") +" " +  cartV.toLocaleFixed(deci)+"</span><br/><span class='has-text-weight-normal is-pulled-left'>Delivery</span><span class='has-text-weight-normal is-pulled-right'>"+((delC == 0) ? '-':localStorage.getItem("Currency") +" "+delC.toLocaleFixed(deci))+"</span><br/><span class='has-text-weight-bold is-pulled-left'>Payable <small class='has-text-weight-light'>"+((perC == 1) ? '':'(with tax)')+"</small></span><span class='has-text-weight-bold is-pulled-right'> " + localStorage.getItem("Currency") + " "+amtPayable+"</span></div><br/><span class='has-text-grey is-size-7'>Your order is ready to be sent via WhatsApp.</span>";
} else {
    // your cart is empty
document.getElementById('wocart').innerHTML += '<p class="has-text-centered">Your cart is empty</p>';
$('#footsum').hide();
}
upLink();
// update cart
notifyC("Cart updated", "info");
} // end of updateC

function thePaynote(pMode,pNote,pValue){
    var payN = 'Cash on delivery';
    switch(pMode) {
        case 'Show Note':
            payN = pNote.replace("$$$",pValue);
            break;
        case 'PayPal - Me':
            payN = 'Click to pay using PayPal%0Ahttps://paypal.me/'+pNote+'/'+pValue;
            payN += '%0APlease share screenshot after payment.';
            break;
        case 'USSD - Rwanda':
            var ussdrw = 'amt='+pValue+'&ussdid='+pNote;
            ussdrw = escape(encodeURI(ussdrw));
            payN = 'Click to pay using thru USSD%0Ahttps://whatsorder.com/p/ussdrw.php?'+ussdrw;
            payN += '%0APlease share screenshot after payment.';
            break;
        case 'UPI - India':
            var upivar = 'pn=Kitchen J&S&pa='+pNote+'&tn=WhatsOrder&am='+pValue+'&cu='+localStorage.getItem("Currency");
            upivar = escape(encodeURI(upivar));
            payN = 'Click to pay using UPI%0Ahttps://whatsorder.com/p/upiin.php?'+upivar;
            payN += '%0APlease share screenshot after payment.';
            break;
        case 'Payment link':
            payN = 'Please share screenshot after payment.%0A'+pNote;
            break;
        case 'Append Amount to Link':
            payN = 'Please share screenshot after payment.%0A'+ escape(encodeURI(pNote+pValue));
            break;            
            
    } // end of payment mode switch
    return payN;
}

function upLink(){
var wonote = urlencode(document.getElementById('wonote').value);
var jstand = true;
if(!jstand){
    cartM = 'Trial version\nItem ABC x 2\nItem XYZ x 3';
}
var wlink = "https://api.whatsapp.com/send?phone=" + localStorage.getItem('MyPhone') + "&text=New order "+(document.getElementById('wopic').checked ? '🏬' : '🛵')+" (Kitchen+J%26S)%0A(%23%20B5965)%0A%0A" + urlencode(cartM) + "%0A*Payable: "+ localStorage.getItem("Currency") + amtPayable + "*%0A";
wlink += "%0A*Customer details*%0A";
wlink += toTitle(waddr).replace(/\x26/,"%26").replace(/\x23/,"%23");
wlink += "%0A**"+wonote.replace(/\x26/,"%26").replace(/\x23/,"%23")+"**";
if (wlink !== "") {
    wlink += "%0A%0A-----------------------------%0A(Message for Customer)%0A%0A"+thePaynote(payMode,payNote,amtPayable);
}
document.getElementById("wohref").setAttribute('href', wlink);
} // end of upLink

