import { useState } from "react"

export default function Catalogue() {
  const [selectedCategory, setSelectedCategory] = useState([])
  const [selectedColor, setSelectedColor] = useState([])
  const [selectedSize, setSelectedSize] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [productsPerPage] = useState(12)
  const products = [
    {
      id: 1,
      name: "Casual T-Shirt",
      description: "A comfortable and stylish t-shirt",
      price: 19.99,
      image: "https://rukminim2.flixcart.com/image/850/1250/xif0q/shirt/y/4/9/l-cotton-shirts-for-men-n-and-j-original-imagrfgtgwg2xnsz.jpeg?q=20",
      category: "Tops",
      color: "black",
      size: "M",
    },
    {
      id: 2,
      name: "Skinny Jeans",
      description: "Slim-fit denim jeans",
      price: 49.99,
      image: "https://d2ptpgjeuon7yt.cloudfront.net/product-images/530-1000/BLUE-SKINNY-JEANS-WITH-KNEE-RIPS-AND-RAW-HEM-jsutyouroutfit---4-.jpg.webp",
      category: "Bottoms",
      color: "blue",
      size: "32",
    },
    {
      id: 3,
      name: "Floral Dress",
      description: "A beautiful floral print dress",
      price: 39.99,
      image: "https://m.media-amazon.com/images/I/71ihCkhatLL._AC_UF894,1000_QL80_.jpg",
      category: "Dresses",
      color: "pink",
      size: "L",
    },
    {
      id: 4,
      name: "Leather Jacket",
      description: "A stylish and durable leather jacket",
      price: 99.99,
      image: "https://i.pinimg.com/736x/c0/29/3e/c0293ef8541c87cbd925e01f9aedb8fb.jpg",
      category: "Outerwear",
      color: "brown",
      size: "XL",
    },
    {
      id: 5,
      name: "Knit Sweater",
      description: "A cozy and warm knit sweater",
      price: 29.99,
      image: "https://cdn11.bigcommerce.com/s-r7ihm/products/2304/images/11984/C1347_-_Ash_Grey__77119__13381.1638202122.490.588.jpg?c=2",
      category: "Tops",
      color: "gray",
      size: "S",
    },
    {
      id: 6,
      name: "Wide-Leg Pants",
      description: "Comfortable and stylish wide-leg pants",
      price: 59.99,
      image: "https://i.pinimg.com/564x/63/20/9b/63209b817ca7e33a8fd168c05f03b987.jpg",
      category: "Bottoms",
      color: "beige",
      size: "34",
    },
  ]
  const handleCategoryChange = (category) => {
    if (selectedCategory.includes(category)) {
      setSelectedCategory(selectedCategory.filter((c) => c !== category))
    } else {
      setSelectedCategory([...selectedCategory, category])
    }
  }
  const handleColorChange = (color) => {
    if (selectedColor.includes(color)) {
      setSelectedColor(selectedColor.filter((c) => c !== color))
    } else {
      setSelectedColor([...selectedColor, color])
    }
  }
  const handleSizeChange = (size) => {
    if (selectedSize.includes(size)) {
      setSelectedSize(selectedSize.filter((s) => s !== size))
    } else {
      setSelectedSize([...selectedSize, size])
    }
  }
  const handlePageChange = (page) => {
    setCurrentPage(page)
  }
  const filteredProducts = products.filter((product) => {
    if (selectedCategory.length > 0 && !selectedCategory.includes(product.category)) {
      return false
    }
    if (selectedColor.length > 0 && !selectedColor.includes(product.color)) {
      return false
    }
    if (selectedSize.length > 0 && !selectedSize.includes(product.size)) {
      return false
    }
    return true
  })
  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct)
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage)
  return (
    <div>
      <section className="relative w-full h-screen bg-cover bg-center">
        <img
        src="https://assets.vogue.com/photos/5e2eef1ce4224800082d89f7/master/w_2560%2Cc_limit/00_hero.jpg"
        alt="Hero Image"
        className="absolute inset-0 w-full h-full object-cover"
        />
  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
    <div className="text-center text-white space-y-4">
      <h1 className="text-4xl font-bold">Discover the Latest Trends</h1>
      <p className="text-lg">Shop our curated collection of fashion essentials.</p>
      <button className="bg-primary text-primary-foreground hover:bg-primary/90 py-2 px-4 rounded-lg">
        Shop Now
      </button>
    </div>
    
  </div>

</section>

      <section className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 bg-muted p-6 rounded-lg">
            <h2 className="text-lg font-bold mb-4">Filters</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-base font-medium mb-2">Category</h3>
                <div className="space-y-2">
                  {["Tops", "Bottoms", "Dresses", "Outerwear"].map((category) => (
                    <label key={category} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={selectedCategory.includes(category)}
                        onChange={() => handleCategoryChange(category)}
                        className="form-checkbox"
                      />
                      {category}
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-base font-medium mb-2">Color</h3>
                <div className="space-y-2">
                  {["black", "blue", "pink", "brown", "gray", "beige"].map((color) => (
                    <label key={color} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={selectedColor.includes(color)}
                        onChange={() => handleColorChange(color)}
                        className="form-checkbox"
                      />
                      {color.charAt(0).toUpperCase() + color.slice(1)}
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-base font-medium mb-2">Size</h3>
                <div className="space-y-2">
                  {["S", "M", "L", "XL", "32", "34"].map((size) => (
                    <label key={size} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={selectedSize.includes(size)}
                        onChange={() => handleSizeChange(size)}
                        className="form-checkbox"
                      />
                      {size}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {currentProducts.map((product) => (
              <div key={product.id} className="bg-background rounded-lg shadow-lg overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={100}
                  className="w-80 h-80 object-cover"
                />
                <div className="p-3 space-y-3">
                  <h3 className="text-lg font-medium">{product.name}</h3>
                  <p className="text-muted-foreground">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold">${product.price}</span>
                    <button className="bg-primary text-primary-foreground hover:bg-primary/90 py-1 px-3 rounded-lg">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="container mx-auto py-12">
        <div className="flex justify-center">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`mx-1 px-3 py-1 rounded-lg ${
                currentPage === index + 1 ? "bg-primary text-primary-foreground" : "bg-gray-200"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </section>
    </div>
  )
}
