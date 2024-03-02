let sideCart = document.getElementById('sideCart');

document.querySelector('#cart').onclick = () => {
  sideCart.classList.toggle('active');
}

document.querySelector('#cartClose').onclick = () => {
  sideCart.classList.remove('active');
}

/*------- search button ----------- */

searchform = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
  searchform.classList.toggle('active');
}

/*---- swiper  -------*/

var swiper = new Swiper(".books-list", {

  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

/*------ review section --------*/

var swiper = new Swiper(".reviews-slider", {
  spaceBetween: 10,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// Displaying Cart
let swiperRapper = document.getElementById('swiperRapper');
let data = [
  {
    img: '../image/book-1.png',
    title: 'Love Interaction',
    author: 'James Cameron',
    price: '150'
  },
  {
    img: '../image/book-2.png',
    title: 'Mystery Quest',
    author: 'Emma Thompson',
    price: '120'
  },
  {
    img: '../image/book-3.png',
    title: 'Whispers Wind',
    author: 'Daniel Jackson',
    price: '180'
  },
  {
    img: '../image/book-4.png',
    title: 'Echoes of Eternity',
    author: 'Sophia Williams',
    price: '200'
  },
  {
    img: '../image/book-5.png',
    title: 'Timeless Tales',
    author: 'Michael Smith',
    price: '130'
  },
  {
    img: '../image/book-6.png',
    title: 'Enchanted Dreams',
    author: 'Emily Davis',
    price: '170'
  },
  {
    img: '../image/book-7.png',
    title: 'Silent Symphony',
    author: 'Oliver White',
    price: '160'
  },

  {
    img: '../image/book-8.png',
    title: 'Eternal Echo',
    author: 'Liam Taylor',
    price: '140'
  },
  {
    img: '../image/book-9.png',
    title: 'Lost Lullabies',
    author: 'Ava Miller',
    price: '175'
  },
  {
    img: '../image/book-10.png',
    title: 'Whirlwind Romance',
    author: 'David Clark',
    price: '165'
  },
  {
    img: '../image/book3.png',
    title: 'Starlit Secrets',
    author: 'Emma Harris',
    price: '155'
  },
  {
    img: '../image/book7.png',
    title: 'Parallel Paths',
    author: 'Sophie Turner',
    price: '210'
  }
];

const displayBooks = () => {
  const fragment = document.createDocumentFragment(); // Use a document fragment to avoid reflow
  data.forEach((book, index) => {
    const box = document.createElement('div');
    box.className = 'box';
    box.innerHTML = `
        <div class="image">
            <img src=${book.img} alt="">
        </div>
        <div class="content">
            <h3>${book.title}</h3>
            <h3>${book.author}</h3>
            <div class="content-main">
                <div class="price">$${book.price}</div>
                <a href="#" class="fas fa-shopping-cart addToCart" data-index="${index}"></a>
            </div>
        </div>`;
    fragment.appendChild(box);
  });

  swiperRapper.appendChild(fragment);

  document.querySelectorAll('.addToCart').forEach(cartLink => {
    cartLink.addEventListener('click', function (event) {
      event.preventDefault();
      const dataIndex = this.getAttribute('data-index');
      addToCart(dataIndex);
    });
  });
};

// Add To Cart
const CartDataArray = [];
let sideCartCart = document.getElementById('sideCartCart');
let totalElement = document.getElementById('total');
let totalAmount = 0;

const addToCart = (index) => {
  const selectedItem = data[index];

  CartDataArray.push(selectedItem);
  updateCartView();
};

const removeFromCart = (index) => {
  CartDataArray.splice(index, 1);
  updateCartView();
};

const updateCartView = () => {
  sideCartCart.innerHTML = '';
  totalAmount = 0;

  CartDataArray.forEach((data, index) => {
    totalAmount += parseInt(data.price);

    sideCartCart.innerHTML += `
      <div class="cart-box">
        <img src="${data.img}" alt="">
        
        <div class="cart-box-content">
          <h3>${data.title}</h3>
          <h3>${data.author}</h3>
          <p>${data.price}</p>
          <button class="deleteBtn" data-index="${index}"><i class="fa-solid fa-trash"></i></button>
        </div>
      </div>`;
  });

  totalElement.querySelector('span').textContent = totalAmount + '$';

  document.querySelectorAll('.deleteBtn').forEach(deleteBtn => {
    deleteBtn.addEventListener('click', function (event) {
      event.preventDefault();
      const dataIndex = this.getAttribute('data-index');
      removeFromCart(dataIndex);
    });
  });
};


displayBooks();

//Checkout
let Checkout = document.getElementById('Checkout').addEventListener('click', function () {
  swal({
    title: "Thank you for your purchase!",
    button: "Purchase Confirm",
    className: "custom-swal",
    buttonsStyling: false,
    customClass: {
      confirmButton: 'custom-button-class',
    },
  }).then((confirmed) => {
    if (confirmed) {
      clearCart();

    }
  });
});

const clearCart = () => {
  CartDataArray.length = 0;
  updateCartView();
};

//Fiteration of cart
let searchBox = document.getElementById('search-box');
let searchBtn = document.getElementById('searchBtn');
let searchCart = document.getElementById('searchCart');
let searchCartClose = document.getElementById('searchCartClose');
let searchitem = document.getElementById('searchitem');


searchBtn.addEventListener('click', function (event) {
  event.preventDefault();

  let searchTerm = searchBox.value.trim().toLowerCase();

  if (searchTerm !== '') {
    let filteredData = data.filter(book => book.title.toLowerCase().includes(searchTerm));
    displaySearchResults(filteredData);
    searchCart.classList.add('active');
    searchBox.style.border = "";
    searchBox.value = ''
  } else {
    searchBox.style.border = "1px solid red";
  }
});
searchCartClose.addEventListener('click', function () {
  searchCart.classList.remove('active');
});
function displaySearchResults(results) {
  let searchResultsHTML = '';

  results.forEach((book, index) => {
    searchResultsHTML += `
      <div class="box">
        <div class="image">
          <img src="${book.img}" alt="${book.title}">
        </div>
        <div class="content">
          <h3>${book.title}</h3>
          <h3>${book.author}</h3>
          <div class="content-main">
            <div class="price">$${book.price}</div>
            <a href="#" class="fas fa-shopping-cart addToCart" data-index="${index}"></a>
          </div>
        </div>
      </div>`;
  });
  searchitem.innerHTML = searchResultsHTML;
}


