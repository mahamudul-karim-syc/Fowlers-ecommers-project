import { useState } from "react";


const products = [
  {
    id: 1,
    name: "Roses",
    price: 15,
    image:
      "https://images.unsplash.com/photo-1494972308805-463bc619d34e?w=600",
  },
  {
    id: 2,
    name: "Sunflowers",
    price: 12,
    image:
      "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=600",
  },
  {
    id: 3,
    name: "Tulips",
    price: 14,
    image:
      "https://images.unsplash.com/photo-1520763185298-1b434c919102?w=600",
  },
  {
    id: 4,
    name: "Lilies",
    price: 16,
    image:
      "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=600",
  },
  {
    id: 5,
    name: "Mixed Bouquet",
    price: 18,
    image:
      "https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?w=600",
  },
  {
    id: 6,
    name: "Orchids",
    price: 20,
    image:
      "https://images.unsplash.com/photo-1566920801115-1a6a6c5a4d1d?w=600",
  },
];

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  return (
    <div className="min-h-screen bg-rose-50 text-gray-800">

      {/* Navbar */}
      <header className="bg-rose-600 text-white shadow-md">
        <div className="navbar max-w-7xl mx-auto px-4 py-3 flex justify-between">

          <a href="#home" className="text-2xl font-bold">
            🌸 Flower Shop
          </a>

          <nav>
            <ul className="flex items-center gap-3 sm:gap-8 text-sm sm:text-base font-semibold">
              <li><a href="#home" className="hover:text-yellow-300">Home</a></li>
              <li><a href="#shop" className="hover:text-yellow-300">Shop</a></li>
              <li><a href="#about" className="hover:text-yellow-300">About</a></li>
              <li><a href="#contact" className="hover:text-yellow-300">Contact</a></li>
              <li>
                <span className="bg-white text-rose-600 rounded-full px-3 py-2">
                  🛒 {cart.length}
                </span>
              </li>
            </ul>
          </nav>

        </div>
      </header>

      <main>

        {/* Hero Section */}
        <section
          id="home"
          className="relative min-h-[480px] flex items-center bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1600)",
          }}
        >
          <div className="absolute inset-0 bg-white/45"></div>

          <div className="relative z-10 max-w-7xl mx-auto w-full px-6 py-20">
            <div className="max-w-xl">

              <p className="text-rose-600 font-bold text-lg mb-3">
                Welcome to Flower Shop 🌷
              </p>

              <h1 className="text-4xl md:text-6xl font-extrabold text-green-900 mb-5">
                Fresh Flowers
              </h1>

              <p className="text-lg md:text-xl text-gray-800 mb-7">
                Brighten your day with nature's beauty.
                Beautiful flowers for every special moment.
              </p>

              <a
                href="#shop"
                className="btn bg-rose-600 hover:bg-rose-700 text-white border-none rounded-full px-8"
              >
                Shop Now
              </a>

            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="shop" className="max-w-7xl mx-auto px-5 py-16">

          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="h-0.5 w-16 bg-rose-400"></div>
            <h2 className="text-3xl font-bold text-green-900">
              🌸 Our Best Sellers
            </h2>
            <div className="h-0.5 w-16 bg-rose-400"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">

            {products.map((product) => (
              <div
                key={product.id}
                className="card bg-white shadow-md border border-rose-100 hover:shadow-xl hover:-translate-y-1 transition duration-300"
              >

                <figure className="h-56 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-110 transition duration-500"
                  />
                </figure>

                <div className="card-body p-5">

                  <h3 className="card-title text-xl">
                    {product.name}
                  </h3>

                  <p className="text-rose-600 text-xl font-bold">
                    ${product.price.toFixed(2)}
                  </p>

                  <div className="card-actions">
                    <button
                      onClick={() => addToCart(product)}
                      className="btn bg-rose-600 hover:bg-rose-700 text-white border-none rounded-full w-full"
                    >
                      Add to Cart 🛒
                    </button>
                  </div>

                </div>
              </div>
            ))}

          </div>
        </section>

        {/* Features Section */}
        <section id="about" className="max-w-7xl mx-auto px-5 pb-12">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white shadow-sm rounded-xl p-6">

            <div className="text-center p-3">
              <div className="text-3xl mb-2">🚚</div>
              <h3 className="font-bold">Free Shipping</h3>
              <p className="text-sm text-gray-500">On orders over $50</p>
            </div>

            <div className="text-center p-3">
              <div className="text-3xl mb-2">🌿</div>
              <h3 className="font-bold">Fresh Flowers</h3>
              <p className="text-sm text-gray-500">Daily Collection</p>
            </div>

            <div className="text-center p-3">
              <div className="text-3xl mb-2">🛡️</div>
              <h3 className="font-bold">Secure Payment</h3>
              <p className="text-sm text-gray-500">100% Safe</p>
            </div>

            <div className="text-center p-3">
              <div className="text-3xl mb-2">💗</div>
              <h3 className="font-bold">Happy Customers</h3>
              <p className="text-sm text-gray-500">Always</p>
            </div>

          </div>
        </section>

        {/* Bottom Banner */}
        <section id="contact" className="max-w-7xl mx-auto px-5 pb-12">

          <div className="rounded-2xl bg-rose-200 p-8 md:p-12 text-center">

            <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-3">
              Make Someone Smile 🌸
            </h2>

            <p className="text-gray-700 mb-5">
              Beautiful flowers for every occasion.
            </p>

            <a
              href="#shop"
              className="btn bg-rose-600 hover:bg-rose-700 text-white border-none rounded-full px-8"
            >
              Shop Now
            </a>

          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-rose-700 text-white text-center p-6">
        <h2 className="text-xl font-bold mb-2">🌸 Flower Shop</h2>
        <p>Bringing beauty and happiness to your life.</p>
        <p className="text-sm mt-3">
          © 2026 Flower Shop. All Rights Reserved.
        </p>
      </footer>

    </div>
  );
};

export default App;
