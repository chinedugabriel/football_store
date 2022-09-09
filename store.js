// login var...
let input_password = document.getElementById("input_password");
let input_email = document.getElementById("email");

// login button var..
let loginBtn = document.getElementById("btn-login"); 

// section-1
let section_1 = document.getElementById("section-1");

// row-1 landing page text var..
let row_1 = document.getElementById("row-1");

// row-2 holds the product details (product description)
let row_2_productDetails = document.getElementById("row-2");
// row-2> product-img-detail-sec holds the product image
let imagForProduct_detail = document.getElementById("product-img-detail-sec");

// this holds the price of the product in the details section
let amount_description = document.getElementById("amount-description");

// product-name-detail-sec
let productName_detail = document.getElementById("product-name-detail-sec");

// btn-close-product-description 
let btn_close_product_description = document.getElementById("btn-close-product-description");
// btn-close-product-description 
let btn_close_product_description_mobile = document.getElementById("btn-close-product-description-mobile");

// row-3 holds the cart and checkout section
let row_3_cartCheckout = document.getElementById("row-3");

// section-3 holds individual products section
let section_3 = document.getElementById("section-3");

// section-row-2 holds individual products more like a product gallery
let section_3_row = document.getElementById("section-row");

// product-list holds the product that is been added to the chart
let product_in_cart = document.getElementById("product-list");


// login view icon
let icon_view = document.getElementById("icon_view");

let icon_btn_toggle= document.getElementById("click_preView");

// this function help to toggle the view of input password when a user clicks on the eye icon in the login form section 
function preView (){
    if(input_password.type == "password"){
        icon_view.src="img/visibility_img.png";
        input_password.type = "text";
    }else{
        icon_view.src="img/visibility_off_img.png";
        input_password.type = "password";
    }
}
// this event calls the function preView to toggle the password view
icon_btn_toggle.addEventListener("click", preView);

// signUp var
let signUpEmail = document.getElementById("email-signUp");

let signUpPassword = document.getElementById("input_signUp_password");

// passwordIndicator var..
let passwordIndicator = document.getElementById("passwordIndicator");
// indicator var.. 
let level_1 = document.getElementById("level1");
let level_2 = document.getElementById("level2");
let level_3 = document.getElementById("level3");
let level_4 = document.getElementById("level4");
let level_5 = document.getElementById("level5");
let message = document.getElementById("message");




    // length of the words
    // check for special characters like @#$%!^&*()_+=><?/[]{} 
    // check how many times a character occurs
    // message(weak, medium, strong, veryStrong)
    // message_color(red, yellow, orange, green)

