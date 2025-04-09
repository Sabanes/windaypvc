"use client"

import { useState, useEffect, useRef } from "react"
import { Star, ChevronLeft, ChevronRight, User } from "lucide-react"

type ReviewProps = {
  name: string
  company: string
  text: string
}

const reviews: ReviewProps[] = [
  {
    name: "Ana Silva",
    company: "Proprietária de Apartamento",
    text: "As janelas da WINDAYPVC transformaram completamente o nosso apartamento. O isolamento acústico é impressionante e notamos uma grande diferença na temperatura interior. A equipa foi profissional e eficiente durante toda a instalação.",
  },
  {
    name: "João Martins",
    company: "Arquiteto",
    text: "Como arquiteto, valorizo parceiros que entregam qualidade e precisão. A WINDAYPVC superou minhas expectativas em todos os projetos que realizamos juntos. Seus produtos são de excelente qualidade e o serviço é impecável.",
  },
  {
    name: "Maria Costa",
    company: "Construtora Horizonte",
    text: "Trabalhamos com a WINDAYPVC em vários projetos residenciais e sempre ficamos impressionados com a qualidade dos produtos e a eficiência do serviço. As janelas não só são esteticamente agradáveis, mas também oferecem excelente isolamento.",
  },
]

function ReviewCard({ review }: { review: ReviewProps }) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md flex flex-col max-w-3xl mx-auto">
      <div className="flex items-center mb-6">
        <div className="relative w-20 h-20 rounded-full overflow-hidden mr-5 border-2 border-[#493F0B]/20 flex items-center justify-center bg-gray-100">
          <div className="bg-gray-200 w-full h-full flex items-center justify-center">
            <User className="h-10 w-10 text-gray-400" />
          </div>
        </div>
        <div>
          <h4 className="font-bold text-[#493F0B] text-xl">{review.name}</h4>
          <p className="text-[#493F0B]/70 text-sm mb-2">{review.company}</p>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
            ))}
          </div>
        </div>
      </div>

      <p className="text-[#493F0B]/80 italic text-lg leading-relaxed text-center">"{review.text}"</p>
    </div>
  )
}

export function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex >= reviews.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex <= 0 ? reviews.length - 1 : prevIndex - 1))
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  // Auto-slide functionality
  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        nextSlide()
      }, 6000)
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [isPaused, currentIndex])

  return (
    <section id="depoimentos" className="py-20 bg-[#e5e5e5]">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#493F0B] mb-4">O Que Dizem Nossos Clientes</h2>
          <p className="text-[#493F0B]/80 max-w-2xl mx-auto">
            A satisfação dos nossos clientes é a nossa maior prioridade. Confira o que dizem sobre nós.
          </p>
        </div>

        <div
          className="relative px-4 md:px-12"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Slider container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {reviews.map((review, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <ReviewCard review={review} />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-0 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Depoimento anterior"
          >
            <ChevronLeft className="h-6 w-6 text-[#493F0B]" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-0 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Próximo depoimento"
          >
            <ChevronRight className="h-6 w-6 text-[#493F0B]" />
          </button>
        </div>

        {/* Pagination indicators */}
        <div className="flex justify-center mt-8 space-x-3">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentIndex === index ? "bg-[#493F0B]" : "bg-[#493F0B]/30"
              }`}
              aria-label={`Ir para depoimento ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
