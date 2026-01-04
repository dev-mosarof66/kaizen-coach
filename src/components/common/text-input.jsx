"use client"

import React, { useState } from "react"
import { Search, X } from "lucide-react"
import { Input } from "../ui/input"
import { Button } from "../ui/button"

const TextInput = () => {
  const [search, setSearch] = useState("")
  const [showSearchModal, setShowSearchModal] = useState(false)

  return (
    <div className="w-full">

      {/* DESKTOP SEARCH */}
      <div className="hidden md:flex items-center gap-1 w-full max-w-sm border border-gray-600 focus:ring-blue-600 rounded-lg px-3 shadow-sm">
        <Search className="w-5 h-5 text-muted-foreground" />
        <Input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search players, teams, matches..."
          className="border-none focus-visible:ring-0"
        />
      </div>

      {/* MOBILE BUTTON */}
      <div
        onClick={() => setShowSearchModal(true)}
        className="md:hidden p-2 border border-gray-600 rounded-full active:scale-95 transition cursor-pointer flex items-center justify-center"
      >
        <Search className="w-4 h-4 text-muted-foreground" />
      </div>

      {/* MOBILE MODAL */}
      {showSearchModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm animate-in fade-in duration-200">
          <div className="w-full max-w-md bg-gray-900 p-5 rounded-xl shadow-xl animate-in zoom-in duration-200 flex flex-col gap-4">

            {/* Header */}
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-semibold text-white">Search</h1>
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
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search players, teams, matches..."
              className="bg-gray-800 border border-gray-700 focus-visible:ring-blue-500"
            />

            {/* Button */}
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
              Search
            </Button>

          </div>
        </div>
      )}
    </div>
  )
}

export default TextInput