function passwordStrengthChecker(){
    // this display the passwordIndicatorSection when the password input change
    passwordIndicator.style.display = "flex";
    
    // this checks the characters in the password input  
    if(signUpPassword.value.length <=4){
        // console.log("it's working");
        message.innerHTML = "weak";
        level_1.style.backgroundColor ="red";
        level_2.style.backgroundColor ="";
        level_3.style.backgroundColor ="";
        level_4.style.backgroundColor ="";
        level_5.style.backgroundColor ="";
        message.style.color = "red";
    }else if(signUpPassword.value.length <=6 && /[0-9]/.test(signUpPassword.value)&& /[a-z]/.test(signUpPassword.value)){
        message.innerHTML = "medium";
        level_1.style.backgroundColor ="yellow";
        level_2.style.backgroundColor ="yellow";
        level_3.style.backgroundColor ="";
        level_4.style.backgroundColor ="";
        level_5.style.backgroundColor ="";
        message.style.color = "yellow";
        
    }else if(/[\d]/.test(signUpPassword.value)&& /[a-z]/.test(signUpPassword.value)&& /[A-Z]/.test(signUpPassword.value) && /[\b@#$%!^&*()_+=><?/['\]'{}]/.test(signUpPassword.value)){
        message.innerHTML = "Very strong";
        level_1.style.backgroundColor ="#04ee81";
        level_2.style.backgroundColor ="#04ee81";
        level_3.style.backgroundColor ="#04ee81";
        level_4.style.backgroundColor ="#04ee81";
        level_5.style.backgroundColor ="#04ee81";
        message.style.color = "#04ee81";
    }
    else if( /[a-z]/.test(signUpPassword.value) && /[@#$%!^&*()_+=><?/['\]'{}]/.test(signUpPassword.value)){
        message.innerHTML = "strong";
        level_1.style.backgroundColor ="orange";
        level_2.style.backgroundColor ="orange";
        level_3.style.backgroundColor ="orange";
        level_4.style.backgroundColor ="";
        level_5.style.backgroundColor ="";
        message.style.color = "orange";
        
    }
}
signUpPassword.addEventListener("change", passwordStrengthChecker);

// form var....
let registerForm = document.getElementById("register");
let loginForm = document.getElementById("login");

// Quick login
let btnQuickLogin = document.getElementById("quick-login");

// this function shows the login form 
btnQuickLogin.addEventListener("click",()=>{
    registerForm.style.display = "none";
    loginForm.style.display = "flex";
})

// makes the form section to display in flex
registerForm.style.display = "flex";

// the function validates the signup inputs
    function toggleFormSection(){
        if( registerForm.style.display == "flex" && signUpEmail.value != "" && signUpPassword.value != ""){
            registerForm.style.display = "none";
            loginForm.style.display = "flex";
            // this get and show the values from the signup form to the login form
            input_password.value = signUpPassword.value;
            input_email.value = signUpEmail.value;
        }else{
            // alert("SignUp to join");
            signUpEmail.style.border ="1px solid red";
            document.getElementById("singUp_wrapper").style.border ="1px solid red";
        }
    }
    document.getElementById("btn-signUp").addEventListener("click", toggleFormSection);

// this function checks the login form if it's value are empty add a 1px red border, if not hide section one which holds the forms and shows the store 
const validateLoginForm = ()=>{
    /*
input_password
input_email
loginBtn 
*/ 
if(input_email.value !="" && input_password.value !=""){
    section_1.style.display = "none";
    row_1.style.display = "flex";
}else{
    input_email.style.border ="1px solid red";
    document.getElementById("input-wrapper").style.border ="1px solid red";
}

}
loginBtn.addEventListener("click", validateLoginForm);


    /*+++++++++++++++++++++++++++++++++++++++++++++++++*/ 
    // section display is disabled here
    // section_1.style.display = "none";

    // section-2 starts here

    // section var..
    let section_2 = document.getElementById("section-2");

    // list of background picture for section-2 slide
    let imgList = ["img/slider_img/bg1.png", "img/slider_img/bg5.png"];
    let num = 0;

// slider function
    function section_slider(){
        if(num <= imgList.length-1){
            section_2.style.backgroundImage = `url(${imgList[num]})`;
            num++
        }else{
            num = 0;
        }

    }
   let bgSlider = setInterval(section_slider, 5000);

    // nav toggle
    let btn_toggle_nav = document.getElementById("menu-toggle-btn");
    let menuList = document.getElementById("menu-list");
    // this function toggles the menu list for mobile
    function toggleNav(){
        if( menuList.style.display == "none"){
            menuList.style.display = "flex";
            btn_toggle_nav.style.backgroundImage = 'url("img/menu-toggle-2.png")';
        }else{
            menuList.style.display = "none";
            btn_toggle_nav.style.backgroundImage = 'url("img/menu-toggle-1.png")';
        }
    }
    // this triggers the toggle btn
    btn_toggle_nav.addEventListener("click", toggleNav);



    // this holds each product id from the product gallery

    let product = document.getElementById("product");
    let product_2 = document.getElementById("product-2");
    let product_3 = document.getElementById("product-3");
    let product_4 = document.getElementById("product-4");
    let product_5 = document.getElementById("product-5");
    let product_6 = document.getElementById("product-6");
    let product_7 = document.getElementById("product-7");
    let product_8 = document.getElementById("product-8");
    // let product = document.getElementsByClassName("product-view");
    

    function selectProductToDetailsSection(p,add){

        clearInterval(bgSlider);
        // here hide's the row1 which has the welcome message
        row_1.style.display ="none";

        // here shows the row-2 which holds the details of the product
        row_2_productDetails.style.display = "flex";


        // this here helps to change the text of the product name description
        let cutText = `${p.getElementsByTagName("p")[0].innerHTML}`;
        
        // this helps to change the text of the product name description
        imagForProduct_detail.src =`${p.getElementsByTagName("img")[0].src}`;

        productName_detail.innerHTML = p.getElementsByTagName("h2")[0].innerHTML;

        amount_description.innerHTML = `$${cutText.slice(1)}`;


        // This sets the id on the button in the product description so as to enable the user to add the viewed product to cart
        document.getElementsByClassName("btn-add-cart")[0].id =`${add}`;
        // this calls the add to cart function with their respective parameter from the argument p 
        document.getElementsByClassName("btn-add-cart")[0].addEventListener("click", ()=>{
            addToCart(p);
            p = "";

        });

        // this helps to close the My cart list section on deskTop and mobile
        btn_close_product_description.addEventListener("click", ()=>{
            row_2_productDetails.style.display = "none";
            row_1.style.display ="flex";
        });
        btn_close_product_description_mobile.addEventListener("click", ()=>{
            row_2_productDetails.style.display = "none";
        });


    }
    // this add's an a click event to get the image, name and the price of each product from the product gallery to the product description section
    product.addEventListener("click", ()=>{selectProductToDetailsSection(product, add_to_cart)});
    product_2.addEventListener("click", ()=>{selectProductToDetailsSection(product_2, add_to_cart_2)});
    product_3.addEventListener("click", ()=>{selectProductToDetailsSection(product_3, add_to_cart_3)});
    product_4.addEventListener("click", ()=>{selectProductToDetailsSection(product_4, add_to_cart_4)});
    product_5.addEventListener("click", ()=>{selectProductToDetailsSection(product_5, add_to_cart_5)});
    product_6.addEventListener("click", ()=>{selectProductToDetailsSection(product_6, add_to_cart_6)});
    product_7.addEventListener("click", ()=>{selectProductToDetailsSection(product_7, add_to_cart_7)});
    product_8.addEventListener("click", ()=>{selectProductToDetailsSection(product_8), add_to_cart_8});

    


// parent veriable needed => product_in_cart
// all the individual add to cart button from th product gallery 
let add_to_cart = document.getElementById("add-to-cart");
let add_to_cart_2 = document.getElementById("add-to-cart-2");
let add_to_cart_3 = document.getElementById("add-to-cart-3");
let add_to_cart_4 = document.getElementById("add-to-cart-4");
let add_to_cart_5 = document.getElementById("add-to-cart-5");
let add_to_cart_6 = document.getElementById("add-to-cart-6");
let add_to_cart_7 = document.getElementById("add-to-cart-7");
let add_to_cart_8 = document.getElementById("add-to-cart-8");

// this shows the number of items in the cart list
let cartNumber = document.getElementById("cart-number");

// 
let remove_from_cart = "single-product";
let remove_from_cart2 = "single-product-2";
let remove_from_cart3 = "single-product-3";
let remove_from_cart4 = "single-product-4";
let remove_from_cart5 = "single-product-5";
let remove_from_cart6 = "single-product-6";
let remove_from_cart7 = "single-product-7";
let remove_from_cart8 = "single-product-8";

let icon_from_cart = "single-icon";
let icon_from_cart2 = "single-icon-2";
let icon_from_cart3 = "single-icon-3";
let icon_from_cart4 = "single-icon-4";
let icon_from_cart5 = "single-icon-5";
let icon_from_cart6 = "single-icon-6";
let icon_from_cart7 = "single-icon-7";
let icon_from_cart8 = "single-icon-8";

function addToCart(p,s,icon){

    // This helps to get the value of the product that is been click on such as the image, name and the price of the product

    let result = "";
    result = `
    <div class='single-product' id="${s}">
    <img src="${p.getElementsByTagName("img")[0].src}" id="single-product-view">
    <div class="product-name-wrapper">
    <div class="product-name-wrapper-text">
    <h3>${p.getElementsByTagName("h2")[0].innerHTML}</h3>
    <p>size</p>
    </div>
    <div class="single-prize">
    <p id="amount">${p.getElementsByTagName("p")[0].innerHTML}</p>
        <div class="quantity-spec" >
            <img src="img/delete_Icon.png" alt="Clear_icon"id="${icon}" onclick='document.getElementById("${s}").remove()'>
        </div>
    </div>
    </div>
    </div>
    `;
    
    product_in_cart.innerHTML += result;


    //this here reflect the price of the selected product

    document.getElementById("total").innerHTML = p.getElementsByTagName("p")[0].innerHTML;

    


    // cartNumber shows the number of items in the cart list
    
    // this displays the number of items in the cart when it is greater than or = 1
    if(product_in_cart.getElementsByClassName("single-product").length >= 1){
        cartNumber.style.display ="flex";
        // this counts the number of items in the cart list and displays it
        cartNumber.innerHTML = product_in_cart.getElementsByClassName("single-product").length;
    }else{
        cartNumber.style.display = "none";
    }
     
    
    
}

// this listens for a change in its list of product if more product where added or removed 
product_in_cart.addEventListener("click", ()=>{
    // this gets the list of product in the cart
    cartNumber.innerHTML = product_in_cart.getElementsByClassName("single-product").length;
    // this removes the product number indicator if or when it is empty
    if(product_in_cart.getElementsByClassName("single-product").length == 0){
        cartNumber.style.display ="none";
    }

})

// this add a click event to the cart icon on each of the product

add_to_cart.addEventListener("click", ()=>{
    addToCart(product, remove_from_cart, icon_from_cart);
    
})
add_to_cart_2.addEventListener("click", ()=>{
    addToCart(product_2, remove_from_cart2, icon_from_cart2);
    
})
add_to_cart_3.addEventListener("click", ()=>{
    addToCart(product_3, remove_from_cart3, icon_from_cart3);
    
})
add_to_cart_4.addEventListener("click", ()=>{
    addToCart(product_4, remove_from_cart4, icon_from_cart4);
    
})
add_to_cart_5.addEventListener("click", ()=>{
    addToCart(product_5, remove_from_cart5, icon_from_cart5); 
    
})
add_to_cart_6.addEventListener("click", ()=>{
    addToCart(product_6, remove_from_cart6, icon_from_cart6);
    
})
add_to_cart_7.addEventListener("click", ()=>{
    addToCart(product_7, remove_from_cart7, icon_from_cart7);
    
})
add_to_cart_8.addEventListener("click", ()=>{
    addToCart(product_8, remove_from_cart8, icon_from_cart8);
    
})

// this holds the icon from the MyCart Nav section from the HTML
let clearAll_icon = document.getElementById("clear_cart");
// this function clears the cart
function clearCart(){
    if(product_in_cart.innerHTML == ""){
        product_in_cart.innerHTML = "<h1> Already Empty </h1>";
        // this counts the number of items in the cart list and displays it
        cartNumber.style.display ="flex";
        cartNumber.innerHTML = 0;
        
        setTimeout(()=>{
            product_in_cart.innerHTML = "";
            cartNumber.innerHTML = "";
            cartNumber.style.display ="none";
        },3000)
        
    }else{
        cartNumber.innerHTML = "";
        product_in_cart.innerHTML = "";
        cartNumber.style.display ="none";
    }
}

// This calls the function that clears the cart
clearAll_icon.addEventListener("click", clearCart);

// this holds the cart icon from the navbar
let showCart_icon = document.getElementById("show_cart");

// this hold the column for the list of items in cart section
let showCart_section = document.getElementById("col1-cart-list-section");

showCart_icon.addEventListener("click", ()=>{
    if(showCart_section.style.display == "none"){
        showCart_section.style.display = "flex";
    }else{
        showCart_section.style.display = "none"
    }
    // console.log("working")
});

let goFromShopListToHome = document.getElementById("go-shop-icon");

// row_3_cartCheckout

goFromShopListToHome.addEventListener("click", ()=>{

        row_3_cartCheckout.style.display ="none";
        row_1.style.display ="flex";
    console.log("working")
})