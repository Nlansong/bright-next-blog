import React from 'react'
import Link from 'next/link'

function Header() {
  return (
    <div class="flex h-screen bg-green-300">
       <div class="flex-1 flex flex-col overflow-hidden">
        <header class="flex justify-between items-center bg-blue-300 p-4">
        <div class="flex">Left</div>
        <div class="flex">Right</div>
        </header>
      </div>
    </div>
  )
}

export default Header