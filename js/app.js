/* =========================================
   1) DARK MODE (Lab07)
   - Adds/removes .darkmode class on <body>
   - Saves user preference in localStorage
========================================= */

// Read saved theme state from localStorage (if any)
let darkmode = localStorage.getItem('darkmode');

// Button that toggles theme
const themeSwitch = document.getElementById('theme-switch');

// Enable dark mode: add class + store state
const enableDarkmode = () => {
  document.body.classList.add('darkmode');
  localStorage.setItem('darkmode', 'active');
};

// Disable dark mode: remove class + store state
const disableDarkmode = () => {
  document.body.classList.remove('darkmode');
  localStorage.setItem('darkmode', 'null');
};

// Apply saved preference on page load
if (darkmode === 'active') enableDarkmode();

// Toggle theme on click
themeSwitch.addEventListener('click', () => {
  darkmode = localStorage.getItem('darkmode');
  if (darkmode !== 'active') enableDarkmode();
  else disableDarkmode();
});


/* =========================================
   2) HANDLEBARS + JSON (Lab09) + jQuery
   - Creates product cards dynamically (Collection section)
   - Includes jQuery interaction examples (wishlist + accordion)
========================================= */

$(function () {
  // DOM target where cards will be injected
  var $placeHolder = $('#collection-placeholder'),

      // Get Handlebars template from HTML
      handlebarsTemplate = $('#collection-template').html(),

      // Compile the template into a function
      templateCompile = Handlebars.compile(handlebarsTemplate),

      // Product data (embedded JSON-style array)
      data = {
        products: [
          {
            sku: "EF-001",
            name: "Echo Jacket",
            category: "Outerwear",
            fit: "Relaxed ",
            price: "€220",
            image: "product1.jpg",
            imgSearch: "minimal black jacket fashion product photo"
          },
          {
            sku: "EF-002",
            name: "Form Dress",
            category: "Dress",
            fit: "Soft drape",
            price: "€180",
            image: "product2.jpg",
            imgSearch: "minimal slip dress neutral tone product photo"
          },
          {
            sku: "EF-003",
            name: "Trace Shirt",
            category: "Top",
            fit: "Crisp oversized",
            price: "€95",
            image: "product3.jpg",
            imgSearch: "oversized white shirt fashion product photo"
          },
          {
            sku: "EF-004",
            name: "Line Trousers",
            category: "Bottoms",
            fit: "Straight leg",
            price: "€120",
            image: "product4.jpg",
            imgSearch: "minimal tailored trousers product photo"
          },
          {
            sku: "EF-005",
            name: "Wave Knit",
            category: "Knitwear",
            fit: "Sweater",
            price: "€110",
            image: "product5.webp",
            imgSearch: "minimal knit sweater neutral product photo"
          },
          {
            sku: "EF-006",
            name: "Contour Bag",
            category: "Accessories",
            fit: "Bag",
            price: "€75",
            image: "product6.jpg",
            imgSearch: "minimal shoulder bag product photo"
          },
          {
            sku: "EF-007",
            name: "Sandy Trousers",
            category: "Pants",
            fit: "Bottom",
            price: "€80",
            image: "product8.jpg",
            imgSearch: "minimal shoulder bag product photo"
          },
          {
            sku: "EF-008",
            name: "Leather Belt",
            category: "Accessories",
            fit: "Belt",
            price: "€25",
            image: "product9.jpg",
            imgSearch: "minimal shoulder bag product photo"
          },
          {
            sku: "EF-009",
            name: "Smart Linear",
            category: "Top",
            fit: "Jacket",
            price: "€100",
            image: "product10.webp",
          }
        ]
      };

  // Render: generate HTML from data + template and inject into placeholder
  $placeHolder.html(templateCompile(data));

  // jQuery interaction: wishlist button changes text and disables itself
  $(document).on('click', '.js-add-to-wishlist', function () {
    var sku = $(this).data('sku'); // read sku from data attribute
    $(this).text('Saved ✓').prop('disabled', true);
    console.log('Saved to wishlist:', sku);
  });

  // jQuery interaction: accordion toggle for materials section
  $('.acc-btn').on('click', function () {
    $(this).next('.acc-panel').slideToggle(180);
  });
});


/* =========================================
   3) CAROUSEL (Lab06)
   - Next/Prev buttons scroll the slides container by one slide width
========================================= */

// DOM references for carousel elements
const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");

// Scroll right by one slide
nextButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
});

// Scroll left by one slide
prevButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
});


/* =========================================
   4) SIGNUP FORM (simple validation)
   - Prevents page reload
   - Validates email
   - Shows a message and resets the form
========================================= */

// Form elements
const form = document.getElementById('signup-form');
const msg = document.getElementById('form-msg');

// Handle submit event
form.addEventListener('submit', (e) => {
  e.preventDefault(); // stop normal form submission

  // Read input values
  const email = document.getElementById('email').value.trim();
  const invite = document.getElementById('invite').checked;

  // Basic validation (front-end only)
  if (!email.includes('@') || email.length < 6) {
    msg.textContent = "Please enter a valid email.";
    return;
  }

  // Success message (no backend used in this project)
  msg.textContent = invite
    ? "Thanks! You’re signed up + Fashion Week invite selected."
    : "Thanks! You’re signed up for early access.";

  // Clear fields after submission
  form.reset();
});
