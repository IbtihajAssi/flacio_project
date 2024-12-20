function chngeimg(image){
document.getElementById('carouselId').src=image
}

function changecontentrev(){
    var data=`<div class="container">
    <h2 class="Libre-Baskerville-25px">1 review for ZZ Plant</h2>
    <div class="commennt border px-3 py-3">
<div class="d-flex align-items-center ">
    <img src="asset/img/comment.png" alt="use" width="60px" height="60px">
    <div class=" ps-2">
        <div class=" starsss" >
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
           </div>
           <div><strong class="font-Poppinss-14px">Wpbingo </strong></div>
          <div> <span class="font-Poppins-14px" style="font-size: 12px;">January 11, 2021</span></div>
    </div>
</div>
<div><p class="font-Poppinss-14px">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</p></div>
    </div>
    <div class="add-review my-5">
        <i class="fa-solid fa-pencil main-color"></i>
        <span class="main-color">add a review</span>
    </div> 
    <p><span >Your email address will not be published.Required fields are marked </span><span style="color: red;">*</span></p>
    <div class="d-flex">
        <span class="font-Poppinss-14px pt-1">Your rating</span> 
        <div class=" starsss ps-3" >
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
           </div>
    </div>
    <div class="row row-gap-4">
        <div class="col-lg-6 col-sm-12 col-md-12 input">
            <p class="w-100"><input id="author" name="author" placeholder="Name *" type="text" value="" size="30" aria-required="true" required=""></p>
            <p><input id="email" name="email" placeholder="Email *" type="email" value="" size="30" aria-required="true" required=""></p>
            <p><input name="submit" type="submit" id="submit" class="submit" value="Submit"></p>
        </div>
        <div class="col-lg-6 col-sm-12 col-md-12 input">
            <textarea id="comment" name="comment" placeholder="Your Reviews *" cols="45" rows="8" aria-required="true" required=""></textarea>
        </div>
    </div>
</div>`;
      document.getElementById('review').innerHTML=data;
}

function changecontentdes(){
    var datap=`<p class="font-Poppins-14px">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
    eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.<br><br>

   Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
`;
    document.getElementById('review').innerHTML=datap;
}



function changeimghover1(x,image){
    if(x==1){
        image.src="asset/img/15-1-600x713.jpg"
    }
    else if(x==2){
        image.src="asset/img/14-9-600x713.jpg"
    }
}
function changeimghover2(x,image){
    if(x==1){
        image.src="asset/img/14-7-600x713.jpg"
    }
    else if(x==2){
        image.src="asset/img/14-6-600x713.jpg"
    }
}
function changeimghover3(x,image){
    if(x==1){
        image.src="asset/img/10-6-600x713.jpg"
    }
    else if(x==2){
        image.src="asset/img/16-1-1-600x713.jpg"
    }
}
function changeimghover4(x,image){
    if(x==1){
        image.src="asset/img/12-1-1-600x713.jpg"
    }
    else if(x==2){
        image.src="asset/img/12-1-600x713.jpg"
    }
}