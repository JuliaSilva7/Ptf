
import { useState, useEffect } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import './DasaCarousel.css'

const images = [
  ...Array.from({ length: 8 }, (_, i) =>
    `/images/dasa/dasa%20(${i + 1}).png`
  ),
  ...Array.from({ length: 7 }, (_, i) =>
    `/images/dasa/cenarios%20(${i + 1}).png`
  ),
]

export default function DasaCarousel() {
  const [current, setCurrent] = useState(0)

  const previous = () => {
    setCurrent(value => (value - 1 + images.length) % images.length)
  }

  const next = () => {
    setCurrent(value => (value + 1) % images.length)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(value => (value + 1) % images.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const isScenario = current >= 8

  return (
    <div className="dasa-carousel">
      <div className="dasa-carousel-top">
        <span>
          {isScenario
            ? 'CASE STUDY / MODELO HOSPITALAR'
            : 'CASE STUDY / SISTEMA DASA'}
        </span>
        <span>
          {String(current + 1).padStart(2, '0')} / 15
        </span>
      </div>

      <div className="dasa-carousel-image">
        <img
          key={current}
          src={images[current]}
          alt={
            isScenario
              ? `Cenário do modelo hospitalar ${current - 7}`
              : `Tela do sistema DASA ${current + 1}`
          }
        />

        <button
          className="dasa-carousel-arrow prev"
          onClick={previous}
          aria-label="Imagem anterior"
        >
          <ArrowLeft size={19} />
        </button>

        <button
          className="dasa-carousel-arrow next"
          onClick={next}
          aria-label="Próxima imagem"
        >
          <ArrowRight size={19} />
        </button>
      </div>

      <div className="dasa-carousel-footer">
        <div className="dasa-carousel-dots">
          {images.map((_, index) => (
            <button
              key={index}
              className={current === index ? 'active' : ''}
              onClick={() => setCurrent(index)}
              aria-label={`Ir para imagem ${index + 1}`}
            />
          ))}
        </div>

        <span>
          {isScenario
            ? 'MODELO HOSPITALAR / IOT'
            : 'SOFTWARE / INTERFACE'}
        </span>
      </div>
    </div>
  )
}
