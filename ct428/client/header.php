<style>
  .cart-modal{
    position:absolute;
    top:100%;
    right:50%;
    background-color: #ccc;
    width:20rem;
    font-size: 15px;
    display: none;
  }
.cart-modal.active{
  display: block;
}
  .cart-modal__item{
    color:black;
    display: flex;
    padding:20px;
    gap:20px;
    height:auto;
  }
  .cart-modal__image{
    width:40%;
    height:100%;
  }
  .cart-modal__image > img{
    width:100%;
    height:100px
  }
  .cart-modal__content{
    width:60%;
  }
  .backdrop{
    position:fixed;
    width:100vw;
    height:100vh;
    background-color: transparent;
    z-index:9999;
    display: none;
  }
  .backdrop.active{
    display: block;
  }
  .cart-number{
    position:absolute;
    top:-100%;
    font-size: 12px;
    background-color: #ec0000;
    color:white;
    width:20px;
    height:20px;
    text-align: center;
    border-radius: 50%;
  }
</style>

<div class="header">
        <div class="header-logo"><a href="http://localhost/ct428/client/home-page.php"> FlyFood.</a></div>
        <div class="header-nav">
              <ul class="nav-list">
                <li class="nav-item">
                  <a href="../../ct428/client/home-page.php" class="nav-link">Trang chủ</a>
                </li>
                <li class="nav-item">
                  <a href="#" class="nav-link">Món ngon flyfood</a>
                </li>
                <li class="nav-item">
                  <a href="#" class="nav-link">Tin tức</a>
                </li>
                <li class="nav-item">
                  <a href="#" class="nav-link">Liên hệ</a>
                </li>
              </ul>
        </div>
        <div class="header-auth">
              <a href="#" id="cart">
                <ion-icon name="cart-outline" ></ion-icon>
                <div class="cart-number">15</div>
                <div class="cart-modal">
                  <div class="cart-modal__item">
                    <div class="cart-modal__image">
                      <img src="https://images.unsplash.com/photo-1633113211800-4acbb59fc254?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"/>
                    </div>
                    <div class="cart-modal__content">
                      <div class="card-modal__name">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet enim sint natus soluta harum qui animi. Incidunt illo animi fugiat soluta dicta non iste, odio id ipsam assumenda, corrupti saepe?</div>
                      <div class="card-modal__price">550000</div>
                    </div>
                  </div>
                </div>
              </a>
              <a href="#"
                ><ion-icon name="person-outline"></ion-icon
              ></a>
        </div>
</div>
<div class="backdrop"></div>
    <script>
      const cart = document.getElementById('cart');
      const cartModal = document.querySelector('.cart-modal');
      const backdrop = document.querySelector('.backdrop');

      const openCartModal = ()=>{
        cartModal.classList.add("active");
        backdrop.classList.add("active");
      }
      const closeCartModal = ()=>{
        cartModal.classList.remove("active");
        backdrop.classList.remove("active");
      }
      cart.addEventListener('click',openCartModal);
      backdrop.addEventListener('click',closeCartModal);
    </script>