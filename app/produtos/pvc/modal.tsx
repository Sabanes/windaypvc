'use client'

import { useState, useEffect } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { X, QrCode, AlertTriangle } from 'lucide-react'
import { AppleLogo } from '@/components/apple-logo'
import { AndroidLogo } from '@/components/android-logo'

interface ArViewModalProps {
  isOpen: boolean
  onClose: () => void
  productName: string
  usdz: string
  glb: string
}

import { useLanguage } from '@/contexts/language-context'

export default function ArViewModal({
  isOpen,
  onClose,
  productName,
  usdz,
  glb,
}: ArViewModalProps) {
  const { t } = useLanguage()
  const [isLoadingIos, setIsLoadingIos] = useState(false)
  const [isLoadingAndroid, setIsLoadingAndroid] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setIsLoadingIos(false)
      setIsLoadingAndroid(false)
    }
  }, [isOpen])

  const iosHref = usdz
  const androidHref = `intent://arvr.google.com/scene-viewer/1.0?file=${typeof window !== 'undefined' ? window.location.origin : ''}${glb}&mode=ar_preferred#Intent;scheme=https;package=com.google.android.googlequicksearchbox;action=android.intent.action.VIEW;end`

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="bg-white border-gray-200 shadow-lg max-w-md rounded-lg">
        <DialogHeader className="relative p-6">
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-4 text-gray-500 hover:text-gray-800"
            onClick={onClose}
          >
            <span className="sr-only">{t('ar.modal.close')}</span>
          </Button>
          <DialogTitle className="text-2xl font-bold text-[#493F0B]">
            {t('ar.modal.title')}
          </DialogTitle>
          <DialogDescription className="text-[#493F0B]/80 mt-2">
            {t('ar.modal.description', { productName })}
          </DialogDescription>
        </DialogHeader>

        <div className="px-6 pb-6">
          <div className="grid grid-cols-1 gap-4">
            {/* iOS AR Button */}
            <a
              href={iosHref}
              rel="ar"
              className="block w-full"
              onClick={() => setIsLoadingIos(true)}
            >
              <div className="w-full bg-[#006EDB] text-white font-medium py-4 flex items-center justify-center rounded-md transition-transform hover:scale-105">
                {isLoadingIos ? (
                  <span className="animate-pulse">{t('ar.modal.loading')}</span>
                ) : (
                  <>
                    <AppleLogo className="mr-2 h-6 w-6" />
                    {t('ar.modal.view.ios')}
                  </>
                )}
              </div>
            </a>
            {/* Android AR Button */}
            <a
              href={androidHref}
              className="block w-full"
              onClick={() => setIsLoadingAndroid(true)}
            >
              <div className="w-full bg-green-600 text-white font-medium py-4 flex items-center justify-center rounded-md transition-transform hover:scale-105">
                {isLoadingAndroid ? (
                  <span className="animate-pulse">{t('ar.modal.loading')}</span>
                ) : (
                  <>
                    <AndroidLogo className="mr-2 h-6 w-6" />
                    {t('ar.modal.view.android')}
                  </>
                )}
              </div>
            </a>
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              {t('ar.modal.instructions')}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}