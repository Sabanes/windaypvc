import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Check, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/language-context';

interface ProductCardProps {
  image: string;
  alt: string;
  title: string | React.ReactNode;
  description: string;
  features: string[];
  imageContainerClassName?: string;
  imageWrapperClassName?: string;
  imageClassName?: string;
  hasPreview?: boolean;
  hasModels?: boolean;
  hasPdf?: boolean;
  onPreview?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  image,
  alt,
  title, 
  description, 
  features, 
  imageContainerClassName,
  imageWrapperClassName,
  imageClassName,
  hasPreview = false,
  hasModels = false,
  hasPdf = false,
  onPreview,
}) => {
  const { t } = useLanguage()
  
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      {/* Image Container - Fixed aspect ratio */}
      <div
        className={[
          "relative w-full aspect-[4/3] bg-gray-50 overflow-hidden",
          imageContainerClassName,
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <div
          className={[
            "absolute inset-0 p-4 flex items-center justify-center",
            imageWrapperClassName,
          ]
            .filter(Boolean)
            .join(" ")}
        >
          <Image
            src={image}
            alt={alt}
            fill
            className={[
              "object-fill hover:scale-105 transition-transform duration-300",
              imageClassName,
            ]
              .filter(Boolean)
              .join(" ")}
          />
        </div>
      </div>

      {/* Content Container - Flexible height */}
      <div className="flex-1 flex flex-col p-6">
        {/* Title */}
        <h3 className="text-xl font-bold text-[#493F0B] mb-3">
          {title}
        </h3>

        {/* Description */}
        <p className="text-[#493F0B]/80 mb-4">
          {description}
        </p>

        {/* Features List */}
        <ul className="space-y-2 mb-6 flex-1">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-[#493F0B] mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-[#493F0B]/80">{feature}</span>
            </li>
          ))}
        </ul>

        {/* Buttons - Consistent layout */}
        <div className="space-y-3 mt-auto">
          {hasPreview && (
            <Button
              onClick={onPreview}
              className="w-full bg-gradient-to-r mb-3 from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white"
            >
              <Eye className="mr-2 h-5 w-5" />
              {t('pvc.categories.ar.preview')}
            </Button>
          )}
          
          {hasModels && (
            <Link href="#models">
              <Button className="w-full bg-[#493F0B] hover:bg-[#493F0B]/90 mb-3 text-white">
                {t("pvc.more.details")}
              </Button>
            </Link>
          )}

          {hasPdf && (
            <Link href="/door-details.pdf" target="_blank">
              <Button className="w-full bg-[#493F0B] hover:bg-[#493F0B]/90 mb-3 text-white">
                {t("pvc.open.catalog")}
              </Button>
            </Link>
          )}

          <Link href="/contacto">
            <Button className="w-full bg-[#493F0B] hover:bg-[#493F0B]/90 text-white">
              {t("nav.quote")}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

interface EnhancedPVCSectionProps {
  openModal: (modalId: string) => void;
}

const EnhancedPVCSection: React.FC<EnhancedPVCSectionProps> = ({ openModal }) => {
  const { t } = useLanguage()
  
  return (
    <section className="py-16">
      <div className="container mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <h2 className="text-3xl font-bold text-[#493F0B] mb-4 text-center">
          {t("pvc.categories.title")}
        </h2>
        <p className="text-[#493F0B]/80 text-center max-w-3xl mx-auto mb-12">
          {t("pvc.categories.description")}
        </p>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* A70 */}
          <ProductCard
            image="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/gjgrvcanievk7qjuoeq6"
            alt="Janela A70"
            title="A70"
            description={t("pvc.categories.a70.desc")}
            features={[
              t("pvc.categories.a70.feature1"),
              t("pvc.categories.a70.feature2"),
              t("pvc.categories.a70.feature3")
            ]}
            hasPreview={true}
            hasModels={true}
            onPreview={() => openModal('a70')}
          />

          {/* C70 */}
          <ProductCard
            image="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/eerq3jd2ouvobchnboct"
            alt="Janela C70"
            title="C70"
            description={t("pvc.categories.c70.desc")}
            features={[
              t("pvc.categories.c70.feature1"),
              t("pvc.categories.c70.feature2"),
              t("pvc.categories.c70.feature3")
            ]}
            hasModels={true}
          />

          {/* Janela Projetante */}
          <ProductCard
            image="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/v1/Winday/ht4xsfin0ipe9b2wd9qj"
            alt="Janela Projetante"
            title={t("pvc.categories.projetante.title")}
            description={t("pvc.categories.projetante.desc")}
            features={[
              t("pvc.categories.projetante.feature1"),
              t("pvc.categories.projetante.feature2"),
              t("pvc.categories.projetante.feature3")
            ]}
          />

          {/* E 170 de Correr Elevável */}
          <ProductCard
            image="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/v1/Winday/loz4eb5is806pdlyjvpb"
            alt="E 170 de Correr Elevável"
            title={t("pvc.categories.e170.title")}
            description={t("pvc.categories.e170.desc")}
            features={[
              t("pvc.categories.e170.feature1"),
              t("pvc.categories.e170.feature2"),
              t("pvc.categories.e170.feature3")
            ]}
            hasModels={true}
          />

          {/* Door */}
          <ProductCard
            image="/door.jpg"
            alt="Door"
            title={t("pvc.categories.door.title")}
            description={t("pvc.categories.door.desc")}
            features={[
              t("pvc.categories.door.feature1"),
              t("pvc.categories.door.feature2"),
              t("pvc.categories.door.feature3")
            ]}
            imageContainerClassName="aspect-[3/4]"
            imageWrapperClassName="p-2"
            imageClassName="object-contain"
            hasPdf={true}
          />
        </div>
      </div>
    </section>
  );
};

export default EnhancedPVCSection