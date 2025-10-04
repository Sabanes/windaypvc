'use client'

import { Mail, Phone, Facebook, Instagram } from 'lucide-react'
import { WhatsAppIcon } from '@/components/whatsapp-icon'

export function TopBar() {
  return (
    <div className="bg-gray-100 text-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-10 items-center justify-between ">
          <div className="flex items-center space-x-4">
            <a href="https://www.facebook.com/profile.php?id=61561480102114" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="https://www.instagram.com/winday.pt1/" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="https://wa.me/351932825464" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
              <WhatsAppIcon className="h-5 w-5" />
            </a>
            <a href="tel:+351932825464" className="sm:hidden flex items-center text-sm hover:text-primary">
              <Phone className="h-5 w-5" />
            </a>
            <a href="mailto:geral@windaypvc.pt" className="sm:hidden flex items-center text-sm hover:text-primary">
              <Mail className="h-5 w-5" />
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <a href="tel:+351932825464" className="hidden sm:flex items-center text-sm hover:text-primary">
              <Phone className="h-4 w-4 mr-2" />
              +351 932 825 464
            </a>
            <a href="mailto:geral@windaypvc.pt" className="hidden sm:flex items-center text-sm hover:text-primary">
              <Mail className="h-4 w-4 mr-2" />
              geral@windaypvc.pt
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
