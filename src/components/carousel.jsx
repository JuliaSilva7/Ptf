import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import './carousel.css'

const images = Array.from({ length: 13 }, (_, index) => ({
  src: `/images/emasters/banner (${index + 1}).png`,
  alt: `Banner ${index + 1} do projeto E-Masters`,
}))

export default function Carousel() {
  const [current, setCurrent] = useState(0)
useEffect(() => {
  const interval = setInterval(() => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }, 4000)

  return () => clearInterval(interval)
}, [])
  const previous = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const next = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="carousel">
      <div className="carousel-image-container">
        <img
          src={images[current].src}
          alt={images[current].alt}
          className="carousel-image"
        />

        <button
          className="carousel-arrow carousel-prev"
          onClick={previous}
          aria-label="Imagem anterior"
          type="button"
        >
          <ChevronLeft size={22} />
        </button>

        <button
          className="carousel-arrow carousel-next"
          onClick={next}
          aria-label="Próxima imagem"
          type="button"
        >
          <ChevronRight size={22} />
        </button>

        <span className="carousel-counter">
          {current + 1} / {images.length}
        </span>
      </div>

      <div className="carousel-dots">
        {images.map((image, index) => (
          <button
            key={image.src}
            className={`carousel-dot ${current === index ? 'active' : ''}`}
            onClick={() => setCurrent(index)}
            aria-label={`Ir para o banner ${index + 1}`}
            aria-current={current === index ? 'true' : undefined}
            type="button"
          />
        ))}
      </div>
    </div>
  )
}
