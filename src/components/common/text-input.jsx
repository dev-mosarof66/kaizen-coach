"use client"

import React, { useState } from "react"
import { Search, X } from "lucide-react"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { useTranslation } from "../../contexts/translation-context"
import { AnimatePresence, motion } from 'framer-motion'

const TextInput = () => {
  const [search, setSearch] = useState("")
  const [showSearchModal, setShowSearchModal] = useState(false)
  const { t } = useTranslation()

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      console.log(search)
      setSearch("")
      setShowSearchModal(false)
    }
  }

  const handleSearch = () => {
    console.log(search)
    setSearch("")
    setShowSearchModal(false)
  }

  return (
    <div className="w-full">

      {/* DESKTOP SEARCH */}
      <div className="hidden lg:flex items-center gap-1 w-full max-w-sm border border-gray-700 focus:ring-blue-600 rounded-md px-3 shadow-sm">
        <Search size={18} className="text-gray-400" />
        <Input
          type="search"
          value={search}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder={t('header.search.placeholder')}
          className="border-none focus-visible:ring-0"
        />
      </div>

      {/* MOBILE BUTTON */}
      <div
        onClick={() => setShowSearchModal(true)}
        className="w-fit lg:hidden p-2 border border-gray-600 rounded-full active:scale-95 transition cursor-pointer flex items-center justify-center"
      >
        <Search className="w-4 h-4 text-gray-400" />
      </div>

      {/* MOBILE MODAL */}
      <AnimatePresence>
        {showSearchModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="w-full max-w-md bg-gray-900 p-5 rounded-xl shadow-xl flex flex-col gap-4"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >

              {/* Header */}
              <div className="flex items-center justify-between">
                <h1 className="text-xl font-semibold text-white">{t('header.search.modalTitle')}</h1>
                <button
                  onClick={() => setShowSearchModal(false)}
                  className="hover:text-blue-500 transition cursor-pointer"
                >
                  <X size={22} />
                </button>
              </div>

              {/* Input */}
              <Input
                type="search"
                value={search}
                onChange={handleChange}
                placeholder={t('header.search.placeholder')}
                className="bg-gray-800 border border-gray-700 focus-visible:ring-blue-500"
              />

              {/* Button */}
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" onClick={handleSearch}>
                {t('header.search.button')}
              </Button>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default TextInput
