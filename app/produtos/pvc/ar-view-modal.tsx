"use client"

import { useState, useEffect } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { X, QrCode, AlertTriangle } from "lucide-react"
import { AppleLogo } from "@/components/apple-logo"
import { AndroidLogo } from "@/components/android-logo"

interface ArViewModalProps {
  isOpen: boolean
  onClose: () => void
  productName: string
  usdz: string      // e.g. "/models/bioclimatica.usdz"
  glb: string       // e.g. "/models/bioclimatica.glb"
}

export default function ArViewModal({
  isOpen,
  onClose,
  productName,
  usdz,
  glb,
}: ArViewModalProps) {
  const [isMobile, setIsMobile] = useState(true)

  const [isLoadingIos, setIsLoadingIos] = useState(false);
  const [isLoadingAndroid, setIsLoadingAndroid] = useState(false);

  const handleIosClick = () => {
    setIsLoadingIos(true)
    window.location.href = iosHref
  }
  const handleAndroidClick = () => {
    setIsLoadingAndroid(true)
    window.location.href = androidHref
  }

  useEffect(() => {
    const checkIfMobile = () => {
      const ua = navigator.userAgent.toLowerCase()
      const mobileRegex = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini|mobile|tablet/i
      const bySize = window.innerWidth <= 1024
      setIsMobile(mobileRegex.test(ua) || bySize)
    }
    checkIfMobile()
    window.addEventListener("resize", checkIfMobile)
    return () => window.removeEventListener("resize", checkIfMobile)
  }, [])

  // Quick Look for iOS
  const iosHref = usdz

  useEffect(() => {
  if (isOpen) {
    setIsLoadingIos(false)
    setIsLoadingAndroid(false)
  }
}, [isOpen])

  // Android Scene Viewer intent
  const androidHref = [
    "intent://arvr.google.com/scene-viewer/1.0",
    `?file=${window.location.origin}${glb}`,
    "&mode=ar_preferred",
    "#Intent;scheme=https;package=com.google.android.googlequicksearchbox;action=android.intent.action.VIEW;end",
  ].join("")

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="bg-card border border-white/10 shadow-xl max-w-md">
        <DialogHeader className="relative">
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-0 text-gray-400 hover:text-white"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Fechar</span>
          </Button>
          <DialogTitle className="text-xl font-semibold text-white">
            Visualizar em AR
          </DialogTitle>
          <DialogDescription className="text-gray-400">
            Escolha como deseja visualizar {productName} em Realidade Aumentada
          </DialogDescription>
        </DialogHeader>

        <div className="py-4">
          {!isMobile && (
            <div className="mb-6 p-4 bg-amber-500/10 border border-amber-500/20 rounded-lg">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-amber-400 mt-0.5" />
                <div>
                  <h4 className="text-white font-medium mb-1">
                    Visualização apenas em dispositivos móveis
                  </h4>
                  <p className="text-gray-300 text-sm">
                    A experiência AR só está disponível em smartphones e
                    tablets. Por favor, acesse este site no seu dispositivo
                    móvel ou escaneie o QR code abaixo.
                  </p>
                </div>
              </div>

              <div className="mt-4 flex justify-center">
                <div className="bg-white p-3 rounded-lg">
                  <QrCode className="h-24 w-24 text-black" />
                </div>
              </div>

              <p className="text-center text-xs text-gray-400 mt-2">
                Escaneie este código com a câmera do seu dispositivo móvel
              </p>
            </div>
          )}

          <div className="grid grid-cols-1 gap-4">
            {/* iOS AR Button */}
            <a
              href={iosHref}
              rel="ar"
              className="block w-full"
              onClick={() => setIsLoadingIos(true)}
            >
              <div className="w-full bg-[#006EDB] text-white font-medium py-6 flex items-center justify-center rounded-md">
                {isLoadingIos ? (
                  <span className="animate-pulse">A carregar…</span>
                ) : (
                  <>
                    <AppleLogo className="mr-2 h-5 w-5" />
                    Ver no iOS
                  </>
                )}
              </div>
            </a>
            {/* Android AR Button */}
            <a
              href={androidHref}
              rel="ar"
              className="block w-full"
              onClick={() => setIsLoadingAndroid(true)}
            >
              <div className="w-full bg-green-600 text-white font-medium py-6 flex items-center justify-center rounded-md">
                {isLoadingAndroid ? (
                  <span className="animate-pulse">A carregar…</span>
                ) : (
                  <>
                    <AndroidLogo className="mr-2 h-5 w-5" />
                    Ver no Android
                  </>
                )}
              </div>
            </a>
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-400">
              Aponte a câmera do seu dispositivo para uma superfície plana para
              visualizar o modelo em 3D.
            </p>
          </div>
        </div>

        <div className="bg-black/20 p-4 -mx-6 -mb-6 mt-2 rounded-b-lg">
          <div className="flex items-center justify-end">
            <Button variant="link" className="text-green-400 text-xs p-0" onClick={onClose}>
              Voltar ao catálogo
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog> 
  )
}