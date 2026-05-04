"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Building2, User, MapPin, Phone, Mail, Check, AlertCircle } from "lucide-react"
import type { Settings } from "@/app/lib/storage"

interface KosInformationFormProps {
  settings: Settings
  onSave: (settings: Settings) => void
}

export default function KosInformationForm({ settings, onSave }: KosInformationFormProps) {
  const [formData, setFormData] = useState({
    kosName: settings.kosName || "",
    manager: settings.manager || "",
    address: settings.address || "",
    phone: settings.phone || "",
    email: settings.email || "",
  })

  const [saveStatus, setSaveStatus] = useState<{
    status: "idle" | "saving" | "success" | "error"
    message?: string
  }>({ status: "idle" })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSave = () => {
    if (!formData.kosName.trim()) {
      setSaveStatus({
        status: "error",
        message: "Nama kos tidak boleh kosong",
      })
      return
    }

    if (!formData.manager.trim()) {
      setSaveStatus({
        status: "error",
        message: "Nama penanggungjawab tidak boleh kosong",
      })
      return
    }

    setSaveStatus({ status: "saving" })

    setTimeout(() => {
      const updatedSettings: Settings = {
        ...settings,
        kosName: formData.kosName,
        manager: formData.manager,
        address: formData.address,
        phone: formData.phone,
        email: formData.email,
      }

      onSave(updatedSettings)
      setSaveStatus({
        status: "success",
        message: "Informasi kos berhasil disimpan",
      })

      // Reset status after 3 seconds
      setTimeout(() => {
        setSaveStatus({ status: "idle" })
      }, 3000)
    }, 500)
  }

  return (
    <div className="space-y-6">
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-blue-800">
            <Building2 className="w-5 h-5" />
            Informasi Kos
          </CardTitle>
          <CardDescription>Kelola informasi dasar kos dan penanggungjawab</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Kos Name Section */}
          <div className="space-y-4 p-4 bg-blue-50 rounded-xl border border-blue-100">
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="w-5 h-5 text-blue-600" />
              <h3 className="font-semibold text-blue-900">Nama Kos</h3>
            </div>
            <div className="space-y-2">
              <Label htmlFor="kosName" className="text-sm font-medium text-gray-700">
                Nama Kos
              </Label>
              <Input
                id="kosName"
                name="kosName"
                placeholder="Contoh: Kos Sejahtera, Kos Merdeka"
                value={formData.kosName}
                onChange={handleInputChange}
                className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
              />
              <p className="text-xs text-gray-500">Masukkan nama kos Anda</p>
            </div>
          </div>

          {/* Manager Section */}
          <div className="space-y-4 p-4 bg-green-50 rounded-xl border border-green-100">
            <div className="flex items-center gap-2 mb-4">
              <User className="w-5 h-5 text-green-600" />
              <h3 className="font-semibold text-green-900">Penanggungjawab</h3>
            </div>
            <div className="space-y-2">
              <Label htmlFor="manager" className="text-sm font-medium text-gray-700">
                Nama Penanggungjawab / Pemilik
              </Label>
              <Input
                id="manager"
                name="manager"
                placeholder="Contoh: Budi Santoso"
                value={formData.manager}
                onChange={handleInputChange}
                className="border-green-200 focus:border-green-500 focus:ring-green-500"
              />
              <p className="text-xs text-gray-500">Nama pemilik atau pengelola kos</p>
            </div>
          </div>

          {/* Contact Information Section */}
          <div className="space-y-4 p-4 bg-purple-50 rounded-xl border border-purple-100">
            <h3 className="font-semibold text-purple-900 mb-4">Informasi Kontak</h3>

            <div className="space-y-2">
              <Label htmlFor="address" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-purple-600" />
                Alamat
              </Label>
              <Input
                id="address"
                name="address"
                placeholder="Contoh: Jl. Merdeka No. 123, Jakarta"
                value={formData.address}
                onChange={handleInputChange}
                className="border-purple-200 focus:border-purple-500 focus:ring-purple-500"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <Phone className="w-4 h-4 text-purple-600" />
                  Nomor Telepon
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  placeholder="Contoh: 0812-3456-7890"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="border-purple-200 focus:border-purple-500 focus:ring-purple-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-purple-600" />
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Contoh: kos@email.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="border-purple-200 focus:border-purple-500 focus:ring-purple-500"
                />
              </div>
            </div>
          </div>

          {/* Status Alert */}
          {saveStatus.status === "success" && (
            <Alert className="bg-green-50 border-green-200">
              <Check className="h-4 w-4 text-green-600" />
              <AlertDescription className="text-green-700">{saveStatus.message}</AlertDescription>
            </Alert>
          )}

          {saveStatus.status === "error" && (
            <Alert className="bg-red-50 border-red-200">
              <AlertCircle className="h-4 w-4 text-red-600" />
              <AlertDescription className="text-red-700">{saveStatus.message}</AlertDescription>
            </Alert>
          )}

          {/* Save Button */}
          <Button
            onClick={handleSave}
            disabled={saveStatus.status === "saving"}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-6 text-base"
          >
            {saveStatus.status === "saving" ? "Menyimpan..." : "Simpan Informasi Kos"}
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
